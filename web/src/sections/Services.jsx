import React from "react";
import "./services.css";

const serviceItems = [
  {
    title: "Mobile Applications Development",
    description: "Empowering your business mobility. We build apps that engage and convert.",
    icon: "mobile",
  },
  {
    title: "Custom Software Development",
    description: "Your ideas, our expertise. Building robust software solutions together.",
    icon: "software",
  },
  {
    title: "Testing & Quality Assurance",
    description: "Delivering excellence, one test at a time.",
    icon: "testing",
  },
  {
    title: "Maintenance",
    description: "Sustaining your success with ongoing support.",
    icon: "maintenance",
  },
  {
    title: "Support",
    description: "Reliable maintenance, consistent performance.",
    icon: "support",
  },
  {
    title: "Consultation",
    description: "Experience our uncompromising commitment to quality.",
    icon: "consultation",
  },
];

const Services = () => {
	return (
		<section className="services" id="services">
			<div className="services-inner">
				<h2>
					What We
					<br />
					Do
				</h2>

				<p>
					With over a decade of experience, we’re committed to delivering top-notch software
					solutions tailored to your business needs.
				</p>
			</div>

			<div className="services-grid" aria-label="Service offerings">
				{serviceItems.map((item) => (
					<article className="service-card" key={item.title}>
						<span className={`service-icon icon-${item.icon}`} aria-hidden="true" />
						<h3>{item.title}</h3>
						<p>{item.description}</p>
					</article>
				))}
			</div>
		</section>
	);
};

export default Services;
