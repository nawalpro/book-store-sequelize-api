import Sequelize from "sequelize";
import env from "./env";

// require('dotenv').config()
// const { DB_USER, DB_PASSWORD, DB_NAME, DIALECT } = env;

// const sequelize = new Sequelize(DB_USER, DB_PASSWORD, DB_NAME, {
//   dialect: DIALECT
// })

// export default db;

const sequelize = new Sequelize(
  env.db_name,
  env.db_user,
  env.db_password,
  { dialect: env.dialect, port: env.db_port, host: env.db_host }
);

const db = { sequelize };

export default db;