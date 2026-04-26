let header = document.querySelector('.header');
let footer = document.querySelector('.footer');
let headerHome = document.querySelector('.header_home');

if(header != null){
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
}

if(headerHome != null){
    headerHome.innerHTML = `
        <header class="cor-primaria">
            <a href="index.html">
                <figure>
                    <img src="../assets/imgs/solaire-icon.png" alt="Icon do Solaire">
                </figure>
            </a>
            <nav>
                <ul>
                    <li>
                        <a href="#">Desenvolvedor</a>
                    </li>
                    <li>
                        <a href="#">Fórum</a>
                    </li>
                    <li>
                        <a href="#">Dashboard</a>
                    </li>
                </ul>
            </nav>

            <button onclick="window.location.href='index.html'">
                <figure>
                    <h2>Saída</h2>
                    <img src="../assets/imgs/icon-sair.png" alt="Icon de Sair">
                </figure>
            </button>
        </header>
    `
}

if(footer != null){
    footer.innerHTML = `
        <footer class="cor-primaria">
            <h2>Todos os direitos reservados - © 2026 <a href="https://github.com/gustavoLimaAraujo">gustavoLimaAraujo</a></h2>
        </footer>
    `
}