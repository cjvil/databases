set foreign_key_checks = 0;

CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  id INT NOT NULL AUTO_INCREMENT,
  message CHAR(140) NOT NULL,
  user_id CHAR(25) NOT NULL,
  -- room_id INT NOT NULL, 
  -- FOREIGN KEY (user_id) REFERENCES users (id),
  -- FOREIGN KEY (room_id) REFERENCES rooms (id),
  PRIMARY KEY (id)
);

/* Create other tables and define schemas for them here! */

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  name CHAR(25) NOT NULL UNIQUE,
  PRIMARY KEY (id)
);

-- CREATE TABLE rooms (
--   id INT NOT NULL AUTO_INCREMENT,
--   name CHAR(25) NOT NULL,
--   PRIMARY KEY (id)
-- );


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

