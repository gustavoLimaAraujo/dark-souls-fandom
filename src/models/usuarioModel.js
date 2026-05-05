var database = require("../database/config.js")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function autenticar(): ", email, senha)
    var instrucaoSql = `
        SELECT * FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUsuarioPorEmail(email) {
  console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarUsuarioPorEmail(): ", email)
  var instrucaoSql = `SELECT * FROM usuario WHERE email = '${email}'`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Todos os parâmetros que eu inseri na função 'cadastar', são as colunas da minha entidade 'usuario'
function cadastrar(nome_usuario, email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome_usuario, email, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO usuario (nome_usuario, email, senha) VALUES ('${nome_usuario}', '${email}', '${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function inserirAjuda(mensagem, id_usuario){
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function inserirAjuda():", mensagem, id_usuario);

    var instrucaoSql = `
        INSERT INTO comentario (texto, fk_usuario, fk_topico) VALUES ('${mensagem}', ${id_usuario}, 1);
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarMensagensAjuda(){
  console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarMensagensAjuda()")
  var instrucaoSql = `SELECT texto, fk_usuario, fk_topico, nome_usuario FROM comentario JOIN usuario ON fk_usuario = id_usuario ORDER BY id_comentario ASC`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function listar() {
  console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()")
  var instrucaoSql = `SELECT * FROM usuario`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    buscarUsuarioPorEmail,
    cadastrar,
    listar,
    inserirAjuda,
    listarMensagensAjuda
};