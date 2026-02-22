import React from "react";
import "./testimonials.css";
import { siteContent } from "../config/siteContent";

const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-inner">
        <div className="testimonials-head">
          <h2>
            {siteContent.testimonials.headingLines[0]}
            <span aria-hidden="true">{siteContent.testimonials.accent}</span>
            <br />
            {siteContent.testimonials.headingLines[1]}
          </h2>
          <p>{siteContent.testimonials.subcopy}</p>
        </div>

        <div className="testimonials-grid">
          {siteContent.testimonials.items.map((item) => (
            <article className="testimonial-card" key={item.name}>
              <div className="testimonial-top">
                <div className="testimonial-avatar" aria-hidden="true" />
                <div>
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </div>
                <div className="testimonial-rating">
                  <span aria-hidden="true">{siteContent.testimonials.ratingSymbol}</span>
                  {item.rating}
                </div>
              </div>
              <p>{item.quote}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
