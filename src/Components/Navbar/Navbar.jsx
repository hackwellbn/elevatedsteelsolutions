import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import SignupPopup from '../SignupPopup/SignupPopup';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
            ELevated steel solutions
        </Link>
        <div className="navbar-toggle" onClick={toggleMenu}>
          <span className="navbar-toggle-icon"></span>
          <span className="navbar-toggle-icon"></span>
          <span className="navbar-toggle-icon"></span>
        </div>
        <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <li className="navbar-item">
            <Link to="/" className="navbar-link" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/about" className="navbar-link" onClick={closeMenu}>
              About
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/services" className="navbar-link" onClick={closeMenu}>
              Services
            </Link>
          </li>
          <li className="navbar-item">
            {/* <Link to="/contact" onClick={closeMenu}>
              Contact
            </Link> */}
            <a href="#contact" className="navbar-link" >contact</a>
          </li>
          <li className="navbar-item">
            {/* <a href="https://example.com" className="navbar-button" onClick={closeMenu}>
              Sign Up
            </a> */}
                  <SignupPopup />

          </li>
          <li className="navbar-item">
            <button className="navbar-close" onClick={closeMenu}>
              &times;
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
