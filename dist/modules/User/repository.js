"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _bcrypt = _interopRequireDefault(require("bcrypt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class UserRepository {
  constructor(userDao) {
    _defineProperty(this, "compareHash", /*#__PURE__*/function () {
      var _ref = _asyncToGenerator(function* (password, hash) {
        return yield _bcrypt.default.compareSync(password, hash);
      });

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());

    this.userDAO = userDao;
  }

  findAll() {
    var _this = this;

    return _asyncToGenerator(function* () {
      return yield _this.userDAO.findAll({
        include: "books"
      });
    })();
  }

  addNew(userEntity) {
    var _this2 = this;

    return _asyncToGenerator(function* () {
      const salt = _bcrypt.default.genSaltSync(10);

      userEntity.password = _bcrypt.default.hashSync(userEntity.password, salt);
      return yield _this2.userDAO.create(userEntity);
    })();
  }

  findByEmail(userEntity) {
    var _this3 = this;

    return _asyncToGenerator(function* () {
      return yield _this3.userDAO.findOne({
        where: {
          email: userEntity.email
        }
      });
    })();
  }

}

var _default = UserRepository;
exports.default = _default;