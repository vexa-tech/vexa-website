import React from "react";
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

const WorkPage = () => {
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

      <Footer />
    </div>
  );
};

export default WorkPage;
