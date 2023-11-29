"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const RatingController_1 = __importDefault(require("../api/controllers/RatingController"));
const ratingController = new RatingController_1.default();
const router = (0, express_1.Router)();
router.get('/ratings', (req, res) => ratingController.getAll(req, res));
exports.default = router;
//# sourceMappingURL=ratingRoutes.js.map