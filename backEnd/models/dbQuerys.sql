CREATE DATABASE easypeasy;

\ c easypeasy CREATE TABLE client (
  id SERIAL NOT NULL PRIMARY KEY,
  firstname VARCHAR(30) NOT NULL,
  lastname VARCHAR(30) NOT NULL,
  email VARCHAR(50) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  is_role VARCHAR(10) NOT NULL DEFAULT 'client',
  image_url VARCHAR(255),
  createdate TIMESTAMP NOT NULL,
  updatedate TIMESTAMP NOT NULL
);

CREATE TABLE course (
  id SERIAL NOT NULL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  price BIGINT NOT NULL,
  puntuaction SMALLINT,
  image_url VARCHAR(255) NOT NULL,
  resurce_url VARCHAR(255) NOT NULL,
  createdate TIMESTAMP NOT NULL,
  updatedate TIMESTAMP NOT NULL,
);

CREATE TABLE user_course (
  id SERIAL PRIMARY KEY,
  client_id INT NOT NULL,
  course_id INT NOT NULL,
  createdate TIMESTAMP NOT NULL,
  updatedate TIMESTAMP NOT NULL,
  FOREIGN KEY (client_id) REFERENCES client(id),
  FOREIGN KEY (course_id) REFERENCES course(id)
);