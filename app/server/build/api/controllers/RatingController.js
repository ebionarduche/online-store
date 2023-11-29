"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const RatingService_1 = __importDefault(require("../services/RatingService"));
const mapStatusHTTP_1 = __importDefault(require("../../utils/mapStatusHTTP"));
class RatingController {
    constructor(ratingService = new RatingService_1.default()) {
        this.ratingService = ratingService;
    }
    async getAll(_req, res) {
        const serviceResponse = await this.ratingService.getAll();
        return res.status((0, mapStatusHTTP_1.default)(serviceResponse.status)).json(serviceResponse.data);
    }
}
exports.default = RatingController;
//# sourceMappingURL=RatingController.js.map