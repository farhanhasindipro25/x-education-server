const express = require("express");
const { postCourse, getCoursesList } = require("./course.controller");

const courseRouter = express.Router();

courseRouter.get("/", getCoursesList);
courseRouter.post("/create-course", postCourse);

module.exports = courseRouter;
