const utilities = require('../utilities/bcrypt')
const users = require('../db/users.js')
const reviews = require('../db/reviews.js')
const albums = require('../db/albums.js')
const moment = require('moment')
const router = require('express').Router()

const setLocals = (req, res, next) => {
  let loggedIn = false
  let username = null
  if (req.session.user) {
    loggedIn = true
    username = req.session.user.username
  }
  res.locals = {loggedIn, username}
  next()
}

router.use(setLocals)

const getAlbums = (req, res, next) => {
  albums.getAll()
    .then((albums) => {
      req.albums = albums
      next()
    })
}

const getRecentReviews = (req, res, next) => {
  reviews.getRecent()
    .then((reviews) => {
      req.reviews = reviews
      next()
    })
}

const renderIndex = (req, res) => {
  res.render('index', {albums: req.albums, reviews: req.reviews, moment})
}

router.get('/', getAlbums, getRecentReviews, renderIndex)

router.route('/signup')
  .get((req, res) => res.render('signup'))
  .post((req, res) => {
    const username = req.body.username
    utilities.encryptPassword(req.body.password)
      .then((password) => {
        users.create(username, req.body.email, password)
          .then((user) => {
            req.session.user = {username, id:user.id}
            req.session.save(res.redirect(`/users/${username}`))
          })
      })
      .catch(error => res.status(500).render('error', {error}))
  })

router.route('/signin')
  .get((req, res) => res.render('signin'))
  .post((req, res) => {
    const username = req.body.username
    users.getByUsername(username)
      .then((user) => {
        utilities.comparePasswords(req.body.password, user.password)
          .then((boolean) => {
            if (boolean) {
              req.session.user = {username, id: user.id}
              req.session.save(res.redirect(`/users/${username}`))
            } else res.redirect('/signin')
          })
      })
      .catch(error => res.status(500).render('error', {error}))
  })

router.get('/logout', (req, res) => {
  req.session.destroy(res.redirect('/'))
})

router.use('/users', require('./users'))
router.use('/albums', require('./albums'))

const ensureLoggedIn = (req, res, next) => {
  if (req.session && req.session.user) {
    next()
  } else {
    res.redirect('/signin')
  }
}

router.use(ensureLoggedIn)
router.use('/albums', require('./reviews'))

module.exports = router
