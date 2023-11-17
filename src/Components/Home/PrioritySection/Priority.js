import React from 'react'
import '../PrioritySection/priority.css'
import SliderMain from './SliderMain/SliderMain'
import ArrowButton from '../Arrow btn/ArrowButton'


const Priority = () => {
    return (
        <div className='priority-container'>
            <div className='priority-header'>
                <div className='priority-header-text'>
                    <div className='priority-heading'>
                        <h1 className='blue'>Your Success is <span className='brown'> Our Priority</span> </h1>
                    </div>
                    <p>Use your own judgment. Read testimonials and client success stories.</p>
                    <div className='priority-arow-btn'>
                        <ArrowButton text="get started" />
                    </div>
                </div>

            </div>
            <div className='priority-slider'>
                <SliderMain />
            </div>
        </div>
    )
}

export default Priority