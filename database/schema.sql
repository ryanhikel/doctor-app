
CREATE TABLE users
(
  user_id serial primary key,
  username text,
  password_digest text
);
CREATE TABLE favorites
(
  favorite_id serial primary key,
  doctor_uid text,
  user_id INTEGER REFERENCES users(user_id)
)