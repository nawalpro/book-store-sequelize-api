"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _models = _interopRequireDefault(require("../models"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

const findAll = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (req, res) {
    const users = yield _models.default.models.user.findAll();
    res.json(users);
  });

  return function findAll(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

const findById = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* (req, res) {
    const user = yield _models.default.models.user.findOne({
      where: {
        id: req.params.id
      }
    });
    res.json(user);
  });

  return function findById(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

const create = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(function* (req, res) {
    const user = yield _models.default.models.user.create(req.body);
    res.json(user);
  });

  return function create(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

const findByIdAndUpdate = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(function* (req, res) {
    const user = yield _models.default.models.user.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    res.json(user);
  });

  return function findByIdAndUpdate(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

const findByIdAndDelete = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(function* (req, res) {
    const users = yield _models.default.models.user.destroy({
      where: {
        id: req.params.id
      }
    });
    res.json(users);
  });

  return function findByIdAndDelete(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

var _default = {
  findAll,
  findById,
  create,
  findByIdAndUpdate,
  findByIdAndDelete
};
exports.default = _default;