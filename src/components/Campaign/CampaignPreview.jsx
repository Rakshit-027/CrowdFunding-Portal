import React from "react";
import "./CampaignPreview.css";

const CampaignPreview = ({ campaignData }) => {
  const { title, description, targetAmount, imageUrl } = campaignData;

  return (
    <div className="campaign-preview">
      <h2 className="campaign-title">{title}</h2>

      {/* Campaign Image */}
      <div className="campaign-image-wrapper">
        <img src={imageUrl} alt={title} className="campaign-image" />
      </div>

      {/* Campaign Details */}
      <div className="campaign-details">
        <p className="campaign-description">{description}</p>
        <p className="campaign-target">
          Target Amount: <strong>${targetAmount}</strong>
        </p>
      </div>
    </div>
  );
};

export default CampaignPreview;