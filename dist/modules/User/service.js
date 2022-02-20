"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dto = _interopRequireDefault(require("./dto"));

var _error = require("../../helpers/error");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

class UserService {
  constructor(userRepository, mailerService) {
    this.userRepo = userRepository;
    this.mailerService = mailerService;
  }

  getAll() {
    var _this = this;

    return _asyncToGenerator(function* () {
      const users = yield _this.userRepo.findAll();
      return users.map(user => new _dto.default(user));
    })();
  }

  register(userData) {
    var _this2 = this;

    return _asyncToGenerator(function* () {
      if (!userData.email || !userData.password) throw new _error.ApiError(400, 'Missing required email and password fields');
      const newUser = yield _this2.userRepo.addNew(userData);
      yield _this2.mailerService.sendMail(userData);
      return new _dto.default(newUser);
    })();
  }

  login(userData) {
    var _this3 = this;

    return _asyncToGenerator(function* () {
      if (!userData.email || !userData.password) throw new _error.ApiError(400, 'Missing required email and password fields');
      const user = yield _this3.userRepo.findByEmail(userData);
      if (!user) throw new _error.ApiError(400, 'User with the specified email does not exists');
      const passwordMatch = yield _this3.userRepo.compareHash(userData.password, user.password);
      if (!passwordMatch) throw new _error.ApiError(400, 'User password do not match');
      return new _dto.default(user);
    })();
  }

}

var _default = UserService;
exports.default = _default;