var marcaModel = require("../models/marcaModel");

function buscarUltimasmarcas(req, res) {

    const limite_linhas = 7;

    var idAquario = req.params.idAquario;

    console.log(`Recuperando as ultimas ${limite_linhas} marcas`);

    marcaModel.buscarUltimasmarcas(idAquario, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas marcas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function buscarmarcasEmTempoReal(req, res) {

    var idAquario = req.params.idAquario;

    console.log(`Recuperando marcas em tempo real`);

    marcaModel.buscarmarcasEmTempoReal(idAquario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas marcas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    buscarUltimasmarcas,
    buscarmarcasEmTempoReal

}