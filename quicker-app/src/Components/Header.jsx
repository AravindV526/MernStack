// Home.jsx
import React, { useState, useEffect } from "react";
import WorkerCard from "./WorkerCard";
import axios from "axios";
import "./Home.css"; // Changed from App.css to Home.css

const Home = () => {
  const [workers, setWorkers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState("Cleaning");

  useEffect(() => {
    const fetchWorkers = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch from backend
        const response = await axios.get("http://localhost:5000/api/workers");

        if (Array.isArray(response.data)) {
          setWorkers(response.data);
        } else {
          setWorkers([]);
        }
      } catch (err) {
        console.error("Error fetching workers:", err);
        setError("Failed to fetch workers. Showing fallback data.");

        // Fallback mock data
        setWorkers([
          {
            _id: "1",
            name: "Maria Garcia",
            profession: "Cleaner",
            rating: 4,
            distance: "0.8 miles away"
          },
          {
            _id: "2",
            name: "Thomas Moore",
            profession: "Cleaner",
            rating: 5,
            distance: "1.2 miles away"
          },
          {
            _id: "3",
            name: "Sarah Johnson",
            profession: "Cleaner",
            rating: 4,
            distance: "0.5 miles away"
          },
          {
            _id: "4",
            name: "Robert Wilson",
            profession: "Cleaner",
            rating: 4,
            distance: "1.5 miles away"
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchWorkers();
  }, []);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <i
          key={i}
          className={`fas fa-star ${i <= rating ? "filled" : ""}`}
        ></i>
      );
    }
    return stars;
  };

  return (
    <div className="home">
      <div className="home-page">
        <div className="left-panel">
          <h1>Find Skilled Workers Near You</h1>
          <p className="tagline">
            From plumbing to childcare, find the right professional for all your home needs quickly and reliably.
          </p>
         
          <div className="features">
            <div className="feature">
              <i className="fas fa-search-location"></i>
              <h3>Find Nearby</h3>
              <p>Locate workers in your area</p>
            </div>
            <div className="feature">
              <i className="fas fa-clock"></i>
              <h3>Quick Response</h3>
              <p>Get help when you need it</p>
            </div>
            <div className="feature">
              <i className="fas fa-star"></i>
              <h3>Rated Professionals</h3>
              <p>Quality guaranteed</p>
            </div>
          </div>
         
          <div className="features">
            <div className="feature">
              <i className="fas fa-tools"></i>
              <h3>Plumbers</h3>
              <p>Fix leaks and installations</p>
            </div>
            <div className="feature">
              <i className="fas fa-bolt"></i>
              <h3>Electricians</h3>
              <p>Wiring and repairs</p>
            </div>
            <div className="feature">
              <i className="fas fa-paint-roller"></i>
              <h3>Painters</h3>
              <p>Interior and exterior</p>
            </div>
            <div className="feature">
              <i className="fas fa-broom"></i>
              <h3>Cleaners</h3>
              <p>Home and office cleaning</p>
            </div>
            <div className="feature">
              <i className="fas fa-utensils"></i>
              <h3>Cooks</h3>
              <p>Meal preparation services</p>
            </div>
            <div className="feature">
              <i className="fas fa-baby"></i>
              <h3>Childcare</h3>
              <p>Professional babysitting</p>
            </div>
          </div>
        </div>
       
        <div className="dashboard">
          <h2>Find {activeCategory} Professionals in Your Area</h2>
          <p>Select a category to find workers in your area</p>
         
          <div className="service-categories">
            {[
              { icon: "broom", name: "Cleaning" },
              { icon: "utensils", name: "Cooking" },
              { icon: "tshirt", name: "Laundry" },
              { icon: "bath", name: "Bathroom Cleaning" },
              { icon: "baby", name: "Childcare" },
              { icon: "wrench", name: "Maintenance" },
            ].map((category, index) => (
              <div
                key={index}
                className={`service-category ${
                  activeCategory === category.name ? "active" : ""
                }`}
                onClick={() => handleCategoryClick(category.name)}
              >
                <i className={`fas fa-${category.icon}`}></i>
                <div>{category.name}</div>
              </div>
            ))}
          </div>
         
          {loading ? (
            <div className="loading">Loading workers...</div>
          ) : error ? (
            <div className="error">{error}</div>
          ) : (
            <div className="worker-list">
              {workers.map((worker) => (
                <div key={worker._id} className="worker-card">
                  <div className="worker-image">
                    <i className="fas fa-user"></i>
                  </div>
                  <div className="worker-info">
                    <div className="worker-name">{worker.name}</div>
                    <div className="worker-profession">
                      {worker.profession}
                    </div>
                    <div className="worker-rating">
                      {renderStars(worker.rating)}
                    </div>
                    <div className="worker-distance">
                      {worker.distance}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;