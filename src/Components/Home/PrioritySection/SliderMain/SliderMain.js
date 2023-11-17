import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SliderItem from '../Slider/SliderItem';
import '../SliderMain/SliderMain.css'


const SliderMain = () => {
    const data = [{
        id: 1,
        title: "Maried Couple with 1-2 Kids",
        text: "If you have deposited the initial sum and are worried about losing it, we have you covered. Our Appraisal gap financing grants you additional time to repay the remaining balance without jeopardizing your down payment or home. With us, you are assured of future homeownership."
      },
      {
        id: 2,
        title: "College Students /New Graduates",
        text: "If you have deposited the initial sum and are worried about losing it, we have you covered. Our Appraisal gap financing grants you additional time to repay the remaining balance without jeopardizing your down payment or home. With us, you are assured of future homeownership."
      },
      {
        id: 3,
        title: "Low income family and individual",
        text: "If you have deposited the initial sum and are worried about losing it, we have you covered. Our Appraisal gap financing grants you additional time to repay the remaining balance without jeopardizing your down payment or home. With us, you are assured of future homeownership."
      },
      {
        id: 4,
        title: "Young Professionals Single/ Dating",
        text: "If you have deposited the initial sum and are worried about losing it, we have you covered. Our Appraisal gap financing grants you additional time to repay the remaining balance without jeopardizing your down payment or home. With us, you are assured of future homeownership."
      },
      {
        id: 1,
        title: "Maried Couple with 1-2 Kids",
        text: "If you have deposited the initial sum and are worried about losing it, we have you covered. Our Appraisal gap financing grants you additional time to repay the remaining balance without jeopardizing your down payment or home. With us, you are assured of future homeownership."
      },
      {
        id: 2,
        title: "College Students /New Graduates",
        text: "If you have deposited the initial sum and are worried about losing it, we have you covered. Our Appraisal gap financing grants you additional time to repay the remaining balance without jeopardizing your down payment or home. With us, you are assured of future homeownership."
      },
      {
        id: 3,
        title: "Low income family and individual",
        text: "If you have deposited the initial sum and are worried about losing it, we have you covered. Our Appraisal gap financing grants you additional time to repay the remaining balance without jeopardizing your down payment or home. With us, you are assured of future homeownership."
      },
      {
        id: 4,
        title: "Young Professionals Single/ Dating",
        text: "If you have deposited the initial sum and are worried about losing it, we have you covered. Our Appraisal gap financing grants you additional time to repay the remaining balance without jeopardizing your down payment or home. With us, you are assured of future homeownership."
      },
      {
        id: 1,
        title: "Maried Couple with 1-2 Kids",
        text: "If you have deposited the initial sum and are worried about losing it, we have you covered. Our Appraisal gap financing grants you additional time to repay the remaining balance without jeopardizing your down payment or home. With us, you are assured of future homeownership."
      },
      {
        id: 2,
        title: "College Students /New Graduates",
        text: "If you have deposited the initial sum and are worried about losing it, we have you covered. Our Appraisal gap financing grants you additional time to repay the remaining balance without jeopardizing your down payment or home. With us, you are assured of future homeownership."
      },
      {
        id: 3,
        title: "Low income family and individual",
        text: "If you have deposited the initial sum and are worried about losing it, we have you covered. Our Appraisal gap financing grants you additional time to repay the remaining balance without jeopardizing your down payment or home. With us, you are assured of future homeownership."
      },
      {
        id: 4,
        title: "Young Professionals Single/ Dating",
        text: "If you have deposited the initial sum and are worried about losing it, we have you covered. Our Appraisal gap financing grants you additional time to repay the remaining balance without jeopardizing your down payment or home. With us, you are assured of future homeownership."
      },
      {
        id: 1,
        title: "Maried Couple with 1-2 Kids",
        text: "If you have deposited the initial sum and are worried about losing it, we have you covered. Our Appraisal gap financing grants you additional time to repay the remaining balance without jeopardizing your down payment or home. With us, you are assured of future homeownership."
      },
      {
        id: 2,
        title: "College Students /New Graduates",
        text: "If you have deposited the initial sum and are worried about losing it, we have you covered. Our Appraisal gap financing grants you additional time to repay the remaining balance without jeopardizing your down payment or home. With us, you are assured of future homeownership."
      },
      {
        id: 3,
        title: "Low income family and individual",
        text: "If you have deposited the initial sum and are worried about losing it, we have you covered. Our Appraisal gap financing grants you additional time to repay the remaining balance without jeopardizing your down payment or home. With us, you are assured of future homeownership."
      },
      {
        id: 4,
        title: "Young Professionals Single/ Dating",
        text: "If you have deposited the initial sum and are worried about losing it, we have you covered. Our Appraisal gap financing grants you additional time to repay the remaining balance without jeopardizing your down payment or home. With us, you are assured of future homeownership."
      }
      ];
  return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={70}
    slidesPerView={1}
    navigation
     
    >
        {data.map((item,id)=>(
              
              <SwiperSlide key={id} >
              <SliderItem title={item.title} text={item.text} />
            </SwiperSlide>
        ))}
    
    </Swiper>
  )
}

export default SliderMain