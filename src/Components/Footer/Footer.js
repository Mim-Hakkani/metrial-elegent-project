import { Container, Grid, ListItem, Paper } from '@mui/material';
import { Box } from '@mui/system';


// import images from '../../Assets/bg1.jpg'
import React from 'react';

// const styles = {
//     paperContainer: {
//         height: 500,
//         backgroundImage: `url(${images})`
//     }
// };

const Footer = () => {
    return (

        // <Paper style={styles.paperContainer}>
        //   Some text to fill the Paper Component
        // </Paper>

         <Box sx={{backgroundColor:'grey',py:'5px',color:'#fff'}}>
             <p>  All Right Reserved @ {new Date().getFullYear()} Powered by Golam Hakkani Mim</p>
         </Box>

    );
};

export default Footer;