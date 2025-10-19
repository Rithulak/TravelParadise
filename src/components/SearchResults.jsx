// components/SearchResults.jsx
import React from 'react';
import { useSelector } from 'react-redux';

const SearchResults = () => {
  const { searchResults, loading } = useSelector(state => state.search);

  if (loading) {
    return <div className="loading">Searching for the best options...</div>;
  }

  if (!searchResults.length) {
    return <div className="no-results">No results found. Try adjusting your search criteria.</div>;
  }

  return (
    <div className="search-results">
      <div className="results-header">
        <h2>Search Results ({searchResults.length})</h2>
      </div>
      
      <div className="results-list">
        {searchResults.map((result, index) => (
          <div key={index} className="result-card">
            <div className="result-info">
              <h3>{result.title}</h3>
              <p>{result.description}</p>
              <div className="result-details">
                <span className="price">${result.price}</span>
                <span className="duration">{result.duration}</span>
              </div>
            </div>
            <button className="select-button">Select</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
