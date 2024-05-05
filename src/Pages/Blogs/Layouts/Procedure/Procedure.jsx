import React from "react";
import "./Procedure.css";
import test from "../../../../assets/manu2.jpg";
import test2 from "../../../../assets/weld.webp";
import test3 from "../../../../assets/weld2.avif";
const procedure = () => {
  return (
    <>
      <section className="procedures">
        <h4>how to design a simple Gate</h4>
        <div className="procedures-container">
          <div className="procedure">
            <hr />
            <div className="steps-container">
              <div className="steps">
                <h3>
                  <strong>step 1</strong>{" "}
                </h3>
                <h6>Planning and Precise Measurements</h6>
                <p>
                  A successful DIY welding project begins with thorough
                  planning, including design, drawing, and precise measurements.
                  Regardless of the project type—be it a gate, bench, or
                  trailer—accurate measurements are essential. Measure the
                  location of the gate meticulously, considering width, height,
                  and ground level. Account for hinge and latch allowances, and
                  plan for any desired design features, such as flat tops or
                  decorative elements. Consider the gate's function—whether
                  decorative or for containment—and design accordingly,
                  including spacing for railings to prevent pets or children
                  from escaping. By prioritizing careful planning and
                  measurements, you'll avoid costly mistakes and ensure the
                  success of your welding project.
                </p>
              </div>
              <div className="steps">
                <img src={test} alt="step 1" />
              </div>
            </div>
          </div>
          <div className="procedure">
            <hr />
            <div className="steps-container">
              <div className="steps">
                <h3>
                  <strong>step 2</strong>{" "}
                </h3>
                <h6>Material Selection and Considerations</h6>
                <p>
                  Choose between mild steel, wrought iron, or aluminum for your
                  gate, each offering durability and longevity. While mild steel
                  and wrought iron are heavier options, aluminum provides
                  strength without the weight. Consider aluminum for larger
                  gates spanning driveways due to its lighter weight and
                  customizable color options. Ensure hinges and hardware can
                  support the chosen material's weight.
                </p>
              </div>
              <div className="steps">
                <img src={test} alt="step 2" />
              </div>
            </div>
          </div>
          <div className="procedure">
            <hr />
            <div className="steps-container">
              <div className="steps">
                <h3>
                  <strong>step 3</strong>{" "}
                </h3>
                <h6>Welding Machine Selection</h6>
                <p>
                  Once you've chosen your material, select the appropriate
                  welding machine. If you already own welding equipment, opt for
                  a material compatible with your machine to avoid the need for
                  additional equipment. Mild Steel: For mild steel, consider MIG
                  or Stick welding. MIG offers ease of use and excellent
                  finishes but requires a MIG welding machine, shielding gas,
                  and consumables. Stick welding, while not requiring shielding
                  gas, utilizes welding rods. Wrought Iron: Stick welding is
                  preferable for wrought iron, though brazing is also an option
                  for experienced welders seeking a distinctive finish.
                  Aluminium: Despite its initial intimidation, aluminium's
                  strength and lightness make it ideal for gates. Choose between
                  TIG or MIG welding. TIG welding provides a beautiful finish,
                  albeit with a slightly longer process compared to MIG welding.
                </p>
              </div>
              <div className="steps">
                <img src={test2} alt="step 3" />
              </div>
            </div>
          </div>
          <div className="procedure">
            <hr />
            <div className="steps-container">
              <div className="steps">
                <h3>
                  <strong>step 4</strong>{" "}
                </h3>
                <h6>Cutting and Assembly</h6>
                <p>
                  Once materials are gathered, commence cutting the pieces for
                  your gate, starting with the longest ones and progressing to
                  smaller pieces, optimizing material usage. Utilize a cut-off
                  saw for efficient, precise cuts, and consider setting up a jig
                  for consistent lengths. Layout the gate's exterior on a flat
                  surface, like a workshop floor, for ease of assembly. During
                  assembly, tack weld the pieces together to allow for easy
                  adjustments and corrections without extensive grinding. Ensure
                  tacks are sufficient to hold the gate in place but avoid
                  excessive size to prevent distortion. After assembling the
                  frame's exterior, proceed to fill in the interior, exploring
                  decorative patterns and designs to showcase fabrication
                  skills.
                </p>
              </div>
              <div className="steps">
                <img src={test3} alt="step 1" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default procedure;
