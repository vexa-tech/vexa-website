import React from "react";
import "./trust.css";

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
            <h2>We make your spending stress-free for you to have the perfect control.</h2>
            <p>
              ASD Technologies Inc specializes in tailored custom software development,
              delivering responsive applications, unique 3D modeling, graphic designs,
              efficient document workflows, and impactful e-commerce platforms.
              Our full-stack team ensures seamless integration into your existing
              business processes.
            </p>

            <div className="trust-badges">
              <span>94% Customer Satisfaction</span>
              <span>4K+ New Projects</span>
              <span>10K+ New Customers</span>
            </div>

            <button className="trust-cta" type="button">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
