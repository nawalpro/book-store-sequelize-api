import {Model, DataTypes} from 'sequelize';
import db from '../../config/database';

class BookDao extends Model {
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
            }, {sequelize, modelName: 'Book'}
        );
    }
    static associate(models) {
        // define association here
        this.belongsTo(models.User)
        return this;
    }
};

BookDao.init(db.sequelize);

export default BookDao;