var express = require("express");
var router = express.Router();

var favoritoController = require("../controllers/favoritoController");

router.get("/:empresaId", function (req, res) {
  favoritoController.buscarfavoritosPorEmpresa(req, res);
});

router.post("/cadastrar", function (req, res) {
  favoritoController.cadastrar(req, res);
})

module.exports = router;