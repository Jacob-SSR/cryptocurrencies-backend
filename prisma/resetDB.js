const prisma = require("../config/prisma");

async function resetDatabase() {
  try {
    console.log(" Starting database reset process...");

    await prisma.$executeRaw`SET FOREIGN_KEY_CHECKS = 0;`;

    console.log("  - Clearing trades...");
    await prisma.$executeRaw`TRUNCATE TABLE trade;`;

    console.log("  - Clearing orders...");
    await prisma.$executeRaw`TRUNCATE TABLE \`order\`;`;

    console.log("  - Clearing crypto transactions...");
    await prisma.$executeRaw`TRUNCATE TABLE crypto_transaction;`;

    console.log("  - Clearing fiat transactions...");
    await prisma.$executeRaw`TRUNCATE TABLE fiat_transaction;`;

    console.log("  - Clearing wallets...");
    await prisma.$executeRaw`TRUNCATE TABLE wallet;`;

    console.log("  - Clearing users...");
    await prisma.$executeRaw`TRUNCATE TABLE user;`;

    await prisma.$executeRaw`SET FOREIGN_KEY_CHECKS = 1;`;

    console.log(" Database reset completed successfully!");
  } catch (error) {
    console.error(" Error during database reset:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

if (require.main === module) {
  resetDatabase()
    .then(() => {
      console.log(
        "Database reset complete. You can now run your seed scripts."
      );
      process.exit(0);
    })
    .catch((error) => {
      console.error("Failed to reset database:", error);
      process.exit(1);
    });
} else {
  module.exports = resetDatabase;
}
