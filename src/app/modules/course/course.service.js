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

const GET_COURSE_BY_ID_FROM_DB = async (id) => {
  const course = await Course.findOne({ _id: id });
  return course;
};

const UPDATE_COURSE_BY_ID_IN_DB = async (id, payload) => {
  const course = await Course.updateOne({ _id: id }, payload);
  return course;
};

const DELETE_COURSE_BY_ID_FROM_DB = async (id) => {
  try {
    const course = await Course.deleteOne({ _id: id });
    return course;
  } catch (error) {
    console.error("Error deleting course by ID in the database:", error);
    throw error;
  }
};

module.exports = {
  POST_COURSE_TO_DB,
  GET_COURSES_LIST_FROM_DB,
  GET_COURSE_BY_ID_FROM_DB,
  UPDATE_COURSE_BY_ID_IN_DB,
  DELETE_COURSE_BY_ID_FROM_DB,
};
