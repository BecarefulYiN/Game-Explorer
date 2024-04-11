import React from 'react';
import { Box, Card, CardMedia, Typography } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Valorant from '../../assects/Images/Valorant.jpg';
import PromotedGame from '../../assects/Uplodes/PromotedGame1.jpg'

const images = [
  {
    src: PromotedGame,
    alt: 'Image 1',
  },
  {
    src: PromotedGame,
    alt: 'Image 2',
  },
];

function PromoteSlide() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000, // 2 seconds
    nextArrow: false, 
    prevArrow: false, 
  };

  return (
    <Box sx={{ width: '70vw', height: 'auto', }}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <Card key={index}>  
            <CardMedia
              component="img"
              height="300"
              image={image.src}
              alt={image.alt}
            />
          </Card>
        ))}
      </Slider>
    </Box>
  );
}

export default PromoteSlide;
