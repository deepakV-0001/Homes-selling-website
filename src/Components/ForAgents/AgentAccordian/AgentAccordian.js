import React, { useEffect, useRef, useState } from 'react'
import '../AgentAccordian/AgentAccordian.css'
import { Link } from 'react-router-dom'
import { BiSearch } from 'react-icons/bi'
import { TiPlus, TiMinus } from 'react-icons/ti'

const AgentAccordian = () => {
    const data = [{
        id: 1,
        question: "How do I get a client approved?",
        answer: "Ask your client to sign up on our platform or send your referral link to your clients. They will need to submit required information for screening.",
    },
    {
        id: 2,
        question: "How do I retain my leads and clients on the platform?",
        answer: "Leads signed up from online or offline using your referral link will be visible to you. You will see their approval status, after a successful RTO transaction, our system will automatically allocate commission into your account.",
    },
    {
        id: 3,
        question: "How do I become a VIP agent on the platform and what benefits do I get?",
        answer: "Top performing agents who closed more than 5 transactions in a year with Home Await will get VIP status. The benefits included higher commission rate, clients approval priority, home selection priority, and leads referral by our platform.",
    },
    {
        id: 4,
        question: "How and when do I get paid?",
        answer: "Agents complete their brokerage's information (name, email address, address & brokerage's W9) for payout. Commission payments should be distributed via ACH or check to your brokerage within 15 business days. Agents can view their earnings after login to the agent portal. In case you haven’t received payment in over 30 business days, you can create a support case within agent portal or email: support@homesawait.com",
    },
    ]

    const [selected, setSelected] = useState(null);
    const [toggle, setToggle] = useState(false)
    const [heightEl, setHeightEl] = useState();

    const refHeight = useRef()

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
        <div className='agent-accord-container'>
            <div className='agent-accord-search'>
                <h3>Agents:</h3>
                <div className='agent-search-box'>
                    <input type='text' placeholder='Search' />
                    <Link to=""><BiSearch /></Link>
                </div>
            </div>
            <div className='agent-accord-list'>

                {data.map((item, id) => (

                    <div className='accordian-cover  agent-accordian-cover'>
                        <button onClick={() => toggleState(id)} className="accordion-visible ">
                            <span>{item.question}</span>
                            {selected == id ? <Link><TiMinus /></Link> : <Link><TiPlus /></Link>}

                        </button>

                        <div
                            className={selected == id ? "accordion-toggle animated" : "accordion-toggle"}>

                            <p className={`${selected == id ? 'answer-visible' : 'not-visible'}`}>{item.answer}</p>
                        </div>
                    </div>

                ))}

            </div>
        </div>
    )
}

export default AgentAccordian