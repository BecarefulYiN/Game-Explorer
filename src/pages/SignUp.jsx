import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Box, styled, Switch, FormGroup, FormControlLabel, ThemeProvider, createTheme, CssBaseline } from '@mui/material'
import React,  { useState } from 'react'


function SignUp() {

  const [darkMode, setDarkMode] = useState(false);

  const handleChange = () => {
    setDarkMode(!darkMode);
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>

      <CssBaseline />
      <FormGroup sx={{
        position: 'absolute',
        top: '20px',
        right: '20px',
      }}>
        <FormControlLabel
          control={
            <Switch
              checked={darkMode}
              onChange={handleChange}
              aria-label="mode switch"
            />
          }
          label={darkMode ? 'Light Mode' : 'Dark Mode'}
        />
      </FormGroup>

      <Box sx={{
        display: 'flex',
        justifyContent: 'ceter',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '30px',
      }}>
        <Typography variant='h3'>Sign Up</Typography>
        <TextField
          id='Username'
          label='Enter username'
          sx={{
            width: '20vw'
          }}
        />
        <TextField
          id='Passwords'
          label='Enter password'
          sx={{
            width: '20vw'
          }}
        />
        <TextField
          id='Comfirm Passwords'
          label='Comfirm your password'
          sx={{
            width: '20vw'
          }}
        />

        <Button variant='contained' color="primary">Sign Up</Button>

      </Box>
    </Box>
    </ThemeProvider>
  )
}

export default SignUp
