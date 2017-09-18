const utilities = require('../utilities/bcrypt')
const users = require('../db/users.js')
const moment = require('moment')
const router = require('express').Router()

// router.get('/:username', (req, res) => {
//   const username = req.params.username
//   users.getReviewsByUsername(username)
//     .then((reviews) => {
//       req.reviews = reviews
//     })
//     .then(users.getByUsername(username)
//         .then(user => {
//           res.render('profile', {user, reviews: req.reviews, moment})
//         }))
//     .catch(error => res.status(500).render('error', {error}))
// })

router.get('/:username', (req, res) => {
  const username = req.params.username
  users.getByUsername(username)
    .then(user => res.render('profile', {user, moment}))
    .catch(error => res.status(500).render('error', {error}))
})

module.exports = router
