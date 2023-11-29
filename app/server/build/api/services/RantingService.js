"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const RatingModel_1 = __importDefault(require("../model/RatingModel"));
class RantingService {
    constructor(rantingModel = new RatingModel_1.default()) {
        this.rantingModel = rantingModel;
    }
    async getAll() {
        const allRating = await this.rantingModel.findAll();
        return { status: 'SUCCESS', data: allRating };
    }
}
exports.default = RantingService;
//# sourceMappingURL=RantingService.js.map