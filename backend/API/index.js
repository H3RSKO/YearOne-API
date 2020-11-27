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
  try {
    let movie = await Movie.findOne({
      where: {
        title: req.body.title
      }
    })
    if (movie) {
      movie = Movie.update({
        thumbsDown: req.body.thumbsDown,
        thumbsUp: req.body.thumbsUp
      },
        {where: {
          title: req.body.title
        }
      })
    } else {
      movie = Movie.create(req.body)
      res.json(movie)
    }
  } catch(err) {next(err)}
})
