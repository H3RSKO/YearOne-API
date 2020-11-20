const Sequelize = require('sequelize')
const db = require('./index.js')

const Movie = db.define('movie', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  poster: {
    type: Sequelize.TEXT
  },
  director: {
    type: Sequelize.STRING,
    allowNull: false
  },
  year: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  thumbsUp: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  thumbsDown: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
})

module.exports = Movie
