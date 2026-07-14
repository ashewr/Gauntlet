import { env } from "../config/env.js";
const WRITE_METHODS = new Set(["POST", "PUT", "PATCH", "DELETE"]);
function isAllowedOrigin(origin) {
    if (env.NODE_ENV !== "production" && origin === "null") {
        return true;
    }
    try {
        const allowed = new URL(env.APP_URL).origin;
        return new URL(origin).origin === allowed;
    }
    catch {
        return false;
    }
}
export function apiNoStore(request, response, next) {
    if (request.path.startsWith("/api/auth") || request.path.startsWith("/api/admin")) {
        response.setHeader("Cache-Control", "no-store");
    }
    next();
}
export function requireTrustedOrigin(request, response, next) {
    if (!WRITE_METHODS.has(request.method.toUpperCase())) {
        next();
        return;
    }
    const originHeader = request.headers.origin;
    const refererHeader = request.headers.referer;
    if (typeof originHeader === "string" && isAllowedOrigin(originHeader)) {
        next();
        return;
    }
    if (typeof refererHeader === "string" && isAllowedOrigin(refererHeader)) {
        next();
        return;
    }
    if (env.NODE_ENV !== "production" && !originHeader && !refererHeader) {
        next();
        return;
    }
    response.status(403).json({
        error: "This request origin is not allowed."
    });
}
