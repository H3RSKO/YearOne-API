import React, { useState } from "react";
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
import moviesStyles from "./moviesStyle";

const Movies = (props) => {
  const { classes, movie } = props;
  const [selected, setAsSelected] = useState(false);

  const popUpHandler = () => {
    let status = selected ? setAsSelected(false) : setAsSelected(true);
  };

  console.log(movie);
  return (
    <Card className={classes.root} >
    <div onClick={() => setAsSelected(true)}>
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
          <Typography variant="h6">Director: {movie.director}</Typography>
        </Box>
        <Box m={0} fontSize={19}>
          Released: {movie.year}
        </Box>
        {/* <Box overflow="hidden" m={0.5} mt={2}>
         {movie.description}
        </Box> */}
      </CardContent>


      {selected ? (
        <Movie title={movie.title} popUpHandler={popUpHandler} />
      ) : (
        <></>
      )}
    </div>
    <CardActions disableSpacing>
        <ThumbRating movie={movie}/>
      </CardActions>
    </Card>
  );
};

export default withStyles(moviesStyles)(Movies);
