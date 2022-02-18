"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = require("sequelize");

var _database = _interopRequireDefault(require("../../config/database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class BookDao extends _sequelize.Model {
  static init(sequelize) {
    return super.init({
      id: {
        type: _sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      title: _sequelize.DataTypes.STRING,
      resume: _sequelize.DataTypes.STRING,
      status: {
        type: _sequelize.DataTypes.JSON,
        defaultValue: "AVAILABLE"
      },
      author: _sequelize.DataTypes.STRING
    }, {
      sequelize,
      modelName: 'Book'
    });
  }

  static associate(models) {
    // define association here
    this.belongsTo(models.User);
    return this;
  }

}

;
BookDao.init(_database.default.sequelize);
var _default = BookDao;
exports.default = _default;