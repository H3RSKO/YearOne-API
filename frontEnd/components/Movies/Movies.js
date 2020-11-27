import React, { useEffect, useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  SvgIcon,
  Typography,
  Box,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Movie from "../Movie/Movie";
import ThumbRating from '../ThumbRating/ThumbRating'
import Axios from "axios";
import moviesStyles from "./moviesStyle";

const Movies = (props) => {
  const { classes, movie, setMovies } = props;
  const [selected, setAsSelected] = useState(false);
  const [currentMovie, setCurrentMovie] = useState(movie)

  const popUpHandler = async () => {
    let status = selected ? setAsSelected(false) : setAsSelected(true);
  };

  return (
    <Card className={classes.root} >
    <div onClick={() => setAsSelected(true)} >
      <Box className={classes.mediaContainer} xs>
      <CardMedia
        image={movie.poster}
        title={movie.title}
        className={classes.media}
        // height="65%"
      />
      </Box>
      <CardContent className={classes.content}>
        <Typography gutterBottom variant="h4" component="h1" m={0}>
          {movie.title}
        </Typography>
        <Box m={0}>
          <Typography variant="h6">Director: {movie.director}</Typography>
        </Box>
        <Box m={0} fontSize={19}>
          Released: {movie.year}
        </Box>
      </CardContent>


      {selected ? (
        <Movie title={movie.title} rating={{thumbsUp: movie.thumbsUp, thumbsDown: movie.thumbsDown}} popUpHandler={popUpHandler} />
      ) : (
        <></>
      )}
    </div>
    <CardActions disableSpacing>
        <ThumbRating movie={currentMovie} setCurrentMovie={setCurrentMovie} color={{red: "red", green: "green"}}/>
      </CardActions>
    </Card>
  );
};

export default withStyles(moviesStyles)(Movies);
