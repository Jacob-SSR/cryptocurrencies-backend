const prisma = require("../config/prisma");

exports.getMyTrades = async (req, res, next) => {
  try {
    const trades = await prisma.trade.findMany({
      where: {
        OR: [{ buyer_id: req.user.id }, { seller_id: req.user.id }],
      },
      include: {
        buy_order: true,
        sell_order: true,
      },
      orderBy: {
        executed_at: "desc",
      },
    });

    res.json({ trades });
  } catch (error) {
    next(error);
  }
};

exports.getTradeById = async (req, res, next) => {
  try {
    const tradeId = parseInt(req.params.id);

    const trade = await prisma.trade.findUnique({
      where: { id: tradeId },
      include: {
        buyer: true,
        seller: true,
        buy_order: true,
        sell_order: true,
      },
    });

    if (
      !trade ||
      (trade.buyer_id !== req.user.id && trade.seller_id !== req.user.id)
    ) {
      return res
        .status(404)
        .json({ message: "Trade not found or unauthorized" });
    }

    res.json({ trade });
  } catch (error) {
    next(error);
  }
};

exports.createTrade = async (req, res, next) => {
  try {
    const {
      buyer_id,
      seller_id,
      buy_order_id,
      sell_order_id,
      amount,
      price_per_unit,
      orderId,
    } = req.body;

    if (
      !buyer_id ||
      !seller_id ||
      !buy_order_id ||
      !sell_order_id ||
      !amount ||
      !price_per_unit ||
      !orderId
    ) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const trade = await prisma.trade.create({
      data: {
        buyer_id,
        seller_id,
        buy_order_id,
        sell_order_id,
        amount,
        price_per_unit,
        orderId,
      },
    });

    res.status(201).json({ trade });
  } catch (error) {
    next(error);
  }
};
