const router = require('express').Router()
const Movie = require('../database/movies')

module.exports = router

// Get all movies in db
router.get('/', async (req, res, next) => {
  try {
    const movies = await Movie.findAll()
    res.json(movies)
  } catch(err) {next(err)}
})
