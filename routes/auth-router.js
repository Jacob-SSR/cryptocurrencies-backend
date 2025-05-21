const express = require("express");
const authRouter = express.Router();
const authControllers = require("../controllers/auth-controller");
const {
  validatorWithZod,
  loginSchema,
  registerSchema,
} = require("../middlewares/validators-middleware");

// @ENDPOINT http://localhost:8000/api/register
authRouter.post(
  "/register",
  validatorWithZod(registerSchema),
  authControllers.register
);
authRouter.post("/login", validatorWithZod(loginSchema), authControllers.login);

module.exports = authRouter;
