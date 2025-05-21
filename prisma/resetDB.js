// Import Prisma client from your existing configuration to ensure it's the same instance
const prisma = require("../config/prisma");

// If you don't have a prisma configuration file, use this instead:
// const { PrismaClient } = require("@prisma/client");
// const prisma = new PrismaClient();

/**
 * Reset Database - Clears all data from all tables
 * This script truncates all tables in the correct order to respect foreign key constraints
 */
async function resetDatabase() {
  try {
    console.log("🧹 Starting database reset process...");
    
    // Temporarily disable foreign key checks to allow truncating tables with relationships
    await prisma.$executeRaw`SET FOREIGN_KEY_CHECKS = 0;`;
    
    // Truncate all tables in reverse dependency order
    console.log("  - Clearing trades...");
    await prisma.$executeRaw`TRUNCATE TABLE trade;`;
    
    console.log("  - Clearing orders...");
    await prisma.$executeRaw`TRUNCATE TABLE \`order\`;`; // Backticks as order is a reserved keyword
    
    console.log("  - Clearing crypto transactions...");
    await prisma.$executeRaw`TRUNCATE TABLE crypto_transaction;`;
    
    console.log("  - Clearing fiat transactions...");
    await prisma.$executeRaw`TRUNCATE TABLE fiat_transaction;`;
    
    console.log("  - Clearing wallets...");
    await prisma.$executeRaw`TRUNCATE TABLE wallet;`;
    
    console.log("  - Clearing users...");
    await prisma.$executeRaw`TRUNCATE TABLE user;`;
    
    // Re-enable foreign key checks
    await prisma.$executeRaw`SET FOREIGN_KEY_CHECKS = 1;`;
    
    console.log("✅ Database reset completed successfully!");
  } catch (error) {
    console.error("❌ Error during database reset:", error);
    throw error;
  } finally {
    // Disconnect from the database
    await prisma.$disconnect();
  }
}

// Execute if this file is run directly
if (require.main === module) {
  resetDatabase()
    .then(() => {
      console.log("Database reset complete. You can now run your seed scripts.");
      process.exit(0);
    })
    .catch((error) => {
      console.error("Failed to reset database:", error);
      process.exit(1);
    });
} else {
  // Export for use in other files
  module.exports = resetDatabase;
}