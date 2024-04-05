import { Box, Card } from '@mui/material';
import React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Valorant from '../../assects/Images/Valorant.jpg';
import PromoteSlide from './PromoteSlide';

function Main() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '85vw',
        height: 'auto',
        padding: '20px',
        gap: '30px'
      }}
    >
        <PromoteSlide />
      <Card sx={{ maxWidth: 300 }}>
        <CardMedia component="img" height="200" image={Valorant} />
      </Card>
    </Box>
  );
}

export default Main;
