"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    up: async (queryInterface) => {
        await queryInterface.bulkInsert('categories', [
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
        ], {});
    },
    down: async (queryInterface) => {
        await queryInterface.bulkDelete('categories', {});
    },
};
//# sourceMappingURL=20231123222255-CategoriesSeed.js.map