import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
} from 'sequelize';
import db from '.';

class Categories extends Model<InferAttributes<Categories>,
InferCreationAttributes<Categories>> {
  declare id: number;
  declare category: string;
}

Categories.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  category: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'categories',
  timestamps: false,
  underscored: true,
});

export default Categories;
