import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Box, styled, Switch, FormGroup, FormControlLabel, ThemeProvider, createTheme, CssBaseline } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const LoginInput = styled(TextField)(({ }) => ({
  width: '20vw'
}));

function Login() {

  const navigate = useNavigate()

  const [darkMode, setDarkMode] = useState(false);

  const handleChange = () => {
    setDarkMode(!darkMode);
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  const handleSignUp = () => {
    navigate(`/SignUp`)
  }

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>


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

        <Typography variant=''></Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h3" sx={{ display: 'block' }}  >Welcome back</Typography>
          <Typography sx={{ display: 'block', marginBottom: '50px' }}>Discover and explore more game</Typography>
        </Box>
        <Box sx={{
          width: '25vw',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '30px',
          padding: '50px',
          marginLeft: '30px',
          borderLeft: '1px solid #8080802b'
        }}>

        <Typography variant='h3' sx={{textDecoration: 'underline'}}>Login</Typography>

          <LoginInput
            id="Username"
            label="Enter Your username"
          />

          <LoginInput
            Id="password"
            label="Enter Your password"
          />

          <Button 
            variant='contained' 
            color="primary"
            
          >
            Login
          </Button>

          <Typography variant='p'>forgot password?</Typography>

          <Typography variant='p'>Don't have an accout? 
          <a 
            href='#'
            onClick={handleSignUp} 
          > 
            Sign up
          </a>
          </Typography>

        </Box>
      </Box>
    </ThemeProvider>

  )
}

export default Login
