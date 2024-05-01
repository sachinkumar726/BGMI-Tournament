import React, { useState } from 'react';
import { FaBars, FaUser, FaSearch } from 'react-icons/fa'; // Import FaSearch

import './Navigation.css';

const Navigation = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navigation">
      <div className="logo">BGMIScrims</div>
      <div className="menu-icon" onClick={toggleDropdown}>
        <FaBars />
      </div>
      <ul className={`nav-links ${isDropdownOpen ? 'open' : ''}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/portfolio">Dashboard</a></li>
        <li>
          <a href="/tournament" onClick={(e) => e.preventDefault()} onMouseEnter={toggleDropdown}>
            Tournament
          </a>
          
          <ul className="sub-links">
      
          </ul>
        </li>
        
        <li>
          <div className="search-box">
            <input type="text" placeholder="Search" className="search-input" />
            <FaSearch className="search-icon" /> {/* Add FaSearch icon */}
          </div>
        </li>
        <div className="login-icon">
        <a href="/login"><FaUser /></a>
      </div>
      </ul>
      <div className="login">
        <a href="/login"><FaUser /></a>
      </div>
    </nav>
  );
};

export default Navigation;
