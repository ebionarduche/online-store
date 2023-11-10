/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable max-lines */
import imageGalaxy from './images/procuts/s10.png';
import imageFritadeira from './images/procuts/fritadeira.png';
import imageFonte from './images/procuts/fonte-atx-500w.png';
import imageTeclado from './images/procuts/tecladoLogitech.png';
import imageBoombox from './images/procuts/Boombox3.png';
import imageNikeCourt from './images/procuts/TenisNikeCourt.png';
import imageFuradeira from './images/procuts/FuradeiraWap.png';
import imageBicicleta from './images/procuts/BicicletaKrw.png';
import imageTvLg from './images/procuts/TelevisãoLG.png';
import imageLiquidificador from './images/procuts/LiquidificadorMultifuncional.png';
import imageCamera from './images/procuts/CameraCanon.png';
import imageSmartwatch from './images/procuts/RelogioXiaomi.png';
import imagePanelaEletrica from './images/procuts/PanelaEletrica.png';
import imageNotebook from './images/procuts/NotebookAcer.png';
import imageMochila from './images/procuts/MochilaCamping.png';
import imageCadeiraPraia from './images/procuts/CadeiraDePraia.png';
import imageConjPanela from './images/procuts/ConjPanela.png';
import imageTenisCorrida from './images/procuts/TenisDeCorrida.png';
import imageGalaxyS20 from './images/procuts/GalaxyS20.png';
import imageInphone12 from './images/procuts/Iphone12.png';

