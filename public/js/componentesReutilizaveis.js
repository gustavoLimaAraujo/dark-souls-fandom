let header = document.querySelector('.header');
let footer = document.querySelector('.footer');

header.innerHTML = `
    <header class="cor-primaria">
        <a href="index.html">
            <figure>
                <img src="assets/imgs/solaire-icon.png" alt="Icon do Solaire">
            </figure>
        </a>
        <nav>
            <ul>
                <li>
                    <a href="historia.html">História do Jogo</a>
                </li>
                <li>
                    <a href="sobre.html">Sobre o Jogo</a>
                </li>
                <li>
                    <a href="cadastro.html">Cadastro</a>
                </li>
                <li>
                    <a href="login.html">Login</a>
                </li>
            </ul>
        </nav>
    </header>
`

footer.innerHTML = `
    <footer class="cor-primaria">
        <h2>Todos os direitos reservados - © 2026 <a href="https://github.com/gustavoLimaAraujo">gustavoLimaAraujo</a></h2>
    </footer>
`