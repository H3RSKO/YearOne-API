import React, {useState} from "react";
import { TextField, SvgIcon, Grid } from "@material-ui/core";
import Axios from "axios";

const searchIcon = (
  <SvgIcon>
      <path d="M15.5 14l5 5l-1.5 1.5l-5-5v-.79l-.27-.28A6.471 6.471 0 0 1 9.5 16A6.5 6.5 0 0 1 3 9.5A6.5 6.5 0 0 1 9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.57 4.23l.28.27h.79m-6-9.5l-.55.03c-.24.52-.61 1.4-.88 2.47h2.86c-.27-1.07-.64-1.95-.88-2.47c-.18-.03-.36-.03-.55-.03M13.83 7a4.943 4.943 0 0 0-2.68-2.22c.24.53.55 1.3.78 2.22h1.9M5.17 7h1.9c.23-.92.54-1.69.78-2.22A4.943 4.943 0 0 0 5.17 7M4.5 9.5c0 .5.08 1.03.23 1.5h2.14l-.12-1.5l.12-1.5H4.73c-.15.47-.23 1-.23 1.5m9.77 1.5c.15-.47.23-1 .23-1.5s-.08-1.03-.23-1.5h-2.14a9.48 9.48 0 0 1 0 3h2.14m-6.4-3l-.12 1.5l.12 1.5h3.26a9.48 9.48 0 0 0 0-3H7.87m1.63 6.5c.18 0 .36 0 .53-.03c.25-.52.63-1.4.9-2.47H8.07c.27 1.07.65 1.95.9 2.47l.53.03m4.33-2.5h-1.9c-.23.92-.54 1.69-.78 2.22A4.943 4.943 0 0 0 13.83 12m-8.66 0a4.943 4.943 0 0 0 2.68 2.22c-.24-.53-.55-1.3-.78-2.22h-1.9z" fill="currentColor"></path>
        </SvgIcon>
)

const SearchBar = (props) => {
  const {setMovies} = props
  const [searchText, setSearchText] = useState('')

  console.log('set movies? ', props)
  const search = async (event) => {
    try {
      event.preventDefault();
     const {data} = await Axios.get(`http://www.omdbapi.com/?s=${searchText}&type=movie&apikey=a175f862`)
     console.log('search data >> ', data.Search)
     let newMovies = Object.values(data.Search)
     newMovies = newMovies.map(movie => ({
       title: movie.Title, poster: movie.Poster, year: movie.Year, thumbsUp: 0, thumbsDown: 0
     }))
     console.log('updated data >> ', newMovies)
     setMovies(newMovies)
    } catch(err) {console.log(err)}
  }

  return (
    <form onSubmit={search}>
      <TextField
        id="outlined-helperText"
        label="Search Movies"
        variant="outlined"
        color="green"
        autoFocus={true}
        InputProps={{
          startAdornment: (searchIcon),
        }}
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
      />
      </form>
  );
};

export default SearchBar;
