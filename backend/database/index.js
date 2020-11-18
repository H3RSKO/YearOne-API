const Sequelize = require('sequelize')

const databaseName = 'moviesdb'

const db = new Sequelize(
  process.env.DATABASE_URL || `postgres://localhost:5432/${databaseName}`,
  {
    logging: false
  }
)

// db.sync({force: true})
module.exports = db
