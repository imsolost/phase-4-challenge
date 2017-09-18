const router = require('express').Router()
const albumsDb = require('../db/albums.js')


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

router.get('/', (req, res) => {
  albumsDb.getAll()
    .then((albums) => {
      res.render('index', {albums})
    })
})

router.use('/', require('./users'))
router.use('/albums', require('./albums'))

module.exports = router
