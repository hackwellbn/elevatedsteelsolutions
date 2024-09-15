import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <h1 className="privacy-title">Privacy Policy</h1>
      <p>Effective Date: [Insert Date]</p>

      <section className="privacy-section">
        <h2>1. Introduction</h2>
        <p>
          Elevated Steel Solutions ("we," "our," or "us") is committed to protecting your privacy. 
          This Privacy Policy explains how we collect, use, and share your personal information when you visit our website or use our services.
        </p>
      </section>

      <section className="privacy-section">
        <h2>2. Information We Collect</h2>
        <p>We collect the following types of information:</p>
        <ul>
          <li>Personal identification information (Name, email address, phone number, etc.)</li>
          <li>Usage data (pages visited, links clicked, etc.)</li>
        </ul>
      </section>

      <section className="privacy-section">
        <h2>3. How We Use Your Information</h2>
        <p>
          We use your information to provide, operate, and maintain our services, 
          communicate with you, and improve our website. We do not sell or share your personal information with third parties, except as outlined in this policy.
        </p>
      </section>

      <section className="privacy-section">
        <h2>4. Data Security</h2>
        <p>
          We implement appropriate security measures to protect your personal information. 
          However, no method of transmission over the Internet is 100% secure, and we cannot guarantee its absolute security.
        </p>
      </section>

      <section className="privacy-section">
        <h2>5. Your Privacy Rights</h2>
        <p>
          Depending on your location, you may have the right to access, correct, or delete your personal information. 
          You may also have the right to object to the processing of your information.
        </p>
      </section>

      <section className="privacy-section">
        <h2>6. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. When we make changes, 
          we will update the "Effective Date" at the top of this page.
        </p>
      </section>

      <section className="privacy-section">
        <h2>7. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at: 
          <a href="mailto:info@elevatedsteel.com"> info@elevatedsteelsolution.online</a>.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
