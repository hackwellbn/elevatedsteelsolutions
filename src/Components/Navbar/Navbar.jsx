import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import SignupPopup from "../SignupPopup/SignupPopup";
import { assets } from "../../assets/assets";

const Dropdown = ({ closeMenu }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Toggle the dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Close the dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false); // Hide the dropdown
      }
    };

    // Attach event listeners to dropdown
    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="service-container" ref={dropdownRef}>
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        Services
      </button>
      {isOpen && (
        <div className="nav-container">
          <div className="dropdown-menu">
            <Link to="/production" className="navbar-link" onClick={closeMenu}>
              Production
            </Link>
            <Link to="/resources" className="navbar-link" onClick={closeMenu}>
              Resources
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleScrollToContact = (event) => {
    event.preventDefault(); // Prevent default anchor click behavior
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" }); // Smooth scroll
    }
    closeMenu(); // Close the menu after scrolling
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={assets[0].Logo} alt="" />
        </Link>
        <div className="navbar-toggle" onClick={toggleMenu}>
          <span className="navbar-toggle-icon"></span>
          <span className="navbar-toggle-icon"></span>
          <span className="navbar-toggle-icon"></span>
        </div>
        <ul className={`navbar-menu ${isOpen ? "active" : ""}`}>
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
            <Dropdown closeMenu={closeMenu} />
          </li>
          <li className="navbar-item">
            <Link
              to="/contact"
              className="navbar-link"
              onClick={handleScrollToContact} // Use handleScrollToContact here
            >
              Contact
            </Link>
          </li>
          <li className="navbar-item">
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
