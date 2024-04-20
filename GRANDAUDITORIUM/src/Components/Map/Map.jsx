import React from 'react'
import './Map.css'
const Map = () => {
  return (
    <div className='map'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3892.1319726769716!2d74.90666019999999!3d12.704808199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba3610acf413357%3A0xfe6771acd7a65095!2sGrand%20Auditorium!5e0!3m2!1sen!2sin!4v1713156160951!5m2!1sen!2sin" width="100%" height="500" style={{border:"0"}} allowfullscreen="flex" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default Map
