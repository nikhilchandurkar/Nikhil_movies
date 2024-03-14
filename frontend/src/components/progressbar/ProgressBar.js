import React from 'react'
import { Box } from '@mui/material'
import CircularProgress from "@mui/material/CircularProgress";
const ProgressBar = () => {
  return (
    <Box sx={{display:"flex",
    justifyContent:"center",
    alignItems:"center",
    mt:30
    }}>
   <CircularProgress/>
 
 </Box>
  )
}

export default ProgressBar;
