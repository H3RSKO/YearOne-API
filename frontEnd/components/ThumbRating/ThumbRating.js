import React, {useState, useEffect} from "react";
import {Box, IconButton, SvgIcon} from "@material-ui/core";
import Axios from "axios";
import produce from "immer"

const ThumbRating = (props) => {
  const {movie} = props
  const [thumbRating, setThumbRating] = useState({thumbsUp: movie.thumbsUp, thumbsDown: movie.thumbsDown})
  // const [thumbNumber, setThumbNumber] = useState({thumbsUp: movie.thumbsUp, thumbsDown: movie.thumbsDown})

  useEffect(() => {
    setThumbRating(movie)
  }, [voteHandler])

  if (movie.thumbsDown != thumbRating.thumbsDown || movie.thumbsUp != thumbRating.thumbsUp) setThumbRating(movie)

  console.log('in thumbrating>> ', movie)

  const voteHandler = async (thumb) => {
    console.log('thumbRating preclick ', thumbRating)
    // preventDefault();
    if (thumb === 'up') {
      movie.thumbsUp += 1
      setThumbRating(produce(updatedM => {
        updatedM.thumbsUp += 1
      }))
    } else {
      movie.thumbsDown += 1
      setThumbRating(produce(updatedM => {
        updatedM.thumbsDown += 1
      }))}

      console.log('thumbRating postclick ', thumbRating)
    const {data} = await Axios.post('/api', thumbRating)
  }

  return (
    <Box style={{alignContent:"row"}}>
      <Box style={{alignContent: "column"}}>
      <IconButton aria-label="thumbs up" onClick={() => voteHandler('up')}>
        <SvgIcon>
          <path
            d="M23 10a2 2 0 0 0-2-2h-6.32l.96-4.57c.02-.1.03-.21.03-.32c0-.41-.17-.79-.44-1.06L14.17 1L7.59 7.58C7.22 7.95 7 8.45 7 9v10a2 2 0 0 0 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2M1 21h4V9H1v12z"
            fill="green"
          ></path>
        </SvgIcon>
      </IconButton>
      {thumbRating.thumbsUp}
      </Box>
      <Box style={{alignContent:"column"}}>
      <IconButton aria-label="thumbs down" onClick={() => voteHandler('down')}>
        <SvgIcon>
          <path
            d="M19 15h4V3h-4m-4 0H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2a2 2 0 0 0 2 2h6.31l-.95 4.57c-.02.1-.03.2-.03.31c0 .42.17.79.44 1.06L9.83 23l6.58-6.59c.37-.36.59-.86.59-1.41V5a2 2 0 0 0-2-2z"
            fill="red"
          ></path>
        </SvgIcon>
      </IconButton>
      {thumbRating.thumbsDown}
      </Box>
    </Box>
  );
};

export default ThumbRating
