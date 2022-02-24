import React from 'react';
import bgimg from '../../Assets/bg1.jpg'
const backgroundStyle = {
    backgroundImage: `linear-gradient(to bottom, rgba(171, 47, 82, 0.82) 0%, #ffaf53 100%), 
     url(${bgimg})`,
    backgroundSize: "cover",
    height: "100vh"
}
const Header = () => {
    return (
        <div style={backgroundStyle}>
            dsd
        </div>
    );
};

export default Header;