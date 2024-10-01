import React from "react";
import { assets } from "../../../../assets/assets";
import "./ContactForm.css";

const ContactForm = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "826975f0-f71f-4282-a849-0dff6055e6c3");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResult("An error occurred. Please try again.");
    }
  };

  return (
    <div className="contactform" id="contact">
      <div className="contactform-body">
        <img src={assets[0].image} alt="Background" />
      </div>
      <div className="contactform-body">
        <div className="form-container">
          <h1 className="form-head">Connect with Us</h1>
          <p className="paragraph">We are here to help you with your welding needs</p>
          <form onSubmit={onSubmit} className="form-info">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              aria-label="Your Name"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              aria-label="Your Email"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              aria-label="Your Message"
            ></textarea>
            <button type="submit">Submit Form</button>
          </form>
          <span className="result">{result}</span>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
