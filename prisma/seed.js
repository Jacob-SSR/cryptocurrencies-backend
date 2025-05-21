const prisma = require("../config/prisma");
const bcrypt = require("bcryptjs");

async function main() {
  try {
    console.log("🌱 Starting database seeding...");
    // Hash password once and reuse it
    const password = await bcrypt.hash("password123", 10);
    console.log("🔐 Password hashed");

    // Create admins
    console.log("👤 Creating admin users...");
    const admin1 = await prisma.user.create({
      data: {
        firstName: "Admin",
        lastName: "One",
        userName: "admin1",
        email: "admin1@example.com",
        password,
        role: "ADMIN",
      },
    });

    const admin2 = await prisma.user.create({
      data: {
        firstName: "Admin",
        lastName: "Two",
        userName: "admin2",
        email: "admin2@example.com",
        password,
        role: "ADMIN",
      },
    });

    // Create regular users
    console.log("👥 Creating regular users...");
    const thaiNames = [
      { first: "สมชาย", last: "รักเรียน" },
      { first: "วิภา", last: "สุขใจ" },
      { first: "สุรชัย", last: "มีชัย" },
      { first: "ประภา", last: "แก้วตา" },
      { first: "ธนา", last: "ทรัพย์มี" },
      { first: "รัชนี", last: "งามพิศ" },
      { first: "ภาณุ", last: "เด่นดวง" },
      { first: "นุชนาถ", last: "ศรีวิไล" },
      { first: "พิชัย", last: "ใจกล้า" },
      { first: "มะลิ", last: "วรรณดี" },
    ];

    const users = [];
    for (let i = 1; i <= 10; i++) {
      const thaiName = thaiNames[i - 1];
      const user = await prisma.user.create({
        data: {
          firstName: thaiName.first,
          lastName: thaiName.last,
          userName: `user${i}`,
          email: `user${i}@example.com`,
          password,
          role: "USER",
        },
      });
      users.push(user);
    }

    // Create wallets
    console.log("💰 Creating wallets...");
    const cryptoTypes = ["BTC", "ETH", "XRP", "DOGE"];
    const cryptoBalances = {
      BTC: 1.5,
      ETH: 10,
      XRP: 2000,
      DOGE: 5000,
    };

    // Users 1-5: All cryptocurrencies
    for (let i = 0; i < 5; i++) {
      const user = users[i];
      for (const crypto of cryptoTypes) {
        await prisma.wallet.create({
          data: {
            user_id: user.id,
            currency_type: crypto,
            balance: cryptoBalances[crypto],
          },
        });
      }
    }

    // Users 6-10: Only ETH
    for (let i = 5; i < 10; i++) {
      const user = users[i];
      await prisma.wallet.create({
        data: {
          user_id: user.id,
          currency_type: "ETH",
          balance: 5,
        },
      });
    }

    // Create fiat transactions - both deposits and withdrawals for realistic history
    console.log("💵 Creating fiat transactions...");
    for (const user of users) {
      // Each user gets 2-5 deposits
      const depositCount = Math.floor(Math.random() * 4) + 2;
      for (let i = 0; i < depositCount; i++) {
        await prisma.fiatTransaction.create({
          data: {
            user_id: user.id,
            amount: Math.floor(Math.random() * 9000) + 1000,
            currency: Math.random() > 0.3 ? "THB" : "USD", // 70% THB, 30% USD
            type: "deposit",
            timestamp: new Date(
              Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000
            ), // Random date within last 30 days
          },
        });
      }

      // Some users also have withdrawals (30% chance)
      if (Math.random() > 0.7) {
        await prisma.fiatTransaction.create({
          data: {
            user_id: user.id,
            amount: Math.floor(Math.random() * 5000) + 500,
            currency: Math.random() > 0.3 ? "THB" : "USD",
            type: "withdraw",
            timestamp: new Date(
              Date.now() - Math.floor(Math.random() * 15) * 24 * 60 * 60 * 1000
            ), // Random date within last 15 days
          },
        });
      }
    }

    // Create crypto transactions - internal transfers between users
    console.log("🔄 Creating crypto transactions...");
    for (let i = 0; i < 20; i++) {
      // Select random sender and receiver
      const senderIndex = Math.floor(Math.random() * 5); // From users with all crypto
      const receiverIndex = Math.floor(Math.random() * 10); // Any user

      // Don't transfer to self
      if (senderIndex === receiverIndex) continue;

      const sender = users[senderIndex];
      const receiver = users[receiverIndex];

      // Select random crypto (from the ones both users might have)
      const crypto =
        receiverIndex < 5
          ? cryptoTypes[Math.floor(Math.random() * cryptoTypes.length)]
          : "ETH"; // Only ETH for users 6-10

      // Find sender and receiver wallets
      const senderWallet = await prisma.wallet.findFirst({
        where: {
          user_id: sender.id,
          currency_type: crypto,
        },
      });

      // Find or create receiver wallet
      let receiverWallet = await prisma.wallet.findFirst({
        where: {
          user_id: receiver.id,
          currency_type: crypto,
        },
      });

      if (!receiverWallet) {
        receiverWallet = await prisma.wallet.create({
          data: {
            user_id: receiver.id,
            currency_type: crypto,
            balance: 0,
          },
        });
      }

      // Create transaction (amount is between 0.1 and 1 of sender's balance)
      const amount = senderWallet.balance * (Math.random() * 0.9 + 0.1);

      // Create transaction
      await prisma.cryptoTransaction.create({
        data: {
          user_id: sender.id,
          sender_wallet_id: senderWallet.id,
          receiver_wallet_id: receiverWallet.id,
          amount,
          crypto_type: crypto,
          type: "internal",
          timestamp: new Date(
            Date.now() - Math.floor(Math.random() * 20) * 24 * 60 * 60 * 1000
          ), // Random date within last 20 days
        },
      });

      // Update wallet balances
      await prisma.wallet.update({
        where: { id: senderWallet.id },
        data: { balance: { decrement: amount } },
      });

      await prisma.wallet.update({
        where: { id: receiverWallet.id },
        data: { balance: { increment: amount } },
      });
    }

    // Create some external transactions
    for (let i = 0; i < 10; i++) {
      // Select random user from those with all cryptos
      const userIndex = Math.floor(Math.random() * 5);
      const user = users[userIndex];

      // Select random crypto
      const crypto =
        cryptoTypes[Math.floor(Math.random() * cryptoTypes.length)];

      // Find wallet
      const wallet = await prisma.wallet.findFirst({
        where: {
          user_id: user.id,
          currency_type: crypto,
        },
      });

      if (!wallet) continue;

      // Create transaction (amount is between 0.05 and 0.2 of wallet balance)
      const amount = wallet.balance * (Math.random() * 0.15 + 0.05);

      // Random address
      const targetAddress = `0x${Math.random().toString(16).substr(2, 40)}`;

      // Create transaction
      await prisma.cryptoTransaction.create({
        data: {
          user_id: user.id,
          sender_wallet_id: wallet.id,
          receiver_wallet_id: wallet.id, // Same for external
          amount,
          crypto_type: crypto,
          type: "external",
          target_address: targetAddress,
          timestamp: new Date(
            Date.now() - Math.floor(Math.random() * 20) * 24 * 60 * 60 * 1000
          ), // Random date within last 20 days
        },
      });

      // Update wallet balance
      await prisma.wallet.update({
        where: { id: wallet.id },
        data: { balance: { decrement: amount } },
      });
    }

    // Create orders and trades
    console.log("📈 Creating orders and trades...");

    // Create mix of open, matched, and cancelled orders
    const orderStatuses = ["open", "matched", "cancelled"];

    // For each user, create multiple orders
    for (const user of users) {
      // Determine which cryptos this user can trade
      const userCryptos = await prisma.wallet.findMany({
        where: { user_id: user.id },
        select: { currency_type: true },
      });

      const userCryptoTypes = userCryptos.map((w) => w.currency_type);

      // Create 2-5 orders per user
      const orderCount = Math.floor(Math.random() * 4) + 2;

      for (let i = 0; i < orderCount; i++) {
        if (userCryptoTypes.length === 0) continue;

        // Select random crypto and order type
        const crypto =
          userCryptoTypes[Math.floor(Math.random() * userCryptoTypes.length)];
        const orderType = Math.random() > 0.5 ? "buy" : "sell";

        // For price, use realistic values based on crypto
        let pricePerUnit;
        switch (crypto) {
          case "BTC":
            pricePerUnit = Math.floor(Math.random() * 5000) + 45000;
            break; // 45,000-50,000
          case "ETH":
            pricePerUnit = Math.floor(Math.random() * 500) + 3000;
            break; // 3,000-3,500
          case "XRP":
            pricePerUnit = Math.floor(Math.random() * 0.5) + 0.5;
            break; // 0.5-1.0
          case "DOGE":
            pricePerUnit = Math.floor(Math.random() * 0.1) + 0.1;
            break; // 0.1-0.2
          default:
            pricePerUnit = 1000;
        }

        // Amount depends on the crypto
        let amount;
        switch (crypto) {
          case "BTC":
            amount = Math.random() * 0.5 + 0.1;
            break; // 0.1-0.6 BTC
          case "ETH":
            amount = Math.random() * 2 + 0.5;
            break; // 0.5-2.5 ETH
          case "XRP":
            amount = Math.floor(Math.random() * 500) + 100;
            break; // 100-600 XRP
          case "DOGE":
            amount = Math.floor(Math.random() * 1000) + 100;
            break; // 100-1100 DOGE
          default:
            amount = 1;
        }

        // Select random status - weighted to have more open orders
        const statusRandom = Math.random();
        const status =
          statusRandom < 0.6
            ? "open"
            : statusRandom < 0.9
            ? "matched"
            : "cancelled";

        // Create order
        const order = await prisma.order.create({
          data: {
            user_id: user.id,
            type: orderType,
            crypto_type: crypto,
            amount,
            price_per_unit: pricePerUnit,
            status,
            created_at: new Date(
              Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000
            ), // Random date within last 30 days
          },
        });

        // If order is matched, create a trade
        if (status === "matched") {
          // Find a counterparty (different user)
          const potentialCounterparties = users.filter((u) => u.id !== user.id);
          if (potentialCounterparties.length === 0) continue;

          const counterparty =
            potentialCounterparties[
              Math.floor(Math.random() * potentialCounterparties.length)
            ];

          // Create counter order
          const counterOrderType = orderType === "buy" ? "sell" : "buy";

          const counterOrder = await prisma.order.create({
            data: {
              user_id: counterparty.id,
              type: counterOrderType,
              crypto_type: crypto,
              amount,
              price_per_unit: pricePerUnit,
              status: "matched",
              created_at: new Date(
                Date.now() -
                  Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000
              ),
            },
          });

          // Create trade
          await prisma.trade.create({
            data: {
              buyer_id: orderType === "buy" ? user.id : counterparty.id,
              seller_id: orderType === "sell" ? user.id : counterparty.id,
              buy_order_id: orderType === "buy" ? order.id : counterOrder.id,
              sell_order_id: orderType === "sell" ? order.id : counterOrder.id,
              amount,
              price_per_unit: pricePerUnit,
              orderId: order.id, // This seems redundant but matches your schema
              executed_at: new Date(
                Date.now() -
                  Math.floor(Math.random() * 15) * 24 * 60 * 60 * 1000
              ),
            },
          });
        }
      }
    }

    console.log(
      "✅ Seed completed successfully! Created admin users, regular users, wallets, fiat transactions, crypto transactions, orders, and trades."
    );
  } catch (error) {
    console.error("❌ Seed failed:", error);
    throw error;
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
