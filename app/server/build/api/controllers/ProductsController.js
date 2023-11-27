"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProductsService_1 = __importDefault(require("../services/ProductsService"));
const mapStatusHTTP_1 = __importDefault(require("../../utils/mapStatusHTTP"));
class ProductsController {
    constructor(productService = new ProductsService_1.default()) {
        this.productService = productService;
    }
    async getAll(_req, res) {
        const serviceResponse = await this.productService.getAll();
        return res.status((0, mapStatusHTTP_1.default)(serviceResponse.status)).json(serviceResponse.data);
    }
}
exports.default = ProductsController;
//# sourceMappingURL=ProductsController.js.map