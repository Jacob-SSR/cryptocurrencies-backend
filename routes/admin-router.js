const express = require("express");
const adminMiddleware = require("../middlewares/admin-middleware");
const authenticate = require("../middlewares/authenticate-middleware");
const userController = require("../controllers/user-controller");
const adminController = require("../controllers/admin-controller");
const adminRouter = express.Router();

adminRouter.use(authenticate, adminMiddleware);

// @ENDPOINT http://localhost:8000/api/admin
adminRouter.get("/users", adminController.listUsers);
adminRouter.get("/:id", userController.getUserById);
adminRouter.get("/fiat-transactions", adminController.listFiatTransactions);
adminRouter.get("/crypto-transactions", adminController.listCryptoTransactions);
adminRouter.get("/orders", adminController.listOrders);
adminRouter.get("/trades", adminController.listTrades);

module.exports = adminRouter;
