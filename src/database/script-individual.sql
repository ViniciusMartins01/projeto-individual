create database rvmotos;
use rvmotos;

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
    logo VARCHAR(255)
);


CREATE TABLE categoria (
    idCategoria INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE moto (
    idMoto INT PRIMARY KEY AUTO_INCREMENT,
    modelo VARCHAR(150) NOT NULL,
    ano INT NOT NULL,
    cilindrada INT NOT NULL,
    potencia INT,
    torque DECIMAL(10,2),
    velocidadeMax INT,
    peso DECIMAL(10,2),
    consumo DECIMAL(10,2),
    preco DECIMAL(10,2),
    descricao TEXT,
    imagem VARCHAR(255),
    visualizacoes INT DEFAULT 0,
    dataCadastro DATETIME DEFAULT CURRENT_TIMESTAMP,
    fkMarca INT,
    fkCategoria INT,
    
    CONSTRAINT fkMotoMarca
        FOREIGN KEY (fkMarca)
        REFERENCES marca(idMarca),

    CONSTRAINT fkMotoCategoria
        FOREIGN KEY (fkCategoria)
        REFERENCES categoria(idCategoria)
);