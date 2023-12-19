const express = require("express");
const {
  postCourse,
  getCoursesList,
  getCourseByID,
} = require("./course.controller");

const courseRouter = express.Router();

courseRouter.get("/", getCoursesList);
courseRouter.get("/:id", getCourseByID);
courseRouter.post("/create-course", postCourse);

module.exports = courseRouter;
