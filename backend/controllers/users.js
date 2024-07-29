const asyncHandler = require("../middleware/async");
const { getUsers, create, login } = require("../services/users");

exports.getUsers = asyncHandler(async (req, res, next) =>
  res.status(200).json(await getUsers())
);

exports.create = asyncHandler(async (req, res, next) =>
  res.status(200).json(await create(req.body))
);

exports.login = asyncHandler(async (req, res, next) =>
  res.status(200).json(await login(req.body))
);
