import React from "react";
import { FaFacebookF, FaTwitter, FaRss, FaGooglePlusG, FaEllipsisH } from "react-icons/fa";
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        {/* Logo Section */}
        

        {/* Footer Links */}
        <div className="footer-links">
          <div>
            <h3>WEEBLY THEMES</h3>
            <ul>
              <li><a href="#">Pre-Sale FAQs</a></li>
              <li><a href="#">Submit a Ticket</a></li>
            </ul>
          </div>
          <div>
            <h3>SERVICES</h3>
            <ul>
              <li><a href="#">Theme Tweak</a></li>
            </ul>
          </div>
          <div>
            <h3>SHOWCASE</h3>
            <ul>
              <li><a href="#">WidgetKit</a></li>
              <li><a href="#">Support</a></li>
            </ul>
          </div>
          <div>
            <h3>ABOUT US</h3>
            <ul>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Affiliates</a></li>
              <li><a href="#">Resources</a></li>
            </ul>
          </div>
        </div>

        <hr className="footer-divider" />
        {/* Social Icons */}
        <div className="footer-social">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaRss /></a>
          <a href="#"><FaGooglePlusG /></a>
          <a href="#"><FaEllipsisH /></a>
        </div>

        {/* Copyright Section */}
        <div className="footer-bottom">
          <p>&copy; Copyright. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
