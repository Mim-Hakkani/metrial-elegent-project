import React from 'react';
import bgimg from '../../Assets/bg1.jpg'
import Header_Desc from './Header_Desc';
import TopHeader from './TopHeader';
const backgroundStyle = {
    backgroundImage: `linear-gradient(to bottom, rgba(171, 47, 82, 0.82) 0%, #ffaf53 100%), 
     url(${bgimg})`,
    backgroundSize: "cover",
    height: "100vh"
}
const Header = () => {
    return (
        <div style={backgroundStyle}>
            <TopHeader />
            <Header_Desc />
        </div>
    );
};

export default Header;