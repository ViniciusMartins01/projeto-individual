var motoModel = require("../models/motoModel");

function listar(req, res) {
    motoModel.listar().then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function cadastrar(req, res) {
        var nome = req.body.nome;

        if (nome == undefined) {
            res.status(400).send("Seu nome está undefined!");
        }

        motoModel.cadastrar(nome).then(function (resposta) {
            res.status(200).send("Carro criado com sucesso");
        }).catch(function (erro) {
            res.status(500).json(erro.sqlMessage);
        })
    }

module.exports = {
    listar,
    cadastrar
}