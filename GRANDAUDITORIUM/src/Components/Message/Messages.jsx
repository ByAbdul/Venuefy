import React, { useRef } from 'react'
import './Messages.css'
import Ac from '../../assets/AC.png'
import Parking from '../../assets/PARKING.png'
import dine from '../../assets/006-table-etiquette.png'
import prayer from'../../assets/003-praying.png'
import seat from '../../assets/005-seats.png'
import lift from '../../assets/002-lift-sign.png'
import cctv from '../../assets/008-cctv.png'
import service from '../../assets/SERVICE 24.png'

const Messages = () => {

  return (
    <div className="facilit Container">
      <div className="facilities">

        <div className="info1">
          <div className="container">
            <img
              className="Ac-icon"
              alt="" src={Ac} />
          </div>
          <div className="ac-wrapper ac">AC
          </div>
        </div>
        <div className="info1">
          <div className="container">
            <img
              className="Ac-icon"
              alt="" src={Parking} />
          </div>
          <div className="ac-wrapper ac">Parking
          </div>
        </div>
        <div className="info1">
          <div className="container">
            <img
              className="Ac-icon"
              alt="" src={dine} />
          </div>
          <div className="ac-wrapper ac">Dining
          </div>
        </div>
        <div className="info1">
          <div className="container">
            <img
              className="Ac-icon"
              alt="" src={cctv} />
          </div>
          <div className="ac-wrapper ac">Survelliance
          </div>
        </div>
       </div>


    
        <div className="facilities">
        <div className="info1">
          <div className="container">
            <img
              className="Ac-icon"
              alt="" src={seat} />
          </div>
          <div className="ac-wrapper ac">Seating Capacity
          </div>
        </div>
        <div className="info1">
          <div className="container">
            <img
              className="Ac-icon"
              alt="" src={prayer} />
          </div>
          <div className="ac-wrapper ac">Prayer Room
          </div>
        </div>
        <div className="info1">
          <div className="container">
            <img
              className="Ac-icon"
              alt="" src={lift} />
          </div>
          <div className="ac-wrapper ac">Lift
          </div>
        </div>
        <div className="info1">
          <div className="container">
            <img
              className="Ac-icon"
              alt="" src={service} />
          </div>
          <div className="ac-wrapper ac">24/7 Service
          </div>
        </div>
        </div>
       
      </div>
    


  )
}

export default Messages
