"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = require("sequelize");

var _env = _interopRequireDefault(require("./env"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

const sequelize = new _sequelize.Sequelize(_env.default.db_name, _env.default.db_user, _env.default.db_password, {
  dialect: "mysql",
  host: _env.default.db_host
});

const associateAll = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (models) {
    return Object.values(models).map(model => model.associate(models));
  });

  return function associateAll(_x) {
    return _ref.apply(this, arguments);
  };
}();

const db = {
  sequelize,
  Sequelize: _sequelize.Sequelize,
  associateAll
};
var _default = db;
exports.default = _default;