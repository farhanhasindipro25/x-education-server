const POST_USER_TO_DB = require("./user.service");

const postUser = async (req, res) => {
  const data = req.body;
  const user = await POST_USER_TO_DB(data);
  res.status(200).json({
    status: "New user created successfully",
    data: user,
  });
};

module.exports = postUser;
