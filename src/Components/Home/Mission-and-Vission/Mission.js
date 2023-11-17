import React from 'react'
import '../Mission-and-Vission/mission.css'
import icon1 from './mission-icon.png'
import icon2 from './vission-icon.png'
import ArrowButton from '../Arrow btn/ArrowButton'

const Mission = () => {
    return (
        <div className='mission-container'>
            <div className='mission-heading'>
                <div className='mission-title'>
                    <h4>Our Mission And <span className='brown'>Vision</span></h4>

                </div>
                <p>Guided by purpose We chart our course</p>
            </div>
            <div className='mission-boxes'>
                <div className='mission-box'>
                    <div className='mission-box-icon'>
                        <img src={icon1} alt='' />
                    </div>
                    <h1> our Mission</h1>
                    <div className='mission-text'>
                        <p>Our mission is to bridge the wealth disparity gap
                            by offering families customized homeownership solutions
                            to secure their financial futures and offer a sense of belonging.
                        </p>
                    </div>
                </div>

                <div className='mission-box vision'>
                    <div className='mission-box-icon'>
                        <img src={icon2} alt='' />
                    </div>
                    <h1> our vission</h1>
                    <div className='mission-text'>
                        <p>Our mission is to bridge the wealth disparity gap
                            by offering families customized homeownership solutions
                            to secure their financial futures and offer a sense of belonging.
                        </p>
                    </div>
                </div>


            </div>
            <div className='mission-arow-btn'>
                <ArrowButton text="explore about us" />
            </div>

        </div>
    )
}

export default Mission