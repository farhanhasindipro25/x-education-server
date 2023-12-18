const User = require("./user.model");

const POST_USER_TO_DB = async (payload) => {
  const user = new User(payload);
  await user.save();
  return user;
};

module.exports = POST_USER_TO_DB;
