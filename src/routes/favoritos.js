var express = require("express");
var router = express.Router();

var favoritoController = require("../controllers/favoritoController");

router.get("/listar", function (req, res) {
  favoritoController.listar(req, res);
});

router.post("/inserir", function (req, res) {
  favoritoController.inserir(req, res);
})

module.exports = router;