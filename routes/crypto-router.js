const express = require("express");
const cryptoController = require("../controllers/crypto-controller");
const authenticate = require("../middlewares/authenticate-middleware");
const cryptoRouter = express.Router();

cryptoRouter.use(authenticate);

// @ENDPOINT http://localhost:8000/api/crypto
cryptoRouter.get("/wallets", cryptoController.getWallets);
cryptoRouter.post("/wallets", cryptoController.createWallet);
cryptoRouter.post("/transfer/internal", cryptoController.transferInternal);
cryptoRouter.post("/transfer/external", cryptoController.transferExternal);
cryptoRouter.get("/transactions", cryptoController.getCryptoTransactions);

module.exports = cryptoRouter;
