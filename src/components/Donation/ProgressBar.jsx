import React from "react";
import "./ProgressBar.css";

const ProgressBar = ({ currentAmount, targetAmount }) => {
  const percentage = Math.round((currentAmount / targetAmount) * 100);

  return (
    <div className="progress-bar-container">
      <div
        className="progress-bar-fill"
        style={{ width: `${percentage}%` }}
      ></div>
      <div className="progress-bar-text">
        {currentAmount} / {targetAmount} raised ({percentage}%)
      </div>
    </div>
  );
};

export default ProgressBar;