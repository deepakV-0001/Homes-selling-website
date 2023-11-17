import React, { useEffect, useRef, useState } from 'react'
import '../Accordian/Accordian.css'
import { TiPlus, TiMinus } from 'react-icons/ti'
import { Link } from 'react-router-dom'

const Accordian = () => {
    const data = [{
        id: 1,
        question: "What’s the application process?",
        answer: "Complete a short information form and provide us your dream home wish list. One of our agents will contact you and help you find your dream home.",
    },
    {
        id: 2,
        question: "What’s in it for Homes Await?",
        answer: "We provide personalized services and we make our profits from helping homebuyers transition to homeowners successfully",
    },
    {
        id: 3,
        question: "Can I choose any home on the market?",
        answer: "You can choose homes of your choice if the price range is approved by our system. You may also choose from our selection of homes.",
    }, ]
   



    const [selected, setSelected] = useState(null);
    const [toggle, setToggle] = useState(false)
    const [heightEl, setHeightEl] = useState();

    const refHeight = useRef();

    useEffect(() => {

        setHeightEl(`${refHeight.current.scrollHeight}px`)

    }, [])

    const toggleState = (id) => {
      

        if (selected === id) {
            setToggle(!toggle);
            return setSelected(null);
        }
        setSelected(id);
        setToggle(!toggle);
    }

  
    return (
        <div className="accordion">
            <div className='accordion-container'>
                {data.map((item, id) => (

                    <div className='accordian-cover'>
                        <button onClick={() => toggleState(id)} className="accordion-visible">
                            <span>{item.question}</span>
                            {selected==id ? <Link><TiMinus /></Link> :<Link><TiPlus /></Link> }

                        </button>

                        <div
                            className={ selected == id ? "accordion-toggle animated" : "accordion-toggle"}
                            style={{ height: selected == id ? `${heightEl}` : "0px" }}
                            ref={refHeight}>
                                
                            <p className={`${selected==id?'answer-visible':'not-visible'}`}>{item.answer}</p>
                        </div>
                    </div>

                ))}

                <div className='accordian-bottom-btn'>
                    <Link to="">
                        READ MORE
                    </Link>
                </div>
            </div>


        </div>
    )
}

export default Accordian