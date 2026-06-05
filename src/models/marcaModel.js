var database = require("../database/config");

function cadastrar(nome, foto, pais, id) {
    console.log("ACESSEI O MARCA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, foto, id);

    var instrucaoSql = `
        INSERT INTO marca (nome, logo, paisOrigem, fkUsuario) VALUES ('${nome}', '${foto}', '${pais}',${id});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrar
}

