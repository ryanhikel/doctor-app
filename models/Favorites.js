// select * from favorites natural join users where username = 'ryan';
const db = require('../database/connection');

const Favorites = {};

Favorites.all = () => {
  return db.any('SELECT * FROM favorites');
}

Favorites.find = id => {
  return db.one('SELECT * FROM favorites WHERE doctor_uid = $<id>', { id: id });
}

Favorites.create = (newFavorite) => {
  return db.one(`INSERT INTO favorites
  ( 
    doctor_uid, 
    user_id
  ) 
  VALUES (
    $<doctor_uid>, 
    $<user_id>
  ) 
    RETURNING *`, newFavorite)
}

Favorites.update = (favoriteInfo) => {
  return db.none(`UPDATE favorite 
  SET doctor_uid = $<doctor_uid>, 
  WHERE user_id = $<id>`, userInfo)
}

Favorites.delete = (id) => {
  return db.result(`DELETE FROM favorites where id = $1`, [id])
}
module.exports = Favorites;