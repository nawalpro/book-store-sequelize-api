"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _User = require("./User");

var _Book = require("./Book");

const routes = {
  '/users': _User.userRouter,
  '/books': _Book.bookRouter
};
var _default = routes;
exports.default = _default;