import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    { number: 1, title: 'Choose a Service', desc: 'Select from our wide range of professional services that you need.' },
    { number: 2, title: 'Find Workers', desc: 'Browse through skilled professionals in your area with ratings and reviews.' },
    { number: 3, title: 'Get Quotes', desc: 'Receive competitive quotes from available workers for your project.' },
    { number: 4, title: 'Book & Enjoy', desc: 'Book your preferred worker and enjoy quality service at your convenience.' }
  ];

  return (
    <div className="how-it-works-page">
      <h1>How It Works</h1>
      <p className="how-it-works-intro">Getting help has never been easier. Follow these simple steps to find the perfect professional for your needs.</p>
      
      <div className="steps-container">
        {steps.map((step, index) => (
          <div key={index} className="step-card">
            <div className="step-number">{step.number}</div>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;