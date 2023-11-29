import { DataTypes, Model, InferAttributes, InferCreationAttributes } from 'sequelize';
import db from '.';
import Products from './Products';

class Rating extends Model<InferAttributes<Rating>, InferCreationAttributes<Rating>> {
  declare id: number;
  declare productsId: number;
  declare client: string;
  declare title: string;
  declare assessment: string;
  declare stars: number;
  declare date: string;
}

Rating.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    productsId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'products_id',
      references: {
        model: 'products',
        key: 'id',
      },
    },
    client: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    assessment: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    stars: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: 'ratings',
    timestamps: false,
    underscored: true,
  },
);

Rating.belongsTo(Products, { foreignKey: 'products_id', as: 'products' });

export default Rating;
