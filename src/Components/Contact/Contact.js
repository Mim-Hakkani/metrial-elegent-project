import { Button, Container,  Grid,   ListItemIcon,  TextField,} from '@mui/material';
import { Box } from '@mui/system';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import MailIcon from '@mui/icons-material/Mail';
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
     
            <Grid  xs={12} md={4} lg={4} >
              
              <Box sx={{mt:'35px' ,mb:'30px'}}>
                  <ListItemIcon>
                    <PhoneEnabledIcon 
                    sx={{
                      mt:'15px',
                      mr:'20px',
                      color:'#ab2f52',
                      fontSize:'30px',
                     
                      
                      }} />
                    <span> <b>Phone</b>  <br/> 017451667065</span>
                  </ListItemIcon>
              </Box>

              <Box sx={{mb:'30px'}} >
                  <ListItemIcon>
                    <AddLocationAltIcon 
                    sx={{
                      mt:'15px',
                      mr:'20px',
                      color:'#ab2f52',
                      fontSize:'30px',
                     
                      
                      }} />
                    <span><b>Addess</b> <br/> jputhia ,rajshahi</span>
                  </ListItemIcon>
              </Box>

              <Box sx={{mb:'30px'}}>
                  <ListItemIcon>
                    <MailIcon 
                    sx={{
                      mt:'15px',
                      mr:'20px',
                      color:'#ab2f52',
                      fontSize:'30px',
                     
                      
                      }} />
                    <span><b>Mail</b> <br/>mim@gmail.com</span>
                  </ListItemIcon>
              </Box>
            
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