// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import RootLayout from  './components/layout/RootLayout';
import HomePage from './pages/HomePage';
import FlightsPage from './pages/flights/FlightsPage';
import BusesPage from './pages/buses/BusesPage';
import TrainsPage from './pages/trains/TrainsPage';
import HouseboatDetail from './pages/HouseboatDetail';
import HouseboatsList from './components/HouseboatsList';
import ScrollToTop from './components/ScrollToTop';
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminRegister from './pages/admin/AdminRegister';
import OfferForm from './pages/admin/OfferForm';
import DestinationFeed from './pages/DestinationFeed';
import AboutPage from './pages/AboutPage';
import Info from './components/info';

// add other pages as needed

export default function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="flights" element={<FlightsPage />} />
          <Route path="buses" element={<BusesPage />} />
          <Route path="trains" element={<TrainsPage />} />
          <Route path="houseboats" element={<HouseboatsList />} />
          <Route path="/houseboats/:title" element={<HouseboatDetail />} />
          <Route path="destinationfeed" element={<DestinationFeed />} />
          <Route path="info" element={<Info/>} />
        </Route>

        <Route path="about" element={<AboutPage />} />

          {/* Admin Routes (No Layout - standalone pages) */}
          <Route path="TP-admin/login" element={<AdminLogin />} />
          <Route path="TP-admin/dashboard" element={<AdminDashboard />} />
          <Route path="TP-admin/register" element={<AdminRegister />} />
          <Route path="TP-admin/offers" element={<OfferForm />} />


          {/* 404 fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
