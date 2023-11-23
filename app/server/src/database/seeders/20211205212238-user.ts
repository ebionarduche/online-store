import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('users', [
      {
        username: 'Admin',
  
      },
      {
        username: 'Nataline-Shots',
        // senha: secret_user
      },
      // os logins abaixo são intencionalmente inválidos, pois serão usados nos testes
      {
        username: 'Gap-Nelson',
        // senha: secret_user
      },
      {
        username: 'Ebio-Naruto',
        // senha: 12345
      },
    ], {});
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('users', {});
  },
}
