import React from "react";

const DashboardPage = () => {
  const campaigns = [
    { id: 1, title: "Campaign 1", target: "$10,000", raised: "$5,000" },
    { id: 2, title: "Campaign 2", target: "$15,000", raised: "$7,500" },
    { id: 3, title: "Campaign 3", target: "$20,000", raised: "$10,000" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
        Dashboard
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {campaigns.map((campaign) => (
          <div
            key={campaign.id}
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300"
          >
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              {campaign.title}
            </h2>
            <p className="text-gray-600 mb-2">
              Target: <span className="font-bold">{campaign.target}</span>
            </p>
            <p className="text-gray-600">
              Raised: <span className="font-bold">{campaign.raised}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;