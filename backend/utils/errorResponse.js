class ErrorResponse extends Error {
  constructor(message, statusCode, name = '') {

    super(message);
    this.statusCode = statusCode;
    if (name != '') this.name = name;

  }
}

module.exports = ErrorResponse;
