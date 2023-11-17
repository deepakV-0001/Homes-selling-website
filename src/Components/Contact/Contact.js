import React from 'react'
import '../Contact/Contact.css'
import Header_component from '../HowITWorks/Header-component/Header_Component'
import { Link } from 'react-router-dom'
import Map from './Map/Map'
import img1 from './connection_903482.svg'
import img2 from './email_542638.svg'
import img3 from './phone-call_126509.svg'
import img4 from './placeholder_684809.svg'

const Contact = () => {
    const timingData = [
        {
            day: "Sunday",
            time: "Closed"
        },
        {
            day: "Monday",
            time: "10 AM - 8 PM"
        },
        {
            day: "Tuesday",
            time: "10 AM - 8 PM"
        },
        {
            day: "Webnesday",
            time: "10 AM - 8 PM"
        },
        {
            day: "Thursday",
            time: "10 AM - 8 PM"
        },
        {
            day: "Friday",
            time: "10 AM - 8 PM"
        },
        {
            day: "Saturday",
            time: "10 AM - 8 PM"
        },
    ];
    const addData = [
        {
            img: img4,
            title: "Reach Us",
            desc: "Los Angeles, CA",
        },
        {
            img: img3,
            title: "Call Us",
            desc: "(855) 678-0099",
        },
        {
            img:img2,
            title: "Email US",
            desc: "info@homesawait.com",
        },
        {
            img: img1,
            title: "Web",
            desc: "www.homesawait.com",
        },
    ]
    const formData=[
        {
            label:"Name",
            text:"text",
            placeholder:"Enter Name",
        },
        {
            label:"Email Address",
            text:"email",
            placeholder:"Enter Email",
        },
        {
            label:"Subject",
            text:"text",
            placeholder:"Enter Subject",
        },
        {
            label:"Phone Number",
            text:"text",
            placeholder:"Enter Phone",
        }
    ]
    return (
        <div className='contact-container'>
            <Header_component heading="Contact US" text="Contact" path="contact" />

            <div className='contact-content'>
                <div className='contact-header-content'>
                    <div className='contact-header'>
                        <h2>Get In <span> Touch</span></h2>
                    </div>

                    <div className='contact-header-bottom'>
                        {
                            addData.map((item) => (
                                <div className='contact-header-bottom-box'>
                                    <span>
                                        <img src={item.img} alt=''/>
                                    </span>
                                    <h2>{item.title}</h2>
                                    <p>{item.desc}</p>
                                </div>
                            ))
                        }


                    </div>
                </div>
                <div className='contact-form-container'>
                    <div className='contact-form'>

                        <form>
                            {
                                formData.map((item)=>(
                                    <div className='contact-form-fields'>
                                    <label>{item.label}</label>
                                    <input type={item.text} placeholder={item.placeholder} />
    
                                </div>
                                ))
                            }
                          
                          
                            <div className='contact-form-fields'>
                                <label>Write Message</label>
                                <textarea placeholder='Write Message' />

                            </div>
                        </form>
                        <div className='contact-btn'>
                            <Link to="/">Send Message</Link>
                        </div>
                    </div>
                    <div className='opening-hours'>
                        <h2>Opening Hours</h2>
                        {
                            timingData.map((item) => (
                                <div className='timing'>
                                    <p>{item.day}</p>
                                    <span>{item.time}</span>
                                </div>
                            ))
                        }



                    </div>
                </div>

            </div>
            <div className='map-section'>
                <Map />
            </div>
        </div>
    )
}

export default Contact