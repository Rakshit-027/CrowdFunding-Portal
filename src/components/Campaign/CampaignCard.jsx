// src/components/Campaign/CampaignCard.jsx

import React from "react";
import "./CampaignCard.css";

const CampaignCard = ({ campaign }) => {
  const { title, description, imageUrl, targetAmount, raisedAmount } = campaign;

  // Calculate progress percentage
  const progress = (raisedAmount / targetAmount) * 100;

  return (
    <div className="campaign-card">
      <img src={imageUrl} alt={title} className="campaign-image" />
      <div className="campaign-content">
        <h3 className="campaign-title">{title}</h3>
        <p className="campaign-description">{description}</p>
        <div className="progress-bar">
          <div
            className="progress-bar-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="campaign-stats">
          Raised {raisedAmount} of {targetAmount}
        </p>
        <button className="donate-btn">Donate Now</button>
      </div>
    </div>
  );
};

export default CampaignCard;