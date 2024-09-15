import React from 'react';
import './Services.css';  // Link to the CSS file

const Services = () => {
  return (
    <div className="services-container">
      <h1 className="services-title">Our Services</h1>

      <section className="service">
        <h2>Custom Steel Fabrication</h2>
        <p>
          Our custom steel fabrication services are designed to meet the specific needs of each client, from small-scale residential projects to large industrial applications. 
          We handle everything from cutting, bending, and assembling steel to delivering a finished product of the highest quality.
        </p>
      </section>

      <section className="service">
        <h2>Welding Services</h2>
        <p>
          With certified welders and advanced techniques, we provide expert welding services for a wide range of materials and structures. 
          Whether you need on-site welding or in-house fabrication, we guarantee strong, reliable welds every time.
        </p>
      </section>

      <section className="service">
        <h2>Structural Steel Projects</h2>
        <p>
          We specialize in structural steel solutions for commercial and industrial buildings. From framing to reinforcements, our team ensures that every structure is built to last, 
          with precision and safety as our top priorities.
        </p>
      </section>

      <section className="service">
        <h2>On-Site Repairs and Maintenance</h2>
        <p>
          Our team is available for on-site welding repairs and maintenance, ensuring that your equipment and structures remain in optimal condition. 
          We offer emergency services for unexpected repairs, helping you minimize downtime and keep your operations running smoothly.
        </p>
      </section>

      <section className="service">
        <h2>Custom Metalwork Design</h2>
        <p>
          We offer custom metalwork design services to bring your ideas to life. From artistic designs to functional components, 
          our team works with you to create high-quality metalwork tailored to your specifications.
        </p>
      </section>
    </div>
  );
};

export default Services;
