"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Products_1 = __importDefault(require("../../database/model/Products"));
const sequelize_1 = require("sequelize");
class ProductModel {
    constructor() {
        this.model = Products_1.default;
    }
    async findAll() {
        const data = await this.model.findAll({
            attributes: [
                'id',
                'name',
                'description',
                'categoriesId',
                'stock',
                'brand',
                'salesFormat',
                'colors',
                'price',
                'quantity',
                [
                    sequelize_1.Sequelize.literal('(SELECT category FROM categories WHERE categories.id = products.categories_id)'),
                    'category',
                ],
            ],
        });
        return data;
    }
    async findById(id) {
        const data = await this.model.findByPk(id);
        if (data == null)
            return null;
        return data;
    }
}
exports.default = ProductModel;
//# sourceMappingURL=ProductsModel.js.map