import React from 'react'
import {Link} from 'react-router-dom';
import Bar3 from '../Bar3/Bar3';
import './RowPost.css';
import { BsFillArrowRightCircleFill } from "react-icons/bs";

function RowPost() {
  return (
    <div className='rowPost'>
    <div className='main'>
      <p className='mainheading'>Our Premium Collection</p>
         <Bar3/>
      </div>
   

      <div className='row'>
        <h1>.</h1>
<div className='posters'>
<div class="card">
  <img className='poster' src="assets\two.jpg" alt="dress poster"/>
  <div className="container">
  <p className='item-des'>Category Dress</p>
 
        <Link className='item'>Tropical Suit</Link>
        <br/><br/>
        <Link className='go'><BsFillArrowRightCircleFill/></Link>
        <br/><br/>
  </div>
  </div>
  <div class="card">
  <img className='poster' src="assets\three.jpg" alt="dress poster"/>
  <div className="container">
  <p className='item-des'>Category Dress</p>
        <Link className='item'>Tropical Suit</Link>
        <br/><br/>
        <Link className='go'><BsFillArrowRightCircleFill/></Link>
        <br/><br/>
  </div>
  </div>
  <div class="card">
  <img className='poster' src="assets\four.jpg" alt="dress poster"/>
  <div className="container">
  <p className='item-des'>Category Dress</p>
        <Link className='item'>Tropical Suit</Link>
        <br/><br/>
        <Link className='go'><BsFillArrowRightCircleFill/></Link>
        <br/><br/>
  </div>
  </div> 
</div>



</div>
<div className='row'>
        <h1>.</h1>
<div className='posters'>
<div class="card">
  <img className='poster' src="assets\five.jpg" alt="dress poster"/>
  <div className="container">
  <p className='item-des'>Category Dress</p>
        <Link className='item'>Tropical Suit</Link>
        <br/><br/>
        <Link className='go'><BsFillArrowRightCircleFill/></Link>
        <br/><br/>
  </div>
  </div>
  <div class="card">
  <img className='poster' src="assets\six.jpg" alt="dress poster"/>
  <div className="container">
  <p className='item-des'>Category Dress</p>
        <Link className='item'>Tropical Suit</Link>
        <br/><br/>
        <Link className='go'><BsFillArrowRightCircleFill/></Link>
        <br/><br/>
  </div>
  </div>
  <div class="card">
  <img className='poster' src="assets\seven.jpg" alt="dress poster"/>
  <div className="container">
  <p className='item-des'>Category Dress</p>
        <Link className='item'>Tropical Suit</Link>
        <br/><br/>
        <Link className='go'><BsFillArrowRightCircleFill/></Link>
        <br/><br/>
  </div>
  </div> 
</div>

<div className='row-button'>
            <button className='button'>Find Out More</button>
        </div>


</div>


</div>
  )
} 


export default RowPost
