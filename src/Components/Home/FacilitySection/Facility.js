import React from 'react'
import '../FacilitySection/facility.css'
import fac1 from './fac-icon1.png'
import fac2 from './fac-icon2.png'
import fac3 from '../AboutHomesAwait/lower-icon2.png'


const Facility = () => {
    const facilityData=[
        {
            img:fac1,
            title:"Choice",
            desc:"Find the ideal house for you from the many that are available. You have a choice,and all options are open.",
        },
        {
            img:fac1,
            title:"Flexibility",
            desc:"You can purchase it at any moment. Move out or renew your lease at the end of the term.",
        },
        {
            img:fac1,
            title:"Commitment",
            desc:"Realizing aspirations through a symphony of transparency, quality, and value.",
        },

    ]
    return (
        <div className='facility-container'>
            <div className='facility-container-lower'>
                <div className='facility-heading'>
                    <h1>
                        Why Homes Await Lease To Own Program Deserves Your Trust !

                    </h1>
                </div>
                <div className='facility-boxes'>
                    {facilityData.map((item)=>(
                          <div className='facility-box'>
                          <li><span><img src={item.img} alt='' /></span>
                              <h3>{item.title}</h3>
                          </li>
                          <p>{item.desc}</p>
                      </div>
                    ))}
                    
                </div>
            </div>

        </div>
    )
}

export default Facility