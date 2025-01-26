import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 text-center">
        Welcome to Our Campaign Platform
      </h1>
      <p className="text-lg md:text-xl text-gray-600 mb-8 text-center">
        Start your campaign today and make a difference!
      </p>
      <button className="bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
        Get Started
      </button>
    </div>
  );
};

export default HomePage;