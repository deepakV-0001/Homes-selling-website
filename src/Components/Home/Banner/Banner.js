import React from 'react'
import './banner.css'
import { Link } from 'react-router-dom'
import Banner_img from '../Banner/banner-img.jpg'
import {HiOutlineArrowRight} from 'react-icons/hi'
const Banner = () => {
  return (
    <div className='banner-container'>
        <div className='banner-img'>
          
        </div>
        <div className='banner-content'>
            <div className='banner-content-text'>
                <h1>
                Live In Your Dream Home Today, Own It Tomorrow
                </h1>
                <p>Empowering Families & Realtors for Success...</p>
            </div>
            <div className='banner-content-btns'>
                <li className='banner-content-signup'><Link to="/">Sign Up</Link><span><HiOutlineArrowRight/></span></li>
                <li className='banner-content-learn-more'><Link to="/">Learn More</Link><span><HiOutlineArrowRight/></span></li>
            </div>
        </div>
    </div>
  )
}

export default Banner