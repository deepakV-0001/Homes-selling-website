import React from 'react'
import '../CriteriaSection/CriteriaSection.css'
import Arrow_btn from '../../Home/Arrow btn/ArrowButton'
import cri_img from './agent-criteria-img.png'

const CriteriaSection = () => {
    return (
        <div className='criteria-container'>
            <div className='criteria-box'>
                <div className='criteria-text-content'>
                    <h2>Property <span>Criteria</span> for the Program</h2>
                    <p>For the property to qualify for eligibility, the property must be
                        either a fee-simple single-family house or a townhome situated in one
                        of our designated neighborhoods or communities. We carefully select these
                        locations to ensure the suitability of the real estate.
                        </p>
                    <div className='criteria-btn'>
                        <Arrow_btn text="SIGN UP TODAY" />
                    </div>
                </div>
                <div className='criteria-img'>
                    <img src={cri_img} alt='agents img ' />
                </div>

            </div>
        </div>
    )
}

export default CriteriaSection