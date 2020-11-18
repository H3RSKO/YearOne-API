const db = require('./index')
const Movie = require('./movies')

const movieData = [
  {
    title: 'Batman',
    director: 'Tim Burton',
    releaseYear: 1989,
    description: 'The Dark Knight of Gotham City begins his war on crime with his first major enemy being Jack Napier, a criminal who becomes the clownishly homicidal Joker.',
    thumbsUp: 2,
    thumbsDown: 3
  },
  {
    title: 'Superman',
    director: 'Richard Donner',
    releaseYear: '1978',
    description: 'An alien orphan is sent from his dying planet to Earth, where he grows up to become his adoptive home\'s first and greatest superhero.',
    thumbsUp: 1,
    thumbsDown: 2
  },
  {
    title: 'Wonder Woman',
    director: 'Patty Jenkins',
    releaseYear: '2017',
    description: 'When a pilot crashes and tells of conflict in the outside world, Diana, an Amazonian warrior in training, leaves home to fight a war, discovering her full powers and true destiny.',
    thumbsUp: 3,
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
