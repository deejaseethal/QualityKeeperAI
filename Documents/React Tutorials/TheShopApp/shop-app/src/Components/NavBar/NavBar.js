import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';
import { BsTelephone} from "react-icons/bs";
import { MdOutlineLocalShipping} from "react-icons/md";

function NavBar() {
  return (
    <div>
    <div className='navbar-head'>
    <p className='logo'> Dealerz.</p> 
        <ul>
  <li><Link to='signup'><MdOutlineLocalShipping/>Shipping & Returns</Link></li> 
  <li><Link to='login'><BsTelephone/>Call Center</Link></li>
       </ul>
    </div>
    <div className='navbar'>
       <p>hello</p>
    </div> 
    </div>
  )
}

export default NavBar
