import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="logo">DonateNow</span>
      </div>
      <div className={`navbar-menu ${isOpen ? "open" : ""}`}>
        <ul className="navbar-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/campaign/:id">Campaigns</Link>
          </li>
          <li>
            <Link to="/create-campaign">Create Campaign</Link>
          </li>
        </ul>
        <div className="navbar-buttons">
          <button className="login-button">Login</button>
          <button className="signup-button">Sign Up</button>
        </div>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <span className="toggle-icon"></span>
      </div>
    </nav>
  );
};

export default Navbar;