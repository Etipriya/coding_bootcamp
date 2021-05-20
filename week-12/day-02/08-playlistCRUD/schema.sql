DROP DATABASE IF EXISTS playlist_db;
CREATE DATABASE playlist_db;

USE playlist_db;

CREATE TABLE songs (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(100) NOT NULL,
  artist VARCHAR(50) NOT NULL,
  genre VARCHAR(20),
  isFavourite BOOLEAN DEFAULT false,
  PRIMARY KEY (id)
);
