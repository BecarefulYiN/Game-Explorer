import React from 'react';
import { Box, Typography, styled,Button } from '@mui/material';


const LeftCategory = styled(Button)(({  }) => ({
  display: 'block',
  justifyContent: 'center',
  textAlign: 'center',
  width: '80%',
  height: 'auto',
  padding: '20px 20px',
  borderBottom: '1px solid rgba(0,0,0,.3)',
}));

function LeftBar() {
  return (
    <Box sx={{
      width: '15vw',
      height: 'auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      borderRight: '1px solid black'
    }}>
      <LeftCategory>Home</LeftCategory>
      <LeftCategory>Store</LeftCategory>
      <LeftCategory>Library</LeftCategory>
    </Box>
  );
}

export default LeftBar;
