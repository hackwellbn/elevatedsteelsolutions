import React from "react";
import "./Testimonials.css";
import FontIcons from "../../../../Components/fontIcons/fontIcons";
import testimonial_1 from "../../../../assets/portrait-upset-american-black-person_23-2148749581.jpg";
import testimonial_2 from "../../../../assets/pexels-godisable-jacob-718978.jpg";
import testimonial_3 from "../../../../assets/Romans6_3.jpeg";
import testimonial_4 from "../../../../assets/pexels-spencer-selover-142259-428333.jpg";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Testimonials = () => {
  const icons = [
    {
      icon: faFacebook,
      url: "https://facebook.com",
      className: "facebook-icon",
    },
    {
      icon: faWhatsapp,
      url: "https://wa.me/1234567890",
      className: "whatsapp-icon",
    },
    {
      icon: faInstagram,
      url: "https://instagram.com",
      className: "instagram-icon",
    },
  ];

  return (
    <div id="Testimonials">
      <h1 className="Testimonials-text">Testimonials</h1>
      <div className="Testimonials-container">
        <div className="Testimonials-content">
          <div className="Testimonials-images">
            <img className="image"  src={testimonial_1} alt="" />
          </div>
          <h6 className="Testimonials-heading">Crisphine odhiambo</h6>
          <h6>-Data scientist-</h6>
          <div className="stars">
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9734;</span>
          </div>
          <p>
            "Elevated Steel Solutions has consistently delivered reliable and
            timely results for our steel fabrication needs. Their commitment to
            quality and efficiency makes them our go-to partner for complex
            projects."
          </p>
          {/* <FontIcons icons={icons} /> */}
        </div>
        <div className="Testimonials-content">
          <div className="Testimonials-images">
            <img className="image"  src={testimonial_2} alt=""  />
          </div>
          <h6 className="Testimonials-heading">Esther Gachuhi</h6>
          <h6>-Teacher-</h6>
          <div className="stars">
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9734;</span>
          </div>
          <p>
            "We appreciate the innovative solutions provided by Elevated Steel
            Solutions. Their creative approach to steel design has added a
            unique aesthetic appeal to our structures. It's a pleasure to work
            with a team that thinks outside the box."
          </p>
          {/* <FontIcons icons={icons} />{" "} */}
        </div>
        <div className="Testimonials-content">
          <div className="Testimonials-images">
            <img className="image"  src={testimonial_3} alt="c.e.o" />
          </div>
          <h6 className="Testimonials-heading">benard otieno</h6>
          <h6>-c.e.o softnet-</h6>
          <div className="stars">
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9734;</span>
          </div>
          <p>
            "elevated steel solutions, where my imaginations turned into reality
            solutions. the structures the elevated steel have built for us."
          </p>{" "}
          <FontIcons icons={icons} />{" "}
        </div>
        <div className="Testimonials-content">
          <div className="Testimonials-images">
            <img className="image"  src={testimonial_4} alt="" />
          </div>
          <h6 className="Testimonials-heading">joshua odhiambo</h6>
          <h6>-computer engineer-</h6>
          <div className="stars">
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9734;</span>
          </div>
          <p>
            "well done guys!, i love how you took keen interest in creating my
            system containers. further more the spacious window designs have
            made me love your work"
          </p>
          <FontIcons icons={icons} />{" "}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
