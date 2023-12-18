const { LOGIN_USER, POST_USER_TO_DB } = require("./user.service");

const postUser = async (req, res) => {
  const data = req.body;
  const user = await POST_USER_TO_DB(data);
  res.status(200).json({
    status: "New user created successfully",
    data: user,
  });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await LOGIN_USER(email, password);

    if (user) {
      res.status(200).json({
        status: "You have successfully logged in!",
        data: user,
      });
    } else {
      res.status(401).json({
        status: "Your entered credentials are not valid!",
      });
    }
  } catch (error) {
    console.error("There was an error logging in", error);
    res.status(500).json({
      status: "There was an error logging in!",
      error: error.message,
    });
  }
};

module.exports = { loginUser, postUser };
