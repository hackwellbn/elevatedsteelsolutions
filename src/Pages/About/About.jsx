import React from 'react';
import './About.css';  // Link to the CSS file

const About = () => {
  return (
    <div className="about-us-container">
      <h1 className="about-title">About Us</h1>

      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          At Elevated Steel Solutions, our mission is to provide top-quality welding and fabrication services 
          with a focus on innovation, precision, and customer satisfaction. We are committed to helping our clients
          achieve their goals with reliable solutions tailored to their unique needs.
        </p>
      </section>

      <section className="about-section">
        <h2>Who We Are</h2>
        <p>
          Established in 2018, Elevated Steel Solutions is a team of experienced welders and fabricators with a passion 
          for delivering excellence in every project. With a commitment to safety and integrity, we have built a reputation 
          for high-quality workmanship and innovative problem-solving in the steel industry.
        </p>
      </section>

      <section className="about-section">
        <h2>What We Do</h2>
        <p>
          We specialize in custom steel fabrication, welding services, and structural steel projects. Our team works closely 
          with clients to understand their needs and provide expert guidance from project planning through completion.
          Whether it's residential, commercial, or industrial projects, we bring expertise and precision to every job.
        </p>
      </section>

      <section className="about-section">
        <h2>Our Core Values</h2>
        <ul>
          <li><strong>Quality:</strong> We take pride in the quality of our work, ensuring every project is completed to the highest standards.</li>
          <li><strong>Innovation:</strong> We believe in using the latest techniques and technologies to deliver cutting-edge solutions.</li>
          <li><strong>Integrity:</strong> Honesty and transparency are at the core of our business, building trust with our clients.</li>
          <li><strong>Safety:</strong> We prioritize the safety of our team and clients in all that we do.</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Contact Us</h2>
        <p>
          Have a project in mind? Reach out to us at <a href="mailto:info@elevatedsteelsolutions.com">info@elevatedsteelsolutions.com </a> 
          or call us at +254 (0) 727770425. Let's elevate your vision with our expertise.
        </p>
      </section>
    </div>
  );
};

export default About;
