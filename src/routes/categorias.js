var express = require("express");
var router = express.Router();

var categoriaController = require("../controllers/categoriaController");

router.get("/listar", function (req, res) {
    categoriaController.listar(req, res);
});

router.get("/listar/:idUsuario", function (req, res) {
    categoriaController.listarPorUsuario(req, res);
});

router.get("/pesquisar/:descricao", function (req, res) {
    categoriaController.pesquisarDescricao(req, res);
});

router.post("/publicar/:idUsuario", function (req, res) {
    categoriaController.publicar(req, res);
});

router.put("/editar/:idcategoria", function (req, res) {
    categoriaController.editar(req, res);
});

router.delete("/deletar/:idcategoria", function (req, res) {
    categoriaController.deletar(req, res);
});

module.exports = router;