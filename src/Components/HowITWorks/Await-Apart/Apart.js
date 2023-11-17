import React from 'react'
import '../Await-Apart/apart.css'
import { Link } from 'react-router-dom'
import { HiOutlineArrowRight } from 'react-icons/hi'
import { FaRegCheckCircle, FaRegCircle } from 'react-icons/fa'
import Blue_btn from '../../Home/Arrow btn/BlueBtn/ArrowButtonBlue'


const Apart = () => {
    const apartData = [
        {
            title: "Choose any eligible home listed for sale",
            icon1: <FaRegCheckCircle />,
            icon2: <FaRegCircle />,

        },
        {
            title: "Commit to a one-year lease upfront",
            icon1: <FaRegCheckCircle />,
            icon2: <FaRegCheckCircle />,

        },
        {
            title: "Pay a standard rental deposit",
            icon1: <FaRegCheckCircle />,
            icon2: <FaRegCheckCircle />,

        },
        {
            title: "Rental rate certainty for five years*",
            icon1: <FaRegCheckCircle />,
            icon2: <FaRegCircle />,

        },
        {
            title: "Right to Purchase at a locked-in rate for five years*",
            icon1: <FaRegCheckCircle />,
            icon2: <FaRegCircle />,

        },
    ]
    return (
        <div className='apart-container'>
            <div className='apart-row'>
                <div className='apart-header'>
                    <h2><span>What sets</span>Homes Await Apart? </h2>
                    <p>Homes Await is known for its commitment to your journey. Our
                        revolutionary Rent-to-Own program helps families transition to
                        homeownership with stable costs and flexible alternatives. Openness and
                        personalized solutions help us overcome differences and build a better future.
                    </p>

                    <div className='apart-btn'>
                        <Blue_btn text="SIGN UP TODAY" />
                    </div>

                </div>
                <div className='apart-bottom'>
                    <div className='apart-bottom-title'>
                        <div className='td title-table'></div>
                        <div className='td title-table'>Lease Purchase Program</div>
                        <div className='td title-table'>Traditional Rental</div>
                    </div>
                    {apartData.map((item) => (
                        <div className='apart-bottom-rows'>
                            <div className='td tt'>{item.title}</div>
                            <div className='td'>{item.icon1}</div>
                            <div className='td'>{item.icon2}</div>
                        </div>
                    ))}

                </div>

            </div>
        </div>
    )
}

export default Apart