import React from "react";
import "./FeaturedCampaigns.css";

const FeaturedCampaigns = ({ campaigns }) => {
  return (
    <div className="featured-campaigns">
      <h2 className="section-title">Featured Campaigns</h2>
      <div className="campaign-grid">
        {campaigns.map((campaign) => (
          <div className="campaign-card" key={campaign.id}>
            <img
              src={campaign.image}
              alt={campaign.title}
              className="campaign-image"
            />
            <div className="campaign-content">
              <h3 className="campaign-title">{campaign.title}</h3>
              <p className="campaign-description">{campaign.description}</p>
              <button className="donate-button">Donate Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCampaigns;