import React from 'react'
import './Campus.css'
import gallery_1 from '../../assets/Header_Bg.png'
import white_arrow from'../../assets/white-arrow.png'
const Campus = () => {
  return (
    <div className='campus'>
        <div className="gallery">
            <img src={gallery_1} alt="" />
            <img src={gallery_1} alt="" />
            <img src={gallery_1} alt="" />
            <img src={gallery_1} alt="" />
            
        </div>
        <button className='btn dark-btn'>See More <img src={white_arrow} alt="" /></button>
    </div>
  )
}

export default Campus