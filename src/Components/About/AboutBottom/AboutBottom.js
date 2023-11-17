import React from 'react'
import '../AboutBottom/AboutBottom.css'
import ArrowButton from '../../Home/Arrow btn/ArrowButton'
import abt1 from '../AboutBottom/about-box-img1.jpg'
import abt2 from '../AboutBottom/about-box-img2.jpg'
import abt3 from '../AboutBottom/about-box-img3.jpg'

const AboutBottom = () => {
    const bottomData = [
        {
            img: abt1,
            title1: "Housing",
            title2: "Crisis",
            desc: "Homes Awaits is addressing the growing gap in America as home prices outpace income growth by 5.3 times ever since 1990.",
        }, {
            img: abt2,
            title1: "Rethinking",
            title2: "Rent",
            desc: "Homes Awaits' transformative strategy is pivotal in redirecting the average American's $200,000 lifetime rental expenditures.",
        }, {
            img: abt3,
            title1: "Boosting",
            title2: "Wealth",
            desc: "Homes Awaits aids individuals in wealth accumulation by encouraging homeownership, fostering financial security and prosperity.",
        }
    ]
    return (
        <div className='abt-bottom'>
            <div className='abt-bottom-header'>
                <h2>How Is Homes Awaits <span>Transforming America</span></h2>
                <p>By democratizing homeownership & enhancing financial prospects, Homes Awaits is reshaping America.</p>
                <div className='abt-bottom-btn'>
                    <ArrowButton text="SIGN UP TODAY" />
                </div>
            </div>
            <div className='abt-bottom-content'>
                {
                    bottomData.map((item) => (
                        <div className='abt-bottom-box'>
                            <div className='abt-bottom-box-img'>
                                <img src={item.img} alt='' />
                            </div>
                            <div className='abt-bottom-box-text'>
                                <h4>{item.title1} <span>{item.title2}</span></h4>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    ))
                }



            </div>
        </div>
    )
}

export default AboutBottom