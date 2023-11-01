import imageGalaxy from './images/procuts/s10.jpeg';
import imageFritadeira from './images/procuts/fritadeira.jpg';
import imageFonte from './images/procuts/fonte-atx-500w.jpeg';

const products = [
  {
    id: 1,
    name: 'Galaxy S10',
    description: `Fotografia profissional no seu bolso Descubra
    infinitas possibilidades para suas fotos com as 3 câmeras principais de sua
    equipe Teste sua criatividade e jogue com iluminação,
    diferentes planos e efeitos para obter ótimos resultados.`,
    categories: 'Eletronico',
    subcategories: 'SmartPhone',
    characteristics: {
      stock: 50,
      brand: 'Samsung',
      sales_format: 'Unidade',
      cor: ['Preto', 'Prata', 'Azul', 'Rosa'],
    },
    price: 1890.90,
    quantity: 1,
    primaryImage: imageGalaxy,
    secondaryImage: imageGalaxy,
    ratting: [
      {
        title: 'Uma bosta',
        assessment: 'Nun gsotei desse celular trava muito',
        stars: 5,
        image: 'imagem',
      },
      {
        title: 'Chegou rapido',
        assessment: 'Uma bela Beleza',
        stars: 4,
        image: 'imagem',
      },
    ],
  },

  {
    id: 2,
    name: 'Fritadeira Air Fryer',
    description: `A Fritadeira Sem Óleo Air Fryer Afn40-bft 4l 1500w Mondial é prática,
    rápida e saudável! Com a tecnologia de circulação de ar quente, ela cozinha, frita,
    assa ou tosta os alimentos sem precisar adicionar óleo.`,
    categories: 'Eletrodomésticos',
    subcategories: 'Fritadeiras',
    characteristics: {
      stock: 60,
      brand: 'Mondial',
      sales_format: 'Unidade',
      cor: ['Preto', 'Prata', 'Azul'],
    },
    price: 356.30,
    quantity: 1,
    primaryImage: imageFritadeira,
    secondaryImage: imageFritadeira,
    ratting: [
      {
        title: 'Top demais',
        assessment: 'Fritei tudo',
        stars: 5,
        image: 'imagem',
      },
      {
        title: 'Chegou rapido',
        assessment: 'A batata frita fica otima',
        stars: 4,
        image: 'imagem',
      },
    ],
  },
  {
    id: 3,
    name: 'Fonte 500w Fortrek Crusader',
    description: `Fonte de energia padrão ATX, focada em produtos que não
    utilizem consumo elevado. Produto de qualidade e custo benefício. A
    Fonte ATX Fortrek Crusader é uma fonte de alimentação com potência
    nominal de 500W.`,
    categories: 'Eletronico',
    subcategories: 'Fonte de Alimentação',
    characteristics: {
      stock: 6,
      brand: 'Fortrek Crusader',
      sales_format: 'Unidade',
      cor: [null],
    },
    price: 129.90,
    quantity: 1,
    primaryImage: imageFonte,
    secondaryImage: imageFonte,
    ratting: [
      {
        title: 'Custo beneficio',
        assessment: 'Muito bom, recomendo',
        stars: 5,
        image: 'imagem',
      },
      {
        title: 'Silenciosa',
        assessment: 'Muito boa, silenciosa e não esquenta',
        stars: 4,
        image: 'imagem',
      },
    ],
  },
];

export default products;
