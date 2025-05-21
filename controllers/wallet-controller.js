const { Decimal } = require("@prisma/client/runtime/client");
const prisma = require("../config/prisma");

exports.getMyWallets = async (req, res, next) => {
  try {
    const wallets = await prisma.wallet.findMany({
      where: {
        user_id: req.user.id,
      },
    });
    res.json({ wallets });
  } catch (err) {
    next(err);
  }
};

exports.getWalletByCurrency = async (req, res, next) => {
  try {
    const { currency } = req.params;

    const wallet = await prisma.wallet.findFirst({
      where: {
        user_id: req.user.id,
        currency_type: currency,
      },
    });

    if (!wallet) {
      return res.status(404).json({ message: "Wallet not found" });
    }

    res.json({ wallet });
  } catch (err) {
    console.log(err)
    next(err);
  }
};

exports.createWallet = async (req, res, next) => {
  try {
    const { currency_type } = req.body;

    const exists = await prisma.wallet.findFirst({
      where: {
        user_id: req.user.id,
        currency_type,
      },
    });

    if (exists) {
      return res.status(400).json({ message: "Wallet already exists" });
    }

    const wallet = await prisma.wallet.create({
      data: {
        user_id: req.user.id,
        currency_type,
        balance: req.body.balance 
      },
    });

    res.status(201).json({ wallet });
  } catch (err) {
    next(err);
  }
};

exports.deleteWalletByCurrency = async (req, res, next) => {
  try {
    const { currency } = req.params;

    const wallet = await prisma.wallet.findFirst({
      where: {
        user_id: req.user.id,
        currency_type: currency,
      },
    });

    if (!wallet) {
      return res.status(404).json({ message: "Wallet not found" });
    }

    await prisma.wallet.delete({
      where: { id: wallet.id },
    });

    res.json({ message: "Wallet deleted" });
  } catch (err) {
    next(err);
  }
};
