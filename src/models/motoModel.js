var database = require("../database/config");

function listar() {
    console.log("ACESSEI O MOTO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function obter()");
    var instrucaoSql = `
            select modelo, velocidadeMax, peso, potencia, consumo, torque, preco, cilindrada, imagem, nome as categoria, idMoto from moto join categoria on fkCategoria = idCategoria;
        `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrar(modelo, velocidadeMax, cilindrada, potencia, torque, peso, consumo, preco, foto, marca, categoria, id, desc) {
    var instrucao = `
        INSERT INTO moto (modelo, velocidadeMax, cilindrada, potencia, torque, peso, consumo, preco, imagem, fkMarca, fkCategoria, fkUsuario, descricao) VALUES ('${modelo}', ${velocidadeMax}, ${cilindrada}, ${potencia}, ${torque}, ${peso}, ${consumo}, ${preco}, '${foto}', ${marca}, ${categoria}, ${id}, '${desc}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function obter() {
    console.log("ACESSEI O MOTO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function obter()");
    var instrucaoSql = `
            select
        (select count(*) from moto) as totalMotos,
        (select count(*) from usuario) as totalUsuarios,
        (select count(*) from categoria) as totalCategoria,
        (select count(*) from marca) as totalMarcas,
        (select count(visualizacoes) from moto) as totalVisualizacao,
        (select round(avg(nota), 1) from avaliacao) as mediaAvaliacao;
        `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function obterUltimas() {
    console.log("ACESSEI O MOTO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function obter()");
    var instrucaoSql = `
        select m.idMoto, m.modelo, c.nome as categoria, mr.nome as marca
        from moto m join categoria c
        on m.fkCategoria = c.idCategoria
        join marca mr
        on m.fkMarca = mr.idMarca
        order by idMoto desc
        limit 5;
        `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrar,
    listar,
    obter,
    obterUltimas
}