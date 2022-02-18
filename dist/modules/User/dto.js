"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dto = _interopRequireDefault(require("../Book/dto"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class UserDTO {
  constructor({
    id,
    email,
    books = []
  }) {
    this.id = id;
    this.email = email;
    this.books = books.map(book => new _dto.default(book));
  }

}

var _default = UserDTO;
exports.default = _default;