import { Button, Container,  Grid,  TextField,} from '@mui/material';
import { Box } from '@mui/system';
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
      <Grid container sx={{mb:'30px'}} >
        <Grid sx={{my:'15px'}} >
          <TextField
            id="name-input"
            name="name"
            label="Name"
            type="text"
            variant="standard"
           
          />
    
        
          <TextField
            id="age-input"
            name="age"
            label="Email"
            type="text"
            variant="standard"
            sx={{ml:'10px',width:'280px'}}

          />
        </Grid>

        <Grid item lg={10} sx={{mb:'20px'}}>
          <TextField
            id="subject"
            name="subject"
            label="subjects"
            type="text"
            variant="standard"
            fullWidth={true}

          />
        </Grid>

        <Grid item lg={10} sx={{mt:'25px'}}>
          <TextField
           fullWidth
           label="message "
           id="fullWidth"
           variant="outlined"
           rows="5"
           multiline={true}
          />
        </Grid>
       
        
       <Grid item lg={10} sx={{mt:'25px'}}> 
        <Button variant="contained" color="primary" type="submit" 
         sx={{
          background: '#ab2f52',
          width: '41%',
          borderRadius: '19px',
          padding: '8px 9px',
          fontSize: '16px',
      }
 }
        >
          Submit
        </Button>
        </Grid>
        
      </Grid>
    </form>





            </Grid>
       </Grid>

         </Container>


         </>
    );
};

export default Contact;