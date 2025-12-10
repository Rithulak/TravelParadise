import React from 'react';
import { Link } from 'react-router-dom';
import './DestinationsPage.css';

const destinations = [
  "Tourism Paradise India",
  "Tourism Paradise Philippines",
  "Tourism Paradise Malaysia",
  "Tourism Paradise Singapore",
  "Tourism Paradise Sri Lanka",
  "Tourism Paradise Vietnam",
  "Tourism Paradise Indonesia",
  "Tourism Paradise Thailand",
  "Tourism Paradise Andaman and Nicobar Islands",
  "Tourism Paradise Bali",
  "Tourism Paradise UAE",
  "Tourism Paradise Saudi Arabia",
  "Tourism Paradise America",
  "Tourism Paradise Europe",
  "Tourism Paradise Asia",
  "Tourism Paradise Africa",
  "Tourism Paradise Australia",
  "Tourism Paradise Canada"
];

const DestinationsPage = () => {
  return (
    <div className="destinations-page-container">
      <h1 className="destinations-page-title">Explore Our Destinations</h1>
      <ul className="destinations-page-list">
        {destinations.map((destination, index) => (
          <li key={index}>
            <Link to="/destinationfeed" state={{ selectedOffer: { title: destination } }}>
              {destination}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DestinationsPage;