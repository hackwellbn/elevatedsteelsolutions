// TeamSection.jsx or TeamSection.js
import React from 'react';
import './TeamSection.css';
import { teamMembers } from '../../../../assets/assets'
const TeamSection = () => {


  return (
    <div className="team-section">
      <h2>Our Team</h2>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div className="member" key={index}>
            <img src={member.image} alt={member.name} />
            <div className="member-info">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
