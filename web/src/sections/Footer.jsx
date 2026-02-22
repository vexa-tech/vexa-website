import React from "react";
import logo from "../assets/images/logo.png";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="site-footer" id="footer">
      <div className="site-footer-inner">
        <div className="site-footer-brand">
          <img src={logo} alt="ASD Technologies logo" />
          <h2>ASDTECHNOLOGIES</h2>
        </div>

        <ul className="site-footer-tags" aria-label="Service tags">
          <li>#CUSTOM APP DEVELOPMENT</li>
          <li>#MOBILE APP DEVELOPMENT</li>
          <li>#MAINTENANCE</li>
          <li>#TESTING & QUALITY ASSURANCE</li>
          <li>#SUPPORT</li>
          <li>#CONSULTANCE</li>
        </ul>

        <div className="site-footer-divider" />

        <div className="site-footer-links">
          <ul>
            <li><a href="#">LINKEDIN</a></li>
            <li><a href="#">FACEBOOK</a></li>
            <li><a href="#">INSTAGRAM</a></li>
          </ul>

          <ul>
            <li><a href="#">TERMS & CONDITIONS</a></li>
            <li><a href="#">PRIVACY POLICY</a></li>
            <li><a href="/#services">SERVICES</a></li>
          </ul>

          <ul>
            <li><a href="#">LOCATION</a></li>
            <li><a href="#contact">PHONE</a></li>
          </ul>

          <ul>
            <li><a href="/#services">SERVICES</a></li>
            <li><a href="/work">WORK</a></li>
            <li><a href="/#testimonials">TESTIMONIALS</a></li>
          </ul>

          <form className="site-footer-newsletter" onSubmit={(event) => event.preventDefault()}>
            <label htmlFor="footer-email">SUBSCRIBE TO OUR NEWSLETTER</label>
            <div>
              <input id="footer-email" type="email" placeholder="Enter Email" />
              <button type="submit" aria-label="Subscribe">→</button>
            </div>
          </form>
        </div>

        <a className="site-footer-top" href="/#home" aria-label="Back to top">↑</a>
      </div>
    </footer>
  );
};

export default Footer;
