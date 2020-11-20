import React from "react";
import { Paper, Box, Grid } from "@material-ui/core";
import { useState, useEffect } from "react";
import axios from 'axios'
import {Movies, SearchBar} from "./components"
import { withStyles } from "@material-ui/core/styles";
import appStyles from './AppStyle'

const App = () => {
  const classes = appStyles()
  const [movies, setMovies] = useState([])

  useEffect(async () => {
    let {data} = await axios.get('/api')
    // console.log('data .. ', data)
    setMovies(data)
  }, [])

  return (
  <Box>
    <Paper elevation={3}>
    <h1>Movies</h1>
    <SearchBar setMovies={setMovies}/>
    <Grid container className={classes.root} spacing={2} alignContent="space-between">
      {Object.values(movies).map((movie, i) => (
        <Grid item xs={6} sm={3} justify="center" key={i}>
          <Movies
          movie={movie}
          className={classes.movie}
          />
        </Grid>
      ))}
    </Grid>
    </Paper>
  </Box>)
}

export default withStyles(appStyles)(App)
