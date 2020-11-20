const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./database')
const history = require('connect-history-api-fallback')

app.use(bodyParser.json());
app.use(express.static('public'))

const startServer = () => {
  app.listen(8080, () => console.log('Movie API listening on Port 8080'));
}

// connect to backend APIs
app.use('/api/', require('./API'))

// used to block backend routing while allowing api calls
const historyMiddleware = history({verbose: true})
app.use((req, res, next) => {
  if (req.path === '/api') next()
  else {
    historyMiddleware(req, res, next)
  }
});

// sync db
const syncDb = () => db.sync()


app.get('/', (req, res, next) => {
    try {
      res.sendFile(path.join(__dirname, '../public/index.html'));
    } catch(err) {next(err)}
});

const bootServer = async () => {
  await syncDb()
  await startServer()
}

bootServer()
