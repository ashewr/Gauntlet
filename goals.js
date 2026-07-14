import { Router } from "express";
import { z } from "zod";
import { prisma } from "../lib/db.js";
import { requireAuth } from "../middleware/auth.js";
const createGoalSchema = z.object({
    title: z.string().min(3).max(120),
    category: z.string().min(2).max(80),
    totalDays: z.number().int().min(1).max(365),
    proofSchedule: z.enum(["daily", "every-other-day"]).default("daily"),
    stakeStax: z.number().int().positive().max(500000)
});
function getProjectedRewardStax(stakeStax, totalDays) {
    const multiplier = totalDays < 10 ? 1.05 : 1.08;
    return Math.round(stakeStax * multiplier);
}
export const goalsRouter = Router();
goalsRouter.use(requireAuth);
function normalizeGoalKey(value) {
    return value.trim().toLowerCase().replace(/\s+/g, " ");
}
goalsRouter.get("/", async (request, response) => {
    const goals = await prisma.goal.findMany({
        where: { userId: request.user.id },
        orderBy: { createdAt: "desc" }
    });
    response.json({ goals });
});
goalsRouter.post("/", async (request, response) => {
    const parsed = createGoalSchema.safeParse(request.body);
    if (!parsed.success) {
        response.status(400).json({ error: "Invalid goal payload.", details: parsed.error.flatten() });
        return;
    }
    const duplicateGoal = await prisma.goal.findFirst({
        where: {
            userId: request.user.id,
            status: {
                in: ["DRAFT", "ACTIVE", "PENDING_REVIEW"]
            }
        },
        orderBy: { createdAt: "desc" }
    });
    if (duplicateGoal && normalizeGoalKey(duplicateGoal.title) === normalizeGoalKey(parsed.data.title)) {
        response.status(409).json({
            error: "A goal with this title is already active on this account."
        });
        return;
    }
    const wallet = await prisma.wallet.findUnique({
        where: { userId: request.user.id }
    });
    if (!wallet || wallet.staxBalance < parsed.data.stakeStax) {
        response.status(400).json({ error: "Insufficient Stax balance for this goal." });
        return;
    }
    const projectedRewardStax = getProjectedRewardStax(parsed.data.stakeStax, parsed.data.totalDays);
    const result = await prisma.$transaction(async (transaction) => {
        const goal = await transaction.goal.create({
            data: {
                userId: request.user.id,
                title: parsed.data.title,
                category: parsed.data.category,
                totalDays: parsed.data.totalDays,
                proofSchedule: parsed.data.proofSchedule,
                stakeStax: parsed.data.stakeStax,
                projectedRewardStax,
                status: "ACTIVE",
                deadlineAt: new Date(Date.now() + parsed.data.totalDays * 24 * 60 * 60 * 1000)
            }
        });
        const updatedWallet = await transaction.wallet.update({
            where: { userId: request.user.id },
            data: {
                staxBalance: {
                    decrement: parsed.data.stakeStax
                }
            }
        });
        await transaction.walletLedger.create({
            data: {
                walletId: updatedWallet.id,
                goalId: goal.id,
                type: "GOAL_STAKE_LOCK",
                amount: -parsed.data.stakeStax,
                balanceAfter: updatedWallet.staxBalance,
                description: `Committed ${parsed.data.stakeStax} Stax to goal ${goal.title}.`
            }
        });
        return goal;
    });
    response.status(201).json({ goal: result });
});
