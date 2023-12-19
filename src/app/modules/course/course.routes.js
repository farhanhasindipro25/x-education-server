const express = require("express");
const {
  postCourse,
  getCoursesList,
  getCourseByID,
  patchCourseByID,
} = require("./course.controller");

const courseRouter = express.Router();

courseRouter.get("/", getCoursesList);
courseRouter.get("/:id", getCourseByID);
courseRouter.patch("/:id", patchCourseByID);
courseRouter.post("/create-course", postCourse);

module.exports = courseRouter;
