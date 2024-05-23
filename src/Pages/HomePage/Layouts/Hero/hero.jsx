import React from "react";
import hero_image from "../../../../assets/manu_image.webp";
import { Link } from "react-router-dom";

import "./Hero.css";

const hero = () => {
  return (
    <div className="hero-container">
      <div className="content">
        <div className="hero-text">
          <h1>welcome to elevated steel solutions</h1>
          <h2>Your partner in welding solutions</h2>
          <div className="btn-container">
          <Link to="/contact" className="btn">Contact Us</Link>
          <Link to="/services/:capabilities" className="btn sign-up">Capabilites</Link>
          </div>
          
        </div>
      </div>
      <div className="content">
        <div className="hero-image">
          <img src={hero_image} alt="banner" />
        </div>
      </div>
    </div>
  );
};

export default hero;
