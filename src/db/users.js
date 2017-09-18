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
  return db.one(`
    SELECT * FROM users
    WHERE username = $1`,
    [username])
    .catch((error) => {
      console.log('\nError in getByUsername query\n')
      throw error
    })
}

module.exports = {
  create,
  getByUsername,
}
