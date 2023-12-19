const express = require("express");
const { postCourse } = require("./course.controller");

const courseRouter = express.Router();

courseRouter.post("/create-course", postCourse);

module.exports = courseRouter;
