// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <> 
    <footer style={footerStyle}>
      <p style={{textDecorationColor: "black", textSizeAdjust: "4px" , color:"black" , marginBottom : "0px"}}>&copy; Weather Application 2024 by Sirisha Kanakala</p>
    </footer>
    </>
  );
};

const footerStyle = {
  backgroundColor: "rgba(75, 18, 151, 0.1)",
  color: '#fff',
  textAlign: 'center',
  padding: '0px',
  position: 'bottom',
  bottom: '0',
  width: '88%',
  
};

export default Footer;
