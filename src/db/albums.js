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

module.exports = {
  getAll,
  getByTitle,
}
