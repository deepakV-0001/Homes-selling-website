import React from 'react'
import '../About/About.css'
import abt from '../About/abt_right_img.png'
import Header_Component from '../HowITWorks/Header-component/Header_Component'
import ArrowButtonBlue from '../Home/Arrow btn/BlueBtn/ArrowButtonBlue'
import AboutMiddle from './AboutMiddle/AboutMiddle'
import AboutBottom from './AboutBottom/AboutBottom'
import Priority from '../Home/PrioritySection/Priority'

const About = () => {
    return (
        <div className='about-container'>
            <Header_Component heading="About Us" text="About Us" path="about-us" />
            <div className='about-banner'>
                <div className='about-col-1'>
                    <span>ABOUT US</span>
                    <h2>
                        Facilitating Homeownership through <span>Homes Await</span>
                    </h2>
                    <p>Everyone deserves a place to call home,
                        but it's challenging for hardworking individuals,
                        community servants, and aspiring entrepreneurs without inherited wealth.
                    </p>
                    <p>Homes Awaits was conceived to rectify this inequality, aiming
                        to democratize homeownership & the empowerment it brings.
                        A home symbolizes freedom, security, and a lasting legacy,
                        enabling future prosperity. It signifies the start of a brighter
                        future, a privilege you undoubtedly merit as you work towards your dream.
                    </p>
                    <div className='about-btn'>
                       <ArrowButtonBlue text="SIGN UP TODAY"/>
                    </div>
                </div>
                <div className='about-col-2'>
                    <img src={abt} alt='about img'/>
                </div>
            </div>
            <div className='about-middle-section'>
                <AboutMiddle/>
            </div>
            <div className='about-bottom-section'>
                <AboutBottom/>
            </div>
            <div className='abt-priority-section'>
                <Priority/>
            </div>
        </div>
    )
}

export default About