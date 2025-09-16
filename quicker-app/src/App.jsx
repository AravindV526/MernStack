import React, { useState } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Services from './Components/Services';
import HowItWorks from './Components/HowItWorks';
import AboutUs from './Components/AboutUs';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'services':
        return <Services />;
      case 'how-it-works':
        return <HowItWorks />;
      case 'about-us':
        return <AboutUs />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="app-container">
      <Header onPageChange={setCurrentPage} />
      <div className="page-content">
        {renderPage()}
      </div>
      <Footer />
    </div>
  );
}

export default App;