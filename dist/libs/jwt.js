"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

class JwtService {
  constructor(jwt, secret) {
    this.jwt = jwt;
    this.secret = secret;
  }

  decodeToken(token) {
    var _this = this;

    return _asyncToGenerator(function* () {
      return yield _this.jwt.verify(token, _this.secret);
    })();
  }

  generateToken(data) {
    var _this2 = this;

    return _asyncToGenerator(function* () {
      return yield _this2.jwt.sign(data, _this2.secret);
    })();
  }

}

var _default = JwtService;
exports.default = _default;