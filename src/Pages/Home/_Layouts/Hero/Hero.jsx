import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container-hero">
        <h1 className="heading">
          Elevate Your Projects with Precision Welding Services.
        </h1>
        <p className="hero-p">
          At Elevated Steel Solutions, we pride ourselves on our commitment to
          quality and customer satisfaction. Our experienced welders use
          state-of-the-art techniques to ensure your projects are completed to the
          highest standards.
        </p>
        <div className="link-container">
          <Link to="#/quote" className="navbar-button ">Request a Quote</Link>
          <Link to="/about" >Learn More About Us</Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
