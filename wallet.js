import { Router } from "express";
import { z } from "zod";
import { env } from "../config/env.js";
import { prisma } from "../lib/db.js";
import { centsToStax, stripe, stripeConfigured } from "../lib/stripe.js";
import { requireAuth } from "../middleware/auth.js";
const depositSchema = z.object({
    amountUsd: z.number().positive().max(10000)
});
export const walletRouter = Router();
walletRouter.use(requireAuth);
walletRouter.get("/", async (request, response) => {
    const wallet = await prisma.wallet.findUnique({
        where: { userId: request.user.id }
    });
    const depositsCount = await prisma.deposit.count({
        where: { userId: request.user.id }
    });
    response.json({
        conversionRate: {
            usdPerStax: 2
        },
        customerId: request.user.id,
        staxBalance: Number(wallet?.staxBalance || 0),
        depositsCount
    });
});
walletRouter.post("/checkout-session", async (request, response) => {
    if (!stripeConfigured || !stripe) {
        response.status(503).json({
            error: "Stripe checkout is not configured yet. Add your real Stripe keys to the .env file first."
        });
        return;
    }
    const parsed = depositSchema.safeParse(request.body);
    if (!parsed.success) {
        response.status(400).json({ error: "Invalid deposit request." });
        return;
    }
    const amountUsdCents = Math.round(parsed.data.amountUsd * 100);
    const staxGranted = centsToStax(amountUsdCents);
    const session = await stripe.checkout.sessions.create({
        mode: "payment",
        success_url: `${env.APP_URL}/bank.html?deposit=success`,
        cancel_url: `${env.APP_URL}/bank.html?deposit=cancelled`,
        customer_email: request.user.email,
        payment_intent_data: {
            metadata: {
                userId: request.user.id,
                kind: "wallet_deposit",
                staxGranted: String(staxGranted),
                amountUsdCents: String(amountUsdCents)
            }
        },
        metadata: {
            userId: request.user.id,
            kind: "wallet_deposit",
            staxGranted: String(staxGranted),
            amountUsdCents: String(amountUsdCents)
        },
        line_items: [
            {
                price_data: {
                    currency: "usd",
                    unit_amount: amountUsdCents,
                    product_data: {
                        name: `${staxGranted} Stax wallet funding`
                    }
                },
                quantity: 1
            }
        ]
    });
    response.status(201).json({
        checkoutUrl: session.url,
        checkoutSessionId: session.id,
        staxGranted
    });
});
