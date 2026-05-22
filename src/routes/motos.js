var express = require("express");
var router = express.Router();

var motoController = require("../controllers/motoController");


router.get("/pegarDadosMoto", function (req, res) {
    motoController.pegarDadosMoto(req, res);
});


module.exports = router;