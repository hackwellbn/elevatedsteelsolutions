import React from "react";
import "./fontIcons.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FontIcons = ({ icons }) => {
  return (
    <div className="fontIcons">
      <ul className="social-icons">
        {icons.map((icon, index) => (
          <li key={index}>
            <a href={icon.url} className={icon.className}>
              <FontAwesomeIcon icon={icon.icon} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FontIcons;
