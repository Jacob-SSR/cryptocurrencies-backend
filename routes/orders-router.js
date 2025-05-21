const express = require("express");
const orderController = require("../controllers/order-controller");
const authenticate = require("../middlewares/authenticate-middleware");
const orderRouter = express.Router();

orderRouter.use(authenticate);

// @ENDPOINT http://localhost:8000/api/order
orderRouter.get("/orders", orderController.getMyOrders);
orderRouter.post("/orders", orderController.createOrder);
orderRouter.get("/orders/:id", orderController.getOrderById);
orderRouter.delete("/orders/:id", orderController.cancelOrder);

module.exports = orderRouter;
