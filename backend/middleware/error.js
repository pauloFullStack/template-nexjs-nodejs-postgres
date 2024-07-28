const ErrorResponse = require('../utils/errorResponse');

const errorHandler = (err, req, res, next) => {
  let statusCode = 400;
  let errorMessage = [];


  console.log(err.name);

  // validation error
  if (err.name === 'SequelizeValidationError') {
    errorMessage = Object.values(err.errors).map((erro) => [
      erro.message,
      erro.path
    ]);
  }


  // verifica se já existe email cadastrado
  // centralizar essas mensagens de erro la no modelo domain
  if (err.name === 'SequelizeUniqueConstraintError' || err.name === 'DuplicateUserEmailUpdate') {
    errorMessage = [
      [
        "Esse email já existe",
        "email"
      ]
    ];
  }

  return res.status(statusCode).json({
    success: false,
    errorMessage,
    statusCode
  });
};

module.exports = errorHandler;
