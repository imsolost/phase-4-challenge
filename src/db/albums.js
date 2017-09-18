const db = require('./db')

const getAll = () => {
  return db.query('SELECT * FROM albums', [])
    .catch((error) => {
      console.log('\nError in getAll query\n')
      throw error
    })
}

module.exports = {
  getAll,
}
