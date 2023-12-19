const express = require("express");
const cors = require("cors");
const userRouter = require("./app/modules/user/user.routes");
const courseRouter = require("./app/modules/course/course.routes");

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRouter);
app.use("/api/courses", courseRouter);

module.exports = app;
