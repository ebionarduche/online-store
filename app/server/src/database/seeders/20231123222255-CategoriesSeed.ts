import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert(
      'categories',
      [
        {
          category: 'Esportes',
        },
        {
          category: 'Eletrônicos',
        },
        {
          category: 'Vestuário',
        },
        {
          category: 'Eletrodomésticos',
        },
        {
          category: 'Ferramentas',
        },
        {
          category: 'Lazer',
        },
        {
          category: 'Cozinha',
        },
      ],
      {},
    );
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('categories', {});
  },
};
