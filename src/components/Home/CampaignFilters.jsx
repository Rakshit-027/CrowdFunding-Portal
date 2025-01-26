import React, { useState } from "react";
import "./CampaignFilters.css";

const CampaignFilters = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    category: "",
    date: "",
    status: "",
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
    onFilterChange({ ...filters, [name]: value });
  };

  return (
    <div className="campaign-filters">
      <div className="filter-section">
        <label htmlFor="category">Category:</label>
        <select
          name="category"
          id="category"
          value={filters.category}
          onChange={handleFilterChange}
        >
          <option value="">All</option>
          <option value="Education">Education</option>
          <option value="Health">Health</option>
          <option value="Environment">Environment</option>
        </select>
      </div>

      <div className="filter-section">
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          name="date"
          id="date"
          value={filters.date}
          onChange={handleFilterChange}
        />
      </div>

      <div className="filter-section">
        <label htmlFor="status">Status:</label>
        <select
          name="status"
          id="status"
          value={filters.status}
          onChange={handleFilterChange}
        >
          <option value="">All</option>
          <option value="Active">Active</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
    </div>
  );
};

export default CampaignFilters;