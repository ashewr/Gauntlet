import { createHash, randomBytes } from "node:crypto";
import { env } from "../config/env.js";
import { prisma } from "./db.js";
export function generateSessionToken() {
    return randomBytes(32).toString("base64url");
}
export function hashSessionToken(token) {
    return createHash("sha256").update(`${token}:${env.SESSION_SECRET}`).digest("hex");
}
export async function createSession(userId) {
    const token = generateSessionToken();
    const tokenHash = hashSessionToken(token);
    const expiresAt = new Date(Date.now() + 1000 * 60 * 60 * 24 * 30);
    await prisma.session.create({
        data: {
            userId,
            tokenHash,
            expiresAt
        }
    });
    return { token, expiresAt };
}
export function writeSessionCookie(response, token, expiresAt) {
    response.cookie(env.SESSION_COOKIE_NAME, token, {
        httpOnly: true,
        sameSite: "lax",
        secure: env.NODE_ENV === "production",
        expires: expiresAt
    });
}
export async function destroySession(token) {
    if (!token) {
        return;
    }
    await prisma.session.deleteMany({
        where: {
            tokenHash: hashSessionToken(token)
        }
    });
}
