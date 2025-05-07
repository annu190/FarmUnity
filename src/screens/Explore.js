import React from "react";
import "./Explore.css";
import { FaSeedling, FaMapMarkedAlt, FaWarehouse } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Explore = () => {
  const navigate = useNavigate();

  return (
    <section className="explore-section">
      <div className="explore-header">
        <h2 className="explore-heading">Explore our services</h2>
        <p className="explore-subheading">Empowering every stage of agriculture</p>
      </div>

      <div className="explore-grid">
        <div
          className="explore-card"
          onClick={() => navigate("/LaborPortal")}
        >
          <FaSeedling className="explore-icon" />
          <h3>Labor Marketplace</h3>
          <p>Hire skilled laborers or offer your services directly through the FarmUnity portal.</p>
        </div>

        <div
          className="explore-card"
          onClick={() => navigate("/land-options")}
        >
          <FaMapMarkedAlt className="explore-icon" />
          <h3>Land Leasing</h3>
          <p>Browse available farmlands, list your own, and lease securely and efficiently.</p>
        </div>

        <div
          className="explore-card"
          onClick={() => navigate("/post-harvest-options")}
        >
          <FaWarehouse className="explore-icon" />
          <h3>Post-Harvest Management</h3>
          <p>Find nearby storage units or offer your space to help reduce post-harvest losses.</p>
        </div>
      </div>
    </section>
  );
};

export default Explore;
