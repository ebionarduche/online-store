import { Model, QueryInterface, DataTypes } from 'sequelize';
import { IProducts } from '../../interfaces/IProducts';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IProducts>>('products', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
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
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('products');
  },
};
