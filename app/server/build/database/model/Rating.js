"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
const Products_1 = __importDefault(require("./Products"));
class Rating extends sequelize_1.Model {
}
Rating.init({
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
}, {
    sequelize: _1.default,
    modelName: 'ratings',
    timestamps: false,
    underscored: true,
});
Rating.belongsTo(Products_1.default, { foreignKey: 'products_id', as: 'products' });
exports.default = Rating;
//# sourceMappingURL=Rating.js.map