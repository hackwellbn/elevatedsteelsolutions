import React from 'react';
import './Signup.css';

const Signup = () => {
  return (
    <div className="signup-container">
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
  );
};

export default Signup;
