var avaliacaoModel = require("../models/avaliacaoModel");

function inserir(req, res) {
    var nota = req.body.notaServer;
    var comentario = req.body.comentarioServer;
    var id = req.body.idServer


    if (nota == undefined) {
        res.status(400).send("Seu nota está undefined!");
    } else if (comentario == undefined) {
        res.status(400).send("Seu comentario está undefined!");
    } else if (id == undefined) {
        res.status(400).send("Seu id está undefined!");
    } else {

        avaliacaoModel.inserir(nota, comentario, id)
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
    avaliacaoModel.listar().then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    inserir,
    listar
}