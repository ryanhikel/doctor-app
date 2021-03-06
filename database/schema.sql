-- DROP DATABASE doc_app;
-- CREATE DATABASE doc_app;
-- \c doc_app;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS favorites;
CREATE TABLE users
(
  user_id serial primary key,
  username text,
  password_digest text,
  profile_pic text,
  bio text,
  amount_children int
);
CREATE TABLE favorites
(
  favorite_id serial primary key,
  doctor_uid text,
  user_id INTEGER REFERENCES users(user_id),
  doctor_first_name text,
  doctor_last_name text  
);
CREATE TABLE comments
(
  comment_id serial primary key,
  doctor_uid text,
  message_desc text,
  user_id INTEGER REFERENCES users(user_id)
)