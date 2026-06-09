create database motobyte;
use motobyte;

create table usuario (
id int primary key auto_increment,
nome varchar(45) not null,
senha varchar(45) not null,
email varchar(45) not null unique,
dataCadastro DATETIME DEFAULT CURRENT_TIMESTAMP);

CREATE TABLE marca (
    idMarca INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL UNIQUE,
    paisOrigem VARCHAR(100),
    logo VARCHAR(255),
    fkUsuario int not null,
    constraint fkMarcaUsuario foreign key (fkUsuario) references usuario(id)
);

CREATE TABLE categoria (
    idCategoria INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL UNIQUE,
    fkUsuario int null,
    constraint fkCategoriaUsuario foreign key (fkUsuario) references usuario(id)
);

CREATE TABLE moto (
    idMoto INT PRIMARY KEY AUTO_INCREMENT,
    modelo VARCHAR(150) NOT NULL,
    cilindrada INT NOT NULL,
    potencia INT,
    torque DECIMAL(10,2),
    velocidadeMax INT,
    peso DECIMAL(10,2),
    consumo DECIMAL(10,2),
    preco DECIMAL(10,2),
    descricao TEXT,
    imagem VARCHAR(255),
    dataCadastro DATETIME DEFAULT CURRENT_TIMESTAMP,
    fkMarca INT NOT NULL,
    fkCategoria INT NOT NULL,
    fkUsuario INT NOT NULL, 
    
    CONSTRAINT fkMotoUsuario
        FOREIGN KEY (fkUsuario)
        REFERENCES usuario(id),
        
    CONSTRAINT fkMotoMarca
        FOREIGN KEY (fkMarca)
        REFERENCES marca(idMarca),

    CONSTRAINT fkMotoCategoria
        FOREIGN KEY (fkCategoria)
        REFERENCES categoria(idCategoria)
);

create table avaliacao(
    idAvaliacao int primary key auto_increment,
    nota int,
    descricao text,
    fkUsuario int not null unique,
    foreign key (fkUsuario)
        references usuario(id)
);

create table favorito(
    idFavorito int primary key auto_increment,
    fkUsuario int not null,
    fkMoto int not null,
    foreign key (fkUsuario)
        references usuario(id),

    FOREIGN KEY (fkMoto)
		REFERENCES moto(idMoto)
			ON DELETE CASCADE

);
INSERT INTO usuario (nome, senha, email) VALUES 
('Vinícius Martins', 'Vini/0108', 'vinicius@email.com'),
('João Silva', '123456', 'joao.silva@email.com'),
('Maria Oliveira', '654321', 'maria.oliveira@email.com'),
('Pedro Santos', 'abc123', 'pedro.santos@email.com'),
('Ana Costa', 'senha123', 'ana.costa@email.com');

INSERT INTO marca (nome, paisOrigem, logo, fkUsuario) VALUES
('Honda', 'Japão', 'honda.png', 1),
('Yamaha', 'Japão', 'yamaha.png', 1),
('Kawasaki', 'Japão', 'kawasaki.png', 1),
('Suzuki', 'Japão', 'suzuki.png', 1),
('BMW', 'Alemanha', 'bmw.png', 1),
('Bajaj', 'India', 'bajaj.png', 1),
('Shineray', 'China', 'shineray.png', 1),
('Dafra', 'Brasil', 'dafra.png', 1);

INSERT INTO categoria (nome, fkUsuario) VALUES
('Esportiva', 1),
('Naked', 1),
('Adventure', 1),
('Custom', 1),
('Trail', 1),
('Street', 1);

update moto set imagem = 'assets/imgs/cg160.jpeg' where idMoto = 4;
INSERT INTO moto (modelo, cilindrada, potencia, torque, velocidadeMax, peso, consumo, preco, descricao, imagem, fkMarca, fkCategoria, fkUsuario) VALUES
('CB 500F', 500, 50, 4.50, 185, 189.50, 25.00, 43000.00, 'Naked equilibrada para uso urbano e estrada.', 'assets/imgs/cb500-galeria1.webp', 1, 2, 1),

('YZF R1', 998, 200, 11.50, 299, 201.00, 15.00, 115000.00, 'Superbike inspirada na MotoGP com alta performance.', 'assets/imgs/r1-catalogo.webp', 2, 1, 1),

('Ninja ZX-6R', 636, 130, 7.20, 262, 196.00, 18.00, 72000.00, 'Supersport intermediária com excelente equilíbrio.', 'assets/imgs/nin.jpg', 3, 6, 1),

('CG 160 Titan', 160, 14, 1.43, 120, 118, 40.0, 19450.00, 'Motocicleta urbana de 160 cilindradas, reconhecida pela economia de combustível, confiabilidade mecânica e baixo custo de manutenção.', 'assets/imgs/cg160.jpeg', 1, 1, 1),

('MT-07', 689, 74, 6.80, 214, 184.00, 22.00, 48000.00, 'Naked divertida com ótimo torque em baixa rotação.', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX6_lDrd_ooiyo-HA6WW6UJeJ4DeIzxrNqZA&s', 2, 2, 1),

('S 1000 RR', 999, 207, 11.00, 303, 197.00, 16.00, 135000.00, 'Superbike alemã de altíssimo desempenho.', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL0ovvpbO54jwfH7gLvFHFzOae-JY6Rv9uow&s', 5, 1, 1),

('Z900', 948, 125, 10.00, 240, 212.00, 17.00, 55000.00, 'Naked agressiva com motor forte e design moderno.', 'https://static.wixstatic.com/media/1acc81_19ac1b4decb74ccdb2d780af73b48768~mv2.jpg/v1/fill/w_568,h_378,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/1acc81_19ac1b4decb74ccdb2d780af73b48768~mv2.jpg', 3, 2, 1),

('XRE 300', 291, 25, 2.80, 145, 153.00, 30.00, 28000.00, 'Trail confiável para cidade e estrada de terra.', 'https://www.comprecar.com.br/storage/news/featured/e_SU00RL_H64409.jpg', 1, 5, 1),

('Hayabusa', 1340, 190, 15.00, 312, 264.00, 14.00, 145000.00, 'Lenda das estradas com velocidade extrema.', 'https://http2.mlstatic.com/D_NQ_NP_685505-MLB110566478871_042026-O.webp', 4, 1, 1),

('Versys 650', 649, 66, 6.20, 210, 219.00, 21.00, 52000.00, 'Adventure confortável para viagens longas.', 'https://www.motorede.com.br/wp-content/uploads/2022/07/Kawasaki-Versys-650-Tourer-2023.jpg', 3, 3, 1),

('Hornet 750', 755, 92, 7.50, 230, 190.00, 20.00, 58000.00, 'Naked moderna com boa potência e tecnologia.', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDaysu2pFO67R80iJH4xETqFsm1cuYTyOskg&s', 1, 2, 1);

INSERT INTO avaliacao (nota, descricao, fkUsuario)
VALUES
(5, 'Excelente plataforma para consultar motos.', 1),
(4, 'Interface bonita e fácil de usar.', 2),
(5, 'Gostei muito do comparador de motos.', 3),
(3, 'Bom projeto, mas poderia ter mais modelos.', 4),
(4, 'Dashboard muito interessante.', 5);

INSERT INTO favorito (fkUsuario, fkMoto)
VALUES
(1, 3),
(2, 1),
(3, 5),
(4, 2),
(5, 4);

select * from usuario;
select * from moto;
select * from marca;
select * from categoria;
select * from avaliacao;
select * from favorito;