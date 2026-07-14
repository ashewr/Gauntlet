import { Router } from "express";
import { env } from "../config/env.js";
import { prisma } from "../lib/db.js";
import { centsToStax, stripe, stripeConfigured } from "../lib/stripe.js";
export const webhooksRouter = Router();
webhooksRouter.post("/stripe", async (request, response) => {
    if (!stripeConfigured || !stripe) {
        response.status(503).send("Stripe webhooks are not configured.");
        return;
    }
    const signature = request.headers["stripe-signature"];
    if (!signature || typeof signature !== "string") {
        response.status(400).send("Missing Stripe signature.");
        return;
    }
    let event;
    try {
        event = stripe.webhooks.constructEvent(request.body, signature, env.STRIPE_WEBHOOK_SECRET);
    }
    catch (error) {
        response.status(400).send(`Webhook Error: ${error.message}`);
        return;
    }
    if (event.type === "checkout.session.completed") {
        const session = event.data.object;
        if (session.metadata?.kind === "wallet_deposit" && session.payment_status === "paid") {
            const userId = session.metadata.userId;
            const amountUsdCents = session.amount_total ?? Number(session.metadata.amountUsdCents || 0);
            const staxGranted = Number(session.metadata.staxGranted || centsToStax(amountUsdCents));
            if (!userId || !amountUsdCents || !staxGranted) {
                response.status(400).send("Stripe session is missing deposit metadata.");
                return;
            }
            await prisma.$transaction(async (transaction) => {
                const alreadySaved = await transaction.deposit.findUnique({
                    where: { stripeCheckoutId: session.id }
                });
                if (alreadySaved) {
                    return;
                }
                const wallet = await transaction.wallet.upsert({
                    where: { userId },
                    create: {
                        userId,
                        staxBalance: staxGranted
                    },
                    update: {
                        staxBalance: {
                            increment: staxGranted
                        }
                    }
                });
                await transaction.deposit.create({
                    data: {
                        userId,
                        stripeCheckoutId: session.id,
                        stripePaymentIntentId: typeof session.payment_intent === "string" ? session.payment_intent : undefined,
                        amountUsdCents,
                        staxGranted
                    }
                });
                await transaction.walletLedger.create({
                    data: {
                        walletId: wallet.id,
                        type: "DEPOSIT",
                        amount: staxGranted,
                        balanceAfter: wallet.staxBalance,
                        description: `Stripe deposit completed for ${staxGranted} Stax.`,
                        stripePaymentId: typeof session.payment_intent === "string" ? session.payment_intent : undefined
                    }
                });
            });
        }
    }
    response.json({ received: true });
});
