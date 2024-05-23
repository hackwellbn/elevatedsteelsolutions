// FAQ.jsx or FAQ.js
import React from 'react';
import { faqs } from '../../../../assets/assets'
import './Faq.css';

const Faq = () => {


    return (
        <div className="faq-section">
            <h2>FAQ</h2>
            <div className="faq-container">
                {faqs.map((faq, index) => (
                    <div className="faq-item" key={index}>
                        <h3>{faq.question}</h3>
                        <p>{faq.answer}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Faq;
