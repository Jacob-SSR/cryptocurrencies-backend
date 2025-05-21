const express = require("express");
const tradeController = require("../controllers/trade-controller");
const authenticate = require("../middlewares/authenticate-middleware");
const tradeRouter = express.Router();

tradeRouter.use(authenticate);

// @ENDPOINT http://localhost:8000/api/trade
tradeRouter.get("/", tradeController.getMyTrades);
tradeRouter.get("/:id", tradeController.getTradeById);

module.exports = tradeRouter;
