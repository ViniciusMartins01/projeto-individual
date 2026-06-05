var express = require("express");
var router = express.Router();

var marcaController = require("../controllers/marcaController");


router.post("/cadastrar", function (req, res) {
    marcaController.cadastrar(req, res);
})

module.exports = router;