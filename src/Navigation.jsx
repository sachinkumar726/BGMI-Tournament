import React, { useState } from 'react';
import { FaBars, FaUser } from 'react-icons/fa';

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
          <input type="text" placeholder="Search" className="search-input" />
        </li>
        <li><a href="/login"><FaUser /></a></li>
      </ul>
    </nav>
  );
};

export default Navigation;
