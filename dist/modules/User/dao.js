"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = require("sequelize");

var _database = _interopRequireDefault(require("../../config/database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class UserDao extends _sequelize.Model {
  static init(sequelize) {
    return super.init({
      id: {
        type: _sequelize.DataTypes.UUID,
        defaultValue: _sequelize.DataTypes.UUIDV4,
        primaryKey: true
      },
      first_name: _sequelize.DataTypes.STRING,
      last_name: _sequelize.DataTypes.STRING,
      email: _sequelize.DataTypes.STRING,
      password: _sequelize.DataTypes.STRING,
      admin: {
        type: _sequelize.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      }
    }, {
      sequelize,
      modelName: 'User'
    });
  }

  static associate(models) {
    // define association here
    this.hasMany(models.Book, {
      as: 'books'
    });
    return this;
  }

}

;
UserDao.init(_database.default.sequelize);
var _default = UserDao;
exports.default = _default;