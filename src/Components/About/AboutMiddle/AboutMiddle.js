import React from 'react'
import '../AboutMiddle/AboutMiddle.css'
import { Link } from 'react-router-dom'
import img4 from '../AboutMiddle/discount_4502375.svg'
import img3 from '../AboutMiddle/secret_9930459.svg'
import img2 from '../AboutMiddle/turn-around_10420230.svg'
import img1 from '../AboutMiddle/internet_10537599.svg'

const AboutMiddle = () => {
    const aboutData = [{

        svg: img1,
        title: "Request Approval",
        desc: "Check eligibility via pre-qualification questionnaire without impacting credit score.",
    },
    {
        svg: img2,
        title: "Locate a Home",
        desc: "Discover dream properties in our listings or share an address for our consideration.",
    },
    {
        svg: img3,
        title: "Credible Agents",
        desc: "Agents can suggest from our inventory or submit listings for their client’s needs.",
    },
    {
        svg: img4,
        title: "Quick Contract",
        desc: "Swift Contract signature and property inspection within two weeks of approval.",
    }
    ]
    return (
        <div className='abt-middle-container'>
            <div className='abt-middle-header'>
                <h2>How We <span>Work</span></h2>
                <p>We help you enjoy a single-family home while keeping decision-making independence, & presenting alternatives.</p>
            </div>
            <div className='abt-middle-bottom-boxes'>
                {aboutData.map((item) => (

                    <div className='abt-middle-bottom-box'>
                        <span><img src={item.svg} alt='' /></span>
                        <h2>
                           {item.title}
                        </h2>
                        <p>{item.desc}</p>
                        <Link to="">GET STARTED</Link>
                    </div>


                ))}

            </div>
        </div>
    )
}

export default AboutMiddle