import React, { useState } from "react";
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
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#campaigns">Campaigns</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
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