import React from "react";
import "./navbar.css";
import logo from "../../../assets/images/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        {/* Logo */}
        <div className="navbar-logo">
          <img src={logo} alt="Logo" />
        </div>

        {/* Links */}
        <ul className="navbar-links">
          <li><a href="#services">Services</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
        </ul>

        {/* CTA Button */}
        <div className="navbar-cta">
          <a href="#contact" className="talk-btn">
            Let's Talk
          </a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;