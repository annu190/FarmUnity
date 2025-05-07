import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandLeasingOptions.css";

const LandLeasingOptions = () => {
  const navigate = useNavigate();

  return (
    <div className="land-leasing-wrapper">
      <div className="content-wrapper">
        <div className="form-container">
          <h2 className="main-heading">Land Leasing Options</h2>
          <p className="sub-heading">Empowering Farmers through Land Leasing</p>
          <div className="land-leasing-buttons">
            <button className="option-btn" onClick={() => navigate("/search-land")}>
              Search Available Land
            </button>
            <button className="option-btn" onClick={() => navigate("/land-leasing")}>
              Submit Land for Lease
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="image-container">
          <img src="/images/land-leasing.png" alt="Land Leasing" className="image" />
        </div>
      </div>
    </div>
  );
};

export default LandLeasingOptions;
