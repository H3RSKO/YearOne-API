import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  Typography,
  DialogActions,
  DialogContent,
  Button,
  Box,
  Card,
  CardMedia,
  Grid,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Axios from "axios";
import ThumbRating from "../ThumbRating/ThumbRating";
import movieStyles from "./MovieStyles";

const Movie = (props) => {
  const { classes } = props;

  const { title, popUpHandler, rating } = props;
  const [movie, setMovie] = useState();

  useEffect(async () => {
    const { data } = await Axios.get(
      `http://www.omdbapi.com/?t=${title}&type=movie&apikey=a175f862`
    );
    let sanitizedMovie = {
      title: data.Title,
      poster: data.Poster,
      year: data.Year,
      director: data.Director,
      description: data.Plot,
      thumbsUp: rating.thumbsUp,
      thumbsDown: rating.thumbsDown,
    };
    setMovie(sanitizedMovie);
  }, []);

  return (
    <Dialog
      onClose={popUpHandler}
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      {movie ? (
        <Card className={classes.root}>
          <Grid container direction="row" spacing={0}>
            <Grid item xs >
              <img className={classes.media} alt="image" src={movie.poster} />
            </Grid>
            <Grid item xs>
              <DialogTitle id="customized-dialog-title" onClose={popUpHandler}>
                {movie.title}
              </DialogTitle>
              <DialogContent dividers>
                <Typography gutterBottom>Director: {movie.director}</Typography>
                <Box m={0} fontSize={19}>
                  Released: {movie.year}
                </Box>
                <Box
                  className={classes.description}
                  overflow="hidden"
                  m={0.5}
                  mt={2}
                >
                  {movie.description}
                </Box>
              </DialogContent>
              <DialogActions>
                {/* <Box padding={2} margin={2}></Box> */}
                <ThumbRating movie={movie} block={true} color={{red: "#bf2b2b", green: "#45ad48"}} />
              </DialogActions>
            </Grid>
          </Grid>
        </Card>
      ) : (
        <div> Loading...</div>
      )}
    </Dialog>
  );
};

export default withStyles(movieStyles)(Movie);
