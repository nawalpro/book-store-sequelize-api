"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "BookDao", {
  enumerable: true,
  get: function () {
    return _dao.default;
  }
});
exports.bookRouter = void 0;

var _dao = _interopRequireDefault(require("./dao"));

var _repository = _interopRequireDefault(require("./repository"));

var _service = _interopRequireDefault(require("./service"));

var _controller = _interopRequireDefault(require("./controller"));

var _router = _interopRequireDefault(require("./router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const bookRepository = new _repository.default(_dao.default);
const bookService = new _service.default(bookRepository);
const bookController = new _controller.default(bookService);
const bookRouter = new _router.default(bookController);
exports.bookRouter = bookRouter;