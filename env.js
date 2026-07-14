import "dotenv/config";
import { z } from "zod";
const envSchema = z.object({
    NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
    PORT: z.coerce.number().int().positive().default(4000),
    APP_URL: z.string().url(),
    API_URL: z.string().url(),
    DATABASE_URL: z.string().min(1),
    DIRECT_URL: z.string().min(1).optional(),
    SESSION_COOKIE_NAME: z.string().min(1).default("gauntlet_session"),
    SESSION_SECRET: z.string().min(24),
    JSON_BODY_LIMIT: z.string().default("1mb"),
    GLOBAL_RATE_LIMIT_WINDOW_MS: z.coerce.number().int().positive().default(60_000),
    GLOBAL_RATE_LIMIT_MAX: z.coerce.number().int().positive().default(120),
    AUTH_RATE_LIMIT_WINDOW_MS: z.coerce.number().int().positive().default(900_000),
    AUTH_RATE_LIMIT_MAX: z.coerce.number().int().positive().default(20),
    STRIPE_SECRET_KEY: z.string().min(1),
    STRIPE_WEBHOOK_SECRET: z.string().min(1),
    STRIPE_STAX_PRODUCT_ID: z.string().min(1),
    GOOGLE_CLIENT_ID: z.string().min(1).optional(),
    RESEND_API_KEY: z.string().min(1).optional(),
    EMAIL_FROM: z.string().min(1).optional(),
    ADMIN_EMAIL: z.string().email(),
    SUPPORT_EMAIL: z.string().email().default("joingauntlet@gmail.com"),
    SUPPORT_PHONE: z.string().default(""),
    COMPANY_NAME: z.string().min(1).default("The Gauntlet")
}).superRefine((value, context) => {
    if (value.NODE_ENV !== "production") {
        return;
    }
    const requiredProductionValues = [
        ["SESSION_SECRET", "Set a strong production SESSION_SECRET."],
        ["STRIPE_SECRET_KEY", "Set the production Stripe secret key."],
        ["STRIPE_WEBHOOK_SECRET", "Set the production Stripe webhook secret."],
        ["RESEND_API_KEY", "Set the production Resend API key."],
        ["EMAIL_FROM", "Set EMAIL_FROM to a verified sending address."],
    ];
    requiredProductionValues.forEach(([key, message]) => {
        const raw = String(value[key] || "").trim().toLowerCase();
        if (!raw || raw.includes("replace_me") || raw.includes("onboarding@resend.dev") || raw.includes("local_development")) {
            context.addIssue({
                code: z.ZodIssueCode.custom,
                path: [key],
                message,
            });
        }
    });
});
export const env = envSchema.parse(process.env);
