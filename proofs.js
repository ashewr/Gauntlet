import { Router } from "express";
import { z } from "zod";
import { prisma } from "../lib/db.js";
import { requireAdmin, requireAuth } from "../middleware/auth.js";
const dataImageUrlPattern = /^data:image\/(?:png|jpe?g|webp|gif);base64,[a-z0-9+/=]+$/i;
const proofAssetSchema = z
    .string()
    .min(1)
    .max(400000)
    .refine((value) => {
    if (z.string().url().safeParse(value).success) {
        return true;
    }
    return dataImageUrlPattern.test(value);
}, "Proof must be an image URL or image data URL.");
const submitProofSchema = z.object({
    goalId: z.string().min(1),
    dayNumber: z.number().int().positive(),
    note: z.string().max(500).optional(),
    assetUrl: proofAssetSchema
});
const reviewProofSchema = z.object({
    decision: z.enum(["APPROVED", "DECLINED"])
});
function normalizeProofSchedule(value) {
    return value === "every-other-day" ? "every-other-day" : "daily";
}
function isRequiredProofDay(dayNumber, proofSchedule) {
    if (dayNumber <= 0) {
        return false;
    }
    return normalizeProofSchedule(proofSchedule) === "every-other-day" ? dayNumber % 2 === 1 : true;
}
function getLastRequiredProofDay(totalDays, proofSchedule) {
    for (let day = totalDays; day >= 1; day -= 1) {
        if (isRequiredProofDay(day, proofSchedule)) {
            return day;
        }
    }
    return 1;
}
export const proofsRouter = Router();
proofsRouter.get("/", requireAuth, async (request, response) => {
    const proofs = await prisma.proofSubmission.findMany({
        where: { userId: request.user.id },
        include: {
            goal: true
        },
        orderBy: { createdAt: "desc" }
    });
    response.json({ proofs });
});
proofsRouter.post("/", requireAuth, async (request, response) => {
    const parsed = submitProofSchema.safeParse(request.body);
    if (!parsed.success) {
        response.status(400).json({ error: "Invalid proof submission payload.", details: parsed.error.flatten() });
        return;
    }
    const goal = await prisma.goal.findFirst({
        where: {
            id: parsed.data.goalId,
            userId: request.user.id
        }
    });
    if (!goal) {
        response.status(404).json({ error: "Goal not found." });
        return;
    }
    if (!isRequiredProofDay(parsed.data.dayNumber, goal.proofSchedule)) {
        response.status(400).json({ error: "No proof is due for this goal on that day." });
        return;
    }
    const proof = await prisma.proofSubmission.create({
        data: {
            userId: request.user.id,
            goalId: goal.id,
            dayNumber: parsed.data.dayNumber,
            note: parsed.data.note,
            assetUrl: parsed.data.assetUrl,
            status: "SUBMITTED"
        }
    });
    await prisma.goal.update({
        where: { id: goal.id },
        data: {
            status: "PENDING_REVIEW",
            lastProofAt: new Date()
        }
    });
    response.status(201).json({ proof });
});
proofsRouter.patch("/:proofId/review", requireAuth, requireAdmin, async (request, response) => {
    const body = reviewProofSchema.safeParse(request.body);
    if (!body.success) {
        response.status(400).json({ error: "Invalid review payload." });
        return;
    }
    const proofId = String(request.params.proofId || "");
    if (!proofId) {
        response.status(400).json({ error: "Proof id is required." });
        return;
    }
    const proof = await prisma.proofSubmission.findUnique({
        where: { id: proofId }
    });
    if (!proof) {
        response.status(404).json({ error: "Proof not found." });
        return;
    }
    if (proof.status !== "SUBMITTED") {
        response.status(409).json({ error: "This proof has already been reviewed." });
        return;
    }
    const goal = await prisma.goal.findUnique({
        where: { id: proof.goalId }
    });
    if (!goal) {
        response.status(404).json({ error: "Goal not found for this proof." });
        return;
    }
    const user = await prisma.user.findUnique({
        where: { id: proof.userId },
        include: {
            wallet: true
        }
    });
    if (!user) {
        response.status(404).json({ error: "User not found for this proof." });
        return;
    }
    const reviewedAt = new Date();
    if (body.data.decision === "DECLINED") {
        const declined = await prisma.$transaction(async (transaction) => {
            await transaction.proofSubmission.update({
                where: { id: proof.id },
                data: {
                    status: "DECLINED",
                    reviewedAt,
                    reviewerId: request.user.id
                }
            });
            return transaction.goal.update({
                where: { id: proof.goalId },
                data: {
                    status: "ACTIVE"
                }
            });
        });
        response.json({ goal: declined, message: "Proof declined." });
        return;
    }
    const proofSchedule = normalizeProofSchedule(goal.proofSchedule);
    if (!isRequiredProofDay(proof.dayNumber, proofSchedule)) {
        response.status(400).json({ error: "This proof day is not required for this goal's schedule." });
        return;
    }
    const completedDays = Math.max(goal.completedDays, proof.dayNumber);
    const goalAlreadyCompleted = goal.status === "COMPLETED";
    const lastRequiredProofDay = getLastRequiredProofDay(goal.totalDays, proofSchedule);
    const completesGoal = !goalAlreadyCompleted && completedDays >= lastRequiredProofDay;
    const result = await prisma.$transaction(async (transaction) => {
        await transaction.proofSubmission.update({
            where: { id: proof.id },
            data: {
                status: "APPROVED",
                reviewedAt,
                reviewerId: request.user.id
            }
        });
        const nextGoal = await transaction.goal.update({
            where: { id: proof.goalId },
            data: {
                completedDays: Math.max(goal.completedDays, completedDays),
                currentDay: goalAlreadyCompleted || completesGoal ? goal.totalDays : Math.min(goal.totalDays, completedDays + (proofSchedule === "every-other-day" ? 2 : 1)),
                status: goalAlreadyCompleted || completesGoal ? "COMPLETED" : "ACTIVE"
            }
        });
        if (completesGoal && user.wallet) {
            const rewardAmount = goal.projectedRewardStax;
            const updatedWallet = await transaction.wallet.update({
                where: { id: user.wallet.id },
                data: {
                    staxBalance: {
                        increment: rewardAmount
                    }
                }
            });
            await transaction.walletLedger.create({
                data: {
                    walletId: updatedWallet.id,
                    goalId: proof.goalId,
                    type: "GOAL_REWARD",
                    amount: rewardAmount,
                    balanceAfter: updatedWallet.staxBalance,
                    description: `Goal ${goal.title} completed successfully.`
                }
            });
        }
        return nextGoal;
    });
    response.json({ goal: result, message: completesGoal ? "Proof approved and goal completed." : "Proof approved." });
});
