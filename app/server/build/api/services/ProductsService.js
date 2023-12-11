"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProductsModel_1 = __importDefault(require("../model/ProductsModel"));
class ProductsService {
    constructor(productModel = new ProductsModel_1.default()) {
        this.productModel = productModel;
    }
    async getAll() {
        const products = await this.productModel.findAll();
        return { status: 'SUCCESS', data: products };
    }
    async getProductsById(id) {
        const product = await this.productModel.findById(id);
        if (!product)
            return { status: 'NOT_FOUND', data: { message: 'Produto não encontrado' } };
        return { status: 'SUCCESS', data: product };
    }
}
exports.default = ProductsService;
//# sourceMappingURL=ProductsService.js.map