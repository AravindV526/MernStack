import React from 'react';
import './Card.css';

function Card({src,para,title}) {
  return (
    <div className="card-container">
      <h1 className="card-title">Find Skilled Workers Near You</h1>
      <img 
        src="https://cdn-icons-png.flaticon.com/512/2362/2362114.png" 
        alt="Professional workers providing services"
        className="card-image"
      />
      <p className="card-paragraph">
        Quicker connects you with trusted professionals in your area for all your home service needs. 
        From plumbing and electrical work to painting and carpentry, find the right expert for your project.
      </p>
      <h1 className="card-title">{title}</h1>
      <img 
        src={src} 
        alt="Professional workers providing services"
        className="card-image"
      />
      <p className="card-paragraph">{para}
      </p>
      
    </div>
  );
}

export default Card;
