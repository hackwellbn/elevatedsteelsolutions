import React from 'react';
import './TermsOfService.css';  // Link to the CSS file

const TermsOfService = () => {
  return (
    <div className="terms-of-service-container">
      <h1 className="terms-title">Terms of Service</h1>
      <p>Effective Date: 9/15/2024</p>

      <section className="terms-section">
        <h2>1. Agreement to Terms</h2>
        <p>
          By accessing or using the Elevated Steel Solutions website (the "Site"), you agree to comply with and be bound by these terms of service ("Terms"). 
          If you do not agree to these Terms, you should not use the Site.
        </p>
      </section>

      <section className="terms-section">
        <h2>2. Changes to Terms</h2>
        <p>
          We reserve the right to modify these Terms at any time. When we make changes, we will update the "Effective Date" at the top of this page. 
          Continued use of the Site following such changes constitutes your acceptance of the updated Terms.
        </p>
      </section>

      <section className="terms-section">
        <h2>3. User Responsibilities</h2>
        <p>
          You agree not to use the Site for any unlawful purpose or in any way that could damage, disable, or impair the Site. 
          You also agree not to attempt to gain unauthorized access to any part of the Site or its related systems.
        </p>
      </section>

      <section className="terms-section">
        <h2>4. Intellectual Property</h2>
        <p>
          All content on the Site, including but not limited to text, graphics, logos, and images, is the intellectual property of Elevated Steel Solutions and is protected by copyright, trademark, and other laws.
        </p>
      </section>

      <section className="terms-section">
        <h2>5. Limitation of Liability</h2>
        <p>
          Elevated Steel Solutions is not liable for any damages that result from the use of, or inability to use, the Site, 
          including any errors or omissions in the content.
        </p>
      </section>

      <section className="terms-section">
        <h2>6. Governing Law</h2>
        <p>
          These Terms are governed by the laws, without regard to its conflict of laws principles. 
          Any legal action or proceeding arising out of or related to these Terms will be brought exclusively in the courts.
        </p>
      </section>

      <section className="terms-section">
        <h2>7. Contact Us</h2>
        <p>
          If you have any questions about these Terms of Service, please contact us at: 
          <a href="mailto:info@elevatedsteel.com"> info@elevatedsteelsolutions.com</a>.
        </p>
      </section>
    </div>
  );
};

export default TermsOfService;
