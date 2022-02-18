"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _error = require("../helpers/error");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Server {
  constructor(http, _middlewares, routes) {
    _defineProperty(this, "initializeMiddlewares", middlewares => {
      for (const key in middlewares) {
        if (key === 'csrf') {
          this.app.get('/csrf', middlewares[key], (req, res) => {
            res.status(200).json(req.csrfToken());
          });
        } else this.app.use(middlewares[key]);
      }
    });

    this.app = http;
    this.initializeMiddlewares(_middlewares);
    this.initializeRouter(routes);
    this.initializeErrorHandler();
  }

  initializeRouter(routes) {
    for (let path in routes) {
      this.app.use(path, routes[path]);
    }
  }

  initializeErrorHandler() {
    this.app.use(_error.handleError);
  }

  listen(port) {
    this.app.listen(port, /*#__PURE__*/_asyncToGenerator(function* () {
      return console.log(`application started on port : ${port}`);
    }));
  }

}

var _default = Server;
exports.default = _default;