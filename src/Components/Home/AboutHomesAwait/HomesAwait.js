import React from 'react'
import '../AboutHomesAwait/homesAwait.css'
import ArrowButton from '../Arrow btn/ArrowButton'
import img1 from '../AboutHomesAwait/homes_await1.jpg'
import img2 from '../AboutHomesAwait/homes_await2.jpg'
import middle_logo from '../AboutHomesAwait/middle-img-logo.png'
import icon1 from './middle-icon1.png'
import icon2 from './middle-icon2.png'
import icon3 from './middle-icon3.png'
import icon4 from './middle-icon4.png'
import icon5 from './lower-icon1.png'
import icon6 from './lower-icon2.png'
import { Link } from 'react-router-dom'
import play_btn from '../AboutHomesAwait/middle-play-icon.png'

const HomesAwait = () => {
  const middleData = [
    {
      icon: icon1,
      title: "Transparent",
      desc: " We adhere to the principle of transparency and are forthright about our procedures, fees, and any potential first time homebuyer pitfalls.",
    },
    {
      icon: icon2,
      title: "Reliable",
      desc: "By consistently providing superior service,  communication, and delivery, we foster everlasting credibility.",
    },
    {
      icon: icon3,
      title: "Expertise and Insight",
      desc: "Our profound understanding of the real estate and investment markets inspires absolute confidence.",
    },
    {
      icon: icon4,
      title: "Personalized Service",
      desc: "Our approach is to resolve living situations, enabling individuals to become proud homeowners.",
    },
  ]
  return (
    <div className='homesAwait-container'>
      <div className='homesAwait-header'>
        <div className='homesAwait-header-text'>
          <div className='header-heading'>
            <h1 className='blue'>Why Choose<span className='brown'>Homes Await</span></h1>
          </div>
          <p>Homes Await is your trusted partner for buying or selling a new construction home.</p>
          <div className='hawit-arrow-btn'>
            <ArrowButton text="sign up today" />
          </div>
        </div>

      </div>
      <div className='homesAwait-middle'>
        <div className='middle-img'>
          <Link className='call-btn' to="/">
            <div className='btn-call-icon'>
              <img src={play_btn} alt='' />
            </div>
          </Link>
          <img src={img1} alt='' />
          <div className='middle-img-logo'>
            <img src={middle_logo} alt='' />
          </div>
        </div>
        <div className='middle-text-content'>
          {middleData.map((item) => (
            <div className='middle-text'>
              <li><span><img src={item.icon} alt='' /></span><h4>{item.title}</h4></li>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='homesAwait-lower-container'>
        <div className='lower-container-text'>
          <div className='lower-container-heading'>
            <h1>Homes Await Is Your Path To <span> Dream Home</span></h1>
            <p>Our skilled team & strategic relationships
              enable us to create innovative solutions that help
              families achieve homeownership.</p>
          </div>
          <div className='lower-text'>
            <div className='lower-text-col'><li><span><img src={icon5} alt='' /></span><h4>Government Subsidies</h4></li>
              <p>Use our government program expertise to make
                your home buying process easier.</p></div>

            <div className='lower-text-col'><li><span><img src={icon6} alt='' /></span><h4>Home Buying Assistance</h4></li>
              <p>Find best mortgage lenders & top-quality new construction homes with us.</p></div>

          </div>
        </div>
        <div className='lower-container-img'>
          <img src={img2} alt='' />
        </div>

      </div>
    </div>

  )
}

export default HomesAwait