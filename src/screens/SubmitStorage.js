import React, { useState } from "react";
import "./SubmitStorage.css";

const SubmitStorage = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [capacity, setCapacity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to submit the storage facility (e.g., API request)
    alert("Storage submitted successfully!");
    setName("");
    setLocation("");
    setCapacity("");
  };

  return (
    <div className="submit-storage-wrapper">
      <h2 className="main-heading">Submit Your Storage Facility</h2>
      <form onSubmit={handleSubmit} className="storage-form">
        <label>
          Storage Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Location:
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </label>
        <label>
          Capacity:
          <input
            type="text"
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
            required
          />
        </label>
        <button type="submit">Submit Storage</button>
      </form>
    </div>
  );
};

export default SubmitStorage;
