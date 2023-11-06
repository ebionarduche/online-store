/* eslint-disable max-lines */
import imageGalaxy from './images/procuts/s10.jpeg';
import imageFritadeira from './images/procuts/fritadeira.jpg';
import imageFonte from './images/procuts/fonte-atx-500w.jpeg';
import imageTeclado from './images/procuts/tecladoLogitech.jpg';
import imageBoombox from './images/procuts/Boombox3.jpeg';
import imageNikeCourt from './images/procuts/TenisNikeCourt.jpg';
import imageFuradeira from './images/procuts/FuradeiraWap.jpeg';
import imageBicicleta from './images/procuts/BicicletaKrw.jpg';

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
        data: '2023-05-20',
      },
      {
        title: 'Chegou rapido',
        assessment: 'Uma bela Beleza',
        stars: 4,
        image: 'imagem',
        data: '2023-07-02',
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
        data: '2021-05-20',
      },
      {
        title: 'Chegou rapido',
        assessment: 'A batata frita fica otima',
        stars: 4,
        image: 'imagem',
        data: '2020-10-20',
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
        data: '2023-05-15',
      },
      {
        title: 'Silenciosa',
        assessment: 'Muito boa, silenciosa e não esquenta',
        stars: 4,
        image: 'imagem',
        data: '2021-12-20',
      },
    ],
  },
  {
    id: 4,
    name: 'Teclado bluetooth Logitech Master Series MX Keys',
    description: `Precisão e iluminação inteligente
    Com referência tátil para o posicionamento das suas mãos, facilita a
    orientação e o fluxo de digitação. O teclado se ilumina de forma
    inteligente no momento em que suas mão se aproximam das teclas e se
    ajustam automaticamente às mudanças nas condições de iluminação.`,
    categories: 'Eletronico',
    subcategories: 'Teclado',
    characteristics: {
      stock: 3,
      brand: 'Logitech',
      sales_format: 'Unidade',
      cor: [null],
    },
    price: 656.60,
    quantity: 1,
    primaryImage: imageTeclado,
    secondaryImage: imageTeclado,
    ratting: [
      {
        title: 'Excelente Teclado',
        assessment: `O teclado é incrível! As teclas são macias e
        responsivas. Perfeito para digitar e jogar.`,
        stars: 5,
        image: 'imagem',
        data: '2021-05-20',
      },
      {
        title: 'Design Elegante',
        assessment: `Além de ser funcional, o design deste teclado é
        muito elegante. Combina perfeitamente com meu setup.`,
        stars: 4,
        image: 'imagem',
        data: '2022-07-19',
      },
    ],
  },
  {
    id: 5,
    name: 'Caixa De Som Boombox 3 Bluetooth Preta Jbl',
    description: `Utilize onde quiser! A JBL Boombox 3 é à prova de poeira e à prova
    d'água IP67, para que você possa levar seu alto-falante para qualquer lugar,
    faça chuva ou faça sol. Conecte até 2 aparelhos simultaneamente sem o uso de
    fios e utilize alternadamente, compartilhando os sons que você ama!`,
    categories: 'Eletronico',
    subcategories: 'Teclado',
    characteristics: {
      stock: 100,
      brand: 'JBL',
      sales_format: 'Unidade',
      cor: ['Preto', 'Verde-musgo'],
    },
    price: 2179.50,
    quantity: 1,
    primaryImage: imageBoombox,
    secondaryImage: imageBoombox,
    ratting: [
      {
        title: 'Qualidade de Som Surpreendente',
        assessment: `Essa caixa de som é impressionante! A qualidade do
        som é cristalina e os graves são poderosos.`,
        stars: 5,
        image: 'imagem',
        data: '2021-09-24',
      },
      {
        title: 'Portátil e Conveniente',
        assessment: `Além do ótimo som, esta caixa de som é pequena e
        fácil de transportar. Perfeita para viagens.`,
        stars: 4,
        image: 'imagem',
        data: '2023-04-21',
      },
    ],
  },
  {
    id: 6,
    name: 'Tênis Nike Court Legacy Canvas Mid Feminino',
    description: `Homenageando sua história baseada na cultura do tênis, o
    Nike Court Legacy Canvas Mid leva o clássico a um novo patamar. Ele é
    feito com lona durável, costuras de herança e um grande Swoosh na lateral
    que atualiza a edição. A boca acolchoada proporciona uma ótima sensação e
    adiciona uma camada extra de conforto.`,
    subcategories: 'Calçados',
    characteristics: {
      stock: 50,
      brand: 'Nike',
      sales_format: 'Unidade',
      cor: ['Preto', 'Branco'],
    },
    price: 439.99,
    quantity: 1,
    primaryImage: imageNikeCourt,
    secondaryImage: imageNikeCourt,
    ratting: [
      {
        title: 'Conforto Inigualável',
        assessment: `Estes tênis são extremamente confortáveis! Sinto
        como se estivesse caminhando nas nuvens.`,
        stars: 5,
        image: 'imagem',
        data: '2022-09-15',
      },
      {
        title: 'Duráveis e Estilosos',
        assessment: `Além do conforto, esses tênis são muito duráveis e
        têm um visual moderno que combina com tudo.`,
        stars: 4,
        image: 'imagem',
        data: '2022-12-20',
      },
    ],
  },
  {
    id: 7,
    name: 'Furadeira parafusadeira sem fio de 10mm Wap',
    description: `Para quem busca praticidade e eficiência nas diversas tarefas manuais, a
    parafusadeira e furadeira 12V BPF 12K3 é a solução ideal.
    Com design exclusivo WAP, é uma ferramenta compacta,
    porém robusta, ideal para pequenas reformas e manutenção do lar.`,
    subcategories: 'Furadeiras',
    characteristics: {
      stock: 50,
      brand: 'Wap',
      sales_format: 'Unidade',
      cor: [null],
    },
    price: 169.90,
    quantity: 1,
    primaryImage: imageFuradeira,
    secondaryImage: imageFuradeira,
    ratting: [
      {
        title: 'Potente e Eficiente',
        assessment: `Esta furadeira é incrivelmente potente e eficiente.
        Fura facilmente através de materiais duros.`,
        stars: 5,
        image: 'imagem',
        data: '2019-05-20',
      },
      {
        title: 'Fácil de Manusear',
        assessment: `Apesar da potência, é fácil de manusear. As
        configurações são simples de ajustar e o controle é preciso.`,
        stars: 4,
        image: 'imagem',
        data: '2023-03-03',
      },
    ],
  },
  {
    id: 8,
    name: 'Bicicleta Aro 29 Krw Alumínio 24 Vel Freio A Disco X42',
    description: `A bicicleta KRW X42 foi desenvolvida para quem quer
    realizar um passeio e pegar trilhas leves. Com seu quadro em alumínio
    6061, fornece segurança e leveza no seu pedal. Possuí diversas cores
    que garante um estilo próprio para você.`,
    subcategories: 'Ciclismo',
    characteristics: {
      stock: 100,
      brand: 'KRW',
      sales_format: 'Unidade',
      cor: ['Azul/Preto', 'Branco/Preto',
        'Grafite/Preto Fosco', 'Laranja/Preto', 'Preto/Amarelo e Vermelho'],
    },
    price: 873.50,
    quantity: 1,
    primaryImage: imageBicicleta,
    secondaryImage: imageBicicleta,
    ratting: [
      {
        title: 'Excelente Bicicleta para Aventuras',
        assessment: `A Bicicleta Aro 29 Krw Alumínio 24 Vel Freio A Disco
        X42 é incrível! Ela é
        perfeita para quem gosta de aventuras e trilhas. Com 24
        velocidades e freio a disco, você
        pode enfrentar qualquer terreno com facilidade.`,
        stars: 5,
        image: 'imagem',
      },
      {
        title: 'Construção Durável',
        assessment: `Esta bicicleta é feita de alumínio de alta
        qualidade, o que a torna leve e resistente. Você pode confiar na
        durabilidade deste produto.`,
        stars: 4,
        image: 'imagem',
      },
      {
        title: 'Desempenho de Freio Incrível',
        assessment: `O freio a disco X42 proporciona um desempenho de
        frenagem incrível, garantindo sua segurança em descidas íngremes
        e terrenos acidentados.`,
        stars: 5,
        image: 'imagem',
      },
    ],
  },
];

export default products;
