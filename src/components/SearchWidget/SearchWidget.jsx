import React, { useState, useEffect } from 'react';
import { Search, MapPin, Calendar, Users, ArrowUpDown, Plane, Building2 } from 'lucide-react';

const SearchWidget = () => {
  const [searchType, setSearchType] = useState('FLIGHT');
  const [tripType, setTripType] = useState('roundtrip');
  const [isLoading, setIsLoading] = useState(false);
  const [searchCriteria, setSearchCriteria] = useState({
    origin: '',
    destination: '',
    departureDate: '',
    returnDate: '',
    passengers: { adults: 1, children: 0, infants: 0 }
  });
  const [showPassengerDropdown, setShowPassengerDropdown] = useState(false);

  const handleSearch = async () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      console.log('Search completed with criteria:', { searchType, tripType, ...searchCriteria });
    }, 2000);
  };

  const handleInputChange = (field, value) => {
    setSearchCriteria(prev => ({ ...prev, [field]: value }));
  };

  const swapLocations = () => {
    const temp = searchCriteria.origin;
    handleInputChange('origin', searchCriteria.destination);
    handleInputChange('destination', temp);
  };

  const updatePassengers = (type, value) => {
    setSearchCriteria(prev => ({
      ...prev,
      passengers: { ...prev.passengers, [type]: Math.max(0, value) }
    }));
  };

  const getTotalPassengers = () => {
    const { adults, children, infants } = searchCriteria.passengers;
    return adults + children + infants;
  };

  const getPassengerText = () => {
    const { adults, children, infants } = searchCriteria.passengers;
    const total = getTotalPassengers();
    if (total === 1 && adults === 1) return '1 Adult';
    
    let text = [];
    if (adults > 0) text.push(`${adults} Adult${adults > 1 ? 's' : ''}`);
    if (children > 0) text.push(`${children} Child${children > 1 ? 'ren' : ''}`);
    if (infants > 0) text.push(`${infants} Infant${infants > 1 ? 's' : ''}`);
    
    return text.join(', ');
  };

  return (
    <div className="search-widget">
      {/* Search Type Tabs */}
      <div className="search-tabs">
        <button 
          className={`tab ${searchType === 'FLIGHT' ? 'active' : ''}`}
          onClick={() => setSearchType('FLIGHT')}
        >
          <Plane size={20} />
          <span>Flights</span>
        </button>
        <button 
          className={`tab ${searchType === 'HOTEL' ? 'active' : ''}`}
          onClick={() => setSearchType('HOTEL')}
        >
          <Building2 size={20} />
          <span>Hotels</span>
        </button>
      </div>

      {/* Trip Type Selection for Flights */}
      {searchType === 'FLIGHT' && (
        <div className="trip-type-section">
          <div className="radio-group">
            <label className="radio-option">
              <input
                type="radio"
                name="tripType"
                value="roundtrip"
                checked={tripType === 'roundtrip'}
                onChange={(e) => setTripType(e.target.value)}
              />
              <span className="radio-label">Round Trip</span>
            </label>
            <label className="radio-option">
              <input
                type="radio"
                name="tripType"
                value="oneway"
                checked={tripType === 'oneway'}
                onChange={(e) => setTripType(e.target.value)}
              />
              <span className="radio-label">One Way</span>
            </label>
          </div>
        </div>
      )}

      {/* Search Form */}
      <div className="search-form">
        {/* Location Section */}
        <div className="form-row">
          <div className="input-group">
            <label className="input-label">
              {searchType === 'FLIGHT' ? 'From' : 'Destination'}
            </label>
            <div className="input-wrapper">
              <MapPin className="input-icon" size={18} />
              <input
                type="text"
                placeholder={searchType === 'FLIGHT' ? 'Departure city or airport' : 'City or hotel name'}
                value={searchCriteria.origin}
                onChange={(e) => handleInputChange('origin', e.target.value)}
                className="form-input"
              />
            </div>
          </div>

          {searchType === 'FLIGHT' && (
            <>
              <button 
                type="button"
                className="swap-btn"
                onClick={swapLocations}
                title="Swap locations"
              >
                <ArrowUpDown size={18} />
              </button>

              <div className="input-group">
                <label className="input-label">To</label>
                <div className="input-wrapper">
                  <MapPin className="input-icon" size={18} />
                  <input
                    type="text"
                    placeholder="Destination city or airport"
                    value={searchCriteria.destination}
                    onChange={(e) => handleInputChange('destination', e.target.value)}
                    className="form-input"
                  />
                </div>
              </div>
            </>
          )}
        </div>

        {/* Date Section */}
        <div className="form-row">
          <div className="input-group">
            <label className="input-label">
              {searchType === 'FLIGHT' ? 'Departure' : 'Check-in'}
            </label>
            <div className="input-wrapper">
              <Calendar className="input-icon" size={18} />
              <input
                type="date"
                value={searchCriteria.departureDate}
                onChange={(e) => handleInputChange('departureDate', e.target.value)}
                className="form-input"
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
          </div>

          <div className="input-group">
            <label className="input-label">
              {searchType === 'FLIGHT' ? 'Return' : 'Check-out'}
            </label>
            <div className="input-wrapper">
              <Calendar className="input-icon" size={18} />
              <input
                type="date"
                value={searchCriteria.returnDate}
                onChange={(e) => handleInputChange('returnDate', e.target.value)}
                className="form-input"
                min={searchCriteria.departureDate || new Date().toISOString().split('T')[0]}
                disabled={tripType === 'oneway' && searchType === 'FLIGHT'}
              />
            </div>
          </div>
        </div>

        {/* Passengers and Search */}
        <div className="form-row">
          <div className="input-group passenger-group">
            <label className="input-label">
              {searchType === 'FLIGHT' ? 'Passengers' : 'Guests'}
            </label>
            <div className="dropdown-wrapper">
              <button
                type="button"
                className="passenger-selector"
                onClick={() => setShowPassengerDropdown(!showPassengerDropdown)}
              >
                <Users className="input-icon" size={18} />
                <span>{getPassengerText()}</span>
                <svg className={`dropdown-arrow ${showPassengerDropdown ? 'open' : ''}`} width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                  <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                </svg>
              </button>
              
              {showPassengerDropdown && (
                <div className="passenger-dropdown">
                  <div className="passenger-option">
                    <div className="passenger-info">
                      <span className="passenger-type">Adults</span>
                      <span className="passenger-desc">12+ years</span>
                    </div>
                    <div className="passenger-controls">
                      <button 
                        type="button"
                        onClick={() => updatePassengers('adults', searchCriteria.passengers.adults - 1)}
                        disabled={searchCriteria.passengers.adults <= 1}
                        className="passenger-btn"
                      >
                        −
                      </button>
                      <span className="passenger-count">{searchCriteria.passengers.adults}</span>
                      <button 
                        type="button"
                        onClick={() => updatePassengers('adults', searchCriteria.passengers.adults + 1)}
                        className="passenger-btn"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  
                  <div className="passenger-option">
                    <div className="passenger-info">
                      <span className="passenger-type">Children</span>
                      <span className="passenger-desc">2-11 years</span>
                    </div>
                    <div className="passenger-controls">
                      <button 
                        type="button"
                        onClick={() => updatePassengers('children', searchCriteria.passengers.children - 1)}
                        disabled={searchCriteria.passengers.children <= 0}
                        className="passenger-btn"
                      >
                        −
                      </button>
                      <span className="passenger-count">{searchCriteria.passengers.children}</span>
                      <button 
                        type="button"
                        onClick={() => updatePassengers('children', searchCriteria.passengers.children + 1)}
                        className="passenger-btn"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {searchType === 'FLIGHT' && (
                    <div className="passenger-option">
                      <div className="passenger-info">
                        <span className="passenger-type">Infants</span>
                        <span className="passenger-desc">Under 2 years</span>
                      </div>
                      <div className="passenger-controls">
                        <button 
                          type="button"
                          onClick={() => updatePassengers('infants', searchCriteria.passengers.infants - 1)}
                          disabled={searchCriteria.passengers.infants <= 0}
                          className="passenger-btn"
                        >
                          −
                        </button>
                        <span className="passenger-count">{searchCriteria.passengers.infants}</span>
                        <button 
                          type="button"
                          onClick={() => updatePassengers('infants', searchCriteria.passengers.infants + 1)}
                          className="passenger-btn"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  )}

                  <div className="passenger-dropdown-footer">
                    <button 
                      type="button"
                      className="done-btn"
                      onClick={() => setShowPassengerDropdown(false)}
                    >
                      Done
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          <button 
            className={`search-btn ${isLoading ? 'loading' : ''}`}
            onClick={handleSearch}
            disabled={isLoading || !searchCriteria.origin || (searchType === 'FLIGHT' && !searchCriteria.destination)}
          >
            {isLoading ? (
              <>
                <div className="loading-spinner"></div>
                Searching...
              </>
            ) : (
              <>
                <Search size={20} />
                Search {searchType === 'FLIGHT' ? 'Flights' : 'Hotels'}
              </>
            )}
          </button>
        </div>
      </div>

      {/* Click outside to close dropdown */}
      {showPassengerDropdown && (
        <div 
          className="dropdown-backdrop" 
          onClick={() => setShowPassengerDropdown(false)}
        />
      )}

      <style jsx>{`
        .search-widget {
          max-width: 1200px;
          margin: 0 auto;
          background: linear-gradient(135deg, #fff7ed 0%, #ffffff 50%, #fff7ed 100%);
          border-radius: 16px;
          padding: 32px;
          box-shadow: 0 8px 25px rgba(249, 115, 22, 0.15), 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          border: 2px solid #fed7aa;
        }

        .search-tabs {
          display: flex;
          background: linear-gradient(135deg, #ffedd5, #fed7aa);
          border-radius: 12px;
          padding: 4px;
          margin-bottom: 24px;
          border: 1px solid #fdba74;
        }

        .tab {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px 24px;
          background: transparent;
          border: none;
          border-radius: 8px;
          font-weight: 500;
          color: #9a3412;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .tab.active {
          background: linear-gradient(135deg, #ea580c, #f97316);
          color: white;
          box-shadow: 0 4px 12px rgba(249, 115, 22, 0.3);
          transform: translateY(-1px);
        }

        .tab:hover:not(.active) {
          color: #ea580c;
          background: rgba(249, 115, 22, 0.1);
        }

        .trip-type-section {
          margin-bottom: 24px;
          padding: 16px 0;
        }

        .radio-group {
          display: flex;
          gap: 24px;
        }

        .radio-option {
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
        }

        .radio-option input[type="radio"] {
          width: 16px;
          height: 16px;
          margin: 0;
          accent-color: #f97316;
        }

        .radio-label {
          font-weight: 500;
          color: #374151;
        }

        .search-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-row {
          display: grid;
          gap: 16px;
          align-items: end;
        }

        .form-row:nth-child(1) {
          grid-template-columns: 1fr auto 1fr;
        }

        .form-row:nth-child(2) {
          grid-template-columns: 1fr 1fr;
        }

        .form-row:nth-child(3) {
          grid-template-columns: 1fr auto;
        }

        .input-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .input-label {
          font-size: 14px;
          font-weight: 500;
          color: #374151;
        }

        .input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .input-icon {
          position: absolute;
          left: 12px;
          color: #6b7280;
          z-index: 1;
        }

        .form-input {
          width: 100%;
          padding: 12px 12px 12px 40px;
          border: 2px solid #fed7aa;
          border-radius: 8px;
          font-size: 16px;
          background: white;
          transition: all 0.2s ease;
        }

        .form-input:focus {
          outline: none;
          border-color: #f97316;
          box-shadow: 0 0 0 3px rgba(249, 115, 22, 0.15);
        }

        .form-input:disabled {
          background: #f9fafb;
          color: #9ca3af;
          cursor: not-allowed;
        }

        .swap-btn {
          width: 40px;
          height: 40px;
          border: 2px solid #fed7aa;
          border-radius: 8px;
          background: linear-gradient(135deg, #fff7ed, white);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #ea580c;
          transition: all 0.2s ease;
        }

        .swap-btn:hover {
          border-color: #f97316;
          color: #f97316;
          background: linear-gradient(135deg, #ffedd5, #fed7aa);
          transform: rotate(180deg);
          box-shadow: 0 4px 8px rgba(249, 115, 22, 0.2);
        }

        .passenger-group {
          position: relative;
        }

        .dropdown-wrapper {
          position: relative;
        }

        .passenger-selector {
          width: 100%;
          padding: 12px 40px 12px 40px;
          border: 2px solid #fed7aa;
          border-radius: 8px;
          background: white;
          text-align: left;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 16px;
          transition: all 0.2s ease;
        }

        .passenger-selector:hover {
          border-color: #f97316;
          box-shadow: 0 0 0 3px rgba(249, 115, 22, 0.1);
        }

        .dropdown-arrow {
          margin-left: auto;
          transition: transform 0.2s ease;
        }

        .dropdown-arrow.open {
          transform: rotate(180deg);
        }

        .passenger-dropdown {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: linear-gradient(135deg, #fff7ed, white);
          border: 2px solid #fed7aa;
          border-radius: 8px;
          box-shadow: 0 10px 25px rgba(249, 115, 22, 0.15), 0 4px 6px rgba(0, 0, 0, 0.1);
          z-index: 1000;
          margin-top: 4px;
          padding: 16px;
        }

        .passenger-option {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 0;
          border-bottom: 1px solid #fed7aa;
        }

        .passenger-option:last-of-type {
          border-bottom: none;
        }

        .passenger-info {
          display: flex;
          flex-direction: column;
        }

        .passenger-type {
          font-weight: 500;
          color: #374151;
        }

        .passenger-desc {
          font-size: 14px;
          color: #6b7280;
        }

        .passenger-controls {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .passenger-btn {
          width: 32px;
          height: 32px;
          border: 2px solid #fed7aa;
          border-radius: 6px;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 18px;
          font-weight: 500;
          color: #ea580c;
          transition: all 0.2s ease;
        }

        .passenger-btn:hover:not(:disabled) {
          border-color: #f97316;
          color: #f97316;
          background: #ffedd5;
          box-shadow: 0 2px 4px rgba(249, 115, 22, 0.2);
        }

        .passenger-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .passenger-count {
          min-width: 20px;
          text-align: center;
          font-weight: 500;
          color: #374151;
        }

        .passenger-dropdown-footer {
          margin-top: 16px;
          padding-top: 16px;
          border-top: 1px solid #fed7aa;
        }

        .done-btn {
          width: 100%;
          padding: 8px 16px;
          background: linear-gradient(135deg, #f97316, #ea580c);
          color: white;
          border: none;
          border-radius: 6px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 2px 4px rgba(249, 115, 22, 0.2);
        }

        .done-btn:hover {
          background: linear-gradient(135deg, #ea580c, #dc2626);
          transform: translateY(-1px);
          box-shadow: 0 4px 8px rgba(249, 115, 22, 0.3);
        }

        .search-btn {
          padding: 12px 32px;
          background: linear-gradient(135deg, #f97316, #ea580c);
          color: white;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          font-size: 16px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: all 0.2s ease;
          min-height: 48px;
          white-space: nowrap;
          box-shadow: 0 4px 12px rgba(249, 115, 22, 0.3);
        }

        .search-btn:hover:not(:disabled) {
          background: linear-gradient(135deg, #ea580c, #dc2626);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(249, 115, 22, 0.4);
        }

        .search-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
          box-shadow: 0 2px 4px rgba(249, 115, 22, 0.2);
        }

        .search-btn.loading {
          background: linear-gradient(135deg, #fdba74, #fb923c);
        }

        .loading-spinner {
          width: 20px;
          height: 20px;
          border: 2px solid transparent;
          border-top: 2px solid white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        .dropdown-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 999;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .search-widget {
            padding: 24px 16px;
            margin: 0 16px;
          }

          .form-row {
            grid-template-columns: 1fr !important;
            gap: 16px;
          }

          .swap-btn {
            order: 3;
            width: 100%;
            height: 48px;
            margin: 8px 0;
          }

          .search-btn {
            width: 100%;
            margin-top: 8px;
          }

          .radio-group {
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .search-widget {
            border-radius: 0;
            margin: 0;
          }

          .tab {
            padding: 12px 16px;
            font-size: 14px;
          }

          .form-input,
          .passenger-selector {
            padding: 16px 16px 16px 44px;
            font-size: 16px;
          }
        }
      `}</style>
    </div>
  );
};

export default SearchWidget;