import React, { useState, useEffect } from 'react';
import './pricingPlans.css';

const pricingPlans = [
  {
    title: "Basic Welding",
    price: "Ksh 1800/hour", // Updated price in Ksh
    features: ["Spot Welding", "Metal Repair", "Basic Custom Fabrication"],
  },
  {
    title: "Standard Welding",
    price: "Ksh 2880/hour", // Updated price in Ksh
    features: ["MIG Welding", "TIG Welding", "Moderate Custom Fabrication", "Metal Cutting"],
  },
  {
    title: "Premium Welding",
    price: "Ksh 4320/hour", // Updated price in Ksh
    features: ["Advanced Custom Fabrication", "Pipe Welding", "Aluminum Welding", "Stainless Steel Welding", "On-Site Services"],
  },
];

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactInfo, setContactInfo] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    const savedPlan = localStorage.getItem('selectedPlan');
    if (savedPlan) {
      setSelectedPlan(JSON.parse(savedPlan));
    }
  }, []);

  const handleSelectPlan = (index) => {
    setSelectedPlan(index);
    localStorage.setItem('selectedPlan', JSON.stringify(index));
    setShowContactForm(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactInfo({ ...contactInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = contactInfo;
    const selectedPlanInfo = pricingPlans[selectedPlan];
    const planTitle = selectedPlanInfo.title;
    const planPrice = selectedPlanInfo.price;

    // Compose email content
    const emailContent = `
      Name: ${name}
      Email: ${email}
      Selected Plan: ${planTitle}
      Price: ${planPrice}
      Message: ${message}
      Contact: WhatsApp: +254 727 770425`;

    // Send email
    window.location.href = `mailto:elevatedsteelsolution@gmail.com?subject=Inquiry%20About%20${planTitle}&body=${encodeURIComponent(emailContent)}`;

    // Clear the form
    setContactInfo({ name: '', email: '', message: '' });
  };

  return (
    <div className="pricing-section">
      <h2>Welding Services Pricing</h2>
      <div className="pricing-grid">
        {pricingPlans.map((plan, index) => (
          <div
            className={`pricing-card ${selectedPlan === index ? 'selected' : ''}`}
            key={index}
            onClick={() => handleSelectPlan(index)}
          >
            <h3>{plan.title}</h3>
            <p className="price">{plan.price}</p>
            <ul className="features">
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <button className="select-button">
              {selectedPlan === index ? 'Selected' : 'Select Plan'}
            </button>
          </div>
        ))}
      </div>
      {showContactForm && (
        <div className="contact-form">
          <h3>Contact Us for More Information</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={contactInfo.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={contactInfo.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={contactInfo.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="submit-button">Send Request</button>
          </form>
        </div>
      )}
      <div className="comparison-table">
        <h3>Compare Our Plans</h3>
        <table>
          <thead>
            <tr>
              <th>Feature</th>
              <th>Basic</th>
              <th>Standard</th>
              <th>Premium</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Spot Welding</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
            </tr>
            <tr>
              <td>Metal Repair</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
            </tr>
            <tr>
              <td>Basic Custom Fabrication</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
            </tr>
            <tr>
              <td>MIG Welding</td>
              <td></td>
              <td>✓</td>
              <td>✓</td>
            </tr>
            <tr>
              <td>TIG Welding</td>
              <td></td>
              <td>✓</td>
              <td>✓</td>
            </tr>
            <tr>
              <td>Moderate Custom Fabrication</td>
              <td></td>
              <td>✓</td>
              <td>✓</td>
            </tr>
            <tr>
              <td>Metal Cutting</td>
              <td></td>
              <td>✓</td>
              <td>✓</td>
            </tr>
            <tr>
              <td>Advanced Custom Fabrication</td>
              <td></td>
              <td></td>
              <td>✓</td>
            </tr>
            <tr>
              <td>Pipe Welding</td>
              <td></td>
              <td></td>
              <td>✓</td>
            </tr>
            <tr>
              <td>Aluminum Welding</td>
              <td></td>
              <td></td>
              <td>✓</td>
            </tr>
            <tr>
              <td>Stainless Steel Welding</td>
              <td></td>
              <td></td>
              <td>✓</td>
            </tr>
            <tr>
              <td>On-Site Services</td>
              <td></td>
              <td></td>
              <td>✓</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Pricing;

