"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    up: async (queryInterface) => {
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
    down: async (queryInterface) => {
        await queryInterface.bulkDelete('users', {});
    },
};
//# sourceMappingURL=20211205212238-user.js.map