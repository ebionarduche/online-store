"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = {
    up(queryInterface) {
        return queryInterface.createTable('ratings', {
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            productsId: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                field: 'products_id',
                references: {
                    model: 'products',
                    key: 'id',
                },
            },
            client: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            title: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            assessment: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: false,
            },
            stars: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
            },
            date: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: false,
            },
        });
    },
    down(queryInterface) {
        return queryInterface.dropTable('ratings');
    },
};
//# sourceMappingURL=03-create-rating.js.map