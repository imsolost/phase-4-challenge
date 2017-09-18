const albumsDb = require('../db/albums.js')
const router = require('express').Router()

router.get('/:title', (req, res) => {
  albumsDb.getByTitle(req.params.title)
    .then(album => res.render('album', {album}))
    .catch(error => res.status(500).render('error', {error}))
})

module.exports = router
