import React from 'react'
import '../AgentCollaboration/Collaboration.css'
import ArrowButton from '../../Home/Arrow btn/ArrowButton'
import img1 from './Untitled-1.svg'
import img2 from './Untitled-2.svg'
import img3 from './Untitled-3.svg'
import img4 from './Untitled-4.svg'



const Collaboration = () => {

    const col_1_Data = [
        {
            text: "Convert renters to homeowners, even if they are unable to obtain financing for the purchase at the moment."
        },
        {
            text: "Access to specialist support, facilitating smooth execution of the transactions, ensuring a seamless process."
        },
        {
            text: "Effortlessly sell houses with Homes Await's cash & explore VIP Partner benefits for direct buyer leads."
        },
        {
            text: "Reduce the amount of time it takes to find a house and close a transaction to as low as two weeks."
        }
    ];

    const col_2_Data = [
        {
            img: img1,
            title: "Explore a Universe of Possibilities",
            desc: "Build your agent profile and start generating leads for your business by taking advantage of our platform"
        },
        {
            img: img2,
            title: "Power of Growth",
            desc: "Increase your business's momentum by actively attracting & retaining customers, fostering long-term success."
        },
        {
            img: img3,
            title: "Keep Ahead of the Curve",
            desc: "Automatically alert agents when a customer qualifies. Witness a surge in your sales with effective engagement."
        },
        {
            img: img4,
            title: "Realize Your Full Earnings Potential",
            desc: "Earn a commission upon contract execution. Enjoy the rewards of your hard work, reaping the benefits."
        },
    ]

    return (
        <div className='collab-container'>
            <div className='collab-col-1'>
                <div className='collab-col-1-heading'>
                    <h2>
                        Agent <span>Collaboration</span>
                    </h2>
                    <p>Together, let's make homeownership more accessible!</p>
                </div>
                <div className='collab-col-1-list'>
                    <h3>Why Partner with Us?</h3>
                    <ul>
                        {col_1_Data.map((item) => (
                            <li>{item.text}</li>
                        ))}

                    </ul>
                </div>
            </div>
            <div className='collab-col-2'>
                <span>Homes AWAIT</span>
                <h3>How We Collaborate</h3>
                <div className='collab-col-2-list'>
                    {
                        col_2_Data.map((item) => (
                            <div className='collab-list-item'>
                                <span>
                                    <img src={item.img} alt='' />
                                </span>
                                <h4>{item.title}</h4>
                                <p>{item.desc}</p>
                            </div>
                        ))
                    }

                </div>
                <div className='collab-btn'>
                    <ArrowButton text="KNOW MORE" />
                </div>
            </div>
        </div>
    )
}

export default Collaboration