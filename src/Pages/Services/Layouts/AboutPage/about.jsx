import React from "react";
import "./about.css";
import vid_one from '../../../../assets/AdobeStock_486880917_Video_HD_Preview (online-video-cutter.com).mp4'
const about = () => {
  return (
    <div>
      <section className="About-us" id="about-us">
        <div className="about-container">
          <div className="about-content">
            <h2>our story</h2>
            <p>
              We're a top welding provider, merging skill with tech. With a rich
              industry past, we value precision, reliability, and client
              satisfaction. Our drive for quality ensures top-notch results.
              From custom work to repairs, our expert team meets your needs with
              professionalism. Our journey started small, but now we're a
              leading name in comprehensive welding services, known for
              precision and customer focus. At Quality Welding Services, our
              skilled artisans use cutting-edge tech for every project, ensuring
              quality from start to finish. Specializing in aluminum and
              stainless steel, we handle diverse industrial needs. Committed to
              sustainability and safety, we're not just providers; we're your
              dependable welding partners.
            </p>
            <button className="btn"><a href="/contact">Hit us up!</a></button>
          </div>
          <div className="about-content">
            <video autoPlay loop>
                <source src={vid_one} type="video/mp4" />
            </video>
          </div>
        </div>
      </section>
    </div>
  );
};

export default about;
