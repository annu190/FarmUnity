import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './BookStorage.css';

const BookStorage = () => {
  const { storageId } = useParams(); // Get the storageId from URL
  const navigate = useNavigate(); // Hook to navigate between pages
  const [farmerName, setFarmerName] = useState('');
  const [goodsDetails, setGoodsDetails] = useState('');
  const [contact, setContact] = useState('');
  const [duration, setDuration] = useState('');
  const [digitalSignature, setDigitalSignature] = useState(''); // Placeholder for signature or QR code

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle storage booking submission
    console.log({
      farmerName,
      goodsDetails,
      contact,
      duration,
      digitalSignature,
    });
    // Redirect or display a success message
  };

  return (
    <div className="book-storage">
      <form onSubmit={handleSubmit}>
        <h2>Book Storage</h2>
        <p>Storage ID: {storageId}</p>

        <label htmlFor="farmerName">Farmer's Name:</label>
        <input
          type="text"
          id="farmerName"
          value={farmerName}
          onChange={(e) => setFarmerName(e.target.value)}
          required
        />

        <label htmlFor="goodsDetails">Goods Details:</label>
        <textarea
          id="goodsDetails"
          value={goodsDetails}
          onChange={(e) => setGoodsDetails(e.target.value)}
          required
        ></textarea>

        <label htmlFor="contact">Contact:</label>
        <input
          type="text"
          id="contact"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          required
        />

        <label htmlFor="duration">Duration (in days):</label>
        <input
          type="number"
          id="duration"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          required
        />

        <label htmlFor="digitalSignature">Digital Signature / QR Code:</label>
        <input
          type="text"
          id="digitalSignature"
          value={digitalSignature}
          onChange={(e) => setDigitalSignature(e.target.value)}
          placeholder="Enter Digital Signature or QR code"
          required
        />

        <button type="submit">Confirm Booking</button>

        {/* Back Button inside the form at the bottom */}
        <button
          type="button"
          className="back-btn"
          onClick={() => navigate('/post-harvest-options')}
        >
          Back to Post Harvest Options
        </button>
      </form>
    </div>
  );
};

export default BookStorage;
