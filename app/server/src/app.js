"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = exports.App = void 0;
var express_1 = __importDefault(require("express"));
var routers_1 = __importDefault(require("./routers"));
var App = /** @class */ (function () {
    function App() {
        this.app = (0, express_1.default)();
        this.config();
        // Não remover essa rota
        this.app.get('/', function (req, res) { return res.json({ ok: true }); });
    }
    App.prototype.config = function () {
        var accessControl = function (_req, res, next) {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
            res.header('Access-Control-Allow-Headers', '*');
            next();
        };
        this.app.use(express_1.default.json());
        this.app.use(accessControl);
        this.app.use(routers_1.default);
    };
    App.prototype.start = function (PORT) {
        this.app.listen(PORT, function () { return console.log("Running on port " + PORT); });
    };
    return App;
}());
exports.App = App;
// Essa segunda exportação é estratégica, e a execução dos testes de cobertura depende dela
exports.app = new App().app;
