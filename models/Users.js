const db = require('../database/connection');

const Users = {};

Users.all = () => {
  return db.any('SELECT * FROM users');
}

Users.find = id => {
  return db.one('SELECT * FROM users WHERE user_id = $<id>', { id: id });
}

Users.create = (newUser) => {
  return db.one(`INSERT INTO users 
  ( 
    username, 
    password_digest,
    profile_pic
  ) 
  VALUES (
    $<username>, 
    $<password_digest>,
    $<profile_pic>
  ) 
    RETURNING *`, newUser)
}

Users.update = (userInfo) => {
  return db.none(`UPDATE users 
  SET username = $<username>, 
  profile_pic = $<profile_pic> 
  WHERE user_id = $<id>`, userInfo)
}

Users.delete = (id) => {
  return db.result(`DELETE FROM buildings where id = $1`, [id])
}

Users.findByUsername = username => {
  return db.one("SELECT * FROM users WHERE username = $1", [username]);
}

module.exports = Users;
