"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "UserDao", {
  enumerable: true,
  get: function () {
    return _dao.default;
  }
});
exports.userRouter = void 0;

var _libs = require("../../libs");

var _dao = _interopRequireDefault(require("./dao"));

var _repository = _interopRequireDefault(require("./repository"));

var _service = _interopRequireDefault(require("./service"));

var _controller = _interopRequireDefault(require("./controller"));

var _router = _interopRequireDefault(require("./router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const userRepository = new _repository.default(_dao.default);
const userService = new _service.default(userRepository, _libs.mailerService);
const userController = new _controller.default(userService, _libs.jwtService);
const userRouter = new _router.default(userController);
exports.userRouter = userRouter;