import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Box, styled, Switch, FormGroup, FormControlLabel, ThemeProvider, createTheme, CssBaseline } from '@mui/material'
import React, { useState } from 'react'
import SwitchModeButton from '../components/SwitchModeButton'


function SignUp() {




  return (

    <Box sx={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>

      <SwitchModeButton
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px'
        }}
      />

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

  )
}

export default SignUp
