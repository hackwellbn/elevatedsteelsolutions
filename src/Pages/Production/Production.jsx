import React from "react";
import "./Production.css";
import { ProductionData } from "../../assets/assets"; // Ensure this is correctly imported

const Production = () => {
  return (
    <div className="production">
      <h2>Our Production Process:</h2>
      <h4>Sample Lockable Shelves</h4>
      <h6>Overview:</h6>
      <div className="overview">
        <p>
          This project entails the design, fabrication, and finishing of custom
          steel lockable shelves.
        </p>
        <p>
          These shelves are crafted with security, functionality, and aesthetics
          in mind, using high-quality materials such as 25mm steel tubes, black
          sheets, and rods.
        </p>
        <p>
          The process begins with detailed design planning and ends with a
          durable painting and shelving system.
        </p>
      </div>
      <h5>Materials Used: </h5>
      <ul>
        <li>Steel tubes (25mm, 30pcs): for constructing the frame</li>
        <li>Black sheets (20pcs): used for the shelving surfaces and panels</li>
        <li>Rods (5 packs): reinforcement for additional strength</li>
        <li>
          Cutting discs (1 dozen): to cut the steel to precise measurements
        </li>
        <li>
          Grinding discs (1 dozen): for smooth finishing and surface preparation
        </li>
        <li>Paint (4 liters, 4 tins): to protect and finish the unit</li>
      </ul>

      <div className="steps">
        {/* Step 1 */}
        <div className="step-container">
          <span>1</span>
          <h2>Design Phase:</h2>
          <p>
            <strong>Drafting the layout:</strong> The project begins with
            detailed design drawings, outlining the dimensions and structure of
            the steel shelves. This includes the height, shelf spacing, and
            lockable door placement.
          </p>
          <picture>
            <source
              media="(min-width: 40em)"
              srcSet={ProductionData[0]?.image}
            />
            <img src={ProductionData[0]?.image} alt="Design phase layout" />
          </picture>
        </div>

        {/* Step 2 */}
        <div className="step-container">
          <span>2</span>
          <h2>Frame Construction:</h2>
          <p>
            Steel tubes (25mm) are cut using cutting discs to form the primary
            frame. These are welded together to create the skeleton of the
            shelving unit.
          </p>
          <p>
            Welding rods (5 packs) are essential for securely joining the metal
            parts, fusing the steel tubes and black sheet panels together,
            ensuring strong, reliable joints. High-quality welding rods maintain
            the structural strength and durability of the shelves.
          </p>
          <picture>
            <img
              src={ProductionData[1]?.image}
              alt="Cutting and welding phase"
            />
          </picture>
        </div>

        {/* Step 3 */}
        <div className="step-container">
          <span>3</span>
          <h2>Shelving Installation:</h2>
          <p>
            Black sheets are cut into panels for the shelves, back, and sides.
            Each panel is welded onto the steel frame according to the design
            specifications.
          </p>
          <p>
            The welding process, supported by the welding rods, ensures that the
            shelves are securely attached and can support heavy loads without
            bending or shifting.
          </p>
          <p>
            After welding, the surfaces are smoothed using grinding discs to
            eliminate sharp edges and ensure a clean finish.
          </p>
          <picture>
            <img
              src={ProductionData[2]?.image}
              alt="Grinding and finishing phase"
            />
          </picture>
        </div>

        {/* Step 4 */}
        <div className="step-container">
          <span>4</span>
          <h2>Locking Mechanism Installation:</h2>
          <p>
            the design includes lockable doors, positioned on the frontg of
            shelves. steel tubes blacksheets are cut to form the door frames,m
            which are welded onto huinges for smooth operations.
          </p>
          <p>
            a secure locking mechanism is installed, designed to fit pwerfectly
            into the framework as per the drawign. this ensures easy locking and
            unlocking, providing secure storage for valuable items.
          </p>
          <picture>
            <img
              src={ProductionData[3]?.image || "path_to_painting_image"}
              alt="Painting phase"
            />
          </picture>
        </div>

        {/* Step 5 */}
        <div className="step-container">
          <span>5</span>
          <h2>Finishing touches:</h2>
          <p>
            once the weldign is completed, the entire shelving unit is cleaned
            and prepared.
          </p>
          <p>
            Paint (4 litresm, 4tins) is applied to give the unit a sleek,
            protective finish, preventing rust anxd enhancing durability,
            Multiple coats ensures a smmmoth polished look
          </p>
          <picture>
            <img
              src={ProductionData[4]?.image || "path_to_assembly_image"}
              alt="Final assembly phase"
            />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default Production;
