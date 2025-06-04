import './SecondNavBar.css';
import {Link} from 'react-router-dom';
import { IoIosNotificationsOutline} from "react-icons/io";
import { IoPersonOutline} from "react-icons/io5";
import { AiOutlineShoppingCart,AiOutlineHeart} from "react-icons/ai";

function SecondNavBar() {
  return (
    <div className='second'>
        <div className='bar2'>
       <ul>      
  <li><Link to='#'>Shop</Link></li> 
  <li><Link to='#'>Promo</Link></li>
  <li><Link to='#'>About</Link></li>
  <li><Link to='#'>blog</Link></li>
       </ul>
       </div>
    <div className='second-nav'>

        <ul>      
  <li><Link to='#'><IoIosNotificationsOutline/></Link></li> 
  <li><Link to='#'><IoPersonOutline/></Link></li>
  <li><Link to='#'><AiOutlineShoppingCart/></Link></li>
  <li><Link to='#'><AiOutlineHeart/></Link></li>
       </ul>
       
    </div>
    </div>
  )
}

export default SecondNavBar;
