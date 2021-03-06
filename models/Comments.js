const db = require('../database/connection');

const Comments = {};

Comments.all = () => {
  return db.any('SELECT * FROM comments');
}

Comments.findDoctor = (id) => {
  return db.any('SELECT * FROM comments where doctor_uid = $<id>', { id: id })
}

Comments.findUser = (id) => {
  return db.any('SELECT * FROM comments where user_id = $<id>', { id: id })
}

Comments.create = (newComment) => {
  return db.one(`INSERT INTO comments 
  ( 
    doctor_uid, 
    message_desc,
    user_id
  ) 
  VALUES (
    $<doctor_uid>, 
    $<message_desc>,
    $<user_id>
  ) 
    RETURNING *`, newComment)
}

Comments.update = (updateComment) => {
  return db.none(`UPDATE comments 
  SET  message_desc = $<message_desc>,
  WHERE user_id = $<id>`, updateComment)
}

module.exports = Comments;
