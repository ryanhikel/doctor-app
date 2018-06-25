\c doc_app
INSERT INTO users
  (username, password_digest, profile_pic)
VALUES
  ( 'ryan', '12345678hgfd', 'https://i.pinimg.com/736x/2c/9d/07/2c9d0704ae49dfde914e2b477bf9279c--stick-figure-profile-pictures.jpg'
);
INSERT INTO favorites
  (doctor_uid, user_id, doctor_first_name, doctor_last_name)
VALUES
  ('4567', '1', 'jim', 'beam');
INSERT INTO comments
  (user_id, message_desc, doctor_uid)
VALUES
  (1, 'hey there', '01868b9c027a29c3e2b1288cc32ec9a2')