import React from 'react'
import '../HowITWorks/howItWorks.css'
import Navigate from '../Naviagte-btns/Navigate'
import own_img from './how-own-program.png'
import { Link } from 'react-router-dom'
import { HiOutlineArrowRight } from 'react-icons/hi'
import WorksMiddleSection from './HowItWorks-MiddleSection/WorksMiddleSection'
import Apart from './Await-Apart/Apart'
import Header_Component from './Header-component/Header_Component'
import BlueBtn from '../Home/Arrow btn/BlueBtn/ArrowButtonBlue'


const HowItWorks = () => {
  return (
    <div className='works-container'>

      <Header_Component heading="How it Works" text="How it Works" path="how-it-works" />
      <div className='works-own-program'>
        <div className='own-image'>
          <img src={own_img} alt='' />
        </div>
        <div className='own-text-content'>
          <div className='own-text-heading'>
            <h3>
              THE LEASE TO OWN PROGRAM
            </h3>
          </div>
          <div className='own-text-theory'>
            <p>Due to financial constraints, rising property
              costs & loan rates, many families can't buy a home.
              Home Awaits offers a customized 1-year Rent-to-Own
              & 3-year Lease-to-Own program, allowing immediate
              single-family home benefits while delaying the commitment.
            </p>

            <p>With clear choices and open options at your fingers, you
              can confidently step towards your homeownership goal,
              regardless of your current financial situation.</p>
          </div>
          <div className='own-join-btn'>
            <BlueBtn text="JOIN TODAY" />
          </div>
        </div>

      </div>
      <div className='works-middle-section'>
        <WorksMiddleSection />
      </div>
      <div className='apart-section'>
        <Apart />
      </div>
    </div>
  )
}

export default HowItWorks