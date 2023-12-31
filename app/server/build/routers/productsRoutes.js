"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProductsController_1 = __importDefault(require("../api/controllers/ProductsController"));
const productsController = new ProductsController_1.default();
const router = (0, express_1.Router)();
router.get('/products', (req, res) => productsController.getAll(req, res));
router.get('/products/:id', (req, res) => productsController.getProductsById(req, res));
exports.default = router;
//# sourceMappingURL=productsRoutes.js.map