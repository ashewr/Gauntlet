const buckets = new Map();
function getClientKey(request) {
    const forwarded = request.headers["x-forwarded-for"];
    if (typeof forwarded === "string" && forwarded.trim()) {
        return forwarded.split(",")[0].trim();
    }
    return request.ip || request.socket.remoteAddress || "unknown";
}
function getBucket(bucketKey, windowMs) {
    const now = Date.now();
    const existing = buckets.get(bucketKey);
    if (!existing || existing.resetAt <= now) {
        const nextBucket = {
            count: 0,
            resetAt: now + windowMs
        };
        buckets.set(bucketKey, nextBucket);
        return nextBucket;
    }
    return existing;
}
function cleanupBuckets() {
    const now = Date.now();
    for (const [bucketKey, bucket] of buckets.entries()) {
        if (bucket.resetAt <= now) {
            buckets.delete(bucketKey);
        }
    }
}
setInterval(cleanupBuckets, 60_000).unref();
export function createRateLimit(options) {
    return (request, response, next) => {
        const clientKey = getClientKey(request);
        const bucketKey = `${options.keyPrefix}:${clientKey}`;
        const bucket = getBucket(bucketKey, options.windowMs);
        bucket.count += 1;
        response.setHeader("X-RateLimit-Limit", String(options.maxRequests));
        response.setHeader("X-RateLimit-Remaining", String(Math.max(0, options.maxRequests - bucket.count)));
        response.setHeader("X-RateLimit-Reset", String(Math.ceil(bucket.resetAt / 1000)));
        if (bucket.count > options.maxRequests) {
            response.status(429).json({
                error: "Too many requests. Please wait a moment and try again."
            });
            return;
        }
        next();
    };
}
