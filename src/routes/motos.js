var express = require("express");
var router = express.Router();

var motoController = require("../controllers/motoController");


router.get("/ObterDados", function (req, res) {
    medidaController.ObterDadosMoto(req, res);
});


module.exports = router;