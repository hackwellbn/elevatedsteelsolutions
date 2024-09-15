import React from "react";
import { ServicesData } from "../../../../assets/assets";
import "./Services.css";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="services">
      <h3 className="process-head">Our Welding Services</h3>
      <div className="services-cards">
        {ServicesData.map((item, index) => (
          <div key={index} className="card">
            <img src={item.image} alt={item.title} />
            <h6>{item.heading}</h6>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
            <Link to={item.Link} className="btn btn-primary">
              {item.buttonText}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
