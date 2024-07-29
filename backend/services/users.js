const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const { create, getUsers, login } = require("../repositories/users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.getUsers = asyncHandler(async (req, res, next) => {
  return {
    data: await getUsers(),
    success: true,
  };
});

exports.create = asyncHandler(async (data) => {
  const salt = await bcrypt.genSalt(10);
  data.password = await bcrypt.hash(data.password, salt);

  const result = await create(data);
  return {
    id: result.id,
    success: true,
  };
});

exports.login = asyncHandler(async (data) => {
  const result = await login(data.email);

  if (await bcrypt.compare(data.password, result.password)) {
    const payload = {
      userId: result.id,
      userName: result.name,
    };


    const options = {
      expiresIn: "1h",
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, options);
    // Fazer a parte que verifica esta autenticado ou não é no middleware auth.js, chamar ele quando estiver na rota , e ver como fazer da forma correta la no frontend
    return {
      success: true,
      data: result,
      token
    };
  }

  return {
    success: false,
    message: "credenciais invalidas.",
  };
});
