import React, { useState } from 'react';

const PassengerSelector = ({ value, onChange }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handlePassengerChange = (count) => {
    onChange(count);
    setShowDropdown(false);
  };

  return (
    <div className="passenger-selector">
      <label>Passengers</label>
      <div className="selector-container">
        <button
          type="button"
          className="passenger-button"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          {value} {value === 1 ? 'Passenger' : 'Passengers'}
        </button>
        
        {showDropdown && (
          <div className="passenger-dropdown">
            {[1, 2, 3, 4, 5, 6].map(count => (
              <button
                key={count}
                type="button"
                className={`passenger-option ${count === value ? 'selected' : ''}`}
                onClick={() => handlePassengerChange(count)}
              >
                {count} {count === 1 ? 'Passenger' : 'Passengers'}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PassengerSelector;