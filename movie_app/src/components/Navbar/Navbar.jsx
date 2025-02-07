import React from "react";
import "./Navbar.css";
import { NavLink, useNavigate } from 'react-router-dom'
import { FaUserCircle, FaSearch, FaCrown, FaMicrophone } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left Section: Logo and Upgrade Button */}
      <div className="navbar-left">
        <div className="logo">
          <img src='/src/assets/logo.jpeg' alt="App Logo" />
          <span className="brand-name">V-Cinema</span>
        </div>
        <button className="upgrade-btn">
          <FaCrown className="crown-icon" />
          Upgrade
        </button>
      </div>

      {/* Navigation Links - Aligned to Left */}
      <ul className="nav-links">
      <NavLink to='/' >
          <li className='py-1'>HOME</li>
        </NavLink>
        <NavLink to='/ds' >
        <li><a href="#">Sports</a></li>
        </NavLink>
        <NavLink to='/movies' >
        <li><a href="#">Movies</a></li>
        </NavLink>
        <NavLink to='/tvshows' >
        <li><a href="#">TV Shows</a></li>
        </NavLink>
        <NavLink to='/series' >
        <li className="dropdown"><a href="#">Web series</a></li>
        </NavLink>
      </ul>

      {/* Right Section: Search Bar and User Icon */}
      <div className="navbar-right">
        <div className="search-container">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Movies, Shows and more" className="search-bar" />
          <FaMicrophone className="mic-icon" />
        </div>
        <FaUserCircle className="user-icon" size={35} />
      </div>
    </nav>
  );
};

export default Navbar;
