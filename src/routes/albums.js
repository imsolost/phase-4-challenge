const albums = require('../db/albums.js')
const moment = require('moment')
const router = require('express').Router()

// router.get('/:title', (req, res) => {
//   const title = req.params.title
//   albums.getReviews(title)
//     .then((reviews) => {
//       req.reviews = reviews
//       console.log(reviews);
//     })
//     .then(albums.getByTitle(title)
//         .then(album => {
//           res.render('album', {album, reviews: req.reviews, moment})
//         }))
//     .catch(error => res.status(500).render('error', {error}))
// })

router.get('/:title', (req, res) => {
  const title = req.params.title
  albums.getReviews(title)
    .then((reviews) => {
        res.render('album', {reviews, moment})
    })
    .catch(error => res.status(500).render('error', {error}))
})

module.exports = router
