import React from 'react'
import './missionBottom.css'
import ArrowButton from '../Arrow btn/ArrowButton'

const MissionBottom = () => {
    return (
        <div className='missionBottom-container-main'>
            <div className='missionBottom-container'>
                <div className='missionBottom-heading'>
                    <h1>Ready To Swap Your Old House For A New Construction Home?
                        Or Perhaps You're Just Eager To Sell? Homes Await Can Help!
                    </h1>

                </div>

                <div className='mission-bottom-arow-btn'>
                    <ArrowButton text="get started now" />
                </div>
            </div>

        </div>
    )
}

export default MissionBottom