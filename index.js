import { app } from "./app.js";
import { env } from "./config/env.js";
import { prisma } from "./lib/db.js";
async function main() {
    await prisma.$connect();
    app.listen(env.PORT, () => {
        console.log(`Gauntlet API listening on ${env.API_URL}`);
    });
}
main().catch((error) => {
    console.error("Failed to start server", error);
    process.exit(1);
});
