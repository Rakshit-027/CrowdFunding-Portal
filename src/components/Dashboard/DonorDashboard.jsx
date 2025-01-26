import React from "react";
import "./DonorDashboard.css";

const DonorDashboard = ({ campaigns }) => {
  return (
    <div className="donor-dashboard">
      <h1 className="dashboard-title">Donor Dashboard</h1>
      <p className="dashboard-subtitle">Explore campaigns and support a cause!</p>

      <div className="campaign-list">
        {campaigns.map((campaign) => (
          <div className="campaign-card" key={campaign.id}>
            <img src={campaign.imageUrl} alt={campaign.title} className="campaign-image" />
            <h2 className="campaign-title">{campaign.title}</h2>
            <p className="campaign-description">{campaign.description}</p>
            <p className="campaign-target">
              Target: <strong>${campaign.targetAmount}</strong>
            </p>
            <button className="donate-button">Donate Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonorDashboard;