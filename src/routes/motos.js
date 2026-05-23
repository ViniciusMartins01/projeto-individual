var express = require("express");
var router = express.Router();

var motoController = require("../controllers/motoController");


router.get("/listar", function (req, res) {
    motoController.listar(req, res);
});

router.post("/cadastrar", function (req, res) {
    motoController.cadastrar(req, res);
});


module.exports = router;