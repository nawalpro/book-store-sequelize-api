import {Model, DataTypes} from 'sequelize';
import db from '../../config/database';

class UserDao extends Model {
    static init(sequelize) {
        return super.init(
            {
                id: {
                    type: DataTypes.UUID,
                    defaultValue: DataTypes.UUIDV4,
                    primaryKey: true
                },
              first_name: DataTypes.STRING,
              last_name: DataTypes.STRING,
              email: DataTypes.STRING,
              password: DataTypes.STRING,
              admin: {
                    type: DataTypes.BOOLEAN, 
                    allowNull: false, 
                    defaultValue: false }
            }, {sequelize, modelName: 'User'}
        );
    }
    static associate(models) {
        // define association here
        this.hasMany(models.Book, {as: 'books'})
        return this;
    }
};

UserDao.init(db.sequelize);

export default UserDao;