const Course = require("./course.model");

const POST_COURSE_TO_DB = async (payload) => {
  const course = new Course(payload);
  await course.save();
  return course;
};

const GET_COURSES_LIST_FROM_DB = async () => {
  const courses = await Course.find();
  return courses;
};

module.exports = { POST_COURSE_TO_DB, GET_COURSES_LIST_FROM_DB };
