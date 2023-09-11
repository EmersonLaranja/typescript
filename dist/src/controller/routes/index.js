"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var petRoutes_1 = __importDefault(require("../routes/petRoutes"));
var router = function (app) {
    app.use("/pets", petRoutes_1.default);
};
exports.default = router;
