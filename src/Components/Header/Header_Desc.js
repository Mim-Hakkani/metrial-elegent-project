import { Button } from '@mui/material';
import React from 'react';

const Header_Desc = () => {
    return (
        <div style={{ color:'#fff',marginTop:'130px'}}>
            <h1>Best Template For Creative Business</h1>
            <p style={{width:'60%',textAlign:'center',margin:'0 auto',lineHeight:'25px',}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec justo rhoncus, pharetra dui ut, cursus turpis. Aenean tincidunt vitae ligula eget congue.</p>
            <Button variant="contained" sx={{backgroundColor:'#ab2f52',mt:'30px',padding:'7px 18px'}}>
                Get Started
            </Button>
        </div>
    );
};

export default Header_Desc;