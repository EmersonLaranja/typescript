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
        return res.status(200).json(novoPet);
    };
    PetController.prototype.listaPets = function (req, res) {
        return res.status(200).json(listaDePets);
    };
    PetController.prototype.atualizaPet = function (req, res) {
        var id = req.params.id;
        var _a = req.body, especie = _a.especie, idade = _a.idade, nome = _a.nome;
        var pet = listaDePets.find(function (pet) { return pet.id === Number(id); });
        if (!pet) {
            return res.status(400).json({ mensagem: "Pet não encontrado" });
        }
        pet.nome = nome;
        pet.idade = idade;
        pet.especie = especie;
        return res.status(200).json(pet);
    };
    PetController.prototype.deletaPet = function (req, res) {
        var id = req.params.id;
        var pet = listaDePets.find(function (pet) { return pet.id === Number(id); });
        if (!pet) {
            return res.status(400).json({ mensagem: "Pet não encontrado" });
        }
        var indice = listaDePets.indexOf(pet);
        listaDePets.splice(indice, 1);
        return res.status(204).json();
    };
    return PetController;
}());
exports.default = PetController;
