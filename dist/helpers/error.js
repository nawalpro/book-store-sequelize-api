"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleError = exports.ApiError = void 0;

var _middlewares = require("../middlewares");

class ApiError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode;
  }

}

exports.ApiError = ApiError;

const handleError = (err, req, res, next) => {
  const {
    message
  } = err;
  const statusCode = err.statusCode ? err.statusCode : 500;

  _middlewares.logger.log(statusCode, err);

  res.status(statusCode).json({
    statusCode,
    message
  });
};

exports.handleError = handleError;