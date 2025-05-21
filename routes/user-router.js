const express = require("express");
const userController = require("../controllers/user-controller");
const authenticate = require("../middlewares/authenticate-middleware");
const userRouter = express.Router();

userRouter.use(authenticate);

// @ENDPOINT http://localhost:8000/api/user
userRouter.get("/me", userController.getMe);
userRouter.patch("/me", userController.updateMe);
userRouter.get("/:id", userController.getUserById);

module.exports = userRouter;
