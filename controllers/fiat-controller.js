const prisma = require("../config/prisma");
const createError = require("../utils/create-error");
const { Decimal } = require("@prisma/client/runtime/library");

exports.depositFiat = async (req, res, next) => {
  try {
    const { amount, currency } = req.body;

    if (!amount || !currency) {
      return createError(400, "amount and currency are required");
    }

    if (!["THB", "USD"].includes(currency)) {
      return createError(400, "Invalid currency. Must be THB or USD");
    }

    let decimalAmount;
    try {
      decimalAmount = new Decimal(amount);
      if (decimalAmount.lte(0)) {
        return new Error();
      }
    } catch (error) {
      next(error);
    }

    const transaction = await prisma.fiatTransaction.create({
      data: {
        user_id: req.user.id,
        amount: decimalAmount,
        currency: currency,
        type: "deposit",
      },
    });

    res.status(201).json({ transaction });
  } catch (error) {
    next(error);
  }
};

exports.withdrawFiat = async (req, res, next) => {
  try {
    const { amount, currency } = req.body;

    if (!amount || !currency) {
      return createError(400, "amount and currency are required");
    }
    if (!["THB", "USD"].includes(currency)) {
      return createError(400, "Invalid currency. Must be THB or USD");
    }

    let decimalAmount;
    try {
      decimalAmount = new Decimal(amount);
      if (decimalAmount.lte(0)) {
        return new Error();
      }
    } catch (error) {
      return createError(400, "Amount must be a positive number");
    }

    const balance = await this.calculateBalance(req.user.id, currency);
    if (balance.lt(decimalAmount)) {
      return createError(400, "Insufficient balance");
    }

    const transaction = await prisma.fiatTransaction.create({
      data: {
        user_id: req.user.id,
        amount: decimalAmount,
        currency: currency,
        type: "withdraw",
      },
    });

    res.status(201).json({ transaction });
  } catch (error) {
    next(error);
  }
};

exports.getFiatTransactions = async (req, res, next) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const where = {
      user_id: req.user.id,
    };

    if (req.query.type && ["deposit", "withdraw"].includes(req.query.type)) {
      where.type = req.query.type;
    }

    if (req.query.currency && ["THB", "USD"].includes(req.query.currency)) {
      where.currency = req.query.currency;
    }

    const total = await prisma.fiatTransaction.count({ where });

    const transactions = await prisma.fiatTransaction.findMany({
      where,
      orderBy: {
        timestamp: "desc",
      },
      skip,
      take: limit,
    });

    res.json({
      transactions,
      pagination: {
        total,
        page,
        limit,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    next(error);
  }
};

exports.calculateBalance = async (userId, currency) => {
  const deposits = await prisma.fiatTransaction.findMany({
    where: {
      user_id: userId,
      currency: currency,
      type: "deposit",
    },
    select: {
      amount: true,
    },
  });

  const withdrawals = await prisma.fiatTransaction.findMany({
    where: {
      user_id: userId,
      currency: currency,
      type: "withdraw",
    },
    select: {
      amount: true,
    },
  });

  const totalDeposit = deposits.reduce((sum, transaction) => {
    return sum.add(transaction.amount);
  }, new Decimal(0));

  const totalWithdrawal = withdrawals.reduce((sum, transaction) => {
    return sum.add(transaction.amount);
  }, new Decimal(0));
  return totalDeposit.sub(totalWithdrawal);
};

exports.getFiatBalance = async (req, res, next) => {
  try {
    const { currency } = req.params;

    if (!currency || !["THB", "USD"].includes(currency)) {
      return createError(400, "Invalid currency. Must be THB or USD");
    }

    const deposits = await prisma.fiatTransaction.findMany({
      where: {
        user_id: req.user.id,
        currency: currency,
        type: "deposit",
      },
      select: {
        amount: true,
      },
    });

    const withdrawals = await prisma.fiatTransaction.findMany({
      where: {
        user_id: req.user.id,
        currency: currency,
        type: "withdraw",
      },
      select: {
        amount: true,
      },
    });

    const totalDeposit = deposits.reduce((sum, transaction) => {
      return sum.add(transaction.amount);
    }, new Decimal(0));

    const totalWithdrawal = withdrawals.reduce((sum, transaction) => {
      return sum.add(transaction.amount);
    }, new Decimal(0));

    const balance = totalDeposit.sub(totalWithdrawal);
    const recentTransactions = await prisma.fiatTransaction.findMany({
      where: {
        user_id: req.user.id,
        currency: currency,
      },
      orderBy: {
        timestamp: "desc",
      },
      take: 5,
    });

    res.json({
      currency,
      balance: balance.toString(),
      totalDeposit: totalDeposit.toString(),
      totalWithdrawal: totalWithdrawal.toString(),
      recentTransactions,
    });
  } catch (error) {
    next(error);
  }
};

exports.getAllFiatBalances = async (req, res, next) => {
  try {
    const currencies = ["THB", "USD"];
    const balances = {};

    for (const currency of currencies) {
      const balance = await this.calculateBalance(req.user.id, currency);
      balances[currency] = balance.toString();
    }

    const recentTransactions = await prisma.fiatTransaction.findMany({
      where: {
        user_id: req.user.id,
      },
      orderBy: {
        timestamp: "desc",
      },
      take: 5,
    });

    res.json({
      balances,
      recentTransactions,
    });
  } catch (error) {
    next(error);
  }
};
