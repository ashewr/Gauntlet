import { Router } from "express";
import { OAuth2Client } from "google-auth-library";
import { z } from "zod";
import { env } from "../config/env.js";
import { prisma } from "../lib/db.js";
import { emailDeliveryConfigured, sendPasswordResetEmail, sendWelcomeEmail } from "../lib/email.js";
import { hashPassword, verifyPassword } from "../lib/passwords.js";
import { buildPasswordResetUrl, generatePasswordResetToken, hashPasswordResetToken } from "../lib/passwordResets.js";
import { createSession, destroySession, writeSessionCookie } from "../lib/sessions.js";
import { requireAuth } from "../middleware/auth.js";
const registerSchema = z.object({
    email: z.string().email(),
    username: z.string().min(3).max(32).regex(/^[a-zA-Z0-9_]+$/),
    displayName: z.string().min(2).max(60),
    password: z.string().min(8).max(128),
    acceptedTerms: z.literal(true),
});
const loginSchema = z.object({
    emailOrUsername: z.string().min(3),
    password: z.string().min(8).max(128)
});
const googleLoginSchema = z.object({
    idToken: z.string().min(20)
});
const forgotPasswordSchema = z.object({
    email: z.string().email()
});
const resetPasswordSchema = z.object({
    token: z.string().min(20),
    password: z.string().min(8).max(128)
});
const googleClient = env.GOOGLE_CLIENT_ID ? new OAuth2Client(env.GOOGLE_CLIENT_ID) : null;
const BETA_SIGNUP_STAX_REWARD = 10;
export const authRouter = Router();
authRouter.get("/config", (_request, response) => {
    response.json({
        googleClientId: env.GOOGLE_CLIENT_ID || null,
        googleEnabled: Boolean(env.GOOGLE_CLIENT_ID),
        passwordResetEmailEnabled: emailDeliveryConfigured(),
    });
});
authRouter.post("/register", async (request, response) => {
    const parsed = registerSchema.safeParse(request.body);
    if (!parsed.success) {
        response.status(400).json({ error: "Invalid registration payload.", details: parsed.error.flatten() });
        return;
    }
    const normalizedEmail = parsed.data.email.toLowerCase();
    const { username, displayName, password } = parsed.data;
    const existing = await prisma.user.findFirst({
        where: {
            OR: [{ email: normalizedEmail }, { username: username.toLowerCase() }]
        }
    });
    if (existing) {
        response.status(409).json({ error: "An account already exists with that email or username." });
        return;
    }
    const user = await prisma.user.create({
        data: {
            email: normalizedEmail,
            termsAcceptedAt: parsed.data.acceptedTerms ? new Date() : null,
            username: username.toLowerCase(),
            displayName,
            passwordHash: hashPassword(password),
            role: "CUSTOMER",
            wallet: {
                create: {
                    staxBalance: BETA_SIGNUP_STAX_REWARD,
                    ledgerEntries: {
                        create: {
                            type: "MANUAL_ADJUSTMENT",
                            amount: BETA_SIGNUP_STAX_REWARD,
                            balanceAfter: BETA_SIGNUP_STAX_REWARD,
                            description: "Beta supporter signup reward."
                        }
                    }
                }
            }
        },
        include: {
            wallet: true
        }
    });
    const session = await createSession(user.id);
    writeSessionCookie(response, session.token, session.expiresAt);
    const welcomeEmail = await sendWelcomeEmailIfNeeded(user.id);
    response.status(201).json({
        welcomeEmail,
        user: {
            id: user.id,
            email: user.email,
            username: user.username,
            displayName: user.displayName,
            role: user.role,
            wallet: user.wallet
        }
    });
});
authRouter.post("/login", async (request, response) => {
    const parsed = loginSchema.safeParse(request.body);
    if (!parsed.success) {
        response.status(400).json({ error: "Invalid login payload." });
        return;
    }
    const identifier = parsed.data.emailOrUsername.toLowerCase();
    const user = await prisma.user.findFirst({
        where: {
            OR: [{ email: identifier }, { username: identifier }]
        }
    });
    if (!user || !user.passwordHash || !verifyPassword(parsed.data.password, user.passwordHash)) {
        response.status(401).json({ error: "Incorrect email/username or password." });
        return;
    }
    const session = await createSession(user.id);
    writeSessionCookie(response, session.token, session.expiresAt);
    const welcomeEmail = await sendWelcomeEmailIfNeeded(user.id);
    response.json({
        welcomeEmail,
        user: serializeUser(user)
    });
});
authRouter.post("/google", async (request, response) => {
    if (!googleClient || !env.GOOGLE_CLIENT_ID) {
        response.status(503).json({ error: "Google sign-in is not configured yet." });
        return;
    }
    const parsed = googleLoginSchema.safeParse(request.body);
    if (!parsed.success) {
        response.status(400).json({ error: "Invalid Google login payload." });
        return;
    }
    const ticket = await googleClient.verifyIdToken({
        idToken: parsed.data.idToken,
        audience: env.GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();
    if (!payload?.sub || !payload.email || !payload.email_verified) {
        response.status(400).json({ error: "Google account details could not be verified." });
        return;
    }
    const providerAccountId = payload.sub;
    const email = payload.email.toLowerCase();
    const displayName = String(payload.name || payload.given_name || email.split("@")[0] || "Player").slice(0, 60);
    const authProvider = await prisma.authProviderAccount.findUnique({
        where: {
            provider_providerAccountId: {
                provider: "GOOGLE",
                providerAccountId,
            },
        },
        include: {
            user: true,
        },
    });
    let user = authProvider?.user || null;
    let isNewUser = false;
    if (!user) {
        const existingUser = await prisma.user.findUnique({
            where: { email },
        });
        if (existingUser) {
            user = await prisma.$transaction(async (transaction) => {
                await transaction.authProviderAccount.upsert({
                    where: {
                        provider_providerAccountId: {
                            provider: "GOOGLE",
                            providerAccountId,
                        },
                    },
                    update: {
                        userId: existingUser.id,
                    },
                    create: {
                        userId: existingUser.id,
                        provider: "GOOGLE",
                        providerAccountId,
                    },
                });
                return transaction.user.update({
                    where: { id: existingUser.id },
                    data: {
                        emailVerifiedAt: existingUser.emailVerifiedAt || new Date(),
                    },
                });
            });
        }
        else {
            const username = await buildUniqueUsername(email.split("@")[0] || displayName);
            user = await prisma.user.create({
                data: {
                    email,
                    username,
                    displayName,
                    passwordHash: null,
                    role: "CUSTOMER",
                    emailVerifiedAt: new Date(),
                    welcomeEmailSentAt: null,
                    wallet: {
                        create: {
                            staxBalance: BETA_SIGNUP_STAX_REWARD,
                            ledgerEntries: {
                                create: {
                                    type: "MANUAL_ADJUSTMENT",
                                    amount: BETA_SIGNUP_STAX_REWARD,
                                    balanceAfter: BETA_SIGNUP_STAX_REWARD,
                                    description: "Beta supporter signup reward."
                                }
                            }
                        },
                    },
                    authProviders: {
                        create: {
                            provider: "GOOGLE",
                            providerAccountId,
                        },
                    },
                },
            });
            isNewUser = true;
        }
    }
    const session = await createSession(user.id);
    writeSessionCookie(response, session.token, session.expiresAt);
    const welcomeEmail = await sendWelcomeEmailIfNeeded(user.id);
    const userWithWallet = await prisma.user.findUnique({
        where: { id: user.id },
        include: { wallet: true }
    });
    response.json({ welcomeEmail, isNewUser, user: serializeUser(userWithWallet || user) });
});
authRouter.post("/forgot-password", async (request, response) => {
    const parsed = forgotPasswordSchema.safeParse(request.body);
    if (!parsed.success) {
        response.status(400).json({ error: "Enter a valid email address." });
        return;
    }
    const normalizedEmail = parsed.data.email.toLowerCase();
    const user = await prisma.user.findUnique({
        where: { email: normalizedEmail },
    });
    const successPayload = {
        ok: true,
        message: "If an account exists for that email, a password reset link has been sent.",
    };
    if (!user) {
        response.json(successPayload);
        return;
    }
    const rawToken = generatePasswordResetToken();
    const tokenHash = hashPasswordResetToken(rawToken);
    const expiresAt = new Date(Date.now() + 1000 * 60 * 30);
    await prisma.$transaction(async (transaction) => {
        await transaction.passwordResetToken.deleteMany({
            where: {
                userId: user.id,
            },
        });
        await transaction.passwordResetToken.create({
            data: {
                userId: user.id,
                tokenHash,
                expiresAt,
            },
        });
    });
    const resetUrl = buildPasswordResetUrl(rawToken);
    const delivery = await sendPasswordResetEmail({
        toEmail: user.email,
        displayName: user.displayName,
        resetUrl,
    });
    if (env.NODE_ENV !== "production") {
        successPayload.previewResetUrl = delivery.previewUrl;
        successPayload.emailConfigured = delivery.sent;
        successPayload.emailError = delivery.error;
        successPayload.emailId = delivery.id;
    }
    response.json(successPayload);
});
authRouter.post("/reset-password", async (request, response) => {
    const parsed = resetPasswordSchema.safeParse(request.body);
    if (!parsed.success) {
        response.status(400).json({ error: "Invalid reset password payload." });
        return;
    }
    const tokenHash = hashPasswordResetToken(parsed.data.token);
    const tokenRecord = await prisma.passwordResetToken.findFirst({
        where: {
            tokenHash,
            usedAt: null,
            expiresAt: {
                gt: new Date(),
            },
        },
        include: {
            user: true,
        },
    });
    if (!tokenRecord) {
        response.status(400).json({ error: "This password reset link is invalid or has expired." });
        return;
    }
    await prisma.$transaction(async (transaction) => {
        await transaction.user.update({
            where: { id: tokenRecord.userId },
            data: {
                passwordHash: hashPassword(parsed.data.password),
                emailVerifiedAt: tokenRecord.user.emailVerifiedAt || new Date(),
            },
        });
        await transaction.passwordResetToken.update({
            where: { id: tokenRecord.id },
            data: {
                usedAt: new Date(),
            },
        });
        await transaction.passwordResetToken.deleteMany({
            where: {
                userId: tokenRecord.userId,
                id: {
                    not: tokenRecord.id,
                },
            },
        });
        await transaction.session.deleteMany({
            where: {
                userId: tokenRecord.userId,
            },
        });
    });
    response.json({
        ok: true,
        message: "Your password has been updated. You can sign in with your new password now.",
    });
});
authRouter.post("/logout", requireAuth, async (request, response) => {
    const token = request.cookies?.[env.SESSION_COOKIE_NAME];
    await destroySession(token);
    response.clearCookie(env.SESSION_COOKIE_NAME);
    response.status(204).send();
});
authRouter.get("/me", requireAuth, async (request, response) => {
    response.json({ user: request.user });
});
authRouter.get("/snapshot", requireAuth, async (request, response) => {
    const user = await prisma.user.findUnique({
        where: { id: request.user.id },
        include: {
            wallet: {
                include: {
                    ledgerEntries: {
                        orderBy: { createdAt: "desc" },
                        take: 12
                    }
                }
            },
            goals: {
                orderBy: { createdAt: "desc" }
            },
            proofs: {
                include: {
                    goal: true
                },
                orderBy: { createdAt: "desc" }
            },
            orders: {
                orderBy: { createdAt: "desc" }
            },
            deposits: {
                orderBy: { createdAt: "desc" }
            }
        }
    });
    if (!user) {
        response.status(404).json({ error: "User not found." });
        return;
    }
    response.json({ user });
});
function serializeUser(user) {
    return {
        id: user.id,
        email: user.email,
        username: user.username,
        displayName: user.displayName,
        role: user.role,
        wallet: user.wallet || null,
    };
}
async function sendWelcomeEmailIfNeeded(userId) {
    if (!emailDeliveryConfigured()) {
        return { sent: false, skipped: true, reason: "email_not_configured" };
    }
    const user = await prisma.user.findUnique({
        where: { id: userId },
        select: {
            id: true,
            email: true,
            displayName: true,
            welcomeEmailSentAt: true,
        },
    });
    if (!user || user.welcomeEmailSentAt) {
        return { sent: false, skipped: true, reason: user ? "already_sent" : "user_not_found" };
    }
    const delivery = await sendWelcomeEmail({
        toEmail: user.email,
        displayName: user.displayName,
    });
    if (delivery.sent) {
        await prisma.user.update({
            where: { id: user.id },
            data: {
                welcomeEmailSentAt: new Date(),
            },
        });
    }
    return { sent: delivery.sent, skipped: false, emailId: delivery.id, emailError: delivery.error };
}
async function buildUniqueUsername(seedValue) {
    const cleanedSeed = String(seedValue || "")
        .toLowerCase()
        .replace(/[^a-z0-9_]/g, "")
        .slice(0, 24);
    const base = (cleanedSeed || "player").padEnd(3, "0");
    let attempt = base;
    let index = 0;
    while (true) {
        const existing = await prisma.user.findUnique({
            where: { username: attempt },
            select: { id: true },
        });
        if (!existing) {
            return attempt;
        }
        index += 1;
        const suffix = String(index);
        attempt = `${base.slice(0, Math.max(3, 32 - suffix.length))}${suffix}`;
    }
}
