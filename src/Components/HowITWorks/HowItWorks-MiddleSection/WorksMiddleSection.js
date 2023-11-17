import React from 'react'
import '../HowItWorks-MiddleSection/worksMiddle.css'
import program1 from './program1.png'
import program2 from './program2.png'
import program3 from './program3.png'
import program4 from './program4.png'

const WorksMiddleSection = () => {
    return (
        <div className='works-middle-container'>
            <div className='works-middle-programs'>
                <div className='works-middle-program program-box '>
                    <img src={program1} alt='' />
                    <div className='content-wrapper'>
                        <h2>Seek Approval With Ease</h2>
                        <p>Use our Pre-Qualification Questionnaire to
                            thoroughly assess the program's suitability
                            for your needs. After the evaluation, you can
                            confidently proceed with the application process,
                            knowing that it won't have any adverse effects on your credit score.
                        </p>
                    </div>
                    <span className='own-step'>
                        01
                    </span>
                </div>

                <div className='works-middle-program program-box'>
                    <img src={program2} alt='' />
                    <div className='content-wrapper'>
                        <h2>Find An Eligible Home</h2>
                        <p>After the approval is done, in order to find your dream home, browse through our extensive listings or alternatively for with an agent. Before deciding, compare the prices that are mentioned up front for the rent and the lease to own program.
                        </p>
                    </div>
                    <span className='own-step own-step-two'>
                        02
                    </span>
                </div>

                <div className='works-middle-program program-box '>
                    <img src={program4} alt='' />
                    <div className='content-wrapper'>
                        <h2 >Browse Our Hand-Picked Lease Options Or Add Your Own:</h2>
                        <p className="works-box3">Choose from our vast selection. After providing details through your agent, you may suggest alternatives if your demands exceed what we offer. If all goes well, you'll sign a lease of 36-month Lease-to-Own and start packing and moving.
                        </p>
                    </div>
                    <span className='own-step own-step-four'>
                        04
                    </span>
                </div>

                <div className='works-middle-program program-box'>
                    <img src={program3} alt='' />
                    <div className='content-wrapper'>
                        <h2>Rent And Protect Your Option</h2>
                        <p>Secure today's purchase price for your rented home, locking it in for the future. When you're ready, easily transition to homeownership or make the change while benefiting from our program's flexibility and financial predictability.
                        </p>
                    </div>
                    <span className='own-step own-step-three'>
                        03
                    </span>
                </div>

            </div>
        </div>
    )
}

export default WorksMiddleSection