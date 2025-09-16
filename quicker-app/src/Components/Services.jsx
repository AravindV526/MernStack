// src/Components/Services.jsx
import React, { useState, useEffect } from "react";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Temporary mock data
    const mockServices = [
      { id: 1, name: "Plumbing", description: "Professional plumbing services" },
      { id: 2, name: "Electrical", description: "Certified electricians" },
      { id: 3, name: "Cleaning", description: "Thorough cleaning services" }
    ];
    setServices(mockServices);
  }, []);

  return (
    <div className="services">
      <h2>Our Services</h2>
      <div className="services-list">
        {services.map(service => (
          <div key={service.id} className="service-card">
            <h3>{service.name}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;