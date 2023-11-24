import { DataTypes, Model, InferAttributes, InferCreationAttributes } from 'sequelize';
import db from '.';
import Categories from './Categories';

class Products extends Model<InferAttributes<Products>, InferCreationAttributes<Products>> {
  declare id: number;
  declare name: string;
  declare description: string;
  declare categoriesId: number;
  declare stock: number;
  declare brand: string;
  declare salesFormat: string;
  declare colors: string;
  declare price: number;
  declare quantity: number;
}

Products.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    categoriesId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'categories_id',
      references: {
        model: 'categories',
        key: 'id',
      },
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    salesFormat: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'sales_format',
    },
    colors: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: 'products',
    timestamps: false,
    underscored: true,
  },
);

Products.belongsTo(Categories, { foreignKey: 'categories_id', as: 'categories' });

export default Products;
