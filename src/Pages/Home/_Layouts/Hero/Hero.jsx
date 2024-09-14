import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="hero">
      <h1 className="heading">
        Elevate Your Projects with Precision Welding Services.
      </h1>
      <p className="hero-p">
        At Elevated Steel Solutions, we pride ourselves on our commitment to
        quality and customer satisfaction. Our experienced welders use
        state-of-the-art techniques to ensure your projects are completed to the
        highest standards.
      </p>
<Link>request a quote</Link>
<Link>Learn more about us</Link>

    </div>
  );
};

export default Hero;
