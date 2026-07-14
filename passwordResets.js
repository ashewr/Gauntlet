import { createHash, randomBytes } from "node:crypto";
import { env } from "../config/env.js";
export function generatePasswordResetToken() {
    return randomBytes(32).toString("base64url");
}
export function hashPasswordResetToken(token) {
    return createHash("sha256").update(`${token}:${env.SESSION_SECRET}`).digest("hex");
}
export function buildPasswordResetUrl(token) {
    const baseUrl = String(env.APP_URL || "").replace(/\/+$/, "");
    return `${baseUrl}/reset-password.html?token=${encodeURIComponent(token)}`;
}
