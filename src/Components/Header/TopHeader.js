import { Button, Container, Grid, Link } from '@mui/material';
import React from 'react';
import logo from '../../Assets/logo-white.png'



const TopHeader = () => {
    return (
         <Container>
     

        <Grid container spacing={2}>

            <Grid item xs={12} sm={4} md={4} lg={4}>
            <Button  sx={{color:'#fff',padding:'10px 15px',marginTop:'20px'}}> <img src={logo} alt="emmet logo " /></Button> 

        

            </Grid>
            <Grid item xs={12} sm={8} md={8} lg={8}>
                <Link href="#" underline="none" >
                 <Button   sx={{color:'#fff',padding:'10px 15px',marginTop:'20px'}}> Home</Button> 
                </Link>
                <Link href="#" underline="none">
                   <Button  sx={{color:'#fff',padding:'10px 15px',marginTop:'20px'}}>About  </Button>
                </Link>
                <Link href="#" underline="none">
                    <Button   sx={{color:'#fff',padding:'10px 15px',marginTop:'20px'}}>Gallery  </Button>
                </Link>
                <Link href="#" underline="none">
                    <Button   sx={{color:'#fff',padding:'10px 15px',marginTop:'20px'}}>Reviews  </Button>
                </Link>
                <Link href="#" underline="none">
                    <Button   sx={{color:'#fff',padding:'10px 15px',marginTop:'20px'}}> Contact </Button>
                </Link>
           </Grid>
        </Grid>

         </Container>
    );
};

export default TopHeader;