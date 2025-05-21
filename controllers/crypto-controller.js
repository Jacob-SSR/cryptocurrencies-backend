const prisma = require("../config/prisma");
const createError = require("../utils/create-error");

// กำหนด array ของสกุลเงินคริปโตที่รองรับ
const CryptoCurrencies = ["BTC", "ETH", "XRP", "DOGE"];

exports.transferInternal = async (req, res, next) => {
  try {
    const { to_wallet_id, amount, crypto_type } = req.body;

    if (!to_wallet_id || !amount || !crypto_type) {
      return next(
        createError(400, "to_wallet_id, amount, and crypto_type are required")
      );
    }

    const transferAmount = parseFloat(amount);
    if (isNaN(transferAmount) || transferAmount <= 0) {
      return next(createError(400, "Amount must be a positive number"));
    }

    if (!CryptoCurrencies.includes(crypto_type)) {
      return next(createError(400, "Invalid cryptocurrency type"));
    }

    const senderWallet = await prisma.wallet.findFirst({
      where: {
        user_id: req.user.id,
        currency_type: crypto_type,
      },
    });

    if (!senderWallet) {
      return next(createError(404, "Sender wallet not found"));
    }

    if (senderWallet.balance < transferAmount) {
      return next(createError(400, "Insufficient balance"));
    }

    if (senderWallet.id === parseInt(to_wallet_id)) {
      return next(createError(400, "Cannot transfer to the same wallet"));
    }

    const receiverWallet = await prisma.wallet.findUnique({
      where: { id: parseInt(to_wallet_id) },
    });

    if (!receiverWallet || receiverWallet.currency_type !== crypto_type) {
      return next(createError(400, "Invalid target wallet"));
    }

    const [updatedSender, updatedReceiver, transaction] =
      await prisma.$transaction([
        prisma.wallet.update({
          where: { id: senderWallet.id },
          data: { balance: { decrement: transferAmount } },
        }),
        prisma.wallet.update({
          where: { id: receiverWallet.id },
          data: { balance: { increment: transferAmount } },
        }),
        prisma.cryptoTransaction.create({
          data: {
            user_id: req.user.id,
            sender_wallet_id: senderWallet.id,
            receiver_wallet_id: receiverWallet.id,
            amount: transferAmount,
            crypto_type,
            type: "internal",
          },
        }),
      ]);

    res.status(201).json({
      message: "Transfer successful",
      transaction,
    });
  } catch (error) {
    next(error);
  }
};

exports.transferExternal = async (req, res, next) => {
  try {
    const { amount, crypto_type, target_address } = req.body;

    if (!amount || !crypto_type || !target_address) {
      return next(
        createError(400, "amount, crypto_type, and target_address are required")
      );
    }

    const transferAmount = parseFloat(amount);
    if (isNaN(transferAmount) || transferAmount <= 0) {
      return next(createError(400, "Amount must be a positive number"));
    }

    if (!CryptoCurrencies.includes(crypto_type)) {
      return next(createError(400, "Invalid cryptocurrency type"));
    }

    if (typeof target_address !== "string" || target_address.length < 10) {
      return next(createError(400, "Invalid target address"));
    }

    const senderWallet = await prisma.wallet.findFirst({
      where: {
        user_id: req.user.id,
        currency_type: crypto_type,
      },
    });

    if (!senderWallet) {
      return next(createError(404, "Wallet not found"));
    }

    if (senderWallet.balance < transferAmount) {
      return next(createError(400, "Insufficient balance"));
    }

    const [updatedWallet, transaction] = await prisma.$transaction([
      prisma.wallet.update({
        where: { id: senderWallet.id },
        data: { balance: { decrement: transferAmount } },
      }),
      prisma.cryptoTransaction.create({
        data: {
          user_id: req.user.id,
          sender_wallet_id: senderWallet.id,
          receiver_wallet_id: senderWallet.id,
          amount: transferAmount,
          crypto_type,
          type: "external",
          target_address,
        },
      }),
    ]);

    res.status(201).json({
      message: "External transfer initiated",
      transaction,
    });
  } catch (error) {
    next(error);
  }
};

exports.getCryptoTransactions = async (req, res, next) => {
  try {
    const { page = 1, limit = 10, type } = req.query;
    const skip = (parseInt(page) - 1) * parseInt(limit);
    const whereClause = {
      user_id: req.user.id,
    };

    if (type && ["internal", "external"].includes(type)) {
      whereClause.type = type;
    }

    const totalCount = await prisma.cryptoTransaction.count({
      where: whereClause,
    });

    const transactions = await prisma.cryptoTransaction.findMany({
      where: whereClause,
      include: {
        sender_wallet: {
          select: {
            id: true,
            currency_type: true,
            user_id: true,
          },
        },
        receiver_wallet: {
          select: {
            id: true,
            currency_type: true,
            user_id: true,
          },
        },
      },
      orderBy: {
        timestamp: "desc",
      },
      skip,
      take: parseInt(limit),
    });

    res.json({
      transactions,
      pagination: {
        total: totalCount,
        page: parseInt(page),
        limit: parseInt(limit),
        pages: Math.ceil(totalCount / parseInt(limit)),
      },
    });
  } catch (error) {
    next(error);
  }
};

exports.getWallets = async (req, res, next) => {
  try {
    const wallets = await prisma.wallet.findMany({
      where: {
        user_id: req.user.id,
      },
      orderBy: {
        currency_type: "asc",
      },
    });

    res.json({ wallets });
  } catch (error) {
    next(error);
  }
};

exports.createWallet = async (req, res, next) => {
  try {
    const { currency } = req.body;
    const userId = req.user.id;

    if (!currency || !CryptoCurrencies.includes(currency)) {
      return res
        .status(400)
        .json({ message: "Invalid or missing currency type" });
    }

    const existing = await prisma.wallet.findFirst({
      where: {
        user_id: userId,
        currency_type: currency,
      },
    });

    if (existing) {
      return res
        .status(400)
        .json({ message: "Wallet for this currency already exists" });
    }

    const wallet = await prisma.wallet.create({
      data: {
        user_id: userId,
        currency_type: currency,
        balance: 0,
      },
    });

    res.status(201).json({ wallet });
  } catch (error) {
    next(error);
  }
};
