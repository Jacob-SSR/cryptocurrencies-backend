const prisma = require("../config/prisma");
const createError = require("../utils/create-error");
const { Decimal } = require("@prisma/client/runtime/library");

exports.depositFiat = async (req, res, next) => {
  try {
    const { amount, currency } = req.body;

    if (!amount || !currency) {
      throw createError(400, "amount and currency are required");
    }

    // Validate currency is a valid FiatCurrency enum value
    if (!["THB", "USD"].includes(currency)) {
      throw createError(400, "Invalid currency. Must be THB or USD");
    }

    // Create Decimal type for Prisma
    let decimalAmount;
    try {
      decimalAmount = new Decimal(amount);
      if (decimalAmount.lte(0)) {
        throw new Error();
      }
    } catch (err) {
      throw createError(400, "Amount must be a positive number");
    }

    // Create the fiat transaction
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
      throw createError(400, "amount and currency are required");
    }

    // Validate currency is a valid FiatCurrency enum value
    if (!["THB", "USD"].includes(currency)) {
      throw createError(400, "Invalid currency. Must be THB or USD");
    }

    // Create Decimal type for Prisma
    let decimalAmount;
    try {
      decimalAmount = new Decimal(amount);
      if (decimalAmount.lte(0)) {
        throw new Error();
      }
    } catch (err) {
      throw createError(400, "Amount must be a positive number");
    }

    // Check if user has enough balance
    const balance = await this.calculateBalance(req.user.id, currency);
    if (balance.lt(decimalAmount)) {
      throw createError(400, "Insufficient balance");
    }

    // Create the fiat transaction
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
    // Add pagination support
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    // Add optional filter by type
    const where = {
      user_id: req.user.id,
    };
    
    if (req.query.type && ['deposit', 'withdraw'].includes(req.query.type)) {
      where.type = req.query.type;
    }

    // Add optional filter by currency
    if (req.query.currency && ['THB', 'USD'].includes(req.query.currency)) {
      where.currency = req.query.currency;
    }

    // Count total transactions for pagination
    const total = await prisma.fiatTransaction.count({ where });
    
    // Get transactions with pagination
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
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    next(error);
  }
};

// Helper function to calculate balance
exports.calculateBalance = async (userId, currency) => {
  // ดึงข้อมูลการฝากเงินทั้งหมด
  const deposits = await prisma.fiatTransaction.findMany({
    where: {
      user_id: userId,
      currency: currency,
      type: "deposit"
    },
    select: {
      amount: true
    }
  });

  // ดึงข้อมูลการถอนเงินทั้งหมด
  const withdrawals = await prisma.fiatTransaction.findMany({
    where: {
      user_id: userId,
      currency: currency,
      type: "withdraw"
    },
    select: {
      amount: true
    }
  });

  // คำนวณยอดเงินฝาก
  const totalDeposit = deposits.reduce((sum, transaction) => {
    return sum.add(transaction.amount);
  }, new Decimal(0));

  // คำนวณยอดเงินถอน
  const totalWithdrawal = withdrawals.reduce((sum, transaction) => {
    return sum.add(transaction.amount);
  }, new Decimal(0));

  // คำนวณยอดเงินคงเหลือ
  return totalDeposit.sub(totalWithdrawal);
};

// เพิ่มฟังก์ชันสำหรับเช็คยอดเงิน Fiat
exports.getFiatBalance = async (req, res, next) => {
  try {
    const { currency } = req.params;
    
    // ตรวจสอบว่า currency ถูกต้องหรือไม่
    if (!currency || !["THB", "USD"].includes(currency)) {
      throw createError(400, "Invalid currency. Must be THB or USD");
    }

    // ดึงข้อมูลการฝากเงินทั้งหมด
    const deposits = await prisma.fiatTransaction.findMany({
      where: {
        user_id: req.user.id,
        currency: currency,
        type: "deposit"
      },
      select: {
        amount: true
      }
    });

    // ดึงข้อมูลการถอนเงินทั้งหมด
    const withdrawals = await prisma.fiatTransaction.findMany({
      where: {
        user_id: req.user.id,
        currency: currency,
        type: "withdraw"
      },
      select: {
        amount: true
      }
    });

    // คำนวณยอดเงินฝาก
    const totalDeposit = deposits.reduce((sum, transaction) => {
      return sum.add(transaction.amount);
    }, new Decimal(0));

    // คำนวณยอดเงินถอน
    const totalWithdrawal = withdrawals.reduce((sum, transaction) => {
      return sum.add(transaction.amount);
    }, new Decimal(0));

    // คำนวณยอดเงินคงเหลือ
    const balance = totalDeposit.sub(totalWithdrawal);

    // ดึงประวัติธุรกรรมล่าสุด 5 รายการ
    const recentTransactions = await prisma.fiatTransaction.findMany({
      where: {
        user_id: req.user.id,
        currency: currency
      },
      orderBy: {
        timestamp: "desc"
      },
      take: 5
    });

    res.json({
      currency,
      balance: balance.toString(),
      totalDeposit: totalDeposit.toString(),
      totalWithdrawal: totalWithdrawal.toString(),
      recentTransactions
    });
  } catch (error) {
    next(error);
  }
};

// เพิ่มฟังก์ชันสำหรับเช็คยอดเงินทุกสกุลเงิน
exports.getAllFiatBalances = async (req, res, next) => {
  try {
    const currencies = ["THB", "USD"];
    const balances = {};
    
    // คำนวณยอดเงินสำหรับแต่ละสกุลเงิน
    for (const currency of currencies) {
      const balance = await this.calculateBalance(req.user.id, currency);
      balances[currency] = balance.toString();
    }
    
    // ดึงธุรกรรมล่าสุด 5 รายการ (ทุกสกุลเงิน)
    const recentTransactions = await prisma.fiatTransaction.findMany({
      where: {
        user_id: req.user.id
      },
      orderBy: {
        timestamp: "desc"
      },
      take: 5
    });
    
    res.json({
      balances,
      recentTransactions
    });
  } catch (error) {
    next(error);
  }
};