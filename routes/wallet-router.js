const express = require("express");
const walletController = require("../controllers/wallet-controller");
const authenticate = require("../middlewares/authenticate-middleware");
const walletRouter = express.Router();

walletRouter.use(authenticate);

// @ENDPOINT http://localhost:8000/api/wallet
walletRouter.get("/mywallets", walletController.getMyWallets);
walletRouter.post("/", walletController.createWallet);
walletRouter.get("/:currency", walletController.getWalletByCurrency);
walletRouter.delete("/:currency", walletController.deleteWalletByCurrency);

module.exports = walletRouter;
