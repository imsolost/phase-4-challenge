const db = require('./db')

const getAll = () => {
  return db.query('SELECT * FROM albums', [])
    .catch((error) => {
      console.log('\nError in getAll query\n')
      throw error
    })
}

const getById = (id) => {
  return db.one('SELECT * FROM albums WHERE id = $1', [id])
    .catch((error) => {
      console.log('\nError in getByUsername query\n')
      throw error
    })
}

module.exports = {
  getAll,
  getById,
}
