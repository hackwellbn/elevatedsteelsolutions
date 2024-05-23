// NewsletterSignup.jsx or NewsletterSignup.js
import React, { useState } from 'react';
import './NewsLetterSignUp.css';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add code to submit the email to your newsletter service
    console.log('Email submitted:', email);
    // Clear the input field
    setEmail('');
  };

  return (
    <div className="newsletter-section">
      <h2>Join Our Newsletter</h2>
      <p>Stay up-to-date with our latest news and promotions by subscribing to our newsletter.</p>
      <form onSubmit={handleSubmit} className='form-structure'>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};

export default NewsletterSignup;
