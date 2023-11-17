import React from 'react'
import '../arrowBtn.css'
import {HiOutlineArrowRight} from 'react-icons/hi'

const ArrowButtonBlue = (props) => {
    return (
        <div className='arrow-btn-main blue-btn-comp'>
            <li ><h4>{props.text}</h4><span><HiOutlineArrowRight /></span></li>
        </div>
    )
}

export default ArrowButtonBlue