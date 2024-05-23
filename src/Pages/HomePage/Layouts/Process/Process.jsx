// src/components/WeldingProcess.jsx

import React from "react";
import { assets } from "../../../../assets/assets";
import "./Process.css";

const Process = () => {
    return (
        <div className="welding-process-container">
            <h2>Our Welding Process</h2>
            <div className="process-steps">
                {assets.map((step, index) => (
                    <div className="step" key={index}>
                        <img src={step.image} alt={step.title} />
                        <h3>{step.title}</h3>
                        <p>{step.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Process;
