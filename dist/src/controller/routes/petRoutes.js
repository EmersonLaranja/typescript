"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var PetController_1 = __importDefault(require("../PetController"));
var router = express_1.default.Router();
var petController = new PetController_1.default();
router.post("/", function (req, res) {
    petController.criaPet(req, res);
});
exports.default = router;
