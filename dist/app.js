"use strict";

var _express = _interopRequireDefault(require("express"));

var _modules = _interopRequireDefault(require("./modules"));

var _middlewares = _interopRequireDefault(require("./middlewares"));

var _server = _interopRequireDefault(require("./config/server"));

var _env = _interopRequireDefault(require("./config/env"));

var _database = _interopRequireDefault(require("./config/database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

const http = (0, _express.default)();
const application = new _server.default(http, _modules.default, _middlewares.default);
console.log('====================================');
console.log(application);
console.log('====================================');

_asyncToGenerator(function* () {
  try {
    console.log("MODEL", _database.default.sequelize.models);
    yield _database.default.associateAll(_database.default.sequelize.models);
    yield _database.default.sequelize.sync({
      alter: true
    });
    yield application.listen(_env.default.port);
  } catch (e) {
    console.error(e);
  }
})();