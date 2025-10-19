// src/components/SearchWidget/LocationInput.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchDestinations } from '../../store/searchSlice';

const LocationInput = ({ label, value, onChange, placeholder, icon }) => {
  const dispatch = useDispatch();
  const { destinations } = useSelector(state => state.search);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [inputValue, setInputValue] = useState(value || '');
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputValue.length >= 2) {
      dispatch(searchDestinations(inputValue));
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  }, [inputValue, dispatch]);

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
  };

  const handleSuggestionClick = (destination) => {
    const selectedValue = `${destination.name} (${destination.code})`;
    setInputValue(selectedValue);
    onChange(destination.code);
    setShowSuggestions(false);
  };

  const handleInputBlur = () => {
    setTimeout(() => setShowSuggestions(false), 200);
  };

  return (
    <div className="location-input">
      <label>{label}</label>
      <div className="input-container">
        <div className="input-with-icon">
          <span className="input-icon">{icon}</span>
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onFocus={() => inputValue.length >= 2 && setShowSuggestions(true)}
            onBlur={handleInputBlur}
            placeholder={placeholder}
            className="location-field"
          />
        </div>
        
        {showSuggestions && destinations.length > 0 && (
          <div className="suggestions-dropdown">
            {destinations.map((destination) => (
              <div
                key={destination.id}
                className="suggestion-item"
                onClick={() => handleSuggestionClick(destination)}
              >
                <div className="destination-name">
                  {destination.name} ({destination.code})
                </div>
                <div className="destination-details">
                  {destination.city}, {destination.country}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LocationInput;
