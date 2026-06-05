var express = require("express");
var router = express.Router();

var categoriaController = require("../controllers/categoriaController");

router.post("/cadastrar", function (req, res) {
    categoriaController.cadastrar(req, res);
});

module.exports = router;