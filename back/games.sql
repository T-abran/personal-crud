DROP DATABASE IF EXISTS crud_games;

CREATE DATABASE crud_games;

USE crud_games;

CREATE TABLE Games (
    id INT NOT NULL auto_increment,
    name VARCHAR(30) NOT NULL,
    cost VARCHAR(30) NOT NULL,
    category INT NOT NULL,
    PRIMARY KEY(id)
) ENGINE=INNODB;

