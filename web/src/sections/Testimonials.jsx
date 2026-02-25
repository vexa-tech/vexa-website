import React, { useEffect, useState } from "react";
import "./testimonials.css";
import { siteContent } from "../config/siteContent";

const Testimonials = () => {
  const [items, setItems] = useState(siteContent.testimonials.items);

  useEffect(() => {
    if (!siteContent.testimonials.sheetUrl) {
      return;
    }

    let isMounted = true;

    fetch(siteContent.testimonials.sheetUrl)
      .then((res) => res.json())
      .then((data) => {
        if (!isMounted || !Array.isArray(data)) {
          return;
        }

        const mappedItems = data
          .map((row) => ({
            name: row.Name || row.name || "",
            role: row.Role || row.role || "",
            rating: row.Rating || row.rating || "",
            quote: row.Quote || row.quote || "",
          }))
          .filter((row) => row.name && row.quote);

        if (mappedItems.length) {
          setItems(mappedItems);
        }
      })
      .catch(() => {
        // Keep fallback items on fetch failure.
      });

    return () => {
      isMounted = false;
    };
  }, []);

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
          {items.map((item) => (
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
