import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    Box,
    TextField,
    Autocomplete,
    Tab,
    Tabs
} from '@mui/material'
import MovieIcon from '@mui/icons-material/Movie';
import { getAllMovies } from '../api-helpers/api-helper';
export const Header = () => {
    const [value, setValue] = useState(0);
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        getAllMovies()
            .then((data) => setMovies(data.movies))
            .then((data) => console.log(data))
            .catch((err) => console.log(err))
    }, [])
    console.log(movies);

    return (
        <>
            <AppBar position='sticky' sx={{ bgcolor: "#2b2d42", height: "10%" }}>
                <Toolbar>
                    <Box width={"30%"}>
                        <MovieIcon />
                    </Box>
                    <Box sx={{ width: "30%", margin: "auto" }}>
                        <Autocomplete
                            // options={map((option)=>option.image)}
                            options={movies && movies.map((option) => option.title)}
                            renderInput={(params) => <TextField
                                sx={{ input: { color: "white" } }}
                                {...params}
                                placeholder="search" />}
                        />

                    </Box>
                    <Box display={"flex"}>
                        <Box>
                            <Tabs textColor='inherit' indicatorColor='secondary' value={value} onChange={(e, val) => setValue(val)}>
                                <Tab LinkComponent={Link} to="/movies" label="movies" />
                                <Tab label="auth" LinkComponent={Link} to="/auth" />
                                <Tab label="admin" LinkComponent={Link} to="/admin" />
                            </Tabs>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}
