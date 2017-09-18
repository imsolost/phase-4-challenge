const albums = require('../db/albums.js')
const moment = require('moment')
const router = require('express').Router()

router.get('/', (req, res) => {
  albums.getAll()
    .then((albums) => {
      res.render('index', {albums})
    })
})

module.exports = router
