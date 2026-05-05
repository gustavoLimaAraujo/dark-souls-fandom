function inserirMensagem(event) {
    // Evita o comportamento padrão de recarregar a página pelo form
    if (event) {
        event.preventDefault();
    }

    var mensagem = ipt_mensagem.value;  
    var id_usuario = sessionStorage.ID_USUARIO;

    console.log("Conteúdo da mensagem: ", mensagem);
    console.log("ID do usuário: ", id_usuario);

    fetch("/usuarios/inserirAjuda", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({
            mensagemUsuario: mensagem,
            idUsuario: id_usuario
        }),
    })
        .then(function (resposta) {
            console.log("resposta: ", resposta);
            listarMensagensAjuda();
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });

    return false;
};


function listarMensagensAjuda() {
    fetch("/usuarios/listarMensagensAjuda", {
        method: "GET",
    })
        .then(function (resposta) {
            resposta.json().then((mensagens) => {
                
                let containerMensage = document.getElementById("container_mensage");
                containerMensage.innerHTML = ""; 
                
                mensagens.forEach((mensagem) => {

                    if(mensagem.fk_usuario != sessionStorage.ID_USUARIO){
                        containerMensage.innerHTML += `

                            <div class="mensage user">
                                <h2 class="user">${mensagem.nome_usuario}</h2>
                                <p class="text-user">
                                    ${mensagem.texto}
                                </p>
                            </div>
                        `;
                    } else {
                                containerMensage.innerHTML += `

                            <div class="mensage you">
                                <h2 class="user">${sessionStorage.NOME_USUARIO}</h2>
                                <p class="text-user">
                                    ${mensagem.texto}
                                </p>
                            </div>
                        `;
                    }

                });
                rolarParaFinal();
            });
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });
};

function rolarParaFinal() {
    var containerMensage = document.getElementById("container_mensage");
    containerMensage.scrollTop = containerMensage.scrollHeight;
}