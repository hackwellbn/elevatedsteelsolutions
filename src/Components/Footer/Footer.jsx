import React from "react";
import "./Footer.css";
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
            </div>
            <div className="foot-body"></div>
            <div className="foot-body"></div>
        </div>
        <div className="footer-wrapper"></div>
      </div>
      <hr />
      <div className="footer-last">
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
    </div>
  );
};

export default Footer;
