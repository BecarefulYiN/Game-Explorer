import React from 'react'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DownloadIcon from '@mui/icons-material/Download';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Valorant from '../../../assects/Images/Valorant.jpg';
import {Card } from '@mui/material';

function StoreList() {
  return (
    <>
      <Card sx={{ maxWidth: 300 }}>
          <CardMedia component="img" height="200" image={Valorant} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Valorant
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <Button size="small"><ShoppingCartIcon /> Add to cart</Button>
            <Button size="small"><DownloadIcon /> Download</Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 300 }}>
          <CardMedia component="img" height="200" image={Valorant} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Valorant
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <Button size="small"><ShoppingCartIcon /> Add to cart</Button>
            <Button size="small"><DownloadIcon /> Download</Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 300 }}>
          <CardMedia component="img" height="200" image={Valorant} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Valorant
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <Button size="small"><ShoppingCartIcon /> Add to cart</Button>
            <Button size="small"><DownloadIcon /> Download</Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 300 }}>
          <CardMedia component="img" height="200" image={Valorant} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Valorant
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <Button size="small"><ShoppingCartIcon /> Add to cart</Button>
            <Button size="small"><DownloadIcon /> Download</Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 300 }}>
          <CardMedia component="img" height="200" image={Valorant} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Valorant
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <Button size="small"><ShoppingCartIcon /> Add to cart</Button>
            <Button size="small"><DownloadIcon /> Download</Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 300 }}>
          <CardMedia component="img" height="200" image={Valorant} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Valorant
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <Button size="small"><ShoppingCartIcon /> Add to cart</Button>
            <Button size="small"><DownloadIcon /> Download</Button>
          </CardActions>
        </Card>
    </>
  )
}

export default StoreList
