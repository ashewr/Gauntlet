import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";
const connectionString = process.env.DATABASE_URL || "";
const adapter = connectionString ? new PrismaPg(connectionString) : undefined;
export const prisma = global.__gauntletPrisma__ ??
    new PrismaClient({
        adapter,
        log: process.env.NODE_ENV === "development" ? ["query", "warn", "error"] : ["error"]
    });
if (process.env.NODE_ENV !== "production") {
    global.__gauntletPrisma__ = prisma;
}
