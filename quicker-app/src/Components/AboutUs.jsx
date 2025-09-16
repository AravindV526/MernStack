import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  const teamMembers = [
    { name: 'Aravind.V', role: 'Founder & CEO', desc: 'With over 15 years of experience in the home services industry.' },
    { name: 'Anbarasu.P', role: 'Operations Manager', desc: 'Ensuring smooth operations and customer satisfaction.' },
    { name: 'Kaushik.A', role: 'Technical Director', desc: 'Leading our technical team and platform development.' }
  ];

  return (
    <div className="about-us-page">
      <h1>About Quicker</h1>
      <p className="about-intro">
        Quicker is a platform dedicated to connecting homeowners with skilled professionals
        for all their home maintenance and repair needs. We believe in making quality services
        accessible, reliable, and convenient for everyone.
      </p>
      
      <div className="mission-section">
        <h2>Our Mission</h2>
        <p>
          To revolutionize the way people find and hire home service professionals by providing
          a seamless, transparent, and efficient platform that benefits both homeowners and service providers.
        </p>
      </div>
      
      <div className="team-section">
        <h2>Our Team</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-avatar">
                <i className="fas fa-user"></i>
              </div>
              <h3>{member.name}</h3>
              <div className="team-role">{member.role}</div>
              <p className="team-description">{member.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;