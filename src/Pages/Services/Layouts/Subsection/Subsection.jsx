import React from "react";
import Bed from "../../../../assets/bed.jpg";
import Bed2 from "../../../../assets/bed2.jpg";
import chair from "../../../../assets/chair.jpg";
import './Subsection.css'

const Subsection = () => {
  return (
    <div className="color-perspect">
      <div className="choice-perspect">
        <div className="slide-perspect active">
          <img src={Bed} alt="" />
          <div className="text_1">with great dedication to Your Needs</div>
        </div>
        <div className="slide-perspect">
          <img src={Bed2} alt="" />
          <div className="text_1">
            we aim higher to provide top notch metal designs{" "}
          </div>
        </div>
        <div className="slide-perspect ">
          <img src={chair} alt="" />
          <div className="text_1">
            so do not hesistate to tap the call action, hurry up!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subsection;
