import React from "react";

const GrowthBadgeCopy = ({ name, rating }) => {
  return (
    <div className="hero-growth-badge-copy">
      <strong>{name}</strong>
      <small>{rating}</small>
    </div>
  );
};

export default GrowthBadgeCopy;