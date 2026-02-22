import React from "react";
import "./services.css";
import { siteContent } from "../config/siteContent";

const Services = () => {
	return (
		<section className="services" id="services">
			<div className="services-inner">
				<h2>
          {siteContent.services.headingLines[0]}
          <br />
          {siteContent.services.headingLines[1]}
				</h2>

				<p>
          {siteContent.services.intro}
				</p>
			</div>

			<div className="services-grid" aria-label={siteContent.services.ariaLabel}>
        {siteContent.services.items.map((item) => (
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
