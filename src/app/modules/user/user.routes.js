const express = require("express");
const postUser = require("./user.controller");

const userRouter = express.Router();
userRouter.post("/create-user", (req, res) => {
  console.log("Request received at /api/users/create-user");
  postUser(req, res);
});

module.exports = userRouter;
