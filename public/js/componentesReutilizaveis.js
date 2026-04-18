let header = document.querySelector('.header');
let footer = document.querySelector('.footer');

header.innerHTML = `
    <header>
        <a href="index.html">
            <figure>
                <img src="assets/imgs/solaire-icon.png" alt="Icon do Solaire">
            </figure>
        </a>
        <nav>
            <ul>
                <li>
                    <a href="#">História do Jogo</a>
                </li>
                <li>
                    <a href="#">Sobre o Jogo</a>
                </li>
                <li>
                    <a href="#">Cadastro</a>
                </li>
                <li>
                    <a href="#">Login</a>
                </li>
            </ul>
        </nav>
    </header>
`

footer.innerHTML = `
    <footer>
        <h2>Todos os direitos reservados - © 2026 <a href="https://github.com/gustavoLimaAraujo">gustavoLimaAraujo</a></h2>
    </footer>
`