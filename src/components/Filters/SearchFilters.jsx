// src/components/Filters/SearchFilters.jsx
import React, { useState } from 'react';

const SearchFilters = ({ searchType }) => {
  const [filters, setFilters] = useState({
    priceRange: [0, 50000],
    rating: 0,
    stops: 'any',
    airline: '',
    amenities: []
  });

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <div className="search-filters">
      <h3>Filters</h3>
      
      {/* Price Range */}
      <div className="filter-group">
        <h4>Price Range</h4>
        <div className="price-range">
          <input
            type="range"
            min="0"
            max="50000"
            value={filters.priceRange[1]}
            onChange={(e) => handleFilterChange('priceRange', [0, parseInt(e.target.value)])}
          />
          <span>₹0 - ₹{filters.priceRange[1].toLocaleString()}</span>
        </div>
      </div>

      {/* Rating */}
      <div className="filter-group">
        <h4>Rating</h4>
        {[4, 3, 2, 1].map(rating => (
          <label key={rating}>
            <input
              type="radio"
              name="rating"
              value={rating}
              checked={filters.rating === rating}
              onChange={(e) => handleFilterChange('rating', parseInt(e.target.value))}
            />
            {rating}+ Stars
          </label>
        ))}
      </div>

      {searchType === 'FLIGHT' && (
        <div className="filter-group">
          <h4>Stops</h4>
          {['any', 'direct', '1-stop'].map(stop => (
            <label key={stop}>
              <input
                type="radio"
                name="stops"
                value={stop}
                checked={filters.stops === stop}
                onChange={(e) => handleFilterChange('stops', e.target.value)}
              />
              {stop === 'any' ? 'Any' : stop === 'direct' ? 'Direct' : '1 Stop'}
            </label>
          ))}
        </div>
      )}

      <button className="apply-filters-btn">
        Apply Filters
      </button>
    </div>
  );
};

export default SearchFilters;
