import React from "react";
import logo from "../assets/images/logo.png";
import "./footer.css";
import { siteContent } from "../config/siteContent";

const Footer = () => {
  return (
    <footer className="site-footer" id="footer">
      <div className="site-footer-inner">
        <div className="site-footer-brand">
          <img src={logo} alt={siteContent.footer.logoAlt} />
          <h2>{siteContent.footer.brandName}</h2>
        </div>

        <ul className="site-footer-tags" aria-label={siteContent.footer.tagsAriaLabel}>
          {siteContent.footer.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>

        <div className="site-footer-divider" />

        <div className="site-footer-links">
          {siteContent.footer.columns.map((column, index) => (
            <ul key={`footer-column-${index}`}>
              {column.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          ))}

          <form className="site-footer-newsletter" onSubmit={(event) => event.preventDefault()}>
            <label htmlFor="footer-email">{siteContent.footer.newsletter.label}</label>
            <div>
              <input
                id="footer-email"
                type="email"
                placeholder={siteContent.footer.newsletter.placeholder}
              />
              <button type="submit" aria-label={siteContent.footer.newsletter.ariaLabel}>
                {siteContent.footer.newsletter.buttonLabel}
              </button>
            </div>
          </form>
        </div>

        <a
          className="site-footer-top"
          href={siteContent.footer.backToTopHref}
          aria-label={siteContent.footer.backToTopLabel}
        >
          {siteContent.footer.backToTopSymbol}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
