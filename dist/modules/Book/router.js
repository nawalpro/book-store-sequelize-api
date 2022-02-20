"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _middlewares = require("../../middlewares");

class BookRouter {
  constructor(controller) {
    this.router = (0, _express.Router)();
    this.initializeRoutes(controller);
    return this.router;
  }

  initializeRoutes(controller) {
    this.router.route('/').get(_middlewares.auth.isAuth, controller.getAll).post(_middlewares.auth.isAuth, _middlewares.csrf, controller.add);
  }

}

var _default = BookRouter;
exports.default = _default;