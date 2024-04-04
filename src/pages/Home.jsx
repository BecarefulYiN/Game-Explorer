import React from 'react'
import AppNavbar from '../components/AppNavbar'
import LeftBar from '../components/HomePage/LeftBar'
import { Box } from '@mui/material'
import Main from '../components/HomePage/Main'


function Home() {
  return (
    <>
      <AppNavbar/>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row'
        }}
      >
        <LeftBar/>
        <Main/>
      </Box>
      
    </>
  )
}

export default Home
