import React from "react";

const CampaignPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Campaign Title
        </h1>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <p className="text-lg text-gray-700">
              Target: <span className="font-bold">$10,000</span>
            </p>
            <p className="text-lg text-gray-700">
              Raised: <span className="font-bold">$5,000</span>
            </p>
          </div>
          <button className="bg-green-500 text-white font-semibold py-2 px-4 mt-4 md:mt-0 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
            Donate Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CampaignPage;