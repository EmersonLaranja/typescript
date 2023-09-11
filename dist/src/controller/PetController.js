"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var listaDePets = [];
var PetController = /** @class */ (function () {
    function PetController() {
    }
    PetController.prototype.criaPet = function (req, res) {
        var _a = req.body, id = _a.id, especie = _a.especie, idade = _a.idade, nome = _a.nome;
        if (id == undefined ||
            especie == undefined ||
            idade == undefined ||
            nome == undefined) {
            return res
                .status(400)
                .json({ mensagem: "Todos os campos são obrigatórios" });
        }
        var novoPet = {
            id: Number(id),
            especie: especie,
            idade: Number(id),
            nome: nome,
        };
        listaDePets.push(novoPet);
        return res.json(novoPet);
    };
    return PetController;
}());
exports.default = PetController;
