"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import jwt from "jsonwebtoken";
// import config from "../config/env";
// import User from "../modules/User/model";
class AuthMiddleware {
  constructor(jwtService) {
    var _this = this;

    _defineProperty(this, "isAuth", /*#__PURE__*/function () {
      var _ref = _asyncToGenerator(function* (req, res, next) {
        try {
          const token = req.cookies['auth-cookie'];

          if (!token) {
            return res.status(401).json('Access denied. Your session expired');
          } // Verify Token


          const decoded = yield _this.jwt.decodeToken(token); // if the user has permissions

          req.currentUserId = decoded.id;
          next();
        } catch (e) {
          return res.status(401).json('Authentication failed : \n' + e);
        }
      });

      return function (_x, _x2, _x3) {
        return _ref.apply(this, arguments);
      };
    }());

    this.jwt = jwtService;
  } // isAuth = async (req, res, next) => {
  // 	try {
  // 		let access_token = req.headers.authorization.split(" ")[1];
  // 		const refresh_token = req.cookies["refresh_token"];
  // 		if (!refresh_token)
  // 			return res.status(401).json("Access denied. Your session expired");
  // 		let user = await User.findOne({ where: { access_token, refresh_token } });
  // 		if (!user)
  // 			return res.status(401).json("Access denied. Your session expired");
  // 		await jwt.verify(access_token, config.jwt_secret);
  // 		req.user = user;
  // 		next();
  // 	} catch (e) {
  // 		return res.status(401).json(e.message);
  // 	}
  // };
  // refreshAccess = async (req, res, next) => {
  // 	try {
  // 		const refresh_token = req.cookies["refresh_token"];
  // 		if (!refresh_token)
  // 			return res.status(401).json("Access denied. Your session expired");
  // 		const decoded = await jwt.verify(refresh_token, config.jwt_secret);
  // 		const user = await User.findOne({ where: { id: decoded.id } });
  // 		user.access_token = jwt.sign(
  // 			{ id: user.id, email: user.email },
  // 			config.jwt_secret,
  // 			{ expiresIn: "5m" }
  // 		);
  // 		await user.save();
  // 		res.status(200).json(user);
  // 	} catch (e) {
  // 		next(e);
  // 	}
  // }


}

var _default = AuthMiddleware;
exports.default = _default;