const prisma = require("../config/prisma");

// GET /api/orders
exports.getMyOrders = async (req, res, next) => {
  try {
    const orders = await prisma.order.findMany({
      where: {
        user_id: req.user.id,
      },
      orderBy: {
        created_at: "desc",
      },
    });

    res.json({ orders });
  } catch (err) {
    next(err);
  }
};

// POST /api/orders
exports.createOrder = async (req, res, next) => {
  try {
    const { type, crypto_type, amount, price_per_unit } = req.body;

    if (!type || !crypto_type || !amount || !price_per_unit) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const newOrder = await prisma.order.create({
      data: {
        user_id: req.user.id,
        type,
        crypto_type,
        amount,
        price_per_unit,
        status: "open",
      },
    });

    res.status(201).json({ order: newOrder });
  } catch (err) {
    next(err);
  }
};

// GET /api/orders/:id
exports.getOrderById = async (req, res, next) => {
  try {
    const orderId = parseInt(req.params.id);

    const order = await prisma.order.findUnique({
      where: { id: orderId },
      include: {
        trades: true,
      },
    });

    if (!order || order.user_id !== req.user.id) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.json({ order });
  } catch (err) {
    next(err);
  }
};

// DELETE /api/orders/:id
exports.cancelOrder = async (req, res, next) => {
  try {
    const orderId = parseInt(req.params.id);

    const order = await prisma.order.findUnique({
      where: { id: orderId },
    });

    if (!order || order.user_id !== req.user.id) {
      return res.status(404).json({ message: "Order not found" });
    }

    if (order.status !== "open") {
      return res
        .status(400)
        .json({ message: "Only open orders can be cancelled" });
    }

    const cancelledOrder = await prisma.order.update({
      where: { id: orderId },
      data: { status: "cancelled" },
    });

    res.json({ order: cancelledOrder });
  } catch (err) {
    next(err);
  }
};
