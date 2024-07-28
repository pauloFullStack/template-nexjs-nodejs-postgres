const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const { create, getUsers } = require("../repositories/users");


exports.getUsers = asyncHandler(async (req, res, next) => {
  return {
    data: await getUsers(),
    success: true,
  };
});

exports.create = asyncHandler(async (data) => {
  const result = await create(data);
  return {
    id: result.id,
    success: true,
  };
});
