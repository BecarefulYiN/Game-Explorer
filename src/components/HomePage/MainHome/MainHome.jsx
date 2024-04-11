import { Box, Card } from '@mui/material';
import React from 'react';

import PromoteSlide from '../PromoteSlide';

import StoreList from '../MainStore/StoreList';
import MainHomeDiscountList from './MainHomeDiscountList';
import MainHomeTrand from './MainHomeTrand';

function MainHome() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '85vw',
        height: 'auto',
        padding: '20px',
        gap: '30px',
      }}
    >
      <PromoteSlide />

      {/* Discount */}
        <MainHomeDiscountList/>
      {/* Tranding Game */}
        <MainHomeTrand/>
      </Box>


  );
}

export default MainHome;
