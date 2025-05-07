import React from "react";
import { useNavigate } from "react-router-dom";
import "./PostHarvestOptions.css";

const PostHarvestOptions = () => {
  const navigate = useNavigate();

  return (
    <div className="post-harvest-wrapper">
      <div className="content-wrapper">
        <div className="form-container">
          <h2 className="main-heading">Helping Farmers Preserve Their Harvest</h2>
          <div className="post-harvest-buttons">
            <button className="option-btn" onClick={() => navigate("/search-storage")}>
              Search Storage Facilities
            </button>
            <button className="option-btn" onClick={() => navigate("/submit-storage")}>
              Submit Storage Facility
            </button>
          </div>
        </div>

        {/* Using <img> tag to display image */}
        <div className="image-container">
          <img src="/images/Posthar.png" alt="Post-harvest storage" className="image" />
        </div>
      </div>
    </div>
  );
};

export default PostHarvestOptions;
