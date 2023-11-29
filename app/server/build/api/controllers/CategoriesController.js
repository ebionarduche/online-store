"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CategoriesService_1 = __importDefault(require("../services/CategoriesService"));
const mapStatusHTTP_1 = __importDefault(require("../../utils/mapStatusHTTP"));
class CategoriesController {
    constructor(categoriesService = new CategoriesService_1.default()) {
        this.categoriesService = categoriesService;
    }
    async getAll(_req, res) {
        const serviceResponse = await this.categoriesService.getAll();
        return res.status((0, mapStatusHTTP_1.default)(serviceResponse.status)).json(serviceResponse.data);
    }
}
exports.default = CategoriesController;
//# sourceMappingURL=CategoriesController.js.map