const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./database')

app.use(bodyParser.json());

const startServer = () => {
  app.listen(8080, () => console.log('Movie API listening on Port 8080'));
}

// connect to backend APIs
// app.use('/api/', require('./API'))


// sync db
const syncDb = () => db.sync()


app.get('/', (req, res, next) => {
    try {
      res.send('some data');
    } catch(err) {next(err)}
});

const bootServer = async () => {
  await syncDb()
  await startServer()
}

bootServer()
