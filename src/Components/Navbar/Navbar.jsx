import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <nav className="navbar">
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
