import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [workers, setWorkers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState("Cleaning");

  useEffect(() => {
    const fetchWorkers = async () => {
      try {
        setLoading(true);
        setError(null);
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

    if (currentPage === "home") {
      fetchWorkers();
    }
  }, [currentPage]);

  const showPage = (pageId) => {
    setCurrentPage(pageId);
  };

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
    <div className="app-container">
      <header>
        <div className="logo">
          <i className="fas fa-bolt"></i>
          <span>QUICKER</span>
        </div>
        <nav>
          <ul>
            <li>
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  showPage("home");
                }}
                className={currentPage === "home" ? "active" : ""}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  showPage("services");
                }}
                className={currentPage === "services" ? "active" : ""}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#how-it-works"
                onClick={(e) => {
                  e.preventDefault();
                  showPage("how-it-works");
                }}
                className={currentPage === "how-it-works" ? "active" : ""}
              >
                How It Works
              </a>
            </li>
            <li>
              <a
                href="#about-us"
                onClick={(e) => {
                  e.preventDefault();
                  showPage("about-us");
                }}
                className={currentPage === "about-us" ? "active" : ""}
              >
                About Us
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <div className="page-content">
        {/* Home Page */}
        {currentPage === "home" && (
          <div id="home" className="page active">
            <div className="home-page">
              <div className="left-panel">
                <h1>Find Skilled Workers Near You</h1>
                <p className="tagline">
                  From plumbing to childcare, find the right professional for all
                  your home needs quickly and reliably.
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
        )}

        {/* Services Page */}
        {currentPage === "services" && (
          <div id="services" className="page">
            <div className="services-page">
              <h1>Our Services</h1>
              <p className="services-intro">
                We offer a wide range of professional services to meet all your
                home maintenance needs.
              </p>

              <div className="services-grid">
                {[
                  { icon: "tools", name: "Plumbing", desc: "Professional plumbing services including repairs, installations, and maintenance." },
                  { icon: "bolt", name: "Electrical", desc: "Certified electricians for all your wiring, repairs, and installation needs." },
                  { icon: "paint-roller", name: "Painting", desc: "Interior and exterior painting services with quality materials." },
                  { icon: "hammer", name: "Carpentry", desc: "Custom woodworking, furniture repair, and general carpentry services." },
                  { icon: "broom", name: "Cleaning", desc: "Thorough cleaning services for homes and offices." },
                  { icon: "leaf", name: "Gardening", desc: "Landscaping, lawn care, and garden maintenance services." },
                  { icon: "utensils", name: "Cooking", desc: "Professional cooking services for meals and special occasions." },
                  { icon: "tshirt", name: "Laundry", desc: "Laundry and ironing services to keep your clothes fresh and clean." },
                ].map((service, index) => (
                  <div key={index} className="service-card">
                    <i className={`fas fa-${service.icon}`}></i>
                    <h3>{service.name}</h3>
                    <p>{service.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* How It Works Page */}
        {currentPage === "how-it-works" && (
          <div id="how-it-works" className="page">
            <div className="how-it-works-page">
              <h1>How It Works</h1>
              <p className="how-it-works-intro">
                Getting help has never been easier. Follow these simple steps to
                find the perfect professional for your needs.
              </p>

              <div className="steps-container">
                {[
                  { number: 1, title: "Choose a Service", desc: "Select from our wide range of professional services that you need." },
                  { number: 2, title: "Find Workers", desc: "Browse through skilled professionals in your area with ratings and reviews." },
                  { number: 3, title: "Get Quotes", desc: "Receive competitive quotes from available workers for your project." },
                  { number: 4, title: "Book & Enjoy", desc: "Book your preferred worker and enjoy quality service at your convenience." },
                ].map((step, index) => (
                  <div key={index} className="step-card">
                    <div className="step-number">{step.number}</div>
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* About Us Page */}
        {currentPage === "about-us" && (
          <div id="about-us" className="page">
            <div className="about-us-page">
              <h1>About Quicker</h1>
              <p className="about-intro">
                Quicker is a platform dedicated to connecting homeowners with
                skilled professionals for all their home maintenance and repair
                needs. We believe in making quality services accessible,
                reliable, and convenient for everyone.
              </p>

              <div className="mission-section">
                <h2>Our Mission</h2>
                <p>
                  To revolutionize the way people find and hire home service
                  professionals by providing a seamless, transparent, and
                  efficient platform that benefits both homeowners and service
                  providers.
                </p>
              </div>

              <div className="team-section">
                <h2>Our Team</h2>
                <div className="team-grid">
                  {[
                    { name: "Aravind.V", role: "Founder & CEO", desc: "With over 15 years of experience in the home services industry." },
                    { name: "Anbarasu.P", role: "Operations Manager", desc: "Ensuring smooth operations and customer satisfaction." },
                    { name: "Kaushik.A", role: "Technical Director", desc: "Leading our technical team and platform development." },
                  ].map((member, index) => (
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
          </div>
        )}
      </div>

      <footer>
        <p>&copy; 2023 Quicker - Find Nearby Workers. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;