const Sequelize =  require('sequelize');


require('dotenv').config()
const { DB_USER, DB_PASSWORD, DB_NAME, DIALECT } = process.env;

const sequelize = new Sequelize(DB_USER, DB_PASSWORD, DB_NAME, {
  dialect: DIALECT
})
module.exports = Sequelize;
