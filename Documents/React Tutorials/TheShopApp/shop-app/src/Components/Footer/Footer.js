import React from 'react';

import './Footer.css';

function Footer() {
  return (
    <div className='footer'>
        <div className='footer-content'>
            <h3>Dealerz. </h3>
            <p>Privacy Policy</p>
            <p>Terms and Condition</p>

           
            <ul className='socials'>
                
                <li><a href="="><i class="fa-brands fa-facebook"></i></a></li>
                <li><a href="="><i class="fa-brands fa-square-instagram"></i></a></li>
                <li><a href="="><i class="fa-brands fa-linkedin"></i></a></li>
                <li><a href="="><i class="fa-brands fa-square-youtube"></i></a></li>
                <li><a href="="><i class="fa-brands fa-pinterest"></i></a></li>
            </ul>
        </div>
      <div className='footer-bottom'>
        <p> &copy; 2020 TanahAir Studio. All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer
