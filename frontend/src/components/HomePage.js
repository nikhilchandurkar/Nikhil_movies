import { Box, Typography,Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import MovieItem from './Movies/MovieItem'
import { Link } from 'react-router-dom'
import { getAllMovies } from '../api-helpers/api-helper'


const HomePage = () => {
  const [movies,setMovies ] = useState([]);
  useEffect(()=>{
    getAllMovies().then((data)=>setMovies(data.movies))
    .catch(err=>console.log(err))
  })
  // console.log(movies);
  return (
    <Box width={'100%'} height={'100%'} margin={"auto"} marginTop={2}>
      <Box margin={"auto"} width={'80%'} height={"50vh"} padding={2}>
        {/* <img src={bramhstra} alt='img'/> */}
        <img src="https://i.pinimg.com/564x/80/2c/c5/802cc59bcb553f390135eb3da88f1cde.jpg" alt='img'
          height={"100%"} width={"100%"} />
      </Box>

      <Box padding={5} margin={"auto"}>
        <Typography variant='h4' textAlign={"center"} >
          latest release
        </Typography>
      </Box>
      <Box display="flex" width={"100%"} justifyContent={"center"}
      flexWrap={"wrap"}>
        {
          movies&&movies.slice(0,4).map((movie,index) => (
            <MovieItem id={movie}
            title= {movie.title}
            posterUrl = {movie.posterUrl}
            date = {movie.releaseDate}
            key={index} />
          ))
        }
      </Box>
      <Box display={"flex"} padding={5} margin={"auto"} justifyContent={"center"}>
        <Button LinkComponent={Link} to="/movies" variant="outlined" sx={{ margin:"auto", color: "#2b2d42",
      borderRadius:2}}>
          view all movies
        </Button>
      </Box>
    </Box>
  )
}

export default HomePage
