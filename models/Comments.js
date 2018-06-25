const db = require('../database/connection');

const Comments = {};

Comments.all = () => {
  return db.any('SELECT * FROM comments');
}

Comments.create = (newUser) => {
  return db.one(`INSERT INTO comments 
  ( 
    username, 
    password_digest,
    profile_pic,
    bio,
    amount_children
  ) 
  VALUES (
    $<username>, 
    $<password_digest>,
    $<profile_pic>,
    $<bio>,
    $<amount_children>
  ) 
    RETURNING *`, newUser)
}

module.exports = Comments;
