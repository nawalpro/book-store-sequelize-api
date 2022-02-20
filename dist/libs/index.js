"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mailerService = exports.jwtService = void 0;

var _env = _interopRequireDefault(require("../config/env"));

var _mailer = _interopRequireDefault(require("./mailer"));

var _jwt = _interopRequireDefault(require("./jwt"));

var _nodemailer = _interopRequireDefault(require("nodemailer"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// config
// services
// services dependencies
// Instanciate all your singleton service with dépendencies injection
const mailerService = new _mailer.default(_nodemailer.default);
exports.mailerService = mailerService;
const jwtService = new _jwt.default(_jsonwebtoken.default, _env.default.jwt_secret); // export all the libs services

exports.jwtService = jwtService;