var marcaModel = require("../models/marcaModel");

function cadastrar(req, res) {
    var nome = req.body.nomeServer;
    var foto = req.body.fotoServer;
    var pais = req.body.paisServer;
    var id = req.body.idServer;

    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (foto == undefined) {
        res.status(400).send("Sua foto está undefined!");
    } else if (id == undefined) {
        res.status(400).send("Seu id está undefined!");
    }else if (pais == undefined) {
        res.status(400).send("Seu pais está undefined!");
    } else {

        marcaModel.cadastrar(nome, foto, pais, id)
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
    marcaModel.listar().then(function (resultado) {
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