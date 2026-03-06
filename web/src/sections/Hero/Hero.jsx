import React from "react";
import "./hero.css";
import Navbar from "../../components/layout/Navbar/Navbar";
import heroImage from "../../assets/images/hero-img.webp";
import programmerIcon from "../../assets/images/programmer-icon.png";
import mobileAppIcon from "../../assets/images/mobile-app.png";
import contactIcon from "../../assets/images/contract-icon.png";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-shell">
        <Navbar />

        <div className="hero-container">
          <div className="hero-left">
            <h1>
              We bring solutions
              <br />
              to make life for our
              <br />
              <span className="highlight">Customers.</span>
            </h1>

            <a className="hero-touch-btn" href="#contact">
              ↗ Get in Touch
            </a>
          </div>

          <div className="hero-right">
            <p>
              We have considered our solutions
              <br />
              to support every stage of your
              <br />
              growth.
            </p>
          </div>
        </div>

        <img className="hero-icon hero-icon-top" src={contactIcon} alt="" aria-hidden="true" />
        <img className="hero-icon hero-icon-left" src={mobileAppIcon} alt="" aria-hidden="true" />
        <img className="hero-icon hero-icon-bottom" src={programmerIcon} alt="" aria-hidden="true" />

        <img className="hero-image" src={heroImage} alt="" aria-hidden="true" />
      </div>
    </section>
  );
};

export default Hero;