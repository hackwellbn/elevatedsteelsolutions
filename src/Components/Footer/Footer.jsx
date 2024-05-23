import React from "react";
import FontIcons from "../fontIcons/fontIcons";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

import "./Footer.css";
const Footer = () => {
  const icons = [
    {
      icon: faFacebook,
      url: "https://www.facebook.com/profile.php?id=61556263378437&mibextid=ZbWKwL",
      className: "facebook-icon",
    },
    {
      icon: faWhatsapp,
      url: "https://wa.me/+254727770425",
      className: "whatsapp-icon",
    },
    {
      icon: faInstagram,
      url: "https://www.instagram.com/elev.atedfabricator?igsh=NDc3YTB3NnV0MWpn",
      className: "instagram-icon",
    },
    {
      icon: faTiktok,
      url: "https://www.tiktok.com/@elevated.steel.so",
      className: "tiktok-icon",
    },
  ];

  return (
    <div className="footer">
      <footer className="section-footer">
        <div className="footer-container">
          <hr />

          <div className="footer-content">
          <h3 href="/#">Elevated steel solutions</h3> 
            <hr />
            <p className="paragraph">
              elevated steel is considered as the best welding services in kenya{" "}
              we have worked with over thirty companies, and more than 150
              individuals clients.
            </p>
          </div>
          <div className="footer-content important-links">
            <h3>important links</h3>
            <hr />
            <div className="links">
              <a href="mailto:info@elevetadsteelsolution.online">
                info@elevetadsteelsolution.online
              </a>
              <a href="mailto:elevatedsteelsolution@gmail.com">
                elevatedsteelsolution@gmail.com
              </a>
            </div>
          </div>
          <div className="footer-content">
            <h3>connect with us</h3>
            <hr />

            <FontIcons icons={icons} />
          </div>
        </div>
        <div className="copyright">
          <span>
            &copy;2024.elevated steel solutions all rights reserved. Developed by{" "}
            <a href="mailto:softnet.innovationlab@gmail.com">softNet</a>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
