"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = {
    up(queryInterface) {
        return queryInterface.createTable('products', {
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            description: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: false,
            },
            categoriesId: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                field: 'categories_id',
                references: {
                    model: 'categories',
                    key: 'id',
                },
            },
            stock: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
            },
            brand: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            salesFormat: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
                field: 'sales_format',
            },
            colors: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            price: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: false,
            },
            image: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
        });
    },
    down(queryInterface) {
        return queryInterface.dropTable('products');
    },
};
//# sourceMappingURL=02-create-products.table.js.map