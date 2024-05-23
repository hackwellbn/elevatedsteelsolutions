import React from "react";
import "./Categories.css";

const Categories = () => {
  return (
    <>
      <h1>What We Do?</h1>
      <div className="categories-container">
        <div className="categories-content">
          <div className="categories-body bg-1">
            <h3>Our Services</h3>
            <h2>Metal Fabrication</h2>
            <p>
              Welding is a crucial part of metal fabrication, where various
              metal pieces are joined together to create structures, machinery,
              and components. Whether it's creating intricate designs or
              heavy-duty structures, our metal fabrication services ensure
              precision and durability. Our skilled welders use a variety of
              techniques, including MIG welding, TIG welding, and arc welding,
              to meet the specific requirements of each project.
            </p>
            <a href="/services" className="btn">
              Learn More
            </a>
          </div>
        </div>
        <div className="categories-content" id="cat-bg">
          <div className="categories-body">
            <h2>How to Make a Door</h2>
            <p>
              Welding plays a crucial role in the construction of doors, whether
              it's for residential, commercial, or industrial purposes. From
              fabricating the metal frame to attaching hinges and handles,
              welding ensures the structural integrity and longevity of the
              door. In our tutorial, we'll guide you through the step-by-step
              process of making your own door using welding techniques. Get
              ready to embark on a journey of craftsmanship and creativity!
            </p>
            <a href="/blogs" className="btn">Learn More
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
