import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faHeart,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";
import "./Choice.css";
import sit_1 from "../../../../assets/sit1.jpg";
import sit_2 from "../../../../assets/sit2.jpg";
import sit_3 from "../../../../assets/seat.jpg";

const Choice = () => {
  return (
    <>
      <div className="choice">
        <h4>What Makes Us Different</h4>
        <div className="container">
          <div className="content-choice">
            <FontAwesomeIcon icon={faCheckCircle} />
            <h2>Our Standout Qualities</h2>
            <p>
              We prioritize excellence in service, ensuring each interaction is
              marked by professionalism and care. Our commitment to quality sets
              us apart, as we continuously strive to exceed expectations and
              deliver unparalleled results.
            </p>
          </div>
          <div className="content-choice">
            <FontAwesomeIcon icon={faHeart} />
            <h2>Passion in Drive with Responsibility</h2>
            <p>
              At the heart of our endeavors lies a deep-rooted passion for our
              work, coupled with a profound sense of responsibility towards our
              clients and community. We approach each task with enthusiasm and
              dedication, recognizing the impact of our actions on those we
              serve.
            </p>
          </div>
          <div className="content-choice">
            <FontAwesomeIcon icon={faHandshake} />
            <h2>Client Fulfillment</h2>
            <p>
              Client satisfaction is at the core of everything we do. We
              prioritize understanding our clients' needs and goals, tailoring
              our services to ensure their fulfillment. Our commitment to
              exceeding expectations fosters enduring relationships built on
              trust and mutual success.
            </p>
          </div>
        </div>
      </div>
      <div className="sits-container">
        <div className="sits-content">
          <img src={sit_1} alt="sit_1" />
          <div className="overlay-text">
            <p className="overlay">leading producer in expert solutions</p>
          </div>
        </div>
        <div className="sits-content">
          <img src={sit_2} alt="" />
          <div className="overlay-text">
            <p className="overlay">these comfortable seats that bring </p>
          </div>
        </div>
        <div className="sits-content">
          <img src={sit_3} alt="" />
          <div className="overlay-text">
            <p className="overlay">do not hesitate to bring us </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Choice;
