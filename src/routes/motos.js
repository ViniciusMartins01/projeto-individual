var express = require("express");
var router = express.Router();

var motoController = require("../controllers/motoController");


router.get("/listar", function (req, res) {
    motoController.listar(req, res);
});

router.post("/cadastrar", function (req, res) {
    motoController.cadastrar(req, res);
});

router.get("/obter", function (req, res) {
    motoController.obter(req, res);
});

router.get("/obterUltimas", function (req, res) {
    motoController.obterUltimas(req, res);
});

router.get("/detalhes/:id", function (req, res) {
    motoController.obterDetalhes(req, res);
});

router.delete("/excluir/:id", function (req, res) {
    motoController.excluir(req, res);
});


module.exports = router;