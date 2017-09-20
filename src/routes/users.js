const utilities = require('../utilities/bcrypt')
const reviews = require('../db/reviews.js')
const moment = require('moment')
const router = require('express').Router()

router.get('/:username', (req, res) => {
  const username = req.params.username
  reviews.getByUsername(username)
    .then((reviews) => {
        res.render('profile', {reviews, moment})
    })
    .catch(error => res.status(500).render('error', {error}))
})

module.exports = router
