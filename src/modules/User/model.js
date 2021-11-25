import { DataTypes, Model } from "sequelize/types";
import db from "../../config/database";
class User extends Model {
    static init(sequelize) {
        return super.init(
            {
                id: {
                      type: DataTypes.UUID,
                      defaultValue: DataTypes.UUIDV4,
                      allowNull: false,
                      primaryKey: true
                  },

                // id: {
                //   type: DataTypes.INTEGER,
                //   primaryKey: true,
                //   autoIncrement: true },
                first_name: DataTypes.STRING,
                last_name: DataTypes.STRING,
                email: DataTypes.STRING,
                password: DataTypes.STRING,
                admin: {
                      type: DataTypes.BOOLEAN, 
                      allowNull: false, 
                      defaultValue: false }
            },
            { sequelize, modelName: 'User' }   
        );         
    }
    static associate(models) {

    }

}