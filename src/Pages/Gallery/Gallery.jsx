import React from "react";
import "./Gallery.css"; // Import your CSS file for styling
import image1 from "../../assets/manu2.jpg"; // Import images from the assets folder
import image2 from "../../assets/manu2.jpg";
import image3 from "../../assets/manu2.jpg";
// Import other images as needed

const Gallery = () => {
  // Array of imported image paths
  const images = [image1, image2, image3]; // Add more images as needed

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Gallery</h2>

      <div className="card-gallery">
        {images.map((image, index) => (
          <div key={index} className="card">
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="card-image"
            />
            <div className="card-overlay">
              <a href="/Gallery/beds">
                {" "}
                <h3>Diy {index + 1}</h3>
              </a>
            </div>
          </div>
        ))}
        <div className="description">
          <a href="/Gallery/Beds">see more</a>
        </div>
      </div>
      <div className="card-gallery">
        {images.map((image, index) => (
          <div key={index} className="card">
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="card-image"
            />
            <div className="card-overlay">
              <h3>beds {index + 1}</h3>
            </div>
          </div>
        ))}
        <div className="description">
          <a href="/Gallery/Beds">see more</a>
        </div>
      </div>
      <div className="card-gallery">
        {images.map((image, index) => (
          <div key={index} className="card">
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="card-image"
            />
            <div className="card-overlay">
              <h3>chairs {index + 1}</h3>
            </div>
          </div>
        ))}
        <div className="description">
          <a href="/Gallery/Beds">see more</a>
        </div>
      </div>
      <div className="card-gallery">
        {images.map((image, index) => (
          <div key={index} className="card">
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="card-image"
            />
            <div className="card-overlay">
              <h3>Tables {index + 1}</h3>
            </div>
          </div>
        ))}
        <div className="description">
          <a href="/Gallery/Beds">see more</a>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
