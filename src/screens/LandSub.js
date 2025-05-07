import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LandSub.css";

function LandSub() {
  const [formData, setFormData] = useState({
    fullName: "",
    contactDetails: "",
    landLocation: "",
    landSize: "",
    leaseDuration: "",
    pricePerMonth: "",
    landDescription: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted", formData);

    // After submitting the form, navigate back to LandLeasingOptions
    navigate("/land-leasing-options");
  };

  const goBackToServices = () => {
    navigate("/services");
  };

  return (
    <div className="land-form-wrapper">
      <div className="land-form-container">
        <h2>Submit Your Land for Lease</h2>
        <p>Connect your land with the right opportunities</p>
        <form className="land-form" onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />

          <label>Contact Details</label>
          <input
            type="text"
            name="contactDetails"
            value={formData.contactDetails}
            onChange={handleChange}
            required
          />

          <label>Land Location</label>
          <input
            type="text"
            name="landLocation"
            value={formData.landLocation}
            onChange={handleChange}
            required
          />

          <label>Land Size (in acres)</label>
          <input
            type="number"
            name="landSize"
            value={formData.landSize}
            onChange={handleChange}
            required
          />

          <label>Lease Duration</label>
          <select
            name="leaseDuration"
            value={formData.leaseDuration}
            onChange={handleChange}
            required
          >
            <option value="">Select Lease Duration</option>
            <option value="3 months">3 months</option>
            <option value="6 months">6 months</option>
            <option value="12 months">12 months</option>
          </select>

          <label>Price per month (₹)</label>
          <input
            type="number"
            name="pricePerMonth"
            value={formData.pricePerMonth}
            onChange={handleChange}
            required
          />

          <label>Land Description</label>
          <textarea
            name="landDescription"
            value={formData.landDescription}
            onChange={handleChange}
            required
          />

          <div className="land-form-buttons">
            <button type="submit" className="land-submit-btn">
              Submit
            </button>
            <button
              type="button"
              onClick={goBackToServices}
              className="back-services-btn"
            >
              ← Back to Services
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LandSub;
