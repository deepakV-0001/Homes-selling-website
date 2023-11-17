import React from 'react'
import '../Arrow btn/arrowBtn.css'
import {HiOutlineArrowRight} from 'react-icons/hi'
const ArrowButton = (props) => {
  return (
    <div className='arrow-btn-main'>
        <li ><h4>{props.text}</h4><span><HiOutlineArrowRight/></span></li>
    </div>
  )
}

export default ArrowButton