"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const RatingModel_1 = __importDefault(require("../model/RatingModel"));
class RatingService {
    constructor(ratingModel = new RatingModel_1.default()) {
        this.ratingModel = ratingModel;
    }
    async getAll() {
        const allRating = await this.ratingModel.findAll();
        return { status: 'SUCCESS', data: allRating };
    }
}
exports.default = RatingService;
//# sourceMappingURL=RatingService.js.map