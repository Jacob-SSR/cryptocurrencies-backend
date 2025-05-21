const prisma = require("../config/prisma");
const { checkIdentityKey } = require("../utils/check-identity");

exports.listUsers = async (req, res, next) => {
  try {
    const { identity } = req.query;

    if (identity) {
      const identityKey = checkIdentityKey(identity);
      const users = await prisma.user.findMany({
        where: {
          [identityKey]: identity,
        },
      });
      return res.json({ users });
    }

    const users = await prisma.user.findMany();
    return res.json({ users });
  } catch (error) {
    next(error);
  }
};

exports.listFiatTransactions = async (req, res, next) => {
  try {
    const transactions = await prisma.fiatTransaction.findMany({
      include: {
        user: {
          select: {
            id: true,
            email: true,
            userName: true,
          },
        },
      },
    });
    res.json({ transactions });
  } catch (error) {
    next(error);
  }
};

exports.listCryptoTransactions = async (req, res, next) => {
  try {
    const transactions = await prisma.cryptoTransaction.findMany({
      include: {
        user: {
          select: {
            id: true,
            email: true,
            userName: true,
          },
        },
        sender_wallet: true,
        receiver_wallet: true,
      },
    });
    res.json({ transactions });
  } catch (error) {
    next(error);
  }
};

exports.listOrders = async (req, res, next) => {
  try {
    const orders = await prisma.order.findMany({
      include: {
        user: {
          select: {
            id: true,
            email: true,
            userName: true,
          },
        },
      },
    });
    res.json({ orders });
  } catch (error) {
    next(error);
  }
};

exports.listTrades = async (req, res, next) => {
  try {
    const trades = await prisma.trade.findMany({
      include: {
        buyer: {
          select: { id: true, email: true, userName: true },
        },
        seller: {
          select: { id: true, email: true, userName: true },
        },
        buy_order: true,
        sell_order: true,
      },
    });
    res.json({ trades });
  } catch (error) {
    next(error);
  }
};
