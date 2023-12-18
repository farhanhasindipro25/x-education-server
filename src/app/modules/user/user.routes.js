const express = require("express");
const { loginUser, postUser } = require("./user.controller");

const userRouter = express.Router();
userRouter.post("/create-user", postUser);
userRouter.post("/login", loginUser);

module.exports = userRouter;
