"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class BookDTO {
  constructor({
    id,
    title,
    UserId
  }) {
    this.id = id;
    this.title = title;
    this.UserId = UserId;
  }

}

var _default = BookDTO;
exports.default = _default;