CREATE DATABASE dark_souls_fandom;
USE dark_souls_fandom;

-- Criando a tabela 'usuario' para armazenar as informações do usuário de acordo com a tela 'Login'
CREATE TABLE usuario (
	id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    nome_usuario VARCHAR(60) NOT NULL UNIQUE,
    email VARCHAR(70) NOT NULL UNIQUE,
    senha VARCHAR(60) NOT NULL
);

-- Criando a tabela 'topico_comentario' que especifica qual tipo de comentário será a do usuário, de acordo com o tópico de fórum escolhido
CREATE TABLE topico_comentario (
	id_topico INT PRIMARY KEY AUTO_INCREMENT,
    tipo_topico VARCHAR(45)
);

-- Criando a tabela 'comentario' para armazenar os comentários do usuário de acordo com o fórum
CREATE TABLE comentario (
	id_comentario INT PRIMARY KEY AUTO_INCREMENT,
    texto VARCHAR(200) NOT NULL,
	fk_usuario INT,
    fk_topico INT,
    CONSTRAINT ctFkUsuario FOREIGN KEY (fk_usuario) REFERENCES usuario (id_usuario),
    CONSTRAINT ctFkTopico FOREIGN KEY (fk_topico) REFERENCES topico_comentario(id_topico)
);

-- Inserindo os tópicos de comentários de acordo com os tópicos da página de  fórum
INSERT INTO topico_comentario (tipo_topico) VALUES
	('Ajuda'),
    ('Dicas'),
    ('História'),
    ('Build');