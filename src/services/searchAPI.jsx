// src/services/searchAPI.js
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080/api';

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

const searchAPI = {
  getDestinationSuggestions: (query) => {
    return apiClient.get('/search/destinations/autocomplete', {
      params: { query }
    });
  },
  
  searchFlights: (criteria) => {
    return apiClient.post('/search/flights', criteria);
  },
  
  searchHotels: (criteria) => {
    return apiClient.post('/search/hotels', criteria);
  },
  
  getPopularDestinations: () => {
    return apiClient.get('/search/suggestions');
  }
};

// Add response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default searchAPI;
