create database animeDB;

use animeDB;

create table tb_anime(
	id_anime   int primary key auto_increment,
    nm_anime    varchar(100)
);


insert into tb_anime(nm_anime)
values ("Bleach");

select * from tb_anime;