let header = document.querySelector('.header');
let footer = document.querySelector('.footer');
let tipografia = document.querySelector('.tipografia');

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
                    <a href="#">História do Jogo</a>
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

tipografia.innerHTML = `
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Kaisei+Opti&display=swap" rel="stylesheet">
`