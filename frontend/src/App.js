import React from 'react'
import { Header } from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Homepage from "./components/HomePage"
import Movies from "./components/Movies/Movies"
import Admin from "./components/Admin/Admin"
import Auth from './components/Auth/Auth'
import { useState, useEffect } from 'react'
import { Box  } from '@mui/material'
import ProgressBar from './components/progressbar/ProgressBar'

const App = () => {
  // for loader or progresssbar
  const [isFetching, setIsFetching] = useState(true);
  useEffect(() => {
    // for loader or progresssbar
    setTimeout(function () {
      setIsFetching(false);
    }, 1);
  }, []);
  
  // for loader or progresssbar
  if(isFetching){
      return(
        <>
        <Box>
          <ProgressBar/>
        </Box>
        </>
        );
    }
  return (

    <div>
      <Header />
      <section>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/auth' element={<Auth />} />
        </Routes>
      </section>
    </div>



  )
}
export default App
