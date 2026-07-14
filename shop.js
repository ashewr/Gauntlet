import { Router } from "express";
import { z } from "zod";
import { prisma } from "../lib/db.js";
import { requireAuth } from "../middleware/auth.js";
const SHOP_CATALOG = {
    "Insulated water bottle": 15,
    "Foam roller": 15,
    "Massage gun": 25,
    "Fitness tracker": 100
};
const shippingSchema = z.object({
    itemName: z.string().min(2).max(120),
    quantity: z.number().int().positive().max(10).default(1),
    shippingName: z.string().min(2).max(120),
    shippingAddressLine1: z.string().min(3).max(120),
    shippingAddressLine2: z.string().max(120).optional(),
    shippingCity: z.string().min(2).max(80),
    shippingState: z.string().min(2).max(80),
    shippingPostalCode: z.string().min(3).max(20),
    shippingCountry: z.string().length(2)
});
export const shopRouter = Router();
shopRouter.use(requireAuth);
shopRouter.get("/catalog", async (_request, response) => {
    response.json({
        items: Object.entries(SHOP_CATALOG).map(([itemName, staxCost]) => ({
            itemName,
            staxCost
        }))
    });
});
shopRouter.get("/orders", async (request, response) => {
    const orders = await prisma.shopOrder.findMany({
        where: { userId: request.user.id },
        orderBy: { createdAt: "desc" }
    });
    response.json({ orders });
});
shopRouter.post("/orders", async (request, response) => {
    const parsed = shippingSchema.safeParse(request.body);
    if (!parsed.success) {
        response.status(400).json({ error: "Invalid order payload.", details: parsed.error.flatten() });
        return;
    }
    const itemName = parsed.data.itemName.trim();
    const catalogCost = SHOP_CATALOG[itemName];
    if (!catalogCost) {
        response.status(400).json({ error: "That item is not available in the current shop catalog." });
        return;
    }
    const totalCost = catalogCost * parsed.data.quantity;
    const wallet = await prisma.wallet.findUnique({
        where: { userId: request.user.id }
    });
    if (!wallet || wallet.staxBalance < totalCost) {
        response.status(400).json({ error: "Insufficient Stax balance for this purchase." });
        return;
    }
    const order = await prisma.$transaction(async (transaction) => {
        const created = await transaction.shopOrder.create({
            data: {
                userId: request.user.id,
                itemName,
                quantity: parsed.data.quantity,
                staxCost: catalogCost,
                status: "PAID",
                shippingName: parsed.data.shippingName,
                shippingAddressLine1: parsed.data.shippingAddressLine1,
                shippingAddressLine2: parsed.data.shippingAddressLine2,
                shippingCity: parsed.data.shippingCity,
                shippingState: parsed.data.shippingState,
                shippingPostalCode: parsed.data.shippingPostalCode,
                shippingCountry: parsed.data.shippingCountry
            }
        });
        const updatedWallet = await transaction.wallet.update({
            where: { userId: request.user.id },
            data: {
                staxBalance: {
                    decrement: totalCost
                }
            }
        });
        await transaction.walletLedger.create({
            data: {
                walletId: updatedWallet.id,
                orderId: created.id,
                type: "SHOP_PURCHASE",
                amount: -totalCost,
                balanceAfter: updatedWallet.staxBalance,
                description: `Purchased ${created.itemName} x${created.quantity}.`
            }
        });
        return created;
    });
    response.status(201).json({ order });
});
