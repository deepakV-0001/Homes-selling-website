import React from 'react'
import '../HomeBenifits/benifits.css'
import ArrowButton from '../Arrow btn/ArrowButton'
import Benefit_img from '../HomeBenifits/benefits-img.jpg'
import fit1 from '../HomeBenifits/benefit-icon1.png'
import fit2 from '../HomeBenifits/benefit-icon2.png'
import fit3 from '../HomeBenifits/benefit-icon3.png'


const Benifits = () => {
    const benfitData = [
        {
            img: fit1,
            title: "Secure the Purchase Price & Capitalize When the Interest Rates Fall:",
            desc: "Take advantage of the chance to secure your purchase price while interest ratesare favorable in the future.Stay as a renter and secure today's purchase price for a future purchase in rising real estate markets until interest rates improve.",
        },
        {
            img: fit2,
            title: "Guaranteed Homeownership:",
            desc: "If you have deposited the initial sum and are worried about losing it, we have you covered. Our Appraisal gap financing grants you additional time to repay the remaining balance without jeopardizing your down payment or home. With us, you are assured of future homeownership.",
        },
        {
            img: fit3,
            title: "Financial Empowerment: Free Annual Mortgage Readiness Assessment & Government Funding:",
            desc: "Providing tenants with an annual free evaluation enables you to assess your mortgage-qualification readiness.Our advice helps consumers qualify for no-down-payment choices, rent subsidies, and first-time homebuyer assistance, providing them more financial control..",
        },
    ]
    return (
        <>
            <div className='benefit-container'>
                <div className='benefit-img'>
                    <img src={Benefit_img} alt='' />
                </div>
                <div className='benefit-text-content'>
                    <div className='benefit-main-text'>

                        <h4>HOW DOES IT BENEFIT YOU</h4>
                        <p>Experience the benefits as we create homeownership solutions
                            that are tailored to solve wealth gaps and provide you long-term
                            financial stability and an unparalleled sense of belonging.</p>
                    </div>
                    <div className='benefits'>
                        {benfitData.map((item) => (
                            <div className='benefit-heading'>
                                <div className='benefit-icon'>
                                    <span>
                                        <img src={item.img} alt='' />
                                    </span>
                                </div>
                                <div className='benefit-text'>
                                    <span>{item.title}</span>
                                    <p>{item.desc}</p>
                                </div>

                            </div>
                        ))}
                    </div>

                </div>

            </div>
            <div className='know-more'>
                <ArrowButton text="Know More" />
            </div>

        </>
    )
}

export default Benifits