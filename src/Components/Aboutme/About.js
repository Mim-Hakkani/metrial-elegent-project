import React from 'react';
import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import '../Contact/Contact.css'
import about from '../../Assets/about.jpg'
const About = () => {
    return (
        <div>
            <Container>
                <Grid container spacing={2}>
                    <Grid item lg={12} md={12} sm={12}>
                        <Box sx={{mb:'60px'}}>
                        <p className='contact-header'>WE ARE BEST AT OUR WORK</p>
                        <p 
                        className='contact-header-description'
                        style={{
                        width:'50%',
                        margin:'10px auto',
                        textAlign:'center',
                        padding:'5px',
                        lineHeight:'25px'
                        }}
                        
                        >Suspendisse fringilla eget arcu et bibendum. Vestibulum elementum dui tempus dolor gravida, vel mattis erat fermentum.</p>
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

            <Container maxWidth="lg" sx={{m:'15px'}}>
            <Grid container spacing={2}>

                <Grid item xs={12} md={6} lg={6}>
                    <Box>
                        
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                    <img src={about} alt='' />
                </Grid>

             

                </Grid>
            </Container>
        </div>
    );
};

export default About;