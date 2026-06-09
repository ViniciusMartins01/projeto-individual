var categoriaModel = require("../models/categoriaModel");

function cadastrar(req, res) {
    var nome = req.body.nomeServer;
    var desc = req.body.descServer;
    var id = req.body.idServer;

    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (desc == undefined) {
        res.status(400).send("Seu desc está undefined!");
    } else if (id == undefined) {
        res.status(400).send("Sua id está undefined!");
    } else {

        categoriaModel.cadastrar(nome, desc, id)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function listar(req, res) {
    categoriaModel.listar().then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    cadastrar,
    listar
}