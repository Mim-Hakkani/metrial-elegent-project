import React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { Button } from '@mui/material';



const GalleryLink = () => {

    const preventDefault = (event) => event.preventDefault()
    return (
        <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          typography: 'body1',
          '& > :not(style) + :not(style)': {
            ml: 2,
            mb:5
          },
        }}
        onClick={preventDefault}
      >
        <Link href="#" underline="none" >
          <Button variant='contained' sx={{ backgroundColor:"#ab2f52" }}> All</Button>
        </Link>
        <Link href="#" underline="none">
          <Button variant='contained '>Summer </Button>
        </Link>
        <Link href="#" underline="none">
          <Button variant='contained '> Winter</Button>
        </Link>
        <Link href="#" underline="none">
          <Button variant='contained '> Rainy</Button>
        </Link>

        <Link href="#" underline="none">
          <Button variant='contained '> Spring</Button>
        </Link>
      </Box>
    );
};

export default GalleryLink;