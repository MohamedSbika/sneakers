import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../styles/Footer.css"
function footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'></div>
        <InstagramIcon/>
        <FacebookIcon/>
        <LinkedInIcon/>

        <p> &copy; 2024 Cycy's Shoes</p>

      
    </div>
  )
}

export default footer;



