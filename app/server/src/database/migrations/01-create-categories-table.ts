import { Model, QueryInterface, DataTypes } from 'sequelize';
import { ICategories } from '../../interfaces/ICategories';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<ICategories>>('categories', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('categories');
  },
};
