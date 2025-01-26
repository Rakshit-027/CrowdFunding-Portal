import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import CampaignPage from './components/pages/CampaignPage';
import DashboardPage from './components/pages/DashboardPage';
import CreateCampaignPage from './components/pages/CreateCampaignPage';
import Navbar from './components/Navigation/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/campaign/:id" element={<CampaignPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/create-campaign" element={<CreateCampaignPage />} />
      </Routes>
    </Router>
  );
}

export default App;