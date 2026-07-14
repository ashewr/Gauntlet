import { Router } from "express";
import { prisma } from "../lib/db.js";
import { requireAdmin, requireAuth } from "../middleware/auth.js";
export const adminRouter = Router();
adminRouter.use(requireAuth, requireAdmin);
adminRouter.get("/users", async (_request, response) => {
    const users = await prisma.user.findMany({
        include: {
            wallet: true,
            goals: true,
            orders: true,
            proofs: {
                include: {
                    goal: true
                },
                orderBy: { createdAt: "desc" }
            },
            deposits: true
        },
        orderBy: { createdAt: "desc" }
    });
    response.json({ users });
});
adminRouter.get("/orders", async (_request, response) => {
    const orders = await prisma.shopOrder.findMany({
        include: { user: true },
        orderBy: { createdAt: "desc" }
    });
    response.json({ orders });
});
adminRouter.post("/orders/:orderId/cancel", async (request, response) => {
    const order = await prisma.shopOrder.findUnique({
        where: { id: request.params.orderId },
        include: {
            user: {
                include: {
                    wallet: true
                }
            }
        }
    });
    if (!order || !order.user.wallet) {
        response.status(404).json({ error: "Order not found." });
        return;
    }
    if (order.status === "CANCELED" || order.status === "REFUNDED") {
        response.status(400).json({ error: "Order has already been canceled." });
        return;
    }
    const refundAmount = order.staxCost * order.quantity;
    const canceledOrder = await prisma.$transaction(async (transaction) => {
        const updatedWallet = await transaction.wallet.update({
            where: { id: order.user.wallet.id },
            data: {
                staxBalance: {
                    increment: refundAmount
                }
            }
        });
        await transaction.walletLedger.create({
            data: {
                walletId: updatedWallet.id,
                orderId: order.id,
                type: "SHOP_REFUND",
                amount: refundAmount,
                balanceAfter: updatedWallet.staxBalance,
                description: `Refunded order ${order.itemName}.`
            }
        });
        return transaction.shopOrder.update({
            where: { id: order.id },
            data: {
                status: "CANCELED"
            }
        });
    });
    response.json({ order: canceledOrder });
});
