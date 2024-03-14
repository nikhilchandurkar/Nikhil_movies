import React, { useState } from 'react'
import {
  Box,
  Button,
  Dialog,
  FormLabel,
  IconButton,
  TextField,
  Typography
} from '@mui/material'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
const AuthForm = (onSubmit, isAdmin) => {
// const [isAdmin,setIsAdmin] = useState(true);
  const [isSignup, setIsSignup] = useState(false);
  const [inputs, setInputs] = useState(
    {
      name: "",
      email: "",
      password: "",
    }
  );
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))

  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    console.log(e);
    // onSubmit({inputs,signup:isAdmin ? false :isSignup});
    // onSubmit(inputs);
  }

  return (
    <Dialog open={true}>
      <Box sx={{ padding: 1, ml: "auto" }}>
        <IconButton>
          <CloseOutlinedIcon />
        </IconButton>
      </Box>
      <Typography variant='h4' textAlign={"center"} >
        {isSignup ? "signup" : "login"}
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box
          width={400}
          display={"flex"}
          padding={5}
          margin={"auto"}
          justifyContent={"center"}
          flexDirection={"column"}
          alignContent={"center"}
        >
          { isAdmin && isSignup && (
            <>
              {""}
              <FormLabel sx={{ mt: 1, mb: 1 }}
              >name</FormLabel>
              <TextField
                value={inputs.name}
                onChange={handleChange}

                margin='normal'
                variant='standard'
                type='text'
                name='name'
              />
            </>
          )}


          <FormLabel sx={{ mt: 1, mb: 1 }}>email</FormLabel>
          <TextField
            value={inputs.email}
            onChange={handleChange}
            margin='normal'
            variant='standard'
            type='email'
            name='email' />

          <FormLabel sx={{ mt: 1, mb: 1 }}>password</FormLabel>
          <TextField
            value={inputs.password}
            onChange={handleChange}
            margin='normal'
            variant='standard'
            type='password'
            name='password'
            />
          <Box>
          </Box>
          
          <Button
            sx={{ mt: 2, borderRadius: 20, bgcolor: "#2b2d42" }}
            fullWidth
            type='submit'
            variant='contained'
          >
            {isSignup ? "signup" : "login"}
          </Button>

          { isAdmin && (
            <Button
            onClick={() => setIsSignup(!isSignup)}
            sx={{ mt: 2, borderRadius: 20, bgcolor: "#2b2d42" }}
            fullWidth
            type='submit'
            variant='contained'
            >

            switch to {isSignup ? "login" : "signup"}
          </Button>
          )}
        </Box>
      </form>
    </Dialog>
  )
}

export default AuthForm
