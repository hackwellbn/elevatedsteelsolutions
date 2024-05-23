import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isFixed ? "fixed" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-toggle" onClick={toggleSidebar}>
          <span className={`menu ${sidebarOpen ? "open" : ""}`}></span>
        </div>
        <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
          <span className="close-icon" onClick={toggleSidebar}>
            &#10005;
          </span>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="/#Testimonials">Testimonials</a>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/Blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/Gallery">Gallery</Link>
            </li>
          </ul>
        </div>
      </div>
      <span className="ess">E.S.S</span>
    </nav>
  );
};

export default Navbar;
