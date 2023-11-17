import React from 'react'
import '../ForAgents/ForAgents.css'
import Header_Component from '../HowITWorks/Header-component/Header_Component'
import agnets from '../ForAgents/Agent-infographic.svg'
import CriteriaSection from './CriteriaSection/CriteriaSection'
import Collaboration from './AgentCollaboration/Collaboration'
import AgentAccordian from './AgentAccordian/AgentAccordian'

const ForAgents = () => {
    return (
        <div className='agents-container'>
            <Header_Component heading="For Agents" text="For Agents" path="for-agents" />
            <div className='agents-banner-box'>
                <div className='agents-header'>
                    <h1>Five Ways Agents Can Earn Income With<span> Our Program</span></h1>
                    <p>Using a revolutionary commission structure, you can open up new revenue streams for your creative endeavors.</p>
                </div>
                <div className='agents-svg'>
                    <img src={agnets} alt='' />
                </div>
            </div>
            <div className='criteria-section'>
                <CriteriaSection />
            </div>
            <div className='collaboration-section'>
                <Collaboration/>
            </div>
            <div className='agent-accordian-section'>
                <AgentAccordian/>
            </div>
        </div>
    )
}

export default ForAgents