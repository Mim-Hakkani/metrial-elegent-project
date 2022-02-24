import React from 'react';
import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import '../Contact/Contact.css'
import about from '../../Assets/about.jpg'
const About = () => {
    return (
        <div style={{ marginTop:'30px',marginBottom:'50px'}}>
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
                    <Box sx={{textAlign:'justify'}}>
                         <Typography
                            variant="h5" 
                            gutterBottom 
                            component="div">
                            You can conquer the world.
                         </Typography>

                         <Typography
                            variant="body2" 
                            gutterBottom 
                            component="div"
                            sx={{color:'#ffaf53'}}
                            >
                           If you have right set of mind and thus you can rule the world. Cheers!
                         
                         </Typography>

                         <Typography
                            variant="body2" 
                            gutterBottom 
                            component="p"
                            sx={{
                                color:' #99998f',
                                lineHeight: '27px',
                                padding: "10px 15px 10px 0px"
                            }}
                            
                            >
                           Nam non erat feugiat, pellentesque mi ut, finibus tellus. Ut eget ex sodales, feugiat elit non, semper ex. Sed laoreet lectus nisl, sit amet porttitor lacus porta nec. Quisque sit amet metus sagittis, tincidunt tellus in, efficitur lorem. Sed scelerisque tellus nisl, eget tincidunt elit aliquet vitae. Integer id felis ut ipsum tristique iaculis. Mauris sed nibh enim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc sagittis rhoncus sollicitudin. Maecenas eget dui a neque rutrum tincidunt sed non ipsum.
                         
                         </Typography>
                         <Button variant="contained" sx={{backgroundColor:'#ffaf53'}}>
                             Learn More
                         </Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                    <img src={about} alt='' height={350} />
                </Grid>

             

                </Grid>
            </Container>
        </div>
    );
};

export default About;