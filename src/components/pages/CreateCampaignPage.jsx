import React, { useState } from "react";

const CreateCampaignPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    target: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formData, null, 2));
    setFormData({ title: "", description: "", target: "" });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
        Create a New Campaign
      </h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6"
      >
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-gray-800 text-sm font-semibold mb-2"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter campaign title"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-800 text-sm font-semibold mb-2"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            rows="4"
            placeholder="Enter campaign description"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="target"
            className="block text-gray-800 text-sm font-semibold mb-2"
          >
            Target Amount
          </label>
          <input
            type="number"
            id="target"
            name="target"
            value={formData.target}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter target amount"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Create Campaign
        </button>
      </form>
    </div>
  );
};

export default CreateCampaignPage;