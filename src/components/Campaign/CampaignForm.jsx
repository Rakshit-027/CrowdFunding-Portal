import React, { useState } from "react";
import "./CampaignForm.css";

const CampaignForm = ({ onSubmit }) => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    targetAmount: "",
    imageUrl: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Pass form data to the parent component
    setFormData({
      title: "",
      description: "",
      targetAmount: "",
      imageUrl: "",
    }); // Reset form after submission
  };

  return (
    <form className="campaign-form" onSubmit={handleSubmit}>
      <h2>Create a New Campaign</h2>

      {/* Campaign Title */}
      <div className="form-group">
        <label htmlFor="title">Campaign Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter campaign title"
          required
        />
      </div>

      {/* Campaign Description */}
      <div className="form-group">
        <label htmlFor="description">Campaign Description</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Enter campaign description"
          rows="4"
          required
        />
      </div>

      {/* Target Amount */}
      <div className="form-group">
        <label htmlFor="targetAmount">Target Amount</label>
        <input
          type="number"
          id="targetAmount"
          name="targetAmount"
          value={formData.targetAmount}
          onChange={handleChange}
          placeholder="Enter target amount"
          required
        />
      </div>

      {/* Image URL */}
      <div className="form-group">
        <label htmlFor="imageUrl">Image URL</label>
        <input
          type="url"
          id="imageUrl"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
          placeholder="Enter image URL"
          required
        />
      </div>

      {/* Submit Button */}
      <button type="submit" className="submit-btn">
        Create Campaign
      </button>
    </form>
  );
};

export default CampaignForm;