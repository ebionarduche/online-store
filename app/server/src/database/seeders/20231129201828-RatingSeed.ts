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
      {
        products_id: 3,
        client: 'Lucas Oliveira',
        title: 'Excelente Custo-Benefício',
        assessment: `Comprei esse celular recentemente e estou muito
        satisfeito. Ele é rápido, tem uma ótima câmera e o preço foi
        muito bom. Recomendo!`,
        stars: 5,
        date: '2023-06-10',
      },
      {
        products_id: 4,
        client: 'Gap Nelson',
        title: 'Excelente Teclado',
        assessment: `O teclado é incrível! As teclas são macias e
        responsivas. Perfeito para digitar e jogar.`,
        stars: 5,
        date: '2021-05-20',
      },
      {
        products_id: 5,
        client: 'Anônimo',
        title: 'Qualidade de Som Surpreendente',
        assessment: `Essa caixa de som é impressionante! A qualidade do
        som é cristalina e os graves são poderosos.`,
        stars: 5,
        date: '2021-09-24',
      },
      {
        products_id: 6,
        client: 'Anônimo',
        title: 'Conforto Inigualável',
        assessment: `Estes tênis são extremamente confortáveis! Sinto
        como se estivesse caminhando nas nuvens.`,
        stars: 5,
        date: '2022-09-15',
      },
      {
        products_id: 7,
        client: 'Anônimo',
        title: 'Potente e Eficiente',
        assessment: `Esta furadeira é incrivelmente potente e eficiente.
        Fura facilmente através de materiais duros.`,
        stars: 5,
        date: '2019-05-20',
      },
      {
        products_id: 8,
        client: 'Anônimo',
        title: 'Excelente Bicicleta para Aventuras',
        assessment: `A Bicicleta Aro 29 Krw Alumínio 24 Vel Freio A Disco
        X42 é incrível! Ela é
        perfeita para quem gosta de aventuras e trilhas. Com 24
        velocidades e freio a disco, você
        pode enfrentar qualquer terreno com facilidade.`,
        stars: 5,
        date: '2020-04-08',
      },
    ]);
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('ratings', {});
  },
};
