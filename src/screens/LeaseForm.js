// LeaseForm.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './LeaseForm.css'; // Import the CSS file at the top of your LeaseForm.js

const dummyLandData = [
  {
    id: 1,
    fullName: "Ramesh Kumar",
    landLocation: "Pune",
    landSize: "2",
    pricePerMonth: "4000",
    leaseDuration: "1 year",
    landDescription: "Fertile land near river.",
  },
  {
    id: 2,
    fullName: "Sita Verma",
    landLocation: "Nagpur",
    landSize: "3",
    pricePerMonth: "5000",
    leaseDuration: "6 months",
    landDescription: "Irrigated farmland with road access.",
  },
  {
    id: 3,
    fullName: "Ajay Singh",
    landLocation: "Pune",
    landSize: "1.5",
    pricePerMonth: "3500",
    leaseDuration: "2 years",
    landDescription: "Best for seasonal crops.",
  },
];

const LeaseForm = () => {
  const { landId } = useParams();
  const navigate = useNavigate();

  const [land, setLand] = useState(null);

  useEffect(() => {
    const selectedLand = dummyLandData.find((land) => land.id === parseInt(landId));
    if (selectedLand) {
      setLand(selectedLand);
    } else {
      navigate("/"); // Redirect to home if land not found
    }
  }, [landId, navigate]);

  const [formData, setFormData] = useState({
    name: '',
    location: land?.landLocation || '',
    contact: '',
    purpose: '',
    signature: ''
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Lease form submitted:", formData);
    navigate("/"); // Navigate to home after submission
  };

  if (!land) {
    return <div>Loading...</div>; // Show loading while fetching land data
  }

  return (
    <div className="lease-form-container">
      <h3>Lease Form for {land.fullName}'s Land</h3>


      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleFormChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleFormChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Contact Number</label>
          <input
            type="tel"
            name="contact"
            value={formData.contact}
            onChange={handleFormChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Purpose of Leasing</label>
          <textarea
            name="purpose"
            value={formData.purpose}
            onChange={handleFormChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Digital Signature</label>
          <input
            type="text"
            name="signature"
            value={formData.signature}
            onChange={handleFormChange}
            required
          />
        </div>

        <div className="button-group">
  <button type="submit" className="land-submit-btn">
    Submit Lease Request
  </button>
  <button onClick={() => navigate(-1)} className="back-btn">
    Back to Available Land
  </button>
</div>
</form>

    </div>
  );
};

export default LeaseForm;
