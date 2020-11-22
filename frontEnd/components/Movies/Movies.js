import React, { useState } from "react";
import {Card, CardMedia, CardContent, CardActions, IconButton, SvgIcon, Typography, Box} from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import Movie from '../Movie/Movie'
import moviesStyles from './moviesStyle'



const Movies = (props) => {
  const {classes, movie} = props
  const [selected, setAsSelected] = useState(false)

  const popUpHandler = () => {
    let status = selected ? setAsSelected(false): setAsSelected(true)
  }

  console.log(movie)
  return (
    <Card className={classes.root} onClick={() => setAsSelected(true)}>
      <CardMedia
        image={movie.poster}
        title={movie.title}
        className={classes.media}
        // height="65%"
      />
      <CardContent className={classes.content}>
        <Typography gutterBottom variant="h4" component="h1" m={0}>
          {movie.title}
        </Typography>
        <Box m={0}>
        <Typography variant="h6">
        Director: {movie.director}
        </Typography>
        </Box>
        <Box m={0} fontSize={19}>
          Released: {movie.year}
        </Box>
        {/* <Box overflow="hidden" m={0.5} mt={2}>
         {movie.description}
        </Box> */}
      </CardContent>

      <CardActions disableSpacing>
      <IconButton aria-label="thumbs up" >
        <SvgIcon>
        <path d="M23 10a2 2 0 0 0-2-2h-6.32l.96-4.57c.02-.1.03-.21.03-.32c0-.41-.17-.79-.44-1.06L14.17 1L7.59 7.58C7.22 7.95 7 8.45 7 9v10a2 2 0 0 0 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2M1 21h4V9H1v12z" fill="green"></path>
        </SvgIcon>
      </IconButton>
      <IconButton aria-label="thumbs down">
        <SvgIcon>
        <path d="M19 15h4V3h-4m-4 0H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2a2 2 0 0 0 2 2h6.31l-.95 4.57c-.02.1-.03.2-.03.31c0 .42.17.79.44 1.06L9.83 23l6.58-6.59c.37-.36.59-.86.59-1.41V5a2 2 0 0 0-2-2z" fill="red"></path>
        </SvgIcon>
        </IconButton>
      </CardActions>
      {selected ? <Movie title={movie.title} popUpHandler={popUpHandler}/>: <></>}
    </Card>
  )
}

export default withStyles(moviesStyles)(Movies)
