const router = require('express').Router()

const setLocals = (req, res, next) => {
  let loggedIn = false
  let username = null
  if (req.session.username) {
    loggedIn = true
    username = req.session.username
  }
  res.locals = {loggedIn, username}
  next()
}

router.use(setLocals)
router.use('/', require('./noauth'))

module.exports = router
