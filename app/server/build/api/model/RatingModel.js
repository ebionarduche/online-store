"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Rating_1 = __importDefault(require("../../database/model/Rating"));
class RatingModel {
    constructor() {
        this.model = Rating_1.default;
    }
    async findAll() {
        const data = await this.model.findAll();
        return data;
    }
}
exports.default = RatingModel;
//# sourceMappingURL=RatingModel.js.map