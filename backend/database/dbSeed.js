const db = require('./index')
const Movie = require('./movies')

const movieData = [
  {
    title: 'Batman',
    director: 'Tim Burton',
    year: 1989,
    description: 'The Dark Knight of Gotham City begins his war on crime with his first major enemy being Jack Napier, a criminal who becomes the clownishly homicidal Joker.',
    poster: "https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg",
    thumbsUp: 2,
    thumbsDown: 3
  },
  {
    title: 'Superman',
    director: 'Richard Donner',
    year: '1978',
    description: 'An alien orphan is sent from his dying planet to Earth, where he grows up to become his adoptive home\'s first and greatest superhero.',
    poster: "https://m.media-amazon.com/images/M/MV5BMzA0YWMwMTUtMTVhNC00NjRkLWE2ZTgtOWEzNjJhYzNiMTlkXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
    thumbsUp: 1,
    thumbsDown: 2
  },
  {
    title: 'Wonder Woman',
    director: 'Patty Jenkins',
    year: '2017',
    description: 'When a pilot crashes and tells of conflict in the outside world, Diana, an Amazonian warrior in training, leaves home to fight a war, discovering her full powers and true destiny.',
    poster: "https://m.media-amazon.com/images/M/MV5BMTYzODQzYjQtNTczNC00MzZhLTg1ZWYtZDUxYmQ3ZTY4NzA1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
    thumbsUp: 3,
    thumbsDown: 2
  },
  {
    title: 'Hulk',
    director: 'Ang Lee',
    year: '2003',
    description: 'Bruce Banner, a genetics researcher with a tragic past, suffers an accident that causes him to transform into a raging green monster when he gets angry..',
    poster: "https://m.media-amazon.com/images/M/MV5BMzQwZDg1MGEtN2E5My00ZDJlLWI4MzItM2U2MjJhYzlkNmEzXkEyXkFqcGdeQXVyNDAxNjkxNjQ@._V1_SX300.jpg",
    thumbsUp: 2,
    thumbsDown: 4
  },
  {
    title: 'Thor',
    director: 'Kenneth Branagh',
    year: '2011',
    description: 'The powerful but arrogant god Thor is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders.',
    poster: "https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
    thumbsUp: 3,
    thumbsDown: 3
  },
  {
    title: 'The Avengers',
    director: 'Joss Whedon',
    year: '2012',
    description: 'Earth\'s mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.',
    poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    thumbsUp: 5,
    thumbsDown: 2
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
