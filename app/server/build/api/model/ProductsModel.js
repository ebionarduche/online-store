"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Products_1 = __importDefault(require("../../database/model/Products"));
class ProductModel {
    constructor() {
        this.model = Products_1.default;
    }
    async findAll() {
        const data = await this.model.findAll();
        return data;
    }
}
exports.default = ProductModel;
//# sourceMappingURL=ProductsModel.js.map