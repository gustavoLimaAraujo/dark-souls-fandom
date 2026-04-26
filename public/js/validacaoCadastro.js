// Array para armazenar usuarios cadastrados para validação de código de ativação 
let listaUsuariosCadastrados = [];

function cadastrar() {

//Recupere o valor da nova input pelo nome do id
// Agora vá para o método fetch logo abaixo
var nomeVar = ipt_nome.value;
var emailVar = ipt_email.value;
var senhaVar = ipt_senha.value;
var confirmacaoSenhaVar = ipt_confirmacao_senha.value;
var idUsuarioVincular;

// Verificando se há algum campo em branco
if (
    nomeVar == "" ||
    emailVar == "" ||
    senhaVar == "" ||
    confirmacaoSenhaVar == ""
) {
    cardErro.style.display = "block";
    mensagem_erro.innerHTML =
    "Os campos não podem ser nulos!";
    finalizarAguardar();
    return false;
} 
// Validações específicas para cada campo
else if(nomeVar.length <= 1){
    cardErro.style.display = "block";
    mensagem_erro.innerHTML =
    "Seu nome não está dentro das nossos parametros! Insira um nome maior que um caracter";
    finalizarAguardar();
    return false;
}else if(!emailVar.includes("@") || !emailVar.includes(".")) {
    cardErro.style.display = "block";
    mensagem_erro.innerHTML =
    "Seu email não está seguindo nossos parametros! Insira um e-mail que tenha '@' e '.'";

    finalizarAguardar();
    return false;
}else if(senhaVar <= 6) {
    cardErro.style.display = "block";
    mensagem_erro.innerHTML =
    "Sua senha não está seguindo nossos parametros! Insira uma senha com mais de 6 senhas";

    finalizarAguardar();
    return false;
} else if(confirmacaoSenhaVar != senhaVar){
    cardErro.style.display = "block";
    mensagem_erro.innerHTML =
    "Sua senha de confirmação não é igual a sua senha!";

    finalizarAguardar();
    return false;
}else {
    setInterval(sumirMensagem, 5000);
}

console.log(listaUsuariosCadastrados)
console.log(nomeVar)
console.log(emailVar)

// Verificando se o usuário e o e-mail é já existe dentro do banco de dados
for (let i = 0; i < listaUsuariosCadastrados.length; i++) {
    if (listaUsuariosCadastrados[i].nome_usuario != nomeVar && listaUsuariosCadastrados[i].email != emailVar) {
        idUsuarioVincular = listaUsuariosCadastrados[i].id;
        console.log("Nome de usuário e E-mail válido.");
        break;
    } else {
        cardErro.style.display = "block";
        if(listaUsuariosCadastrados[i].nome_usuario == nomeVar){
            mensagem_erro.innerHTML = "Nome de usuário já cadastrados!";
        }
        if(listaUsuariosCadastrados[i].email == emailVar){
            mensagem_erro.innerHTML = "E-mail já cadastrados!";
        }
        finalizarAguardar();
    }
}

// Enviando o valor da nova input
fetch("/usuarios/cadastrar", {
    method: "POST",
    headers: {
    "Content-Type": "application/json",
    },
    body: JSON.stringify({
        // crie um atributo que recebe o valor recuperado aqui
        // Agora vá para o arquivo routes/usuario.js

        // Todos os valores que eu estiver atribuindo neste arquivo, vão ser utilizadas/"pegadas" no arquivo usuarioController.js 
        nomeUsuarioServer: nomeVar,
        emailServer: emailVar,
        senhaServer: senhaVar
    }),
})
    .then(function (resposta) {
    console.log("resposta: ", resposta);

    if (resposta.ok) {
        cardErro.style.display = "block";

        mensagem_erro.innerHTML =
        "Cadastro realizado com sucesso! Redirecionando para tela de Login...";

        setTimeout(() => {
        window.location = "login.html";
        }, "2000");

        limparFormulario();
        finalizarAguardar();
    } else {
        throw "Houve um erro ao tentar realizar o cadastro!";
    }
    })
    .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
        finalizarAguardar();
    });

return false;
}

// Listando usuarios cadastradas 
function listar() {
fetch("/usuarios/listar", {
    method: "GET",
})
    .then(function (resposta) {
    resposta.json().then((usuarios) => {
        usuarios.forEach((usuario) => {
        listaUsuariosCadastrados.push(usuario);

        console.log("listaUsuariosCadastrados")
        console.log(listaUsuariosCadastrados[0].nome_usuario)
        });
    });
    })
    .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });
}

function sumirMensagem() {
    cardErro.style.display = "none";
}