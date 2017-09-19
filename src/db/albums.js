const db = require('./db')

const getAll = () => {
  return db.query('SELECT * FROM albums', [])
    .catch((error) => {
      console.log('\nError in getAll query\n')
      throw error
    })
}

const getByTitle = (title) => {
  return db.one('SELECT * FROM albums WHERE title = $1', [title])
    .catch((error) => {
      console.log('\nError in getByTitle query\n')
      throw error
    })
}

const getReviews = (title) => {
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

module.exports = {
  getAll,
  getByTitle,
  getReviews,
}
