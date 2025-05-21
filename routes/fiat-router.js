const express = require("express");
const authenticate = require("../middlewares/authenticate-middleware");
const fiatController = require("../controllers/fiat-controller");
const fiatRouter = express.Router();

fiatRouter.use(authenticate);

// @ENDPOINT http://localhost:8000/api/fiat
fiatRouter.post("/deposit", fiatController.depositFiat);
fiatRouter.post("/withdraw", fiatController.withdrawFiat);
fiatRouter.get("/transactions", fiatController.getFiatTransactions);
fiatRouter.get("/balance/:currency", fiatController.getFiatBalance);
fiatRouter.get("/balance", fiatController.getAllFiatBalances);

module.exports = fiatRouter;
