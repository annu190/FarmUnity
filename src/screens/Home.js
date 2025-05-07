import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div>
    
      {/* Hero Section with Background Image */}
      <div 
        className="hero" 
        style={{ backgroundImage: `url("./images/Farm-bg.png")` }}
      >
        <div className="hero-content">
          <h1>Strengthening agricultural integrity through the power of collective efforts!</h1>
          <button className="get-started-btn">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
