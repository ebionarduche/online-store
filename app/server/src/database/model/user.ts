import {
  DataTypes,
  Model,
  // InferAttributes,
  // InferCreationAttributes,
} from 'sequelize';
import db from '.';

class User extends Model{
  declare id: number;
  declare username: string;

}
User.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'User',
  timestamps: false,
  underscored: true,
});

export default User;
