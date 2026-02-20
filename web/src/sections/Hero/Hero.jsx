import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        
        {/* LEFT CONTENT */}
        <div className="hero-left">
          <h1>
            We bring solutions to make life for our <span className="highlight">Customers.</span>
          </h1>
        </div>

        {/* RIGHT CONTENT */}
        <div className="hero-right">
          <p>
            We have considered our solutions to support every stage 
            of your growth.
          </p>
        </div>

      </div>

      {/* Background Glow Effects */}
      <div className="bg-glow glow-1"></div>
      <div className="bg-glow glow-2"></div>
    </section>
  );
};

export default Hero;