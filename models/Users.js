const db = require('../database/connection');

const Users = {};

Users.all = () => {
  return db.any('SELECT * FROM users');
}

Users.find = id => {
  return db.one('SELECT * FROM buildings WHERE user_id = $<id>', { id: id });
}

Users.create = (newUser) => {
  return db.one(`INSERT INTO users 
  ( 
    username, 
    password_digest
  ) 
  VALUES (
    $<username>, 
    $<password_digest>
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
module.exports = Users;
