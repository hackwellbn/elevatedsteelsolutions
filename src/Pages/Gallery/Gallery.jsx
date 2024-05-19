import React from "react";
import { Link } from "react-router-dom";
import "./Gallery.css";
import bed1 from "../../assets/bed.jpg";
import bed2 from "../../assets/bed2.jpg";
import chair1 from "../../assets/chair.jpg";
import chair2 from "../../assets/chair2.jpg";
import chair3 from "../../assets/chair3.jpg";
import chair4 from "../../assets/chair4.jpg";
import table1 from "../../assets/table1.jpg";
import table2 from "../../assets/table2.jpg";
import Gate1 from "../../assets/gate1.jpg";
import Gate2 from "../../assets/gate2.jpg";
import Gate3 from "../../assets/gate3.jpg";

const Gallery = () => {
  const beds = [bed1, bed2];
  const chairs = [chair1, chair2, chair3, chair4];
  const tables = [table1, table2];
  const gates = [Gate1, Gate2, Gate3]; // Corrected variable name

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Gallery</h2>

      <div className="card-gallery">
        {beds.map((image, index) => (
          <div key={index} className="card">
            <Link to="/gallery/beds">
              <img
                src={image}
                alt={`Bed ${index + 1}`}
                className="card-image"
              />
            </Link>
            <div className="card-overlay">
              <h3>Bed {index + 1}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="card-gallery">
        {chairs.map((image, index) => (
          <div key={index} className="card">
            <Link to="/gallery/chairs">
              <img
                src={image}
                alt={`Chair ${index + 1}`}
                className="card-image"
              />
            </Link>
            <div className="card-overlay">
              <h3>Chair {index + 1}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="card-gallery">
        {tables.map((image, index) => (
          <div key={index} className="card">
            <Link to="/gallery/tables">
              <img
                src={image}
                alt={`Table ${index + 1}`}
                className="card-image"
              />
            </Link>
            <div className="card-overlay">
              <h3>Table {index + 1}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="card-gallery">
        {gates.map((image, index) => (
          <div key={index} className="card">
            <Link to="/gallery/gates">
              <img
                src={image}
                alt={`Gate ${index + 1}`}
                className="card-image"
              />
            </Link>
            <div className="card-overlay">
              <h3>Gate {index + 1}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
