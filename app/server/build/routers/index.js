"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productsRoutes_1 = __importDefault(require("./productsRoutes"));
const categoriesRoutes_1 = __importDefault(require("./categoriesRoutes"));
const ratingRoutes_1 = __importDefault(require("./ratingRoutes"));
const router = (0, express_1.Router)();
router.use('/', productsRoutes_1.default);
router.use('/', categoriesRoutes_1.default);
router.use('/', ratingRoutes_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map