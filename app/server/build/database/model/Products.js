"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
const Categories_1 = __importDefault(require("./Categories"));
class Products extends sequelize_1.Model {
}
Products.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: sequelize_1.DataTypes.INTEGER,
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
    quantity: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    sequelize: _1.default,
    modelName: 'products',
    timestamps: false,
    underscored: true,
});
Products.belongsTo(Categories_1.default, { foreignKey: 'categories_id', as: 'categories' });
exports.default = Products;
//# sourceMappingURL=Products.js.map