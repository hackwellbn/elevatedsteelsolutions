// TeamSection.jsx or TeamSection.js
import React, { useState } from 'react';
import './TeamSection.css';
import { teamMembers } from '../../../../assets/assets';

const TeamSection = () => {
  const [hoveredMember, setHoveredMember] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredMember(index);
  };

  const handleMouseLeave = () => {
    setHoveredMember(null);
  };

  return (
    <div className="team-section">
      <h2>Our Team</h2>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div
            className="member"
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="image-member">
              <img src={member.image} alt={member.name} />
            </div>
            <div className="member-info">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              {hoveredMember === index && (
                <div className="member-bio">
                  <p>{member.bio}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
