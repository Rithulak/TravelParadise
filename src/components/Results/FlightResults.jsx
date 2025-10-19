// src/components/Results/FlightResults.jsx
import React, { useState } from 'react';
import './FlightResults.css';

const FlightResults = ({ results }) => {
  const [sortBy, setSortBy] = useState('price');

  const sortedResults = [...results].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return a.price - b.price;
      case 'duration':
        return a.duration.localeCompare(b.duration);
      case 'departure':
        return a.departureTime.localeCompare(b.departureTime);
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  return (
    <div className="flight-results">
      <div className="results-header">
        <h2>{results.length} flights found</h2>
        
        <div className="sort-options">
          <label>Sort by:</label>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="price">Price (Low to High)</option>
            <option value="duration">Duration</option>
            <option value="departure">Departure Time</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>

      <div className="flights-list">
        {sortedResults.map((flight, index) => (
          <div key={flight.id || index} className="flight-card">
            <div className="flight-main-info">
              <div className="airline-section">
                <div className="airline-logo">
                  {flight.airline.charAt(0)}
                </div>
                <div className="airline-details">
                  <strong>{flight.airline}</strong>
                  <span className="flight-number">{flight.flightNumber}</span>
                </div>
              </div>

              <div className="route-section">
                <div className="departure">
                  <div className="time">{flight.departureTime}</div>
                  <div className="location">{flight.origin}</div>
                  <div className="code">{flight.originCode}</div>
                </div>
                
                <div className="flight-path">
                  <div className="duration">{flight.duration}</div>
                  <div className="path-line">
                    <div className="line"></div>
                    <div className="plane-icon">✈️</div>
                  </div>
                  <div className="stops">
                    {flight.stops === 0 ? 'Direct' : `${flight.stops} stop${flight.stops > 1 ? 's' : ''}`}
                  </div>
                </div>
                
                <div className="arrival">
                  <div className="time">{flight.arrivalTime}</div>
                  <div className="location">{flight.destination}</div>
                  <div className="code">{flight.destinationCode}</div>
                </div>
              </div>

              <div className="price-section">
                <div className="price">
                  <span className="currency">₹</span>
                  <span className="amount">{flight.price.toLocaleString()}</span>
                </div>
                <div className="per-person">per person</div>
                <button className="select-flight-btn">
                  Select Flight
                </button>
              </div>
            </div>

            <div className="flight-details">
              <div className="details-row">
                <span className="detail-item">
                  <span className="detail-icon">⭐</span>
                  {flight.rating?.toFixed(1)} ({flight.reviewCount} reviews)
                </span>
                <span className="detail-item">
                  <span className="detail-icon">✈️</span>
                  {flight.aircraft}
                </span>
                <span className="detail-item">
                  <span className="detail-icon">💺</span>
                  {flight.availableSeats} seats left
                </span>
                <span className="detail-item">
                  <span className="detail-icon">🎫</span>
                  {flight.cabinClass}
                </span>
              </div>
              
              {flight.amenities && flight.amenities.length > 0 && (
                <div className="amenities">
                  <strong>Amenities: </strong>
                  {flight.amenities.join(' • ')}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlightResults;
