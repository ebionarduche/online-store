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
        const allProducts = await this.productModel.findAll();
        return { status: 'SUCCESS', data: allProducts };
    }
}
exports.default = ProductsService;
//# sourceMappingURL=ProductsService.js.map