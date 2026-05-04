function inserirMensagem() {
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

            })
            .catch(function (resposta) {
                console.log(`#ERRO: ${resposta}`);
                finalizarAguardar();
            });

        return false;
    };

    function sumirMensagem() {
        cardErro.style.display = "none";
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
            });
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });
};