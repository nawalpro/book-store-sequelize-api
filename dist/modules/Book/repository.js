"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

class BookRepository {
  constructor(bookDao) {
    this.bookDAO = bookDao;
  }

  findAll() {
    var _this = this;

    return _asyncToGenerator(function* () {
      return yield _this.bookDAO.findAll();
    })();
  }

  addNew(bookEntity) {
    var _this2 = this;

    return _asyncToGenerator(function* () {
      return yield _this2.bookDAO.create(bookEntity);
    })();
  }

  findByUser(userEntity) {
    var _this3 = this;

    return _asyncToGenerator(function* () {
      return yield _this3.bookDAO.findOne({
        where: {
          UserId: userEntity.id
        }
      });
    })();
  }

}

var _default = BookRepository;
exports.default = _default;