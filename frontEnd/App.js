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
    setMovies(data)
  }, [])

  return (
    <Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justify="center"
    style={{ minHeight: '100vh' }}
  >
    <Paper elevation={3} className={classes.app}>
      <Box className={classes.searchContainer}>
        <h1>Movie Search</h1>
        <SearchBar setMovies={setMovies}/>
      </Box>
    </Paper>
    <Grid container className={classes.root} spacing={2} alignContent="space-around" >
      {Object.values(movies).map((movie, i) => (
        <Grid item xs={6} sm={3} key={i}>
          <Movies
          movie={movie}
          className={classes.movie}
          />
        </Grid>
      ))}
    </Grid>
</Grid>)
}

export default withStyles(appStyles)(App)
