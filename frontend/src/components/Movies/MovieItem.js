import React from 'react'
import {
  Card,
  Typography,
  CardContent,
  Button,
  CardActions
} from '@mui/material'



const MovieItem = (key,title, releaseDate, posterUrl, id) => {
  return (
    <Card
      sx={{
        margin: 2,
        width: 250,
        height: 320,
        borderRadius: 5,
        ":hover": {
          boxShadow: "20px 20px 20px #ccc"
        }
      }}
    >
      <img height={"50%"} width={"100%"} src={posterUrl} alt={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {/* {MovieItem} */}


        </Typography>
        <Typography variant="body2" color="text.secondary">
          {new Date(releaseDate).toLocaleDateString()}
        </Typography>
      </CardContent>
      <CardActions>
        <Button sx={{ margin: "auto" }} size="small">
    {/* book text */}
          </Button>
      </CardActions>
    </Card>
  )
}

export default MovieItem
