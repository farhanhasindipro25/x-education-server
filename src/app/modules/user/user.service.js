const User = require("./user.model");

const POST_USER_TO_DB = async (payload) => {
  const user = new User(payload);
  await user.save();
  return user;
};

const LOGIN_USER = async (email, password) => {
  const user = await User.findOne({ email, password });
  return user;
};

module.exports = { LOGIN_USER, POST_USER_TO_DB };
