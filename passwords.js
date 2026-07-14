import { randomBytes, scryptSync, timingSafeEqual } from "node:crypto";
const KEY_LENGTH = 64;
export function hashPassword(password) {
    const salt = randomBytes(16).toString("hex");
    const derived = scryptSync(password, salt, KEY_LENGTH).toString("hex");
    return `${salt}:${derived}`;
}
export function verifyPassword(password, storedHash) {
    const [salt, original] = storedHash.split(":");
    if (!salt || !original) {
        return false;
    }
    const current = scryptSync(password, salt, KEY_LENGTH);
    const originalBuffer = Buffer.from(original, "hex");
    if (current.length !== originalBuffer.length) {
        return false;
    }
    return timingSafeEqual(current, originalBuffer);
}
