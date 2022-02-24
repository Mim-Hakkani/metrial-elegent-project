import { Container, Grid, Paper } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import '../Contact/Contact.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {  CardActionArea } from '@mui/material';
import img1 from '../../Assets/gall1.jpg'
import img2 from '../../Assets/gall2.jpg'
import img3 from '../../Assets/gall3.jpg'
import img4 from '../../Assets/gall4.jpg'
import img5 from '../../Assets/gall5.jpg'
import img6 from '../../Assets/gall6.jpg'

const Services = () => {

  
 
    return (
        <div>

    {/* services title is ready  */}

     <Container>
        <Grid container spacing={2}>
           <Grid item lg={12} md={12} sm={12}>
             <Box sx={{mb:'60px'}}>
             <p className='contact-header'>WE ARE BEST AT OUR SERVICE</p>
             <p className='contact-header-description'>Vestibulum elementum dui tempus dolor gravida, vel mattis erat fermentum.</p>
             <Box sx={{ 
                 borderBottom: 3,
                 width:'50px',
                 color:'rgb(212, 25, 87)',
                 margin:'0 auto'
                 
                 }}></Box>
             </Box>
             
           </Grid>
         </Grid>
     </Container>


     {/* Services section is here  */}

     <Container maxWidth="lg" sx={{mb:'30px'}}> 
         <Grid container spacing={2}>

        {
            cartimages.map(cart=>  <Grid item xs={6} md={4} lg={4}>
                <Card sx={{ maxWidth: 345 ,mt:'15px'}}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={cart.imagess}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
               {cart.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
               {cart.desc}
              </Typography>
            </CardContent>
          </CardActionArea>
    
                </Card>
            </Grid>)
        }


        
         </Grid>

         
     </Container>
        </div>
    );
};

export default Services;



const cartimages = [
    {
        id:1,
        name:'Sapla',
        desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae blanditiis voluptatibus consectetur magni harum voluptatum.',
        imagess :img1
    },

    {
        id:2,
        name:'Polas',
        desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae blanditiis voluptatibus consectetur magni harum voluptatum.',
        imagess :img2
    },
    {
        id:3,
        name:'RojoniGondha',
        desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae blanditiis voluptatibus consectetur magni harum voluptatum.',
        imagess :img3
    },
    {
        id:3,
        name:'RojoniGondha',
        desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae blanditiis voluptatibus consectetur magni harum voluptatum.',
        imagess :img4
    },  {
        id:3,
        name:'RojoniGondha',
        desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae blanditiis voluptatibus consectetur magni harum voluptatum.',
        imagess :img5
    },
    {
        id:3,
        name:'RojoniGondha',
        desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae blanditiis voluptatibus consectetur magni harum voluptatum.',
        imagess :img6
    },
]