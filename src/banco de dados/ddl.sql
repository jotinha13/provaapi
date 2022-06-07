create database animeDB;

use animeDB;

create table tb_anime(
	id_anime   int primary key auto_increment,
    nm_anime    varchar(100)
);

-- inserir animie
insert into tb_anime(id_anime, nm_anime)
values ("Bleach");

-- ver todos os animes
select * from tb_anime;