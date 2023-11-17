import React from 'react'
import '../Map/Map.css'

const Map = () => {
  return (
    <div className='map-container'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5991396.289082128!2d-116.91236835357367!3d39.57881691210892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia%2C%20USA!5e0!3m2!1sen!2sin!4v1696319518062!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default Map