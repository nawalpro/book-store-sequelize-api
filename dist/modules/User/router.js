"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _middlewares = require("../../middlewares");

class UserRouter {
  constructor(controller) {
    this.router = (0, _express.Router)();
    this.initializeRoutes(controller);
    return this.router;
  }

  initializeRoutes(controller) {
    this.router.route('/').get(_middlewares.auth.isAuth, controller.getAll).post(controller.register);
    this.router.route('/authenticate').post(controller.login);
  }

}

var _default = UserRouter;
exports.default = _default;