import React from "react";
import "./CreatorDashboard.css";

const CreatorDashboard = ({ campaigns }) => {
  return (
    <div className="creator-dashboard">
      <h1 className="dashboard-title">Creator Dashboard</h1>
      <p className="dashboard-subtitle">Manage your campaigns and track progress.</p>

      <div className="campaign-list">
        {campaigns.map((campaign) => (
          <div className="campaign-card" key={campaign.id}>
            <img src={campaign.imageUrl} alt={campaign.title} className="campaign-image" />
            <h2 className="campaign-title">{campaign.title}</h2>
            <p className="campaign-description">{campaign.description}</p>
            <p className="campaign-target">
              Target: <strong>${campaign.targetAmount}</strong>
            </p>
            <p className="campaign-progress">
              Progress: <strong>{campaign.progress}%</strong>
            </p>
            <button className="edit-button">Edit Campaign</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreatorDashboard;