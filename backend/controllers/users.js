const asyncHandler = require("../middleware/async");
const { getUsers } = require("../services/users");
const { create } = require("../services/users");


exports.getUsers = asyncHandler(async (req, res, next) =>
  res.status(200).json(await getUsers())
);

exports.create = asyncHandler(async (req, res, next) =>
  res.status(200).json(await create(req.body))
);
