var database = require("../database/config");

function listar() {

  var instrucaoSql = `
        select
            m.modelo,
            count(f.idFavorito) as totalFavoritos
        from favorito f
        join moto m
            on f.fkMoto = m.idMoto
        group by m.idMoto, m.modelo
        order by totalFavoritos desc
        limit 5;`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function inserir(idMoto, idUsuario) {

  var instrucaoSql = `INSERT INTO favorito (fkMoto, fkUsuario) VALUES (${idMoto}, ${idUsuario});`

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  listar,
  inserir
}
