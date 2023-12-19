const { POST_COURSE_TO_DB } = require("./course.service");

const postCourse = async (req, res) => {
  const data = req.body;
  const course = await POST_COURSE_TO_DB(data);
  res.status(200).json({
    status: "The course has been added successfully",
    data: course,
  });
};

module.exports = { postCourse };
