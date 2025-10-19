// src/store/searchSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import searchAPI from '../services/searchAPI';

// Async thunks
export const searchDestinations = createAsyncThunk(
  'search/destinations',
  async (query, { rejectWithValue }) => {
    try {
      const response = await searchAPI.getDestinationSuggestions(query);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const searchFlights = createAsyncThunk(
  'search/flights',
  async (criteria, { rejectWithValue }) => {
    try {
      const response = await searchAPI.searchFlights(criteria);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const searchHotels = createAsyncThunk(
  'search/hotels',
  async (criteria, { rejectWithValue }) => {
    try {
      const response = await searchAPI.searchHotels(criteria);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Initial state with all required properties
const initialState = {
  destinations: [],
  searchResults: [],
  loading: false,
  error: null,
  searchCriteria: {
    origin: '',
    destination: '',
    departureDate: '',
    returnDate: '',
    passengers: 1
  }
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    updateSearchCriteria: (state, action) => {
      state.searchCriteria = { ...state.searchCriteria, ...action.payload };
    },
    clearSearchResults: (state) => {
      state.searchResults = [];
    },
    clearError: (state) => {
      state.error = null;
    },
    resetSearchCriteria: (state) => {
      state.searchCriteria = initialState.searchCriteria;
    }
  },
  extraReducers: (builder) => {
    builder
      // Search destinations
      .addCase(searchDestinations.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchDestinations.fulfilled, (state, action) => {
        state.destinations = action.payload || [];
        state.loading = false;
        state.error = null;
      })
      .addCase(searchDestinations.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
        state.destinations = [];
      })
      // Search flights
      .addCase(searchFlights.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchFlights.fulfilled, (state, action) => {
        state.searchResults = action.payload.results || action.payload || [];
        state.loading = false;
        state.error = null;
      })
      .addCase(searchFlights.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
        state.searchResults = [];
      })
      // Search hotels
      .addCase(searchHotels.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchHotels.fulfilled, (state, action) => {
        state.searchResults = action.payload.results || action.payload || [];
        state.loading = false;
        state.error = null;
      })
      .addCase(searchHotels.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
        state.searchResults = [];
      });
  }
});

export const { 
  updateSearchCriteria, 
  clearSearchResults, 
  clearError, 
  resetSearchCriteria 
} = searchSlice.actions;

export default searchSlice.reducer;
