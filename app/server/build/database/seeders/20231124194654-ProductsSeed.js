"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    up: async (queryInterface) => {
        await queryInterface.bulkInsert('products', [
            {
                name: ' Samsung Galaxy S10 - (256GB)',
                description: `Fotografia profissional no seu bolso Descubra
          infinitas possibilidades para suas fotos com as 3 câmeras principais de sua
          equipe Teste sua criatividade e jogue com iluminação,
          diferentes planos e efeitos para obter ótimos resultados.`,
                categories_id: 2,
                stock: 50,
                brand: 'Samsung',
                sales_format: 'Unidade',
                colors: 'Preto,Prata,Azul,Rosa',
                price: 1890.9,
                quantity: 1,
            },
            {
                name: 'Fritadeira Air Fryer 4l Mundial',
                description: `A Fritadeira Sem Óleo Air Fryer Afn40-bft 4l 1500w Mondial é prática,
          rápida e saudável! Com a tecnologia de circulação de ar quente, ela cozinha, frita,
          assa ou tosta os alimentos sem precisar adicionar óleo.`,
                categories_id: 4,
                stock: 60,
                brand: 'Mondial',
                sales_format: 'Unidade',
                colors: 'Preto, Prata, Azul',
                price: 356.3,
                quantity: 1,
            },
        ], {});
    },
    down: async (queryInterface) => {
        await queryInterface.bulkDelete('products', {});
    },
};
//# sourceMappingURL=20231124194654-ProductsSeed.js.map