// src/components/WorkerList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WorkerList = () => {
  const [workers, setWorkers] = useState([]);

  useEffect(() => {
    // Fetch workers from the backend API
    axios.get('http://localhost:5000/api/workers')
      .then((response) => {
        setWorkers(response.data);
      })
      .catch((error) => {
        console.error('There was an error fetching workers:', error);
      });
  }, []);

  return (
    <div className="worker-list">
      {workers.map((worker) => (
        <div key={worker._id} className="worker-card">
          <div className="worker-image">
            <i className="fas fa-user"></i>
          </div>
          <div className="worker-info">
            <div className="worker-name">{worker.name}</div>
            <div className="worker-profession">{worker.profession}</div>
            <div className="worker-rating">
              {[...Array(5)].map((_, index) => (
                <i
                  key={index}
                  className={`fas fa-star ${index < worker.rating ? 'filled' : ''}`}
                />
              ))}
            </div>
            <div className="worker-distance">{worker.distance} miles away</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkerList;
