var express = require("express");
var router = express.Router();

var avaliacaoController = require("../controllers/avaliacaoController");

router.post("/inserir", function (req, res) {
    avaliacaoController.inserir(req, res);
});

router.get("/listar", function (req, res) {
    avaliacaoController.listar(req, res);
});


module.exports = router;