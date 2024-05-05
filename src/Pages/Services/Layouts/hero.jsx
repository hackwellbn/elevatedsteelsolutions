import React, { useState, useEffect } from "react";
import "./hero.css";

const Hero = () => {
  const [count, setCount] = useState(0); // State variable to hold the count
  const targetCount = 80; // Target count to reach
  const intervalDuration = 40; // Interval duration in milliseconds

  useEffect(() => {
    // Effect to update the count
    const timer = setInterval(() => {
      // Increment the count if it's less than the target count
      if (count < targetCount) {
        setCount((prevCount) => prevCount + 1);
      }
    }, intervalDuration);

    // Clean up the timer
    return () => clearInterval(timer);
  }, [count, targetCount]); // Run the effect whenever count or targetCount changes

  return (
    <div className="hero">
      <section className="hero-section">
        <h3>Versatile Welding Services for Any Application</h3>
      </section>
      <section className="counts overall">
        <p>clients we have worked with</p>
        <span className="counts"> {count}+</span>
      </section>
    </div>
  ); // Render the count
};

export default Hero;
