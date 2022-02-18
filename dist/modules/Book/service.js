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

class bookService {
  constructor(bookRepository) {
    this.bookRepo = bookRepository;
  }

  getAll() {
    var _this = this;

    return _asyncToGenerator(function* () {
      const books = yield _this.bookRepo.findAll();
      return books.map(book => new _dto.default(book));
    })();
  }

  add(bookData) {
    var _this2 = this;

    return _asyncToGenerator(function* () {
      if (!bookData.title) throw new _error.ApiError(400, 'Book validation failed');
      const book = yield _this2.bookRepo.addNew(bookData);
      return new _dto.default(book);
    })();
  }

}

var _default = bookService;
exports.default = _default;