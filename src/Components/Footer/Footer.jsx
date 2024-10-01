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
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "826975f0-f71f-4282-a849-0dff6055e6c3");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("email Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="Footer">
      <div className="footer-container">
        <div className="footer-wrapper">
          <div className="foot-body">
            <h3 className="footer-heading">Elevated steel solutions</h3>
          </div>
          <div className="foot-body">
            <h3>company info</h3>
            <div className="footer-links">
              <div>
                {" "}
                <Link to="/">resources</Link>
              </div>
              <div>
                {" "}
                <Link to="/about">About</Link>
              </div>{" "}
              <div>
                {" "}
                <Link to="/services">Our Services</Link>
              </div>{" "}
              <div>
                {" "}
                <Link to="/contact">Testimonials</Link>
              </div>{" "}
            </div>
          </div>
          <div className="foot-body">
            <h3>Contact Information</h3>
            <div className="footer-links">
              <div>
                {" "}
                <Link to="/">elevatedsteelsolution@gmail.com</Link>
              </div>
              <div>
                Luckysummer ward,Ruaraka
              </div>
              <div>+254 (0) 727770425</div>
            </div>
          </div>
          <div className="foot-body">
            <h3>follow Us</h3>
            <div className="footer-links">
              <div>
                {" "}
                <Link to="/instagram">Instagram</Link>
              </div>
              <div>
                {" "}
                <Link to="/facebook">Facebook</Link>
              </div>
              <div>
                {" "}
                <Link to="/linkedin">LinkedIn</Link>
              </div>
              <div></div>{" "}
            </div>
          </div>
        </div>
        <div className="mail">
          <h3>Subscribe</h3>
          <p>Join our newsletter for the latest updates and offers.</p>
          <form onSubmit={onSubmit}>
            <input
              type="email"
              name="email"
              required
              placeholder="enter your email"
            />
            <button type="submit" className="navbar-button">
              Submit
            </button>
          </form>
          <span>{result}</span>
        </div>
      </div>
      <hr />
      <div className="footer-last">
        <div className="links">
          <p>&copy; ELevated steel solutions. All rights reserved. </p>
          <p>
            <Link to="/Privacy">Privacy policy</Link>
          </p>
          <p>
            <Link to='/Terms'>Terms of service </Link>
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
