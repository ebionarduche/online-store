"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
var PORT = process.env.APP_PORT || 3001;
new app_1.App().start(PORT);
