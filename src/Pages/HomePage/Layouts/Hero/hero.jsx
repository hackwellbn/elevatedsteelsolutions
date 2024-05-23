import React from "react";
import hero_image from "../../../../assets/manu_image.webp";
import { Link } from "react-router-dom";

import "./Hero.css";

const hero = () => {
  return (
    <div className="hero-container">
      <div className="content">
        <div className="hero-text">
          <div className="headings">
            <h1 id="hdtext">Welcome to the World of Precision Welding,</h1>
            <h2 id="mintext">Where Craftsmanship Meets Innovation.</h2>
          </div>
          <div className="p-headings">
            <p>Elevated Steel Solutions is here to bring your dreams to reality with bespoke and unique designs crafted from sturdy metals,
              enhancing the aesthetic appeal of your projects. Try us today!</p>
          </div>

          <div className="btn-container">
            <Link to="/contact" className="btn">Contact Us</Link>
            <Link to="/services/#capabilities" className="btn sign-up">Capabilites</Link>
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
