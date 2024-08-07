const asyncHandler = require("../middleware/async");
const User = require("../models/User");

exports.getUsers = asyncHandler(async (req, res, next) => await User.findAll());

exports.create = asyncHandler(async (data) => await User.create(data));

exports.login = asyncHandler(
  async (email) => await User.findOne({ where: { email: email } })
);
