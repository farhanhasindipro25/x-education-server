const express = require("express");
const {
  postCourse,
  getCoursesList,
  getCourseByID,
  patchCourseByID,
  deleteCourseByID,
} = require("./course.controller");

const courseRouter = express.Router();

courseRouter.get("/", getCoursesList);
courseRouter.get("/:id", getCourseByID);
courseRouter.patch("/:id", patchCourseByID);
courseRouter.delete("/:id", deleteCourseByID);
courseRouter.post("/create-course", postCourse);

module.exports = courseRouter;
