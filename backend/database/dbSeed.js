const db = require('./index')
const Movie = require('./movies')

const movieData = [
  {
    title: 'Batman',
    year: 1989,
    poster: "https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg",
    thumbsUp: 2,
    thumbsDown: 3
  },
  {
    title: 'Superman',
    year: '1978',
    poster: "https://m.media-amazon.com/images/M/MV5BMzA0YWMwMTUtMTVhNC00NjRkLWE2ZTgtOWEzNjJhYzNiMTlkXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
    thumbsUp: 1,
    thumbsDown: 2
  },
  {
    title: 'Wonder Woman',
    year: '2017',
    poster: "https://m.media-amazon.com/images/M/MV5BMTYzODQzYjQtNTczNC00MzZhLTg1ZWYtZDUxYmQ3ZTY4NzA1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
    thumbsUp: 3,
    thumbsDown: 2
  },
  {
    title: 'Hulk',
    year: '2003',
    poster: "https://m.media-amazon.com/images/M/MV5BMzQwZDg1MGEtN2E5My00ZDJlLWI4MzItM2U2MjJhYzlkNmEzXkEyXkFqcGdeQXVyNDAxNjkxNjQ@._V1_SX300.jpg",
    thumbsUp: 2,
    thumbsDown: 4
  },
  {
    title: 'Thor',
    year: '2011',
    poster: "https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
    thumbsUp: 3,
    thumbsDown: 3
  },
  {
    title: 'The Avengers',
    year: '2012',
    poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    thumbsUp: 5,
    thumbsDown: 2
  },
  {
    title: 'Captain America: Civil War',
    year: '2016',
    poster: "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg",
    thumbsUp: 6,
    thumbsDown: 3
  },
  {
    title: 'Captain Marvel',
    year: '2019',
    poster: "https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_SX300.jpg",
    thumbsUp: 3,
    thumbsDown: 5
  }
]


const seedDB = async () => {
  try {
    await db.sync({force: true})
    console.log('>> db flushed and models synced')

    const createMovies = await Promise.all(
      movieData.map(movie => Movie.create(movie))
    )
    console.log('>> Added Movies')

  } catch(err) {console.log(err)}
}

seedDB()
