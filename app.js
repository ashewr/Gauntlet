import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { env } from "./config/env.js";
import { prisma } from "./lib/db.js";
import { stripeConfigured } from "./lib/stripe.js";
import { createRateLimit } from "./middleware/rateLimit.js";
import { apiNoStore, requireTrustedOrigin } from "./middleware/security.js";
import { adminRouter } from "./routes/admin.js";
import { authRouter } from "./routes/auth.js";
import { goalsRouter } from "./routes/goals.js";
import { proofsRouter } from "./routes/proofs.js";
import { shopRouter } from "./routes/shop.js";
import { walletRouter } from "./routes/wallet.js";
import { webhooksRouter } from "./routes/webhooks.js";
export const app = express();
const currentDir = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(currentDir, "..");
if (env.NODE_ENV === "production") {
    app.set("trust proxy", 1);
}
app.use(cors({
    origin(origin, callback) {
        if (!origin) {
            callback(null, true);
            return;
        }
        if (env.NODE_ENV !== "production" && origin === "null") {
            callback(null, true);
            return;
        }
        try {
            callback(null, new URL(origin).origin === new URL(env.APP_URL).origin);
        }
        catch {
            callback(null, false);
        }
    },
    credentials: true
}));
app.use(helmet({
    contentSecurityPolicy: {
        useDefaults: true,
        directives: {
            "default-src": ["'self'"],
            "base-uri": ["'self'"],
            "connect-src": ["'self'", env.API_URL, "https://accounts.google.com"],
            "frame-src": ["'self'", "https://accounts.google.com"],
            "font-src": ["'self'", "https://fonts.gstatic.com"],
            "form-action": ["'self'"],
            "frame-ancestors": ["'none'"],
            "img-src": ["'self'", "data:", "https:"],
            "script-src": ["'self'", "https://accounts.google.com"],
            "style-src": ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"]
        }
    },
    crossOriginEmbedderPolicy: false
}));
app.use(morgan("dev"));
app.use("/api/webhooks/stripe", express.raw({ type: "application/json" }));
app.use(express.json({ limit: env.JSON_BODY_LIMIT }));
app.use(express.urlencoded({ extended: true, limit: env.JSON_BODY_LIMIT }));
app.use(cookieParser());
app.use(apiNoStore);
app.use("/api", createRateLimit({
    keyPrefix: "global",
    maxRequests: env.GLOBAL_RATE_LIMIT_MAX,
    windowMs: env.GLOBAL_RATE_LIMIT_WINDOW_MS
}));
app.use("/api/auth", createRateLimit({
    keyPrefix: "auth",
    maxRequests: env.AUTH_RATE_LIMIT_MAX,
    windowMs: env.AUTH_RATE_LIMIT_WINDOW_MS
}));
app.use("/api", (request, response, next) => {
    if (request.path.startsWith("/webhooks")) {
        next();
        return;
    }
    requireTrustedOrigin(request, response, next);
});
app.get("/api/health", (_request, response) => {
    response.json({ ok: true });
});
app.get("/api/ready", async (_request, response) => {
    try {
        await prisma.$queryRawUnsafe("SELECT 1");
        response.json({
            ok: true,
            database: "connected",
            stripeConfigured
        });
    }
    catch (error) {
        response.status(503).json({
            ok: false,
            database: "unavailable",
            stripeConfigured
        });
    }
});
app.use("/api/auth", authRouter);
app.use("/api/goals", goalsRouter);
app.use("/api/proofs", proofsRouter);
app.use("/api/wallet", walletRouter);
app.use("/api/shop", shopRouter);
app.use("/api/admin", adminRouter);
app.use("/api/webhooks", webhooksRouter);
app.use("/api", (_request, response) => {
    response.status(404).json({ error: "API route not found." });
});
app.use(express.static(projectRoot));
app.get("/", (_request, response) => {
    response.sendFile(path.join(projectRoot, "index.html"));
});
app.use((error, _request, response, _next) => {
    const message = error instanceof Error ? error.message : "Unexpected server error.";
    console.error("Unhandled application error", error);
    response.status(500).json({
        error: env.NODE_ENV === "production" ? "Unexpected server error." : message
    });
});
