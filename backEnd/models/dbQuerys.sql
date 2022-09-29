CREATE DATABASE easypeasy;

\c easypeasy 

CREATE TABLE client (
  id SERIAL NOT NULL PRIMARY KEY,
  firstname VARCHAR(30) NOT NULL,
  lastname VARCHAR(30) NOT NULL,
  email VARCHAR(50) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  createnate TIMESTAMP NOT NULL,
  updatenate TIMESTAMP NOT NULL
);

CREATE TABLE course (
  id SERIAL NOT NULL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  price INT NOT NULL,
  image_url VARCHAR(255) NOT NULL,
  resurce_url VARCHAR(255) NOT NULL,
  createnate TIMESTAMP NOT NULL,
  updatenate TIMESTAMP NOT NULL,
);

CREATE TABLE user_course (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL,
  course_id INT NOT NULL,
  createnate TIMESTAMP NOT NULL,
  updatenate TIMESTAMP NOT NULL,
  FOREIGN KEY (user_id) REFERENCES user(id),
  FOREIGN KEY (course_id) REFERENCES course(id)
);