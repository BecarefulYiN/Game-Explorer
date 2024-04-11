import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Valorant from "../../../assects/Images/Valorant.jpg"
import DownloadIcon from '@mui/icons-material/Download';
import Box from '@mui/material/Box';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


function MainHomeDiscountList() {
  return (
    <Box sx={{
      width: '85vw',
      height: 'auto',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly',
      alignItems: 'flex-start',
      padding: '20px',
      borderBottom: '1px solid rgba(77, 77, 77,.1)',
      borderTop: '1px solid rgba(77, 77, 77,.1)'
    }}>

      <Typography variant='h4'
        sx={{
          alignSelf: 'initial',
          display: 'block',
          width: '100%',
          marginBottom: '20px',
        }}>Feature Discount</Typography>

      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={Valorant}

        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Valorant
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Valorant is an online multiplayer computer game, produced by Riot Games.
          </Typography>
        </CardContent>
        <CardActions>
          <Typography
            variant='h6'
            className='discountPercentant'
            sx={{ padding: '7px', display: 'block', backgroundColor: 'rgb(0, 116, 228)', borderRadius: '10px' }} >
            -30%
          </Typography>
          <Typography
            className='beforeDiscount'
            sx={{
              color: 'gray',
              textDecoration: 'line-through',
            }}
          >
            $19.99
          </Typography>

          <Typography
            className='beforeDiscount'
            sx={{

            }}
          >
            $13.99
          </Typography>

          <Typography>
            <AddCircleOutlineIcon />
          </Typography>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={Valorant}

        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Valorant
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Valorant is an online multiplayer computer game, produced by Riot Games.
          </Typography>
        </CardContent>
        <CardActions>
          <Typography
            variant='h6'
            className='discountPercentant'
            sx={{ padding: '7px', display: 'block', backgroundColor: 'rgb(0, 116, 228)', borderRadius: '10px' }} >
            -30%
          </Typography>
          <Typography
            className='beforeDiscount'
            sx={{
              color: 'gray',
              textDecoration: 'line-through',
            }}
          >
            $19.99
          </Typography>

          <Typography
            className='beforeDiscount'
            sx={{

            }}
          >
            $13.99
          </Typography>

          <Typography>
            <AddCircleOutlineIcon />
          </Typography>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={Valorant}

        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Valorant
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Valorant is an online multiplayer computer game, produced by Riot Games.
          </Typography>
        </CardContent>
        <CardActions>
          <Typography
            variant='h6'
            className='discountPercentant'
            sx={{ padding: '7px', display: 'block', backgroundColor: 'rgb(0, 116, 228)', borderRadius: '10px' }} >
            -30%
          </Typography>
          <Typography
            className='beforeDiscount'
            sx={{
              color: 'gray',
              textDecoration: 'line-through',
            }}
          >
            $19.99
          </Typography>

          <Typography
            className='beforeDiscount'
            sx={{

            }}
          >
            $13.99
          </Typography>

          <Typography>
            <AddCircleOutlineIcon />
          </Typography>
        </CardActions>
      </Card>

    </Box>
  )
}

export default MainHomeDiscountList
