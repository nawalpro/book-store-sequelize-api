"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logger = exports.default = exports.csrf = exports.auth = void 0;

var _express = _interopRequireDefault(require("express"));

var _libs = require("../libs");

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _winston = _interopRequireDefault(require("winston"));

var _logger = _interopRequireDefault(require("../helpers/logger"));

var _morgan = _interopRequireDefault(require("morgan"));

var _csurf = _interopRequireDefault(require("csurf"));

var _auth = _interopRequireDefault(require("./auth"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// middlewares dépendencies
// middlewares
// initialize middlewares with dependencies injection
const auth = new _auth.default(_libs.jwtService);
exports.auth = auth;
const logger = new _logger.default(_winston.default);
exports.logger = logger;
const csrf = (0, _csurf.default)({
  cookie: true
}); // export all custom middlewares

exports.csrf = csrf;
//export default api middlewares
var _default = {
  urlencoded: _express.default.urlencoded({
    extended: false
  }),
  json: _express.default.json(),
  cookieParser: (0, _cookieParser.default)(),
  apiLogger: (0, _morgan.default)('combined', {
    stream: logger.stream
  }),
  csrf
};
exports.default = _default;