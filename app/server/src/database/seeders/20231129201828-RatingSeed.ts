import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('ratings', [
      {
        products_id: 1,
        client: 'Bruno Salinhas',
        title: 'Celular Muito Rápido',
        assessment: 'Comprei Recentemente e estou gostando bastante',
        stars: 5,
        date: '2023-05-20',
      },
      {
        products_id: 2,
        client: 'Taline Chutes',
        title: 'Top demais',
        assessment: `Fritei tudo`,
        stars: 5,
        date: '2021-05-20',
      },
    ]);
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('ratings', {});
  },
};
