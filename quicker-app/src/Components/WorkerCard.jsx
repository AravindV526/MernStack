// src/Components/WorkerCard.jsx
import React from 'react';
import './WorkerCard.css';

const WorkerCard = ({ worker }) => {
  const name = worker.user?.name || worker.name || 'Unknown Worker';
  const image = worker.user?.image || '/default-avatar.png';
  const skills = worker.skills?.map(skill => skill.name).join(', ') || 'No skills listed';
  const hourlyRate = worker.hourlyRate ?? 0;
  const rating = worker.rating ?? 'No ratings';
  const availability = worker.availability?.toLowerCase() || 'unknown';

  return (
    <div className="worker-card">
      <div className="worker-image">
        <img src={image} alt={name} />
      </div>
      <div className="worker-info">
        <h3>{name}</h3>
        <p className="worker-skills"><strong>Skills:</strong> {skills}</p>
        <p className="worker-rate"><strong>Rate:</strong> ${hourlyRate}/hour</p>
        <p className="worker-rating">⭐ {rating}</p>
        <p className={`worker-availability ${availability}`}>
          {availability.toUpperCase()}
        </p>
      </div>
      <button className="hire-btn">Hire Now</button>
    </div>
  );
};

export default WorkerCard;
