// src/components/Results/HotelResults.jsx
import React, { useState } from 'react';
import './HotelResults.css';

const HotelResults = ({ results }) => {
  const [sortBy, setSortBy] = useState('rating');

  const sortedResults = [...results].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return a.pricePerNight - b.pricePerNight;
      case 'rating':
        return b.rating - a.rating;
      case 'distance':
        return a.distanceFromCenter - b.distanceFromCenter;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  return (
    <div className="hotel-results">
      <div className="results-header">
        <h2>{results.length} hotels found</h2>
        
        <div className="sort-options">
          <label>Sort by:</label>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="rating">Rating (High to Low)</option>
            <option value="price">Price (Low to High)</option>
            <option value="distance">Distance from Center</option>
            <option value="name">Hotel Name</option>
          </select>
        </div>
      </div>

      <div className="hotels-list">
        {sortedResults.map((hotel, index) => (
          <div key={hotel.id || index} className="hotel-card">
            <div className="hotel-image-section">
              <div className="hotel-image">
                <div className="image-placeholder">🏨</div>
                <div className="image-overlay">
                  <button className="view-images-btn">View All Photos</button>
                </div>
              </div>
            </div>

            <div className="hotel-info-section">
              <div className="hotel-header">
                <div className="hotel-name-rating">
                  <h3 className="hotel-name">{hotel.name}</h3>
                  <div className="star-rating">
                    {'⭐'.repeat(hotel.starRating)}
                  </div>
                </div>
                
                <div className="hotel-rating">
                  <span className="rating-score">{hotel.rating.toFixed(1)}</span>
                  <span className="rating-text">
                    {hotel.rating >= 4.5 ? 'Excellent' : 
                     hotel.rating >= 4.0 ? 'Very Good' : 
                     hotel.rating >= 3.5 ? 'Good' : 'Average'}
                  </span>
                  <span className="review-count">({hotel.reviewCount} reviews)</span>
                </div>
              </div>

              <div className="hotel-location">
                <span className="location-icon">📍</span>
                <span>{hotel.location}, {hotel.city}</span>
                <span className="distance">
                  {hotel.distanceFromCenter} km from center
                </span>
              </div>

              <div className="hotel-amenities">
                {hotel.amenities.slice(0, 6).map((amenity, idx) => (
                  <span key={idx} className="amenity-tag">
                    {amenity}
                  </span>
                ))}
                {hotel.amenities.length > 6 && (
                  <span className="more-amenities">
                    +{hotel.amenities.length - 6} more
                  </span>
                )}
              </div>

              <div className="hotel-policies">
                <div className="policy-item">
                  <strong>Check-in:</strong> {hotel.policies.checkIn}
                </div>
                <div className="policy-item">
                  <strong>Check-out:</strong> {hotel.policies.checkOut}
                </div>
                <div className="policy-item">
                  <span className="cancellation">
                    {hotel.policies.cancellationPolicy}
                  </span>
                </div>
              </div>

              {hotel.specialOffer && (
                <div className="special-offer">
                  🎯 {hotel.specialOffer}
                </div>
              )}
            </div>

            <div className="hotel-price-section">
              <div className="room-info">
                <div className="room-type">{hotel.roomType}</div>
                <div className="rooms-left">
                  {hotel.availableRooms} rooms left at this price
                </div>
              </div>
              
              <div className="pricing">
                <div className="price-breakdown">
                  <span className="price-label">Price per night</span>
                  <div className="price">
                    <span className="currency">₹</span>
                    <span className="amount">{hotel.pricePerNight.toLocaleString()}</span>
                  </div>
                </div>
                
                <div className="total-price">
                  <span className="total-label">Total (2 nights)</span>
                  <div className="total">
                    ₹{hotel.totalPrice.toLocaleString()}
                  </div>
                  <div className="taxes">
                    +₹{hotel.taxesAndFees} taxes & fees
                  </div>
                </div>
              </div>

              <button className="select-hotel-btn">
                Select Hotel
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelResults;
