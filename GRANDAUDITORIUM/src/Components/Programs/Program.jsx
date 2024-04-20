import React from "react";
import "./Program.css";
import parking from "../../assets/Park.png";
import chair from "../../assets/Chair.png";
import dining from "../../assets/Daine.png";

const Program = () => {
  return (
    <div className="icons">
      <section className="facili">
        <div className="icons-parent">
          <div className="icons1">
            <img className="parking-icon" loading="lazy" alt="" src={parking} />
          </div>
          <div className="frame-wrapper">
            <div className="parent">
              <div className="div">150+</div>
              <p className="parking">Parking</p>
            </div>
          </div>
        </div>
        <div className="amenities-container">
          <div className="amenities2-parent">
            <div className="amenities2">
              <div className="icons2">
                <img className="waiting-room-icon" alt="" src={chair} />
              </div>
            </div>
            <div className="separator">100+</div>
            <p className="happy-wedding">Seating Capacity</p>
          </div>
        </div>
        <div className="amenities-container1">
          <div className="amenities3-parent">
            <div className="amenities3">
              <div className="icons3">
                <img className="dining-room-icon" loading="lazy" alt="" src={dining} />
              </div>
            </div>
            <div className="div1">300</div>
            <p className="dining-capacity">Dining Capacity</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Program;
