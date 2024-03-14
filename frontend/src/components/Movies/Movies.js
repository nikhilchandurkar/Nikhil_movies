import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getAllMovies } from '../../api-helpers/api-helper';
import MovieItem from './MovieItem';

const Movies = () => {
  const [movies,setMovies] = useState();
  useEffect(()=>{
    getAllMovies()
    .then((data)=>setMovies(data.movies))
    .catch((err)=>console.log(err))
  },[])
  return (
    <Box margin={"auto"} marginTop={4} >
      <Typography 
      borderRadius={19}
      margin={"auto"}
      variant='h4'
      padding={2} 
      width={"40%"}
      bgcolor={"#900c3f"} 
      color={"white"} 
      textAlign={"center"}
      >
        All Movies
      </Typography>
      <Box 
      marginTop={5}
      width={"100%"}
       margin={"auto"}
        display={"flex"}
         justifyContent={"start"}
         flexWrap={"wrap"}
         >
      </Box>
      {movies&&movies.map((movie,index)=><MovieItem
       key={index}
        id={movie.id}
        title= {movie.title}
        posterUrl = {movie.posterUrl}
        date = {movie.releaseDate}
        />)}
    </Box>
  )
}

export default Movies
