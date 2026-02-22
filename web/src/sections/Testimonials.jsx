import React from "react";
import "./testimonials.css";

const testimonials = [
  {
    name: "Corlis Ambady",
    role: "Business Analyst",
    rating: "5.0",
    quote:
      "I definitely recommend ASD Technologies. I felt they connected with our project and were the best experience in this platform so far. I intend to keep working with them and recommend their services.",
  },
  {
    name: "Cory Zamora",
    role: "Founder & CEO",
    rating: "5.0",
    quote:
      "Consulting with ASD was an absolute pleasure. We had a diverse idea for a web project related to the automotive industry. The team was delighted to collaborate and advise us on the project ASAP.",
  },
  {
    name: "Nikolas Brooten",
    role: "CEO & Co-Founder",
    rating: "5.0",
    quote:
      "ASD exceeded all of my expectations. Extremely professional, knowledgeable, and great people to work with.",
  },
  {
    name: "Georgia Bloom",
    role: "Founder",
    rating: "5.0",
    quote:
      "It was a pleasure working with the ASD team. They are very knowledgeable, patient, and very kind. I am a web developer myself and they helped speed up development for me.",
  },
  {
    name: "Jackie Sanders",
    role: "Investment Planner",
    rating: "5.0",
    quote:
      "Maecenas sed diam eget risus varius blandit sit amet non magna. Cum sociis natoque penatibus magnis dis montes, nascetur ridiculus mus.",
  },
  {
    name: "Harrold J.",
    role: "Co Partner",
    rating: "5.0",
    quote:
      "Brilliant service throughout. We still have ongoing work but working with them has shown a high level of professionalism and quality. Love the work so far.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-inner">
        <div className="testimonials-head">
          <h2>
            Our Clients
            <span aria-hidden="true">*</span>
            <br />
            Feedbacks
          </h2>
          <p>
            Don’t take our word for it. See what customers are saying about us.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((item) => (
            <article className="testimonial-card" key={item.name}>
              <div className="testimonial-top">
                <div className="testimonial-avatar" aria-hidden="true" />
                <div>
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </div>
                <div className="testimonial-rating">
                  <span aria-hidden="true">★</span>
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
