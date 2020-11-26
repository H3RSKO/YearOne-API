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

router.post('/', async (req, res, next) => {
  console.log('api req body>> ', req.body)
  try {
    let movie = await Movie.findOne({
      where: {
        title: req.body.title
      }
    })
    console.log('made it to API movie ', movie)
    if (movie) {
      // fix this: req.body works
      movie.thumbsUp = req.body.thumbsUp
      movie.thumbsDown = req.body.thumbsDown
    } else {
      movie = Movie.create(req.body)
      res.json(movie)
    }
  } catch(err) {next(err)}
})
