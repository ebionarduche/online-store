"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CategoriesController_1 = __importDefault(require("../api/controllers/CategoriesController"));
const categoriesController = new CategoriesController_1.default();
const router = (0, express_1.Router)();
router.get('/categories', (req, res) => categoriesController.getAll(req, res));
exports.default = router;
//# sourceMappingURL=categoriesRoutes.js.map