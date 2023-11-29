"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    up: async (queryInterface) => {
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
    down: async (queryInterface) => {
        await queryInterface.bulkDelete('ratings', {});
    },
};
//# sourceMappingURL=20231129201828-RatingSeed.js.map