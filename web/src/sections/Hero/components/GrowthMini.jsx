import React from "react";

const GrowthMini = ({ icon = "📊", text }) => {
  return (
    <div className="hero-growth-mini">
      <span aria-hidden="true">{icon}</span>
      <span>{text}</span>
    </div>
  );
};

export default GrowthMini;