// PartnershipsSection.jsx or PartnershipsSection.js
import React from 'react';
import { partnerships} from '../../../../assets/assets'
import './Partners.css';

const Partners = () => {

    return (
        <div className="partnerships-section">
            <h2>Our Partnerships</h2>
            <div className="partners">
                {partnerships.map((partner, index) => (
                    <div className="partner" key={index}>
                        <img src={partner.logo} alt={partner.name} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Partners;