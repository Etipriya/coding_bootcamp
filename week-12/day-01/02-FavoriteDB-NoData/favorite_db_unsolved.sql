DROP DATABASE IF EXISTS favourite_db;
CREATE DATABASE favourite_db;

USE favourite_db;

CREATE TABLE favourite_foods (
	food VARCHAR(50) NOT NULL,
    score INT
);

CREATE TABLE favourite_songs (
    song VARCHAR(100) NOT NULL,
    artist VARCHAR(50),
    score INT
);

CREATE TABLE favourite_movies (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    movie VARCHAR(100) NOT NULL,
    five_times BOOLEAN,
    score INT
);