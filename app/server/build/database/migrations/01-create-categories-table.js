"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = {
    up(queryInterface) {
        return queryInterface.createTable('categories', {
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            category: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
        });
    },
    down(queryInterface) {
        return queryInterface.dropTable('categories');
    },
};
//# sourceMappingURL=01-create-categories-table.js.map