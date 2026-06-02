var express = require("express");
var router = express.Router();

var marcaController = require("../controllers/marcaController");

router.get("/ultimas/:idAquario", function (req, res) {
    marcaController.buscarUltimasmarcas(req, res);
});

router.get("/tempo-real/:idAquario", function (req, res) {
    marcaController.buscarmarcasEmTempoReal(req, res);
})

module.exports = router;