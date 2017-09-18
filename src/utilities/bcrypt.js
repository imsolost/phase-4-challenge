const bcrypt = require('bcrypt')
const salt = 7

const encryptPassword = (password) => {
  return bcrypt.hash(password, salt)
}

const comparePasswords = (password, hash) => {
  return bcrypt.compare(password, hash)
}

module.exports = {
  encryptPassword,
  comparePasswords
}
