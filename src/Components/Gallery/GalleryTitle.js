import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import '../Contact/Contact.css'

const GalleryTitle = () => {
    return (
        <Container>
        <Grid container spacing={2}>
           <Grid item lg={12} md={12} sm={12}>
             <Box sx={{mb:'60px'}}>
             <p className='contact-header'>CHECK OUR RECENT WORKS</p>
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

    );
};

export default GalleryTitle;