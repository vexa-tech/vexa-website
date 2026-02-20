import React from "react";

const GrowthCard = ({ label, height, startColor, endColor, icon = "↑" }) => {
  return (
    <div
      className="growth-card"
      style={{
        "--growth-height": height,
        "--growth-start": startColor,
        "--growth-end": endColor,
      }}
    >
      <span>{icon}</span>
      <p>{label}</p>
    </div>
  );
};

export default GrowthCard;