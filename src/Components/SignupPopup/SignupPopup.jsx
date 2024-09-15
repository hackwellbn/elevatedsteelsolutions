import React, { useState } from 'react';
import './SignupPopup.css';

const SignupPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Signup button in the navbar */}
      <button onClick={togglePopup} className="navbar-link btn-signup">
        Signup
      </button>

      {/* The signup popup */}
      {isOpen && (
        <div className="popup-overlay">
          <div className="popup-box">
            <button className="close-btn" onClick={togglePopup}>X</button>
            <h2>Sign Up</h2>
            <form className="signup-form">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your name" />

              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Your email" />

              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="Your password" />

              <button type="submit" className="btn-submit">Sign Up</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default SignupPopup;
