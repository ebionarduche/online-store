import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert(
      'products',
      [
        {
          name: ' Samsung Galaxy S10-(256GB)',
          description: `Fotografia profissional no seu bolso Descubra infinitas possibilidades para suas fotos com as 3 câmeras principais de sua equipe Teste sua criatividade e jogue com iluminação, diferentes planos e efeitos para obter ótimos resultados.`,
          categories_id: 2,
          stock: 50,
          brand: 'Samsung',
          sales_format: 'Unidade',
          colors: 'black,gray,skyblue,pink',
          price: 1890.9,
          image: 'oi',
        },
        {
          name: 'Fritadeira Air Fryer 4l Mundial',
          description: `A Fritadeira Sem Óleo Air Fryer Afn40-bft 4l 1500w Mondial é prática, rápida e saudável! Com a tecnologia de circulação de ar quente, ela cozinha, frita,assa ou tosta os alimentos sem precisar adicionar óleo.`,
          categories_id: 4,
          stock: 60,
          brand: 'Mondial',
          sales_format: 'Unidade',
          colors: 'black,gray,snow',
          price: 356.3,
          image: 'oi',
        },
        {
          name: 'Fonte 500w Fortrek Crusader',
          description:
            'Fonte de energia padrão ATX, focada em produtos que não utilizem consumo elevado. Produto de qualidade e custo benefício. A Fonte ATX Fortrek Crusader é uma fonte de alimentação com potência nominal de 500W.',
          categories_id: 2,
          stock: 19,
          brand: 'Fortrek',
          sales_format: 'Unidade Crusader',
          colors: 'black,gray',
          price: 150.4,
          image: 'oi',
        },
        {
          name: 'Teclado bluetooth Logitech Master Series MX Keys',
          description: `Precisão e iluminação inteligente com referência tátil para o posicionamento das suas mãos, facilita a orientação e o fluxo de digitação. O teclado se ilumina de forma inteligente no momento em que suas mão se proximam das teclas e se ajustam automaticamente às mudanças nas condições de iluminação.`,
          categories_id: 2,
          stock: 143,
          brand: 'Logitech',
          sales_format: 'Unidade',
          colors: 'black,gray',
          price: 656.6,
          image: 'oi',
        },
        {
          name: 'Caixa De Som Boombox 3 Bluetooth Preta Jbl',
          description: `Utilize onde quiser! A JBL Boombox 3 é à prova de poeira e à prova d'água IP67, para que você possa levar seu alto-falante para qualquer lugar, faça chuva ou faça sol. Conecte até 2 aparelhos simultaneamente sem o uso de fios e utilize alternadamente, compartilhando os sons que você ama!`,
          categories_id: 4,
          stock: 86,
          brand: 'JBL',
          sales_format: 'Unidade',
          colors: 'black,green,red',
          price: 2179.5,
          image: 'oi',
        },
        {
          name: 'Tênis Nike Court Legacy Canvas Mid Feminino',
          description:
            'Homenageando sua história baseada na cultura do tênis, o Nike Court Legacy Canvas Mid leva o clássico a um novo patamar. Ele é feito com lona durável, costuras de herança e um grande Swoosh na lateral que atualiza a edição. A boca acolchoada proporciona uma ótima sensação e adiciona uma camada extra de conforto.',
          categories_id: 3,
          stock: 44,
          brand: 'Nike',
          sales_format: 'Unidade',
          colors: 'black,snow',
          price: 499.9,
          image: 'oi',
        },
        {
          name: 'Furadeira parafusadeira sem fio de 10mm Wap',
          description: `Para quem busca praticidade e eficiência nas diversas tarefas manuais, a parafusadeira e furadeira 12V BPF 12K3 é a solução ideal. Com design exclusivo WAP, é uma ferramenta compacta, porém robusta, ideal para pequenas reformas e manutenção do lar.`,
          categories_id: 5,
          stock: 50,
          brand: 'Wap',
          sales_format: 'Unidade',
          colors: 'black,yellow',
          price: 169.9,
          image: 'oi',
        },
        {
          name: 'Bicicleta Aro 29 Krw Alumínio 24 Vel',
          description:
            'A bicicleta KRW X42 foi desenvolvida para quem quer realizar um passeio e pegar trilhas leves. Com seu quadro em alumínio 6061, fornece segurança e leveza no seu pedal. Possuí diversas cores que garante um estilo próprio para você.',
          categories_id: 1,
          stock: 8,
          brand: 'KRW',
          sales_format: 'Unidade',
          colors: 'black,sktblue,lawngreen,orange,yellow',
          price: 873.5,
          image: 'oi',
        },
      ],
      {},
    );
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('products', {});
  },
};
