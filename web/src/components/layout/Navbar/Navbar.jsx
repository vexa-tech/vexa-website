import React from "react";
import logo from "../../../assets/images/logo.png";

const Navbar = () => {
  return (
    <header className="hero-nav">
      <a className="hero-nav-logo" href="#home" aria-label="Vexa home">
        <img src={logo} alt="Vexa logo" />
      </a>

      <ul className="hero-nav-links">
        <li>
          <a href="/#services">Services</a>
        </li>
        <li>
          <a href="/work">Work</a>
        </li>
        <li>
          <a href="/#testimonials">Testimonials</a>
        </li>
      </ul>

      <span className="hero-nav-separator" aria-hidden="true">
        ---
      </span>

      <a className="hero-nav-talk" href="/#contact">
        Lets Talk
      </a>
    </header>
  );
};

export default Navbar;