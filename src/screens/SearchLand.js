import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AvailableLand = () => {
  const [lands, setLands] = useState([]); // State to store real land data
  const [searchLocation, setSearchLocation] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch lands from backend
    fetch('http://localhost:5000/api/lands')
      .then((response) => response.json())
      .then((data) => setLands(data))
      .catch((error) => console.error('Error fetching lands:', error));
  }, []);

  const filteredLandData = lands.filter((land) =>
    land.landLocation.toLowerCase().includes(searchLocation.toLowerCase())
  );

  const handleLeaseClick = (landId) => {
    navigate(`/lease/${landId}`);
  };

  return (
    <div className="land-form-wrapper">
      <div className="land-form-container">
        <h2>Available Land for Lease</h2>

        {/* Search Bar */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by location"
            value={searchLocation}
            onChange={(e) => setSearchLocation(e.target.value)}
          />
          <button className="search-btn">Search</button>
        </div>

        <div className="land-list">
          {filteredLandData.length === 0 ? (
            <p>No lands found for the selected location.</p>
          ) : (
            filteredLandData.map((land) => (
              <div key={land._id} className="land-card">
                <h4>{land.fullName}</h4>
                <p><strong>Location:</strong> {land.landLocation}</p>
                <p><strong>Size:</strong> {land.landSize} acres</p>
                <p><strong>Price:</strong> ₹{land.pricePerMonth} / month</p>
                <p><strong>Duration:</strong> {land.leaseDuration}</p>
                <p><strong>Description:</strong> {land.landDescription}</p>
                <button 
                  className="land-submit-btn" 
                  onClick={() => handleLeaseClick(land._id)}
                >
                  Lease This Land
                </button>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
};

export default AvailableLand;
