create database aula31;
use aula31;
create table clients (
id int not null primary key auto_increment,
name varchar(150) not null,
age int not null
);

insert into clients (name, age) values
('Joao', 25), ('Hector', 30), ('Raphael', 50), ('Melyssa', 40);

select * from clients;
