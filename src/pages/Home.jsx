import React from 'react'
import AppNavbar from '../components/AppNavbar'
import LeftBar from '../components/HomePage/LeftBar'
import { Box } from '@mui/material'
import MainHome from '../components/HomePage/MainHome/MainHome'


function Home() {
  return (
    <>
      <AppNavbar/>
      <Box
        sx={{
          marginTop: '4vw',
          display: 'flex',
          flexDirection: 'row'
        }}
      >
        <LeftBar/>
        <MainHome/>
      </Box>
      
    </>
  )
}

export default Home
