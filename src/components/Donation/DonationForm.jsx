import React, { useState } from "react";
import "./DonationForm.css";
import ProgressBar from "./ProgressBar";

const DonationForm = ({ campaign }) => {
  const [donation, setDonation] = useState("");

  const handleDonationChange = (e) => {
    setDonation(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Donation submitted:", donation);
    setDonation(""); // Clear input after submission
  };

  return (
    <div className="donation-form-container">
      <h2 className="form-title">Support {campaign.title}</h2>
      <ProgressBar
        currentAmount={campaign.currentAmount}
        targetAmount={campaign.targetAmount}
      />
      <form onSubmit={handleSubmit} className="donation-form">
        <label htmlFor="donation" className="donation-label">
          Enter Donation Amount:
        </label>
        <div className="input-group">
          <span className="currency-symbol">$</span>
          <input
            type="number"
            id="donation"
            name="donation"
            value={donation}
            onChange={handleDonationChange}
            min="1"
            required
            className="donation-input"
          />
        </div>
        <button type="submit" className="submit-button">
          Donate Now
        </button>
      </form>
    </div>
  );
};

export default DonationForm;