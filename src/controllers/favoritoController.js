var favoritoModel = require("../models/favoritoModel");

function listar(req, res) {

  favoritoModel.listar().then((resultado) => {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar os favoritos: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}


function inserir(req, res) {
  var idMoto = req.body.idMoto;
  var idUsuario = req.body.idUsuario;

  if (idMoto == undefined) {
    res.status(400).send("idMoto está undefined!");
  } else if (idUsuario == undefined) {
    res.status(400).send("idUsuario está undefined!");
  } else {
    favoritoModel.inserir(idMoto, idUsuario)
      .then((resultado) => {
        res.status(201).json(resultado);
      }
      ).catch((erro) => {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o cadastro! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

module.exports = {
  listar,
  inserir
}