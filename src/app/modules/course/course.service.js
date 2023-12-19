const Course = require("./course.model");

const POST_COURSE_TO_DB = async (payload) => {
  const course = new Course(payload);
  await course.save();
  return course;
};

module.exports = { POST_COURSE_TO_DB };
