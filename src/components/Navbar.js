// Navbar.jsx
import React from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="top-bar">
        Empowering Agriculture • Bridging Gaps • Sustaining Growth
      </div>

      <div className="nav-top">
        <img src="/images/leafy Plant.png" alt="Leaf Logo" className="leaf-logo" />
        <h1 className="logo">FarmUnity</h1>

        <div className="nav-icons">
          <Link to="/LoginPage" className="icon-link">
            <FaUser className="icon" />
          </Link>
        </div>
      </div>

      <ul className="nav-links">
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/AboutUs" className="nav-link">About Us</Link></li>
        <li><Link to="/Services" className="nav-link">Services</Link></li>
        <li><Link to="/contact" className="nav-link">Contact Us</Link></li> {/* Fixed route path */}
      </ul>
    </nav>
  );
};

export default Navbar;
