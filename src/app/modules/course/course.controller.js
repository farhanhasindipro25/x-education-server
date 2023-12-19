const {
  POST_COURSE_TO_DB,
  GET_COURSES_LIST_FROM_DB,
  GET_COURSE_BY_ID_FROM_DB,
} = require("./course.service");

const postCourse = async (req, res) => {
  const data = req.body;
  const course = await POST_COURSE_TO_DB(data);
  res.status(200).json({
    status: "The course has been added successfully",
    data: course,
  });
};

const getCoursesList = async (req, res) => {
  const courses = await GET_COURSES_LIST_FROM_DB();
  res.status(200).json({
    status: "Courses data lists fetched successfully!",
    data: courses,
  });
};

const getCourseByID = async (req, res) => {
  const { id } = req.params;
  const course = await GET_COURSE_BY_ID_FROM_DB(id);
  res.status(200).json({
    status: "Course details fetched successfully",
    data: course,
  });
};

module.exports = { postCourse, getCoursesList, getCourseByID };
