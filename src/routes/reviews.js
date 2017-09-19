const albums = require('../db/albums.js')
const reviews = require('../db/reviews.js')
const router = require('express').Router()

router.route('/:title/reviews/new')
  .get((req, res) => {
    albums.getByTitle(req.params.title)
      .then(album => res.render('new-review', {album}))
      .catch(error => res.status(500).render('error', {error}))
  })
  .post((req, res) => {
    reviews.create(req.session.user.id, req.body.album_id, req.body.content)
      .then(res.redirect(`/albums/${req.params.title}`))
      .catch(error => res.status(500).render('error', {error}))
  })

router.delete('/delete/:id', (req, res) => {
  reviews.getById(req.params.review_id)
    .then(() => {
      return reviews.remove(req.params.review_id)
    })
    .then(() => res.json({message: 'successful delete'}))
    .catch(error => res.status(500).render('error', {error}))
})

module.exports = router
