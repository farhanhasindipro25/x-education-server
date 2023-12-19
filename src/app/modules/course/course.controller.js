const {
  POST_COURSE_TO_DB,
  GET_COURSES_LIST_FROM_DB,
  GET_COURSE_BY_ID_FROM_DB,
  UPDATE_COURSE_BY_ID_IN_DB,
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

const patchCourseByID = async (req, res) => {
  try {
    const { id } = req.params;
    const payload = req.body;

    const existingCourse = await GET_COURSE_BY_ID_FROM_DB(id);

    if (!existingCourse) {
      return res.status(404).json({
        status: "Not Found",
        message: "Course details not found",
      });
    }

    const course = await UPDATE_COURSE_BY_ID_IN_DB(id, payload);
    res.status(200).json({
      status: "Course details updated successfully",
      data: course,
    });
  } catch (error) {
    console.error("Could not update course", error);
    res.status(500).json({
      status: "Internal Server Error",
      message: error,
    });
  }
};

module.exports = { postCourse, getCoursesList, getCourseByID, patchCourseByID };
