import React, { useEffect, useState } from 'react'
import '../Slider/sliderItem.css'
import Logo from '../Slider/site-logo.png'
import { Link } from 'react-router-dom';
import coma from './double-qout-img.png'



const SliderItem = (props) => {


  return (

    <div className='slider-main-container'>


      <div className='logo-container'>
        <img src={Logo} alt='' />
      </div>

      <div className='slider-container'>
        <div className='slider-content'>
          <div className='slider-title' >
            <h1>{props.title}</h1>
          </div>
          <div className='slider-text'>
            <p>{props.text}</p>
            <div className='comma-img'>
            <img src={coma} alt='' />
          </div>
          </div>
          <div className='slider-read-btn'>
            <Link className='slider-btn' to="/">Read More...</Link>
          </div>
         
        </div>
      </div>



    </div>


  )


}

export default SliderItem

