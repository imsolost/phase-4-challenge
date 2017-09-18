const utilities = require('../utilities/bcrypt')
const usersDb = require('../db/users.js')
const moment = require('moment')
const router = require('express').Router()

router.route('/signup')
  .get((req, res) => res.render('signup'))
  .post((req, res) => {
    const username = req.body.username
    utilities.encryptPassword(req.body.password)
      .then((password) => {
        usersDb.create(username, req.body.email, password)
          .then(() => {
            req.session.username = username
            req.session.save(res.redirect('/')) //`/profile/${username}`))
          })
      })
      .catch(error => res.status(500).render('error', {error}))
  })

router.route('/signin')
  .get((req, res) => res.render('signin'))
  .post((req, res) => {
    const username = req.body.username
    usersDb.getByUsername(username)
      .then((user) => {
        utilities.comparePasswords(req.body.password, user.password)
          .then((boolean) => {
            if (boolean) {
              req.session.username = username
              req.session.save(res.redirect('/')) //`/profile/${username}`))
            } else res.redirect('/signin')
          })
      })
      .catch(error => res.status(500).render('error', {error}))
  })

router.get('/logout', (req, res) => {
  req.session.destroy(res.redirect('/'))
})

module.exports = router
