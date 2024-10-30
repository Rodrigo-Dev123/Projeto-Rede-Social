# Projeto-Rede-Social

## Queries to create tables in the database:

```sql
create table `db`.`user`(
	`id` int not null auto_increment,
    `username` varchar(45) not null,
    `email` varchar(100) not null,
    `password` varchar(200) not null,
    `userImg` varchar(300) null,
    `bgImg` varchar(300) null,
    primary key(`id`)
) auto_increment=1;
```