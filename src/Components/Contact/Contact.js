import { Button, Container, FormControl, FormControlLabel, FormLabel, Grid, Icon, ListItemIcon, MenuItem, Radio, RadioGroup, Select, Slider, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import SendIcon from '@mui/icons-material/Send';
import React from 'react';
import './Contact.css'

const Contact = () => {

    const handleSubmit=()=>{

    }
    return (
        <> 
         <Container>
            <Grid container spacing={2}>
               <Grid item lg={12} md={12} sm={12}>
                 <Box sx={{mb:'60px'}}>
                 <p className='contact-header'>Contact Us for more</p>
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

         {/* details for contact  */}

         <Container >
         <Grid container spacing={2}>
     
            <Grid  xs={12} md={4} lg={4} sx={{background:'red'}} >
              
              <h1>sdsdsd</h1>
     
            </Grid>

            <Grid  xs={12} md={2} lg={2} >
        
            </Grid>
            <Grid  xs={12} lg={6} md={6}>

<form onSubmit={handleSubmit}>
      <Grid container sx={{mb:'30px'}}>
        <Grid item>
          <TextField
            id="name-input"
            name="name"
            label="Name"
            type="text"
            variant="standard"
           
          />
        </Grid>
        <Grid item>
          <TextField
            id="age-input"
            name="age"
            label="Email"
            type="text"
            variant="standard"
            sx={{ml:'35px'}}

          />
        </Grid>

        <Grid item lg={10}>
          <TextField
            id="subject"
            name="subject"
            label="subjects"
            type="text"
            variant="standard"
            fullWidth={true}

          />
        </Grid>
        
    
        {/* <Button variant="contained" color="primary" type="submit">
          Submit
        </Button> */}

        
      </Grid>
    </form>





            </Grid>
       </Grid>

         </Container>


         </>
    );
};

export default Contact;