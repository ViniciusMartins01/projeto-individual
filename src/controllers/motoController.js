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
        var modelo = req.body.modeloServer;
        var velocidadeMax = req.body.velocidadeMaxServer;
        var cilindrada = req.body.cilindradaServer;
        var potencia = req.body.potenciaServer;
        var torque = req.body.torqueServer;
        var peso = req.body.pesoServer;
        var consumo = req.body.consumoServer;
        var foto = req.body.fotoServer;
        var marca = req.body.marcaServer;
        var categoria = req.body.categoriaServer;
        var preco = req.body.precoServer;
        var id = req.body.idServer;
        var desc = req.body.descServer

        motoModel.cadastrar(modelo, velocidadeMax, cilindrada, potencia, torque, peso, consumo, preco, foto, marca, categoria, id, desc).then(function (resposta) {
            res.status(200).send("Moto criada com sucesso");
        }).catch(function (erro) {
            res.status(500).json(erro.sqlMessage);
        })
    }

    function obter(req, res) {
    motoModel.obter().then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

    function obterUltimas(req, res) {
    motoModel.obterUltimas().then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


module.exports = {
    listar,
    cadastrar,
    obter,
    obterUltimas
}