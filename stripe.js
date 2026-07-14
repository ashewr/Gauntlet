import Stripe from "stripe";
import { env } from "../config/env.js";
function hasPlaceholder(value) {
    const normalized = String(value || "").trim().toLowerCase();
    return !normalized || normalized.includes("replace_me");
}
export const stripeConfigured = !hasPlaceholder(env.STRIPE_SECRET_KEY) && !hasPlaceholder(env.STRIPE_WEBHOOK_SECRET);
export const stripe = stripeConfigured
    ? new Stripe(env.STRIPE_SECRET_KEY, {
        apiVersion: "2025-10-29.clover"
    })
    : null;
export function dollarsToCents(amount) {
    return Math.round(amount * 100);
}
export function centsToStax(amountUsdCents) {
    return Math.floor(amountUsdCents / 200);
}
