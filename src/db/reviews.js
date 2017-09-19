const db = require('./db')

const create = (user_id, album_id, content) => {
  return db.none(`
    INSERT INTO reviews (user_id, album_id, content)
    VALUES ($1, $2, $3)`,
    [user_id, album_id, content])
    .catch((error) => {
      console.log('\nError in createReview query\n')
      throw error
    })
}

const remove = (id) => {
  return db.none('DELETE FROM reviews WHERE id = $1', [id])
    .catch((error) => {
      console.log('\nError in deleteReview query\n')
      throw error
    })
}

module.exports = {
  create,
  remove,
}
