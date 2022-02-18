"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _error = _interopRequireDefault(require("../../helpers/error"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class BookController {
  constructor(bookService) {
    var _this = this;

    _defineProperty(this, "getAll", /*#__PURE__*/function () {
      var _ref = _asyncToGenerator(function* ({
        res,
        next
      }) {
        try {
          let books = yield _this.bookService.getAll();
          res.status(200).json(books);
        } catch (err) {
          next(err);
        }
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    _defineProperty(this, "add", /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator(function* (req, res, next) {
        try {
          const book = yield _this.bookService.add({ ...req.body
          });
          res.status(201).json(book);
        } catch (err) {
          next(err);
        }
      });

      return function (_x2, _x3, _x4) {
        return _ref2.apply(this, arguments);
      };
    }());

    this.bookService = bookService;
  }

}

var _default = BookController;
exports.default = _default;