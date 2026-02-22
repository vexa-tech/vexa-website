import React, { useRef } from "react";
import Navbar from "../../components/layout/Navbar/Navbar";
import Footer from "../../sections/Footer";
import "./work-page.css";

const workItems = [
  {
    title: "Fintech Mobile Suite",
    summary: "Cross-platform banking app with biometric login and real-time insights.",
  },
  {
    title: "Logistics Control Hub",
    summary: "Operations dashboard that cut delivery exceptions by 32%.",
  },
  {
    title: "Healthcare Portal",
    summary: "Patient onboarding and secure messaging built for compliance.",
  },
  {
    title: "Commerce Revamp",
    summary: "Headless storefront optimized for speed and conversion growth.",
  },
  {
    title: "AI Support Desk",
    summary: "Self-serve workflows and insights that deflected 45% of tickets.",
  },
  {
    title: "Creative Studio Platform",
    summary: "End-to-end asset workflow with approvals and version tracking.",
  },
];

const partners = [
  "Orbit Labs",
  "BluePeak Health",
  "Nova Logistics",
  "Brightline Retail",
  "Atlas Finance",
  "CloudNine Media",
];

const WorkPage = () => {
  const partnersRef = useRef(null);

  const handleScroll = (direction) => {
    const container = partnersRef.current;
    if (!container) {
      return;
    }

    const scrollAmount = container.offsetWidth * 0.85;
    container.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
  };

  return (
    <div className="work-page">
      <section className="work-hero">
        <div className="work-hero-shell">
          <Navbar />
          <div className="work-hero-content">
            <h1>Our Work</h1>
            <p>
              Real products, measurable results. Explore a selection of engagements across
              mobile, web, and enterprise platforms.
            </p>
          </div>
        </div>
      </section>

      <section className="work-grid" id="work">
        <div className="work-grid-inner">
          {workItems.map((item) => (
            <article key={item.title}>
              <div className="work-chip">Case Study</div>
              <h2>{item.title}</h2>
              <p>{item.summary}</p>
              <button type="button">View Details</button>
            </article>
          ))}
        </div>
      </section>

      <section className="work-partners" aria-label="Our partners">
        <div className="work-partners-inner">
          <div className="work-partners-header">
            <h2>Our Partners</h2>
            <p>
              Trusted by teams who value craftsmanship, velocity, and long-term product impact.
            </p>
            <div className="work-partners-controls">
              <button type="button" onClick={() => handleScroll(-1)} aria-label="Scroll left">
                ←
              </button>
              <button type="button" onClick={() => handleScroll(1)} aria-label="Scroll right">
                →
              </button>
            </div>
          </div>

          <div className="work-partners-grid" ref={partnersRef}>
            {partners.map((partner) => (
              <div className="partner-card" key={partner}>
                <span>{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WorkPage;
