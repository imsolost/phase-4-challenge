const db = require('./db')

const create = (username, email, password) => {
  return db.one(`
    INSERT INTO users (username, email, password)
    VALUES ($1, $2, $3)
    RETURNING *`,
    [username, email, password])
    .catch((error) => {
      console.log('\nError in create query\n')
      throw error
    })
}

const getByUsername = (username) => {
  return db.one('SELECT * FROM users WHERE username = $1', [username])
    .catch((error) => {
      console.log('\nError in getByUsername query\n')
      throw error
    })
}

const getReviews = (username) => {
  return db.query(`
    SELECT reviews.id, content, review_date, title, artist, username, email, join_date, picture
    FROM reviews
    LEFT OUTER JOIN albums ON albums.id = reviews.album_id
    RIGHT OUTER JOIN users ON users.id = reviews.user_id
    WHERE users.username = $1
    ORDER BY id DESC`,
    [username])
    .catch((error) => {
      console.log('\nError in getReviews query\n')
      throw error
    })
}

module.exports = {
  create,
  getByUsername,
  getReviews
}
