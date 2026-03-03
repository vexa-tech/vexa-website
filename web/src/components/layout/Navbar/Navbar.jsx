import React, { useEffect, useState } from "react";
import logo from "../../../assets/images/logo.png";
import { siteContent } from "../../../config/siteContent";
import "./navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="hero-nav">
      <a className="hero-nav-logo" href={siteContent.nav.homeHref} aria-label={siteContent.nav.homeLabel}>
        <img src={logo} alt={siteContent.nav.logoAlt} />
      </a>

      <button
        type="button"
        className="hero-nav-toggle"
        aria-expanded={isMenuOpen}
        aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>

      <ul className={`hero-nav-links ${isMenuOpen ? "is-open" : ""}`}>
        {siteContent.nav.links.map((link) => (
          <li key={link.label}>
            <a href={link.href} onClick={handleLinkClick}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <span className="hero-nav-separator" aria-hidden="true">
        {siteContent.nav.separator}
      </span>

      <a className="hero-nav-talk" href={siteContent.nav.cta.href} onClick={handleLinkClick}>
        {siteContent.nav.cta.label}
      </a>
    </header>
  );
};

export default Navbar;