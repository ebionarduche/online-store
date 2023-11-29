import { Model, QueryInterface, DataTypes } from 'sequelize';
import { IRating } from '../../interfaces/IRating';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IRating>>('ratings', {
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
    });
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('ratings');
  },
};
