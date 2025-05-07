import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchStorage.css';

const SearchStorage = () => {
  const [storageList, setStorageList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch storage data from backend
    fetch('http://localhost:5000/api/storages')
      .then((response) => response.json())
      .then((data) => setStorageList(data))
      .catch((error) => console.error('Error fetching storages:', error));
  }, []);

  const filteredStorageList = storageList.filter(
    (storage) =>
      storage.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      storage.capacity.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleBookStorage = (storageId) => {
    navigate(`/book-storage/${storageId}`);
  };

  return (
    <div className="search-storage">
      <h2>Search Available Storage</h2>
      
      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by Location or Capacity"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="storage-list">
        {filteredStorageList.map((storage) => (
          <div key={storage._id} className="storage-item">
            <p>Location: {storage.location}</p>
            <p>Capacity: {storage.capacity}</p>
            <p>Contact: {storage.contact}</p>
            <button onClick={() => handleBookStorage(storage._id)}>Book Storage</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchStorage;
