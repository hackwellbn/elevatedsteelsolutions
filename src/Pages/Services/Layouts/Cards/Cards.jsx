import React from "react";
import "./Cards.css";

const Cards = () => {
  return (
    <>
      <h1 className="head-text">our Capabilities</h1>
      <div className="cards-container">
        <div className="cards-content">
          <h2 className="head-text">Welding Repairs</h2>
          <p>
            Our experienced welders handle a variety of welding repairs to
            restore your equipment.
          </p>
          <p>
            For welding repairs, we excel in restoring worn-out or damaged metal
            components, ensuring they regain optimal functionality and
            durability.
          </p>
          <p>
            Equipped with state-of-the-art machinery, our facilities boast
            advanced welding equipment, CNC machines, and a skilled workforce
            dedicated to quality craftsmanship.
          </p>
        </div>
        <div className="cards-content">
          <h2 className="head-text">Customized Steel Fabrication</h2>
          <p>
            Explore our tailored steel fabrication solutions, designed to meet
            your unique specifications and elevate your project to new heights.
          </p>
          <ul>
            <li className="unordered">1. <strong>sheet metal fabrication</strong> </li>
            <li className="unordered">2. <strong>metal castings</strong> </li>
            <li className="unordered">3. <strong>gates fabrication</strong> </li>
            <li className="unordered">4. <strong>campaign cars fabrication</strong> </li>
            <li className="unordered">5. <strong>mobile welding</strong> </li>
            <li className="unordered">6. <strong>onsite weldings</strong> </li>

          </ul>
        </div>
        <div className="cards-content">
          <h2 className="head-text">Your needs</h2>
          <p>
            Discover the cutting-edge welding techniques we employ, ensuring the
            highest standards of structural integrity and aesthetic appeal in
            every weld.
          </p>
          <ul>
            <li><strong>metal signage services</strong> </li>
            <li><strong>forming services</strong> </li>
            <li><strong>Gates & doors Fabrication services</strong> </li>
            <li><strong>Roof Fabrication services</strong> </li>
            <li><strong>Tube bending</strong> </li>
            <li><strong>Automotive welding and (SMAW or MIG)</strong> </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Cards;
