import React from "react";
import GrowthCard from "./GrowthCard";
import GrowthMini from "./GrowthMini";
import GrowthBadgeCopy from "./GrowthBadgeCopy";

const growthCardItems = [
  {
    label: "Custom Solutions",
    height: "9.8rem",
    startColor: "rgba(216, 104, 255, 0.36)",
    endColor: "rgba(216, 104, 255, 0.75)",
  },
  {
    label: "Happy Customer",
    height: "11.8rem",
    startColor: "rgba(94, 34, 125, 0.55)",
    endColor: "rgba(94, 34, 125, 0.85)",
  },
  {
    label: "Business Growth",
    height: "13.8rem",
    startColor: "rgba(47, 129, 237, 0.4)",
    endColor: "rgba(47, 129, 237, 0.84)",
  },
];

const GrowthCards = () => {
  return (
    <div className="hero-growth">
      <GrowthMini text="Customer Growth" />

      <div className="hero-growth-badge">
        <span className="hero-growth-avatar" aria-hidden="true" />
        <GrowthBadgeCopy name="Adam" rating="⭐ 5.0" />
      </div>

      <div className="hero-growth-columns">
        {growthCardItems.map((item) => (
          <GrowthCard
            key={item.label}
            label={item.label}
            height={item.height}
            startColor={item.startColor}
            endColor={item.endColor}
          />
        ))}
      </div>
    </div>
  );
};

export default GrowthCards;