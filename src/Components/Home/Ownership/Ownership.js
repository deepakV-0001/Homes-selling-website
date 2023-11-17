import React from 'react'
import '../Ownership/ownership.css'
import ArrowButton from '../Arrow btn/ArrowButton'

const Ownership = () => {
    return (
        <div className='ownership-container-main'>
            <div className='ownership-container'>
                <div className='ownership-heading'>
                    <h1>Streamline Your Journey To Homeownership With Homes Await</h1>
                    <div className='own-arrow-btn'>
                        <ArrowButton text="sign up today" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ownership