const products = [
  {
    id: 1,
    name: ' Samsung Galaxy S10',
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
        client: 'Bruno Salinhas',
        title: 'Celular Muito Rápido',
        assessment: 'Comprei Recentemente e estou gostando bastante',
        stars: 5,
        image: 'imagem',
        data: '2023-05-20',
      },
      {
        client: 'Anônimo',
        title: 'Chegou Rápido',
        assessment: 'Chegou no dia seguinte da compra',
        stars: 4,
        image: 'imagem',
        data: '2023-07-02',
      },
      {
        client: 'Maria Silva',
        title: 'Excelente Custo-Benefício',
        assessment: `Comprei esse celular recentemente e estou muito
        satisfeita. Ele é rápido,
        tem uma ótima câmera e o preço foi muito bom. Recomendo!`,
        stars: 5,
        image: 'imagem',
        data: '2023-08-15',
      },
      {
        client: 'João Pereira',
        title: 'Atendeu Minhas Expectativas',
        assessment: `O celular chegou rápido e funcionou perfeitamente. Estou contente com
        acompra e o desempenho do produto.`,
        stars: 4,
        image: 'imagem',
        data: '2023-09-10',
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
        client: 'Taline Chutes',
        title: 'Top demais',
        assessment: 'Fritei tudo',
        stars: 5,
        image: 'imagem',
        data: '2021-05-20',
      },
      {
        client: 'Anônimo',
        title: 'Chegou rapido',
        assessment: 'A batata frita fica otima',
        stars: 3,
        image: 'imagem',
        data: '2020-10-20',
      },
      {
        client: 'Pedro Santos',
        title: 'Frituras Rápidas',
        assessment: `A fritadeira chegou rapidamente, e a batata frita
        fica realmente ótima. No entanto, achei um pouco complicado de limpar.`,
        stars: 4,
        image: 'imagem',
        data: '2022-07-28',
      },
      {
        client: 'Joana Oliveira',
        title: 'Excelente para Frituras',
        assessment: `Essa fritadeira é incrível! Fritei de tudo nela,
        desde batatas até nuggets. Fica tudo delicioso!`,
        stars: 5,
        image: 'imagem',
        data: '2022-03-12',
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
        client: 'Anônimo',
        title: 'Custo beneficio',
        assessment: 'Muito bom, recomendo',
        stars: 5,
        image: 'imagem',
        data: '2023-05-15',
      },
      {
        client: 'Anônimo',
        title: 'Silenciosa',
        assessment: 'Muito boa, silenciosa e não esquenta',
        stars: 4,
        image: 'imagem',
        data: '2021-12-20',
      },
      {
        client: 'Lucas Oliveira',
        title: 'Excelente Custo-Benefício',
        assessment: `Comprei esse celular recentemente e estou muito
        satisfeito. Ele é rápido, tem uma ótima câmera e o preço foi
        muito bom. Recomendo!`,
        stars: 5,
        image: 'imagem',
        data: '2023-06-10',
      },
      {
        client: 'Ana Silva',
        title: 'Atendeu Minhas Expectativas',
        assessment: `O celular chegou rápido e funcionou perfeitamente.
        Estou contente com a compra e o desempenho do produto.`,
        stars: 4,
        image: 'imagem',
        data: '2023-08-02',
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
        client: 'Gap Nelson',
        title: 'Excelente Teclado',
        assessment: `O teclado é incrível! As teclas são macias e
        responsivas. Perfeito para digitar e jogar.`,
        stars: 5,
        image: 'imagem',
        data: '2021-05-20',
      },
      {
        client: 'Anônimo',
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
        client: 'Anônimo',
        title: 'Qualidade de Som Surpreendente',
        assessment: `Essa caixa de som é impressionante! A qualidade do
        som é cristalina e os graves são poderosos.`,
        stars: 5,
        image: 'imagem',
        data: '2021-09-24',
      },
      {
        client: 'Anônimo',
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
    categories: 'Vestuário',
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
        client: 'Anônimo',
        title: 'Conforto Inigualável',
        assessment: `Estes tênis são extremamente confortáveis! Sinto
        como se estivesse caminhando nas nuvens.`,
        stars: 5,
        image: 'imagem',
        data: '2022-09-15',
      },
      {
        client: 'Anônimo',
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
    categories: 'Ferramentas',
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
        client: 'Anônimo',
        title: 'Potente e Eficiente',
        assessment: `Esta furadeira é incrivelmente potente e eficiente.
        Fura facilmente através de materiais duros.`,
        stars: 5,
        image: 'imagem',
        data: '2019-05-20',
      },
      {
        client: 'Anônimo',
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
    categories: 'Esporte',
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
        client: 'Anônimo',
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
        client: 'Anônimo',
        title: 'Construção Durável',
        assessment: `Esta bicicleta é feita de alumínio de alta
        qualidade, o que a torna leve e resistente. Você pode confiar na
        durabilidade deste produto.`,
        stars: 4,
        image: 'imagem',
      },
      {
        client: 'Anônimo',
        title: 'Desempenho de Freio Incrível',
        assessment: `O freio a disco X42 proporciona um desempenho de
        frenagem incrível, garantindo sua segurança em descidas íngremes
        e terrenos acidentados.`,
        stars: 5,
        image: 'imagem',
      },
      {
        client: 'Anônimo',
        title: 'Conforto e Estilo',
        assessment: `Além do desempenho excepcional, essa bicicleta oferece um
        passeio confortável, e seu design moderno e elegante atrai olhares por onde
        passa. Perfeita para quem busca um passeio agradável e com estilo.`,
        stars: 5,
        image: 'imagem',
      },
      {
        client: 'Anônimo',
        title: 'Ótimo Custo-Benefício',
        assessment: `Esta bicicleta oferece um excelente custo-benefício. Com sua
        qualidade e desempenho, é um investimento que vale a pena para os amantes
        de pedaladas mais intensas.`,
        stars: 4,
        image: 'imagem',
      },
      {
        client: 'Anônimo',
        title: 'Manutenção Fácil',
        assessment: `A manutenção desta bicicleta é simples e fácil de ser feita.
        Isso a torna ainda mais atraente para ciclistas que gostam de cuidar do
        próprio equipamento.`,
        stars: 5,
        image: 'imagem',
      },
    ],
  },
  {
    id: 9,
    name: 'Smart TV LED 55 Polegadas',
    description: `Assista aos seus filmes e programas favoritos em uma
    tela grande de 55 polegadas. A Smart TV oferece uma experiência de
    entretenimento incrível.`,
    categories: 'Eletronico',
    subcategories: 'Televisões',
    characteristics: {
      stock: 20,
      brand: 'LG',
      sales_format: 'Unidade',
      cor: ['Preto'],
    },
    price: 1499.00,
    quantity: 1,
    primaryImage: imageTvLg,
    secondaryImage: imageTvLg,
    ratting: [
      {
        client: 'Fabio Melo',
        title: 'Excelente Qualidade de Imagem',
        assessment: `A qualidade da imagem é surpreendente. As cores são
        vibrantes e nítidas.`,
        stars: 5,
        image: 'imagem',
        data: '2023-08-12',
      },
      {
        client: 'Anônimo',
        title: 'Ótimo Custo-Benefício',
        assessment: 'Esta Smart TV oferece um ótimo custo-benefício. Recomendo!',
        stars: 4,
        image: 'imagem',
        data: '2023-06-25',
      },
      {
        client: 'Anônimo',
        title: 'Fácil de Configurar e Usar',
        assessment: `Configurar esta Smart TV foi simples e intuitivo. Além disso,
        a interface é fácil de usar, tornando a navegação entre aplicativos e
        configurações uma experiência agradável.`,
        stars: 5,
        image: 'imagem',
        data: '2023-10-18',
      },
      {
        client: 'Anônimo',
        title: 'Boa Conectividade com Dispositivos',
        assessment: `A TV se conecta facilmente a outros dispositivos, como
        smartphones e laptops. A possibilidade de espelhar a tela do celular é
        um grande ponto positivo.`,
        stars: 4,
        image: 'imagem',
        data: '2023-09-06',
      },
      {
        client: 'Anônimo',
        title: 'Som de Qualidade',
        assessment: `Além da excelente qualidade de imagem, o som desta TV é
        surpreendente. Proporciona uma boa experiência sonora em filmes e
        programas de TV.`,
        stars: 5,
        image: 'imagem',
        data: '2023-11-01',
      },
    ],
  },
  {
    id: 10,
    name: 'Liquidificador Multifuncional',
    description: `Prepare deliciosos sucos, smoothies e sopas com este
    liquidificador multifuncional.`,
    categories: 'Eletrodomésticos',
    subcategories: 'Liquidificadores',
    characteristics: {
      stock: 30,
      brand: 'Mondial',
      sales_format: 'Unidade',
      cor: ['Branco'],
    },
    price: 89.90,
    quantity: 1,
    primaryImage: imageLiquidificador,
    secondaryImage: imageLiquidificador,
    ratting: [
      {
        client: 'Rodrigo Santos',
        title: 'Eficiente e Prático',
        assessment: `Este liquidificador é eficiente e fácil de usar.
        Perfeito para o dia a dia.`,
        stars: 5,
        image: 'imagem',
        data: '2023-09-05',
      },
      {
        client: 'Paulo Belens',
        title: 'Ótimo Custo-Benefício',
        assessment: 'Excelente custo-benefício. Recomendo a todos!',
        stars: 4,
        image: 'imagem',
        data: '2023-07-10',
      },
    ],
  },
  {
    id: 11,
    name: 'Câmera Digital 20MP',
    description: `Capture momentos especiais com esta câmera digital de
    20 megapixels. Fotos de alta qualidade garantidas.`,
    categories: 'Eletronico',
    subcategories: 'Câmeras',
    characteristics: {
      stock: 15,
      brand: 'Canon',
      sales_format: 'Unidade',
      cor: ['Prata'],
    },
    price: 249.99,
    quantity: 1,
    primaryImage: imageCamera,
    secondaryImage: imageCamera,
    ratting: [
      {
        client: 'Anônimo',
        title: 'Excelente Qualidade de Imagem',
        assessment: `As fotos tiradas com esta câmera têm uma qualidade
        excepcional. Muito satisfeito!`,
        stars: 5,
        image: 'imagem',
        data: '2023-10-15',
      },
      {
        client: 'Anônimo',
        title: 'Fácil de Usar',
        assessment: 'A câmera é fácil de usar e oferece ótimos resultados. Recomendo.',
        stars: 4,
        image: 'imagem',
        data: '2023-09-02',
      },
      {
        client: 'JãoZini',
        title: 'Variedade de Funções',
        assessment: `Este liquidificador oferece uma ampla gama de funções
        que permitem preparar diferentes tipos de receitas. A versatilidade é um
        grande ponto positivo.`,
        stars: 5,
        image: 'imagem',
        data: '2023-10-20',
      },
      {
        client: 'Marcelo Pereira',
        title: 'Design Moderno',
        assessment: `Além de ser eficiente, o design deste liquidificador é moderno
        e elegante, tornando-o uma adição atraente para a cozinha.`,
        stars: 4,
        image: 'imagem',
        data: '2023-11-02',
      },
      {
        client: 'Anônimo',
        title: 'Fácil de Limpar',
        assessment: `A limpeza deste liquidificador é simples e rápida. Suas peças
        removíveis facilitam o processo de higienização.`,
        stars: 5,
        image: 'imagem',
        data: '2023-11-15',
      },
    ],
  },
  {
    id: 12,
    name: 'Relógio Inteligente Smartwatch',
    description: `Mantenha-se conectado e monitore sua saúde com este
    smartwatch. Receba notificações, rastreie seus passos e monitore seu
    batimento cardíaco.`,
    categories: 'Eletrônicos',
    subcategories: 'Smartwatches',
    characteristics: {
      stock: 25,
      brand: 'Xiaomi',
      sales_format: 'Unidade',
      cor: ['Preto', 'Branco', 'Prata'],
    },
    price: 149.99,
    quantity: 1,
    primaryImage: imageSmartwatch,
    secondaryImage: imageSmartwatch,
    ratting: [
      {
        client: 'Marcos Paulo',
        title: 'Conectividade Excelente',
        assessment: `Este smartwatch mantém você conectado o tempo todo.
        Ótimo para notificações e monitoramento de saúde.`,
        stars: 5,
        image: 'imagem',
        data: '2023-11-15',
      },
      {
        client: 'Mariana Costa',
        title: 'Estiloso e Funcional',
        assessment: `Além de ser funcional, este smartwatch tem um design
        moderno. Estou muito satisfeito com a minha compra.`,
        stars: 4,
        image: 'imagem',
        data: '2023-10-01',
      },
    ],
  },
  {
    id: 13,
    name: 'Panela Elétrica de Arroz',
    description: `Prepare arroz perfeito com esta panela elétrica. Fácil de
    usar e com resultados deliciosos.`,
    categories: 'Eletrodomésticos',
    subcategories: 'Panelas Elétricas',
    characteristics: {
      stock: 30,
      brand: 'Britânia',
      sales_format: 'Unidade',
      cor: ['Branco'],
    },
    price: 59.90,
    quantity: 1,
    primaryImage: imagePanelaEletrica,
    secondaryImage: imagePanelaEletrica,
    ratting: [
      {
        client: 'Ana Pontes',
        title: 'Arroz Perfeito',
        assessment: `Esta panela elétrica faz um arroz delicioso. Fácil de
        usar e limpar.`,
        stars: 5,
        image: 'imagem',
        data: '2023-12-05',
      },
      {
        client: 'Anônimo',
        title: 'Prática e Eficiente',
        assessment: `Uma panela elétrica prática que facilita o preparo do
        arroz. Estou satisfeito com o desempenho.`,
        stars: 4,
        image: 'imagem',
        data: '2023-11-20',
      },
      {
        client: 'Anônimo',
        title: 'Monitoramento de Saúde Preciso',
        assessment: `O smartwatch oferece um monitoramento preciso de saúde,
        especialmente o acompanhamento do batimento cardíaco e passos. Essas
        informações são extremamente úteis para o meu dia a dia.`,
        stars: 5,
        image: 'imagem',
        data: '2023-12-05',
      },
      {
        client: 'Anônimo',
        title: 'Boa Duração da Bateria',
        assessment: `A bateria deste smartwatch tem uma boa duração, o que é
        muito conveniente. Posso usá-lo o dia todo sem me preocupar em recarregar
        constantemente.`,
        stars: 4,
        image: 'imagem',
        data: '2023-12-10',
      },
      {
        client: 'Henrique Gomes',
        title: 'Fácil de Configurar',
        assessment: `A configuração inicial deste smartwatch foi fácil e rápida.
        As instruções fornecidas foram bastante claras e úteis.`,
        stars: 5,
        image: 'imagem',
        data: '2023-12-20',
      },
    ],
  },
  {
    id: 14,
    name: 'Notebook Ultrafino 15 Polegadas',
    description: `Trabalhe e divirta-se com este notebook ultrafino de 15
    polegadas. Leve e portátil, perfeito para uso diário.`,
    categories: 'Eletrônicos',
    subcategories: 'Notebooks',
    characteristics: {
      stock: 10,
      brand: 'Acer',
      sales_format: 'Unidade',
      cor: ['Prata'],
    },
    price: 799.99,
    quantity: 1,
    primaryImage: imageNotebook,
    secondaryImage: imageNotebook,
    ratting: [
      {
        client: 'Teteus Ramos',
        title: 'Ótimo Desempenho',
        assessment: `Este notebook oferece um ótimo desempenho para trabalho
        e entretenimento. Estou impressionado com a velocidade.`,
        stars: 5,
        image: 'imagem',
        data: '2023-12-15',
      },
      {
        client: 'Carolina Oliveira',
        title: 'Portabilidade e Elegância',
        assessment: `Além do desempenho, este notebook é portátil e tem um
        design elegante. Ótimo para viagens e uso diário.`,
        stars: 4,
        image: 'imagem',
        data: '2023-11-30',
      },
      {
        client: 'Anônimo',
        title: 'Boa Autonomia da Bateria',
        assessment: `A autonomia da bateria deste notebook é muito boa. Consigo
        utilizar por longos períodos sem a necessidade de recarga constante.`,
        stars: 4,
        image: 'imagem',
        data: '2024-01-10',
      },
      {
        client: 'Anônimo',
        title: 'Tela de Qualidade',
        assessment: `A qualidade da tela deste notebook é excelente. As cores são
        vibrantes e o tamanho de 15 polegadas oferece uma ótima experiência visual.`,
        stars: 5,
        image: 'imagem',
        data: '2024-01-20',
      },
    ],
  },
  {
    id: 15,
    name: 'Mochila para Camping 50 Litros',
    description: `Prepare-se para sua próxima aventura ao ar livre com esta
    mochila de camping de 50 litros.
    Espaçosa e confortável, é ideal para carregar seus equipamentos e
    suprimentos durante trilhas e acampamentos.`,
    categories: 'Esportes',
    subcategories: 'Mochilas',
    characteristics: {
      stock: 20,
      brand: 'Outdoor Adventure',
      sales_format: 'Unidade',
      cor: ['Verde', 'Azul', 'Laranja'],
    },
    price: 79.99,
    quantity: 1,
    primaryImage: imageMochila,
    secondaryImage: imageMochila,
    ratting: [
      {
        client: 'Ebio Naruto',
        title: 'Espaçosa e Confortável',
        assessment: `Esta mochila é incrivelmente espaçosa e confortável de
        usar durante longas caminhadas e aventuras ao ar livre. Altamente recomendada!`,
        stars: 5,
        image: 'imagem',
        data: '2023-12-20',
      },
      {
        client: 'João Cardoso',
        title: 'Durável e Funcional',
        assessment: `A mochila é durável e possui diversos compartimentos
        funcionais para organizar seus pertences. Ótimo para aventureiros!`,
        stars: 4,
        image: 'imagem',
        data: '2023-11-25',
      },
      {
        client: 'Gabriela Nascimento',
        title: 'Excelente Mochila de Viagem',
        assessment: `Essa mochila é perfeita para viagens longas. Ela tem muito espaço,
        é confortável de usar e os compartimentos são muito práticos.
        Estou extremamente satisfeito com minha compra!`,
        stars: 5,
        image: 'imagem',
        data: '2024-02-10',
      },

      {
        client: 'Aventureira123',
        title: 'Ideal para aventureiros',
        assessment: `Como uma aventureira ávida, esta mochila tem sido 
        minha companheira constante em trilhas e acampamentos. 
        É resistente, confortável e mantém minhas coisas bem organizadas. 
        Altamente recomendada para os amantes da natureza!`,
        stars: 5,
        image: 'imagem',
        data: '2024-03-15',
      },

      {
        client: 'MochileiroExperiente',
        title: 'Ótima Escolha para Mochilão',
        assessment: `Fiz uma viagem de mochilão com esta mochila e ela provou 
        ser uma escolha fantástica. Ela suportou o desgaste constante, 
        é espaçosa e possui uma construção de alta qualidade. 
        Não tenho nada do que reclamar!`,
        stars: 3,
        image: 'imagem',
        data: '2024-04-20',
      },

    ],
  },
  {
    id: 16,
    name: 'Cadeira de Praia Reclinável',
    description: `Relaxe na praia com conforto e estilo nesta cadeira reclinável.
    Possui apoio para copos, bolsos para armazenamento e é fácil de transportar.
    Perfeita para os dias ensolarados à beira-mar.`,
    categories: 'Lazer',
    subcategories: 'Cadeiras de Praia',
    characteristics: {
      stock: 15,
      brand: 'Beach Essentials',
      sales_format: 'Unidade',
      cor: ['Azul', 'Vermelho', 'Amarelo'],
    },
    price: 39.99,
    quantity: 1,
    primaryImage: imageCadeiraPraia,
    secondaryImage: imageCadeiraPraia,
    ratting: [
      {
        client: 'PraiaMania',
        title: 'Conforto à Beira-mar',
        assessment: `Esta cadeira de praia é muito confortável.
        Adoro os bolsos para armazenar minhas coisas e o suporte para copos é um toque
        agradável. Perfeito para relaxar na praia!`,
        stars: 5,
        image: 'imagem',
        data: '2024-05-10',
      },
      {
        client: 'VeraneioTotal',
        title: 'Ótima Escolha para as Férias',
        assessment: `Comprei esta cadeira para as 
        nossas férias de verão e não poderia estar
        mais satisfeito. É reclinável e fácil de transportar. 
        Altamente recomendada para quem ama a praia.`,
        stars: 4,
        image: 'imagem',
        data: '2024-06-15',
      },
    ],
  },
  {
    id: 17,
    name: 'Conjunto de Panelas de Alumínio Fundido',
    description: `Este conjunto de panelas de alumínio fundido
    é perfeito para cozinhar suas refeições favoritas.
    O alumínio fundido proporciona um aquecimento uniforme e durabilidade.
    O conjunto inclui várias panelas de tamanhos diferentes para
    todas as suas necessidades culinárias.`,
    categories: 'Cozinha',
    subcategories: 'Panelas',
    characteristics: {
      stock: 10,
      brand: 'Chef Master',
      sales_format: 'Conjunto',
      cor: ['Preto'],
    },
    price: 199.99,
    quantity: 1,
    primaryImage: imageConjPanela,
    secondaryImage: imageConjPanela,
    ratting: [
      {
        client: 'ChefAmador',
        title: 'Qualidade na Cozinha',
        assessment: `Estas panelas de alumínio fundido são incríveis.
        O aquecimento uniforme torna o cozimento muito mais fácil.
        Este conjunto atende a todas as minhas necessidades na cozinha.`,
        stars: 4,
        image: 'imagem',
        data: '2024-07-20',
      },
      {
        client: 'AmanteDaCulinária',
        title: 'Conjunto Completo',
        assessment: `Este conjunto de panelas é um sonho para quem ama cozinhar. 
        As panelas têm tamanhos variados, e o alumínio 
        fundido é de alta qualidade. Um excelente investimento.`,
        stars: 4,
        image: 'imagem',
        data: '2024-08-15',
      },
      {
        client: 'AmanteDaCulinária',
        title: 'Conjunto Completo',
        assessment: `Este conjunto de panelas é um sonho para quem ama cozinhar. 
        As panelas têm tamanhos variados, e o alumínio 
        fundido é de alta qualidade. Um excelente investimento.`,
        stars: 1,
        image: 'imagem',
        data: '2024-08-15',
      },
      {
        client: 'AmanteDaCulinária',
        title: 'Conjunto Completo',
        assessment: `Este conjunto de panelas é um sonho para quem ama cozinhar. 
        As panelas têm tamanhos variados, e o alumínio 
        fundido é de alta qualidade. Um excelente investimento.`,
        stars: 1,
        image: 'imagem',
        data: '2024-08-15',
      },
    ],
  },
  {
    id: 18,
    name: 'Tênis de Corrida Leve',
    description: `Este tênis de corrida leve é perfeito 
    para atletas e entusiastas da corrida.
    Com amortecimento superior, é ideal para treinos diários e corridas longas.
    O design moderno e conforto excepcional tornam-no 
    uma escolha popular entre corredores.`,
    categories: 'Esportes',
    subcategories: 'Calçados Esportivos',
    characteristics: {
      stock: 30,
      brand: 'SpeedRun',
      sales_format: 'Unidade',
      cor: ['Azul', 'Vermelho', 'Preto'],
    },
    price: 79.99,
    quantity: 1,
    primaryImage: imageTenisCorrida,
    secondaryImage: imageTenisCorrida,
    ratting: [
      {
        client: 'RunnerPro',
        title: 'Conforto na Corrida',
        assessment: `Estes tênis de corrida são incrivelmente leves e confortáveis.
        Eles proporcionam um excelente amortecimento e suporte durante a corrida.
        Estou muito satisfeito.`,
        stars: 5,
        image: 'imagem',
        data: '2024-09-10',
      },
      {
        client: 'CorredoraAmadora',
        title: 'Ótima Escolha para Iniciantes',
        assessment: `Comprei esses tênis como iniciante na
        corrida e não poderia estar mais feliz.
        Eles são leves e fáceis de usar. Perfeitos para treinos diários.`,
        stars: 4,
        image: 'imagem',
        data: '2024-10-15',
      },
    ],
  },
  {
    id: 19,
    name: 'Samsung Galaxy S20',
    description: `O Samsung Galaxy S20 é um smartphone
    premium com uma tela de 6.2 polegadas e
    resolução Quad HD. Possui uma câmera de 64MP para fotos incríveis.
    Um poderoso processador
    e 12GB de RAM garantem desempenho excepcional. Este é o dispositivo perfeito para quem
    busca inovação e qualidade.`,
    categories: 'Eletrônicos',
    subcategories: 'Smartphones',
    characteristics: {
      stock: 50,
      brand: 'Samsung',
      sales_format: 'Unidade',
      cor: ['Preto', 'Branco', 'Azul', 'Cinza'],
    },
    price: 1199.99,
    quantity: 1,
    primaryImage: imageGalaxyS20,
    secondaryImage: imageGalaxyS20,
    ratting: [
      {
        client: 'Maria Silva',
        title: 'Ótimo Smartphone',
        assessment: `O Galaxy S20 é incrível!
        A câmera tira fotos nítidas e a tela é deslumbrante. Recomendo.`,
        stars: 5,
        image: 'imagem',
        data: '2023-10-15',
      },
      {
        client: 'José Santos',
        title: 'Desempenho Surpreendente',
        assessment: `Este smartphone é muito rápido e possui 
        muita memória. Adoro o design também.`,
        stars: 4,
        image: 'imagem',
        data: '2023-11-20',
      },
    ],
  },
  {
    id: 20,
    name: 'Apple iPhone 12 Pro Max',
    description: `O Apple iPhone 12 Pro Max é um dos melhores iPhones já lançados.
    Com sua tela Super Retina XDR de 6.7 polegadas e um sistema de câmera tripla,
    é perfeito para fotografia.
    O chip A14 Bionic proporciona desempenho excepcional.
    Este é o iPhone ideal para os amantes
    de tecnologia.`,
    categories: 'Eletrônicos',
    subcategories: 'Smartphones',
    characteristics: {
      stock: 40,
      brand: 'Apple',
      sales_format: 'Unidade',
      cor: ['Prata', 'Dourado', 'Grafite', 'Azul'],
    },
    price: 1299.99,
    quantity: 1,
    primaryImage: imageInphone12,
    secondaryImage: imageInphone12,
    ratting: [
      {
        client: 'Carlos Oliveira',
        title: 'Fotografia Incrível',
        assessment: `As câmeras deste iPhone são incríveis.
        As fotos saem perfeitas. Vale cada centavo.`,
        stars: 5,
        image: 'imagem',
        data: '2023-09-10',
      },
      {
        client: 'Ana Pereira',
        title: 'Design Elegante',
        assessment: `Adoro o design do iPhone 12 Pro Max.
        É elegante e a tela é espetacular.`,
        stars: 4,
        image: 'imagem',
        data: '2023-10-25',
      },
    ],
  },

];

export default products;
