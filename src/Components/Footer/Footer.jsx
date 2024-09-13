import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa"; // FontAwesome Icons

const Footer = () => {
  return (
    <div className="Footer">
      <div className="footer-container">
        <div className="footer-wrapper">
          <div className="foot-body">
            <h3>Elevated steel solutions</h3>
          </div>
          <div className="foot-body">
            <h3>company info</h3>
            <div className="footer-links">
              <Link to="/">resources</Link>
              <Link to="/about">About</Link>
              <Link to="/services">Our Services</Link>
              <Link to="/contact">Testimonials</Link>
            </div>
          </div>
          <div className="foot-body">
            <h3>blog</h3>
            <div className="footer-links">
              <div>
                {" "}
                <Link to="/">Faqs</Link>
              </div>
              <div>
                <Link to="/">contact us</Link>
              </div>
              <div>
                {" "}
                <Link to="/">Privacy policy</Link>
              </div>
              <div>
                <Link to="/">Terms of service</Link>
              </div>
            </div>
          </div>
          <div className="foot-body">
            <h3>follow Us</h3>
            <div className="footer-links">
              <Link to="/instagram">Instagram</Link>
              <Link to="/facebook">Facebook</Link>
              <Link to="/linkedin">LinkedIn</Link>
              <Link to="/youtube">YouTube</Link>
            </div>
          </div>
        </div>
        <div className="mail">
          <h3>Subscribe</h3>
          <p>Join our newsletter for the latest updates and offers.</p>
          <input type="email" />
        </div>
      </div>
      <hr />
      <div className="footer-last">
        <div className="links">
          <p>&copy; ELevated steel solutions. All rights reserved. </p>
          <p>
            <Link>Privacy policy</Link>
          </p>
          <p>
            <Link>Terms of service </Link>
          </p>
          <p>
            <Link>Cookies settings</Link>
          </p>
        </div>
        <div className="links">
          <div className="social-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon linkedin"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon youtube"
            >
              <FaYoutube />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon twitter"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
