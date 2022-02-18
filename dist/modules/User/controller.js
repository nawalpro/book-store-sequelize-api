"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class UserController {
  constructor(userService, jwtService) {
    var _this = this;

    _defineProperty(this, "getAll", /*#__PURE__*/function () {
      var _ref = _asyncToGenerator(function* ({
        res,
        next
      }) {
        try {
          let users = yield _this.userService.getAll();
          res.status(200).json(users);
        } catch (err) {
          next(err);
        }
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    _defineProperty(this, "register", /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator(function* (req, res, next) {
        try {
          const user = yield _this.userService.register({ ...req.body
          });
          res.status(201).json(user);
        } catch (err) {
          next(err);
        }
      });

      return function (_x2, _x3, _x4) {
        return _ref2.apply(this, arguments);
      };
    }());

    _defineProperty(this, "login", /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator(function* (req, res, next) {
        try {
          const user = yield _this.userService.login({ ...req.body
          });
          const token = yield _this.jwtService.generateToken({
            id: user.id
          });
          res.cookie('auth-cookie', token, {
            expiresIn: '30d'
          });
          res.status(200).json(user);
        } catch (err) {
          next(err);
        }
      });

      return function (_x5, _x6, _x7) {
        return _ref3.apply(this, arguments);
      };
    }());

    this.userService = userService;
    this.jwtService = jwtService;
  }

}

var _default = UserController;
exports.default = _default;