import { DataTypes, Model } from "sequelize";
import db from "../../config/database";

class Book extends Model {
    static init(sequelize) {
        return super.init(
            {
                id: {
                  type: DataTypes.INTEGER,
                  primaryKey: true,
                  autoIncrement: true },
                title : DataTypes.STRING,
                resume: DataTypes.STRING,
                status: { type: DataTypes.JSON,
                        defaultValue: "AVAILABLE"},
                author: DataTypes.STRING
                
            },
            { sequelize, modelName: 'User' }   
        );         
    }
    static associate(models) {
        // this.hasMany(models.Category, { as: 'categorys' });
        // return this;
    }

}

Book.init(db.sequelize);

export default Book;