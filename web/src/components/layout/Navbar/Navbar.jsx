import React from "react";
import logo from "../../../assets/images/logo.png";
import { siteContent } from "../../../config/siteContent";

const Navbar = () => {
  return (
    <header className="hero-nav">
      <a className="hero-nav-logo" href={siteContent.nav.homeHref} aria-label={siteContent.nav.homeLabel}>
        <img src={logo} alt={siteContent.nav.logoAlt} />
      </a>

      <ul className="hero-nav-links">
        {siteContent.nav.links.map((link) => (
          <li key={link.label}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>

      <span className="hero-nav-separator" aria-hidden="true">
        {siteContent.nav.separator}
      </span>

      <a className="hero-nav-talk" href={siteContent.nav.cta.href}>
        {siteContent.nav.cta.label}
      </a>
    </header>
  );
};

export default Navbar;