import React from "react";
import "./Process.css";

const Process = () => {
  return (
    <div className="Process">
      <div className="process-container">
        <h3 className="process-head">How Our Process Works</h3>
        <div className="process-steps">
          <div className="step">
            <span className="bigNumber">1</span>
            <div className="content">
              <h5>Consultation</h5>
              <p>
                We discuss your project requirements and provide tailored
                solutions.
              </p>
            </div>
          </div>
          <div className="step-divider" />
          <div className="step">
            <span className="bigNumber">2</span>
            <div className="content">
              <h5>Execution</h5>
              <p>
                Our skilled team executes the welding process with precision and care.
              </p>
            </div>
          </div>
          <div className="step-divider" />
          <div className="step">
            <span className="bigNumber">3</span>
            <div className="content">
              <h5>Delivery</h5>
              <p>
                We ensure timely delivery of your completed project, meeting all specifications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
