import React from "react";
import "./trust.css";
import { siteContent } from "../config/siteContent";

const Trust = () => {
  return (
    <section className="trust" id="trust">
      <div className="trust-inner">
        <div className="trust-card">
          <div className="trust-visual" aria-hidden="true">
            <div className="trust-phone phone-main" />
            <div className="trust-phone phone-back" />
          </div>

          <div className="trust-content">
            <h2>{siteContent.trust.heading}</h2>
            <p>{siteContent.trust.body}</p>

            <div className="trust-badges">
              {siteContent.trust.badges.map((badge) => (
                <span key={badge}>{badge}</span>
              ))}
            </div>

            <button className="trust-cta" type="button">{siteContent.trust.ctaLabel}</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
