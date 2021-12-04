import { Sequelize }  from "sequelize";
import env from "./env";

const associateAll = async (models) => {
  await Object.values(models).map((model) => model.associate(models));
};
const sequelize = new Sequelize(
  env.db_name,
  env.db_user,
  env.db_password,
  { dialect: "mysql", host: env.db_host }
);

try {
  console.log("connection has been etablished succesfully");
} catch (error) {
  console.log("ERROR datatbase", error);
}

const db = { sequelize, associateAll };

export default db;
global.sequelize = sequelize;

