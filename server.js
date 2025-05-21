const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const authRouter = require("./routes/auth-router");
const handError = require("./middlewares/error-middleware");
const notFound = require("./middlewares/notfound-middleware");
const userRouter = require("./routes/user-router");
const fiatRouter = require("./routes/fiat-router");
const walletRouter = require("./routes/wallet-router");
const cryptoRouter = require("./routes/crypto-router");
const adminRouter = require("./routes/admin-router");
const orderRouter = require("./routes/orders-router");
const tradeRouter = require("./routes/trade-router");
const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/admin", adminRouter);
app.use("/api/fiat", fiatRouter);
app.use("/api/wallet", walletRouter);
app.use("/api/crypto", cryptoRouter);
app.use("/api/order", orderRouter);
app.use("/api/trade", tradeRouter);

app.use(notFound);
app.use(handError);

const PORT = 8000;
app.listen(PORT, () => console.log(`Server is runnig on port ${PORT}`));
