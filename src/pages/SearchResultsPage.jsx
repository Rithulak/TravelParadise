// src/pages/SearchResultsPage.jsx
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import FlightResults from '../components/Results/FlightResults';
import HotelResults from '../components/Results/HotelResults';
import SearchFilters from '../components/Filters/SearchFilters';
import './SearchResultsPage.css';

const SearchResultsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { searchResults, loading, error } = useSelector(state => state.search);
  
  const searchType = location.state?.searchType || 'FLIGHT';
  const searchCriteria = location.state?.criteria;

  useEffect(() => {
    if (!searchCriteria) {
      navigate('/');
    }
  }, [searchCriteria, navigate]);

  if (!searchCriteria) {
    return null;
  }

  return (
    <div className="search-results-page">
      <div className="results-header">
        <div className="search-summary">
          <h1>
            {searchType === 'FLIGHT' ? 'Flight' : 'Hotel'} Search Results
          </h1>
          <div className="search-details">
            {searchType === 'FLIGHT' ? (
              <span>
                {searchCriteria.origin} → {searchCriteria.destination} • 
                {searchCriteria.departureDate} • 
                {searchCriteria.passengers} passenger{searchCriteria.passengers > 1 ? 's' : ''}
              </span>
            ) : (
              <span>
                {searchCriteria.origin} • 
                {searchCriteria.departureDate} to {searchCriteria.returnDate} • 
                {searchCriteria.passengers} guest{searchCriteria.passengers > 1 ? 's' : ''}
              </span>
            )}
          </div>
        </div>
        
        <button 
          className="modify-search-btn"
          onClick={() => navigate('/')}
        >
          Modify Search
        </button>
      </div>

      <div className="results-content">
        <aside className="filters-sidebar">
          <SearchFilters searchType={searchType} />
        </aside>
        
        <main className="results-main">
          {loading && (
            <div className="loading-container">
              <div className="loading-spinner"></div>
              <p>Finding the best options for you...</p>
            </div>
          )}
          
          {error && (
            <div className="error-container">
              <p>Sorry, we couldn't find any results. Please try again.</p>
            </div>
          )}
          
          {!loading && !error && (
            <>
              {searchType === 'FLIGHT' ? (
                <FlightResults results={searchResults} />
              ) : (
                <HotelResults results={searchResults} />
              )}
            </>
          )}
        </main>
      </div>
    </div>
  );
};

export default SearchResultsPage;
