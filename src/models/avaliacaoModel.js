var database = require("../database/config")

function inserir(nota, comentario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nota, comentario);
    var instrucaoSql = `
        INSERT INTO avaliacao (nota, descricao) VALUES ('${nota}', '${comentario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function listar() {
    console.log("ACESSEI O AVALIACAO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function obter()");
    var instrucaoSql = `
            select
                sum(case when nota = 1 then 1 else 0 end) as nota1,
                sum(case when nota = 2 then 1 else 0 end) as nota2,
                sum(case when nota = 3 then 1 else 0 end) as nota3,
                sum(case when nota = 4 then 1 else 0 end) as nota4,
                sum(case when nota = 5 then 1 else 0 end) as nota5
            from avaliacao;
        `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    inserir,
    listar
};