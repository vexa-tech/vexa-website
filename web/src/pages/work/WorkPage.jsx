import React from "react";
import Navbar from "../../components/layout/Navbar/Navbar";
import Footer from "../../sections/Footer";
import "./work-page.css";
import { siteContent } from "../../config/siteContent";

const getInitials = (name) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("");

const WorkPage = () => {
  return (
    <div className="work-page">
      <section className="work-hero">
        <div className="work-hero-shell">
          <Navbar />
          <div className="work-hero-content">
            <h1>{siteContent.work.hero.title}</h1>
            <p>{siteContent.work.hero.subtitle}</p>
          </div>
        </div>
      </section>

      <section className="work-grid" id="work">
        <div className="work-grid-inner">
          {siteContent.work.items.map((item) => (
            <article key={item.title}>
              <div className="work-chip">{siteContent.work.cardLabel}</div>
              <h2>{item.title}</h2>
              <p>{item.summary}</p>
              <button type="button">{siteContent.work.cardCtaLabel}</button>
            </article>
          ))}
        </div>
      </section>

      <section className="work-partners" aria-label={siteContent.work.partners.sectionLabel}>
        <div className="work-partners-inner">
          <div className="work-partners-header">
            <h2>{siteContent.work.partners.title}</h2>
            <p>{siteContent.work.partners.subtitle}</p>
          </div>

          <div className="work-partners-marquee" aria-label={siteContent.work.partners.logosLabel}>
            <div className="work-partners-track">
              {siteContent.work.partners.names
                .concat(siteContent.work.partners.names)
                .map((partner, index) => (
                <div className="partner-card" role="img" aria-label={partner} key={`${partner}-${index}`}>
                  <span className="partner-logo" aria-hidden="true">{getInitials(partner)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WorkPage;
