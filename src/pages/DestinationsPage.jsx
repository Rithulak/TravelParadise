import React, { useState, useEffect } from 'react';
import './DestinationsPage.css';

const DestinationsPage = () => {
  const [selectedContinent, setSelectedContinent] = useState('Europe');
  const [visibleCards, setVisibleCards] = useState([]);

  const continents = [
    'Europe', 'North America', 'Asia', 'Africa', 'Oceania', 'Middle East', 'Caribbean', 'South America', 'Central America'
  ];

  const destinations = {
    Europe: [
      {
        id: 1,
        name: 'London',
        country: 'United Kingdom',
        thingsToDo: 3889,
        image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=300&fit=crop&auto=format',
        description: 'Iconic landmarks, royal palaces, and vibrant culture'
      },
      {
        id: 2,
        name: 'Paris',
        country: 'France',
        thingsToDo: 3880,
        image: 'https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=400&h=300&fit=crop&auto=format',
        description: 'City of lights, art, and romance'
      },
      {
        id: 3,
        name: 'Rome',
        country: 'Italy',
        thingsToDo: 6778,
        image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400&h=300&fit=crop&auto=format',
        description: 'Ancient history and magnificent architecture'
      },
      {
        id: 4,
        name: 'Amsterdam',
        country: 'Netherlands',
        thingsToDo: 1895,
        image: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=400&h=300&fit=crop&auto=format',
        description: 'Canals, museums, and vibrant nightlife'
      },
      {
        id: 5,
        name: 'Berlin',
        country: 'Germany',
        thingsToDo: 894,
        image: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=400&h=300&fit=crop&auto=format',
        description: 'Rich history and modern urban culture'
      },
      {
        id: 6,
        name: 'Barcelona',
        country: 'Spain',
        thingsToDo: 2509,
        image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=400&h=300&fit=crop&auto=format',
        description: 'Gaudí architecture and Mediterranean charm'
      },
      {
        id: 7,
        name: 'Venice',
        country: 'Italy',
        thingsToDo: 1762,
        image: 'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=400&h=300&fit=crop&auto=format',
        description: 'Romantic canals and historic bridges'
      },
      {
        id: 8,
        name: 'Athens',
        country: 'Greece',
        thingsToDo: 3349,
        image: 'https://images.unsplash.com/photo-1555993539-1732b0258235?w=400&h=300&fit=crop&auto=format',
        description: 'Birthplace of democracy and ancient wonders'
      }
    ],
    'North America': [
      {
        id: 9,
        name: 'New York',
        country: 'United States',
        thingsToDo: 4521,
        image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&h=300&fit=crop&auto=format',
        description: 'The city that never sleeps'
      },
      {
        id: 10,
        name: 'Los Angeles',
        country: 'United States',
        thingsToDo: 3245,
        image: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=300&fit=crop&auto=format',
        description: 'Hollywood glamour and beaches'
      },
      {
        id: 11,
        name: 'Toronto',
        country: 'Canada',
        thingsToDo: 2187,
        image: 'https://images.unsplash.com/photo-1517391823881-4a8b25de5a1a?w=400&h=300&fit=crop&auto=format',
        description: 'Multicultural metropolis with CN Tower'
      },
      {
        id: 12,
        name: 'San Francisco',
        country: 'United States',
        thingsToDo: 2934,
        image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop&auto=format',
        description: 'Golden Gate Bridge and tech hub'
      }
    ],
    Asia: [
      {
        id: 13,
        name: 'Tokyo',
        country: 'Japan',
        thingsToDo: 5432,
        image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=300&fit=crop&auto=format',
        description: 'Modern metropolis meets ancient tradition'
      },
      {
        id: 14,
        name: 'Bangkok',
        country: 'Thailand',
        thingsToDo: 3876,
        image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=400&h=300&fit=crop&auto=format',
        description: 'Temples, street food, and vibrant markets'
      },
      {
        id: 15,
        name: 'Singapore',
        country: 'Singapore',
        thingsToDo: 2654,
        image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400&h=300&fit=crop&auto=format',
        description: 'Garden city with futuristic skyline'
      },
      {
        id: 16,
        name: 'Seoul',
        country: 'South Korea',
        thingsToDo: 4123,
        image: 'https://images.unsplash.com/photo-1538101123628-e3fe86a70bb8?w=400&h=300&fit=crop&auto=format',
        description: 'K-pop culture and historic palaces'
      }
    ],
    'Middle East': [
      {
        id: 17,
        name: 'Istanbul',
        country: 'Turkey',
        thingsToDo: 2737,
        image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=400&h=300&fit=crop&auto=format',
        description: 'Where Europe meets Asia'
      },
      {
        id: 18,
        name: 'Dubai',
        country: 'UAE',
        thingsToDo: 1876,
        image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=300&fit=crop&auto=format',
        description: 'Luxury shopping and modern architecture'
      }
    ],
    Africa: [
      {
        id: 19,
        name: 'Cape Town',
        country: 'South Africa',
        thingsToDo: 2345,
        image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=400&h=300&fit=crop&auto=format',
        description: 'Table Mountain and wine country'
      },
      {
        id: 20,
        name: 'Marrakech',
        country: 'Morocco',
        thingsToDo: 1654,
        image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73ae2?w=400&h=300&fit=crop&auto=format',
        description: 'Red city with vibrant souks'
      }
    ],
    Oceania: [
      {
        id: 21,
        name: 'Sydney',
        country: 'Australia',
        thingsToDo: 3421,
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&auto=format',
        description: 'Opera House and harbor views'
      },
      {
        id: 22,
        name: 'Auckland',
        country: 'New Zealand',
        thingsToDo: 1876,
        image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=400&h=300&fit=crop&auto=format',
        description: 'City of sails and volcanic landscapes'
      }
    ],
    Caribbean: [
      {
        id: 23,
        name: 'Havana',
        country: 'Cuba',
        thingsToDo: 987,
        image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=400&h=300&fit=crop&auto=format',
        description: 'Colonial architecture and classic cars'
      }
    ],
    'South America': [
      {
        id: 24,
        name: 'Rio de Janeiro',
        country: 'Brazil',
        thingsToDo: 2876,
        image: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=400&h=300&fit=crop&auto=format',
        description: 'Christ the Redeemer and Copacabana'
      },
      {
        id: 25,
        name: 'Buenos Aires',
        country: 'Argentina',
        thingsToDo: 2134,
        image: 'https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=400&h=300&fit=crop&auto=format',
        description: 'Tango capital and European charm'
      }
    ],
    'Central America': [
      {
        id: 26,
        name: 'Mexico City',
        country: 'Mexico',
        thingsToDo: 3456,
        image: 'https://images.unsplash.com/photo-1568402102990-bc541580b59f?w=400&h=300&fit=crop&auto=format',
        description: 'Aztec heritage and modern culture'
      }
    ]
  };

  useEffect(() => {
    setVisibleCards([]);
    const timer = setTimeout(() => {
      destinations[selectedContinent]?.forEach((_, index) => {
        setTimeout(() => {
          setVisibleCards(prev => [...prev, index]);
        }, index * 100);
      });
    }, 300);
    return () => clearTimeout(timer);
  }, [selectedContinent]);

  const currentDestinations = destinations[selectedContinent] || [];

  return (
    <div className="destinations-container">
      <div className="destinations-content">
        {/* Header */}
        <div className="header-section">
          <h1 className="main-title">
            Explore more destinations
          </h1>
          <p className="subtitle">
            Find things to do in cities around the world
          </p>
        </div>

        {/* Continent Navigation */}
        <div className="navigation-section">
          <div className="continent-buttons">
            {continents.map((continent) => (
              <button
                key={continent}
                onClick={() => setSelectedContinent(continent)}
                className={`continent-btn ${selectedContinent === continent ? 'active' : ''}`}
              >
                {continent}
              </button>
            ))}
          </div>
          {/* Active indicator line */}
          <div className="indicator-container">
            <div 
              className="indicator-line"
              style={{
                width: `${100 / continents.length}%`,
                left: `${(continents.indexOf(selectedContinent) * 100) / continents.length}%`
              }}
            />
          </div>
        </div>

        {/* Destinations Grid */}
        <div className="destinations-grid">
          {currentDestinations.map((destination, index) => (
            <div
              key={destination.id}
              className={`destination-card ${visibleCards.includes(index) ? 'visible' : ''}`}
              style={{
                transitionDelay: `${index * 50}ms`,
              }}
            >
              {/* Image Container */}
              <div className="image-container">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="destination-image"
                  loading="lazy"
                />
                {/* Gradient overlay */}
                <div className="image-overlay"></div>
                
                {/* City name and things to do - overlay on image */}
                <div className="image-content">
                  <h3 className="destination-name">{destination.name}</h3>
                  <p className="things-to-do">
                    {destination.thingsToDo.toLocaleString()} things to do
                  </p>
                </div>
                {/* Hover effect overlay */}
                <div className="hover-overlay"></div>
              </div>

              {/* Content below image */}
              <div className="card-content">
                <div className="card-header">
                  <span className="country-name">
                    {destination.country}
                  </span>
                  <div className="explore-badge">
                    <svg className="location-icon" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="explore-text">Explore</span>
                  </div>
                </div>
                
                <p className="description">
                  {destination.description}
                </p>
                
                {/* Action button */}
                <button className="action-button">
                  View Activities
                </button>
              </div>

              {/* Top right corner decoration */}
              <div className="corner-decoration"></div>
            </div>
          ))}
        </div>

        {/* No destinations message */}
        {currentDestinations.length === 0 && (
          <div className="no-destinations">
            <div className="empty-icon">🌍</div>
            <h3 className="empty-title">Coming Soon!</h3>
            <p className="empty-description">
              We're adding amazing destinations in {selectedContinent}. Check back soon!
            </p>
          </div>
        )}

        {/* Stats Footer */}
        <div className="stats-footer">
          <h2 className="stats-title">Ready to Explore?</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">
                {Object.values(destinations).flat().length}
              </div>
              <div className="stat-label">Cities Available</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">
                {Object.values(destinations).flat().reduce((sum, dest) => sum + dest.thingsToDo, 0).toLocaleString()}
              </div>
              <div className="stat-label">Total Activities</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{continents.length}</div>
              <div className="stat-label">Continents</div>
            </div>
          </div>
          <button className="cta-button">
            Start Your Journey
          </button>
        </div>
      </div>
    </div>
  );
};

export default DestinationsPage;
