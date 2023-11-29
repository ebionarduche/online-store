"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Categories_1 = __importDefault(require("../../database/model/Categories"));
class CategoriesModel {
    constructor() {
        this.model = Categories_1.default;
    }
    async findAll() {
        const data = await this.model.findAll();
        return data;
    }
}
exports.default = CategoriesModel;
//# sourceMappingURL=CategoriesModel.js.map