var database = require("../database/config");

function listar() {
    console.log("ACESSEI O MOTO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function obter()");
        var instrucaoSql = `
            select modelo, velocidadeMax, peso, potencia, consumo, torque, preco, cilindrada from moto;
        `;
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
}

function cadastrar(modelo) {
    var instrucao = `
        INSERT INTO moto (modelo) VALUES ('${modelo}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    listar
};