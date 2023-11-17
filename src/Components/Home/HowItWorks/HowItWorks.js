import React from 'react'
import '../HowItWorks/howItworks.css'
import ArrowButton from '../Arrow btn/ArrowButton'
import work1 from '../HowItWorks/work-icon1.png'
import work2 from '../HowItWorks/work-icon2.png'
import work3 from '../HowItWorks/work-icon3.png'
import work4 from '../HowItWorks/work-icon4.png'



const HowItWorks = () => {
    const howItworks_Data = [
        {
            img: work1,
            title1: "Find Your Dream",
            title2: "Home",
            desc: " View available homes for sale. Compare the Rent & Purchase Prices before deciding to own.",
        },
        {
            img: work2,
            title1: "Apply In",
            title2: "Minutes",
            desc: "  Get Prequalified for rent-then- buy in just minutes. Prequalification with no credit score impact.",
        },
        {
            img: work3,
            title1: "Get",
            title2: "Approvals",
            desc: " Get approved based on your income and leverage government benefits to buy a home!",
        },
        {
            img: work4,
            title1: "Move In &",
            title2: "Buy Later",
            desc: " Move in as a renter and lock in your home purchase price today with our lease to own program.",
        },
    ]
    return (<>
        <div className='main-container'>
            <div className='main-heading'>
                <h1>Rent To Own: <span>How It Works</span></h1>
            </div>
            <div className='main-container-boxes'>

                {howItworks_Data.map((item) => (
                    <div className='box'>
                        <span>
                            <img src={item.img} alt='' />
                        </span>
                        <div className='box-text'>
                            <h3>{item.title1}<span>{item.title2}</span></h3>
                            <p>
                               {item.desc}
                            </p>
                        </div>

                    </div>
                ))}
            </div>
            <div className='explore-btn'>
                <ArrowButton text="explore options" />
            </div>
        </div>

    </>
    )
}

export default HowItWorks