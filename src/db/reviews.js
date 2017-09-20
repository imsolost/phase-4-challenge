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

const getByUsername = (username) => {
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

const getByTitle = (title) => {
  return db.query(`
    SELECT reviews.id, content, review_date, title, artist, username
    FROM reviews
    RIGHT OUTER JOIN albums ON albums.id = reviews.album_id
    LEFT OUTER JOIN users ON users.id = reviews.user_id
    WHERE albums.title = $1
    ORDER BY id DESC`,
    [title])
    .catch((error) => {
      console.log('\nError in getReviews query\n')
      throw error
    })
}

const getRecent = () => {
  return db.query(`
    SELECT reviews.id, content, review_date, title, artist, username
    FROM reviews
    LEFT OUTER JOIN albums ON albums.id = reviews.album_id
    LEFT OUTER JOIN users ON users.id = reviews.user_id
    ORDER BY id DESC
    LIMIT 3`,
    [])
    .catch((error) => {
      console.log('\nError in getReviews query\n')
      throw error
    })
}

module.exports = {
  create,
  remove,
  getByUsername,
  getByTitle,
  getRecent,
}
