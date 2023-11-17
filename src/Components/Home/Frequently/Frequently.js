import React, { useState } from 'react'
import '../Frequently/Frequently.css'
import ArrowButton from '../Arrow btn/ArrowButton'
import Accordian from './Accordian/Accordian'


const Frequently = () => {

    return (
        <div className='frequently-container'>
            <div className='frequently-header'>
                <div className='frequently-title'>
                    <h2 className='blue'>Frequently Asked <span className='brown'>questions</span></h2>
                    <p>Have Questions? We're here help.</p>
                    <div className='freq-arrow-btn'>
                        <ArrowButton text="get started now" />
                    </div>
                </div>
            </div>
            <div className='accordian-component'>
                <Accordian />
            </div>


        </div>
    )
}

export default Frequently