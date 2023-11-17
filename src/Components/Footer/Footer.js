import React from 'react'
import '../Footer/footer.css'
import { Link } from 'react-router-dom'
import logo from './footer-logo.png'
import apple_icon from '../Footer/apple-icon.svg'
import android_icon from './android-icon.svg'
import coming_soon from './comming-soon.png'
import feed from './feed-img.jpg'
import { CgFacebook } from 'react-icons/cg'
import { BsTwitter, BsInstagram } from 'react-icons/bs'
import { ImLinkedin2 } from 'react-icons/im'


const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer-header'>
                <div className='footer-top-title'>
                    <h3>
                        Subscribe Newsletter
                    </h3>
                </div>
                <div className='footer-header-newsletter'>
                    <input type='email' placeholder='Enter Your Email' />

                    <input type='submit' />
                </div>

            </div>
            <div className='footer-mid'>
                <div className='footer-mid-col-1'>
                    <Link to="/">
                        <img src={logo} alt='' />
                    </Link>
                    <div className='footer-mid-address'>
                        <h3>Headquarters</h3>
                        <p>Los Angeles, CA</p>
                        <p>Phone: (855) 678-0099</p>
                    </div>
                    <div className='download-section'>
                        <h3>Download Apps</h3>
                        <div className='get-home-app'>
                            <Link to="/">
                                <img className='download-icon' src={apple_icon} alt='' />
                                <h2>Download on the</h2>
                                <p>App Store</p>
                                <img  src={coming_soon} alt='' />
                            </Link>
                            <Link to="/">
                                <img className='download-icon' src={android_icon} alt='' />
                                <h2>Get it on</h2>
                                <p>Google play</p>
                                <img src={coming_soon} alt='' />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='footer-mid-col-2'>
                    <div className='footer-mid-resources'>
                        <h3>
                            Resources
                        </h3>
                        <ul>
                            <li>FAQs</li>
                            <li>Blog</li>
                            <li>Terms of Use</li>
                            <li>Privacy Policy</li>
                            <li>Cookie Policy</li>
                        </ul>
                    </div>
                    <div className='footer-mid-quick'>
                        <h3>
                            Quick Links
                        </h3>
                        <ul>
                            <li>About Company</li>
                            <li>How it Works</li>
                            <li>For Agents</li>
                            <li>Testomonials</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>

                    <div className='footer-mid-image'>
                        <h3>
                            Follow Us On Social Media
                        </h3>
                        <label>
                            <Link to="https://www.facebook.com/people/Homes-Await/100094891941689/"><CgFacebook /></Link>
                            <Link to="/"><BsTwitter /></Link>
                            <Link to="/"><BsInstagram /></Link>
                            <Link to="/"><ImLinkedin2 /></Link>
                        </label>
                    </div>
                </div>

                <div className='footer-mid-col-3'>
                    <h3><BsTwitter/>Twitter</h3>
                    <div className='feed-img'>
                        <img src={feed} alt=''/>
                    </div>
                </div>

            </div>
            <div className='footer-bottom'>
                <div className='footer-bottom-text'>
                    <p>© 2023 Homes Await. All Rights Reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer