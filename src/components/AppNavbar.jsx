import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SwitchModeButton from './SwitchModeButton';

function AppNavbar() {

  return (
    <>
      <AppBar position='fix' >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography  variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <SwitchModeButton/>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default AppNavbar
