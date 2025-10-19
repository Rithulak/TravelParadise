import React, { useState, useEffect } from 'react';
import './PopularDestinations.css';

const PopularDestinations = () => {
  const [selectedContinent, setSelectedContinent] = useState('North India');
  const [visibleCards, setVisibleCards] = useState([]);

  const continents = [
    'North India', 'South India', 'East & Northeast India', 'Central India'
  ];

  const destinations = {
    'North India': [
      {
        id: 1,
        name: 'Delhi',
        country: 'Delhi',
        thingsToDo: 5000,
        image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&q=80',
      },
      {
        id: 2,
        name: 'Jaipur',
        country: 'Rajasthan',
        thingsToDo: 2500,
        image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&q=80',
      },
      {
        id: 3,
        name: 'Agra',
        country: 'Uttar Pradesh',
        thingsToDo: 1500,
        image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80',
      },
      {
        id: 4,
        name: 'Varanasi',
        country: 'Uttar Pradesh',
        thingsToDo: 1200,
        image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&q=80',
      },
      {
        id: 5,
        name: 'Amritsar',
        country: 'Punjab',
        thingsToDo: 800,
        image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&q=80',
      },
      {
        id: 6,
        name: 'Manali',
        country: 'Himachal Pradesh',
        thingsToDo: 750,
        image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&q=80',
      },
      {
        id: 7,
        name: 'Leh',
        country: 'Ladakh',
        thingsToDo: 600,
        image: 'https://images.unsplash.com/photo-1600175781911-8b0c8b9139c6?auto=format&fit=crop&q=80',
      },
      {
        id: 8,
        name: 'Rishikesh',
        country: 'Uttarakhand',
        thingsToDo: 900,
        image: 'https://images.unsplash.com/photo-1594950346083-f36551b92015?auto=format&fit=crop&q=80',
      },
      {
        id: 9,
        name: 'Udaipur',
        country: 'Rajasthan',
        thingsToDo: 1800,
        image: 'https://images.unsplash.com/photo-1548011244-6b9579a32194?auto=format&fit=crop&q=80',
      },
      {
        id: 10,
        name: 'Shimla',
        country: 'Himachal Pradesh',
        thingsToDo: 700,
        image: 'https://images.unsplash.com/photo-1588691888279-d652f75a6435?auto=format&fit=crop&q=80',
      },
      {
        id: 11,
        name: 'Mussoorie',
        country: 'Uttarakhand',
        thingsToDo: 650,
        image: 'https://images.unsplash.com/photo-1610485098939-5a507a216e91?auto=format&fit=crop&q=80',
      },
      {
        id: 12,
        name: 'Srinagar',
        country: 'Jammu & Kashmir',
        thingsToDo: 1100,
        image: 'https://images.unsplash.com/photo-1578500282126-d6210f9b0c79?auto=format&fit=crop&q=80',
      },
      {
        id: 13,
        name: 'Jaisalmer',
        country: 'Rajasthan',
        thingsToDo: 1300,
        image: 'https://images.unsplash.com/photo-1582234057635-f09b2ac91129?auto=format&fit=crop&q=80',
      },
      {
        id: 14,
        name: 'Nainital',
        country: 'Uttarakhand',
        thingsToDo: 550,
        image: 'https://images.unsplash.com/photo-1626245842813-f938d6174148?auto=format&fit=crop&q=80',
      },
      {
        id: 15,
        name: 'Vrindavan',
        country: 'Uttar Pradesh',
        thingsToDo: 900,
        image: 'https://images.unsplash.com/photo-1606992520379-67258079a029?auto=format&fit=crop&q=80',
      },
      {
        id: 16,
        name: 'Haridwar',
        country: 'Uttarakhand',
        thingsToDo: 850,
        image: 'https://images.unsplash.com/photo-1596700813946-b07248f76632?auto=format&fit=crop&q=80',
      },
    ],
    'South India': [
      {
        id: 17,
        name: 'Mumbai',
        country: 'Maharashtra',
        thingsToDo: 4000,
        image: 'https://images.unsplash.com/photo-1524498250077-390f9e378fc0?auto=format&fit=crop&q=80',
      },
      {
        id: 18,
        name: 'Bengaluru',
        country: 'Karnataka',
        thingsToDo: 3200,
        image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&q=80',
      },
      {
        id: 19,
        name: 'Goa',
        country: 'Goa',
        thingsToDo: 2800,
        image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&q=80',
      },
      {
        id: 20,
        name: 'Kerala',
        country: 'Kerala',
        thingsToDo: 2500,
        image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80',
      },
      {
        id: 21,
        name: 'Hyderabad',
        country: 'Telangana',
        thingsToDo: 2000,
        image: 'https://images.unsplash.com/photo-1598701448506-6a85f21ab236?auto=format&fit=crop&q=80',
      },
      {
        id: 22,
        name: 'Chennai',
        country: 'Tamil Nadu',
        thingsToDo: 1900,
        image: 'https://images.unsplash.com/photo-1582510003544-4d00fb3d6c54?auto=format&fit=crop&q=80',
      },
      {
        id: 23,
        name: 'Kochi',
        country: 'Kerala',
        thingsToDo: 1500,
        image: 'https://images.unsplash.com/photo-1614561076934-2e987c14a93f?auto=format&fit=crop&q=80',
      },
      {
        id: 24,
        name: 'Mysuru',
        country: 'Karnataka',
        thingsToDo: 1400,
        image: 'https://images.unsplash.com/photo-1589255502120-21d7b14d2e7b?auto=format&fit=crop&q=80',
      },
      {
        id: 25,
        name: 'Madurai',
        country: 'Tamil Nadu',
        thingsToDo: 1000,
        image: 'https://images.unsplash.com/photo-1601004128509-0d173d126622?auto=format&fit=crop&q=80',
      },
      {
        id: 26,
        name: 'Alleppey',
        country: 'Kerala',
        thingsToDo: 950,
        image: 'https://images.unsplash.com/photo-1563853177726-5b7410321c17?auto=format&fit=crop&q=80',
      },
      {
        id: 27,
        name: 'Ooty',
        country: 'Tamil Nadu',
        thingsToDo: 800,
        image: 'https://images.unsplash.com/photo-1617300329068-d05545f4ac1f?auto=format&fit=crop&q=80',
      },
      {
        id: 28,
        name: 'Coorg',
        country: 'Karnataka',
        thingsToDo: 750,
        image: 'https://images.unsplash.com/photo-1627918451842-8c9e50334812?auto=format&fit=crop&q=80',
      },
      {
        id: 29,
        name: 'Hampi',
        country: 'Karnataka',
        thingsToDo: 600,
        image: 'https://images.unsplash.com/photo-1631566897258-00a7b45155f4?auto=format&fit=crop&q=80',
      },
      {
        id: 30,
        name: 'Pondicherry',
        country: 'Puducherry',
        thingsToDo: 1200,
        image: 'https://images.unsplash.com/photo-1589148784131-482260f8903c?auto=format&fit=crop&q=80',
      },
      {
        id: 31,
        name: 'Visakhapatnam',
        country: 'Andhra Pradesh',
        thingsToDo: 1100,
        image: 'https://images.unsplash.com/photo-1618296213702-8a9d0263690d?auto=format&fit=crop&q=80',
      },
      {
        id: 32,
        name: 'Tirupati',
        country: 'Andhra Pradesh',
        thingsToDo: 900,
        image: 'https://images.unsplash.com/photo-1567154215714-23916960c18d?auto=format&fit=crop&q=80',
      },
    ],
    'East & Northeast India': [
      {
        id: 33,
        name: 'Kolkata',
        country: 'West Bengal',
        thingsToDo: 1800,
        image: 'https://images.unsplash.com/photo-1579471166543-0468bf414002?auto=format&fit=crop&q=80',
      },
      {
        id: 34,
        name: 'Gangtok',
        country: 'Sikkim',
        thingsToDo: 700,
        image: 'https://images.unsplash.com/photo-1598961789461-84999dc85e95?auto=format&fit=crop&q=80',
      },
      {
        id: 35,
        name: 'Shillong',
        country: 'Meghalaya',
        thingsToDo: 600,
        image: 'https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?auto=format&fit=crop&q=80',
      },
      {
        id: 36,
        name: 'Darjeeling',
        country: 'West Bengal',
        thingsToDo: 850,
        image: 'https://images.unsplash.com/photo-1571708894101-70586e30b623?auto=format&fit=crop&q=80',
      },
      {
        id: 37,
        name: 'Puri',
        country: 'Odisha',
        thingsToDo: 600,
        image: 'https://images.unsplash.com/photo-1627918556753-33230a6c22c0?auto=format&fit=crop&q=80',
      },
      {
        id: 38,
        name: 'Guwahati',
        country: 'Assam',
        thingsToDo: 1000,
        image: 'https://images.unsplash.com/photo-1562694964-1e0e8e69c735?auto=format&fit=crop&q=80',
      },
      {
        id: 39,
        name: 'Kohima',
        country: 'Nagaland',
        thingsToDo: 400,
        image: 'https://images.unsplash.com/photo-1626084050186-b45209386d70?auto=format&fit=crop&q=80',
      },
      {
        id: 40,
        name: 'Itanagar',
        country: 'Arunachal Pradesh',
        thingsToDo: 280,
        image: 'https://images.unsplash.com/photo-1625914109156-8a03f44c4b7b?auto=format&fit=crop&q=80',
      },
      {
        id: 41,
        name: 'Bhubaneswar',
        country: 'Odisha',
        thingsToDo: 1300,
        image: 'https://images.unsplash.com/photo-1617631835773-a60d815779c1?auto=format&fit=crop&q=80',
      },
      {
        id: 42,
        name: 'Port Blair',
        country: 'Andaman & Nicobar Islands',
        thingsToDo: 750,
        image: 'https://images.unsplash.com/photo-1588691888279-d652f75a6435?auto=format&fit=crop&q=80',
      },
      {
        id: 43,
        name: 'Pelling',
        country: 'Sikkim',
        thingsToDo: 450,
        image: 'https://images.unsplash.com/photo-1606992520379-67258079a029?auto=format&fit=crop&q=80',
      },
      {
        id: 44,
        name: 'Tawang',
        country: 'Arunachal Pradesh',
        thingsToDo: 350,
        image: 'https://images.unsplash.com/photo-1624899532587-8e68444a11f2?auto=format&fit=crop&q=80',
      },
      {
        id: 45,
        name: 'Cherrapunji',
        country: 'Meghalaya',
        thingsToDo: 480,
        image: 'https://images.unsplash.com/photo-1622312684803-1c3248386a34?auto=format&fit=crop&q=80',
      },
      {
        id: 46,
        name: 'Imphal',
        country: 'Manipur',
        thingsToDo: 300,
        image: 'https://images.unsplash.com/photo-1614917424699-231a4773c3b0?auto=format&fit=crop&q=80',
      },
      {
        id: 47,
        name: 'Aizawl',
        country: 'Mizoram',
        thingsToDo: 250,
        image: 'https://images.unsplash.com/photo-1620242270912-8e7c10b7138a?auto=format&fit=crop&q=80',
      },
      {
        id: 48,
        name: 'Agartala',
        country: 'Tripura',
        thingsToDo: 200,
        image: 'https://images.unsplash.com/photo-1618012469446-243640b3c675?auto=format&fit=crop&q=80',
      },
    ],
    'Central India': [
      {
        id: 49,
        name: 'Khajuraho',
        country: 'Madhya Pradesh',
        thingsToDo: 450,
        image: 'https://images.unsplash.com/photo-1588032786045-59cefda005c0?auto=format&fit=crop&q=80',
      },
      {
        id: 50,
        name: 'Bhopal',
        country: 'Madhya Pradesh',
        thingsToDo: 800,
        image: 'https://images.unsplash.com/photo-1605333190861-1c30e4619a86?auto=format&fit=crop&q=80',
      },
      {
        id: 51,
        name: 'Gwalior',
        country: 'Madhya Pradesh',
        thingsToDo: 650,
        image: 'https://images.unsplash.com/photo-1605557769588-e9f05a964a2f?auto=format&fit=crop&q=80',
      },
      {
        id: 52,
        name: 'Indore',
        country: 'Madhya Pradesh',
        thingsToDo: 1200,
        image: 'https://images.unsplash.com/photo-1622204990924-4d24f0c608f7?auto=format&fit=crop&q=80',
      },
      {
        id: 53,
        name: 'Orchha',
        country: 'Madhya Pradesh',
        thingsToDo: 500,
        image: 'https://images.unsplash.com/photo-1589255502120-21d7b14d2e7b?auto=format&fit=crop&q=80',
      },
      {
        id: 54,
        name: 'Ujjain',
        country: 'Madhya Pradesh',
        thingsToDo: 700,
        image: 'https://images.unsplash.com/photo-1621257929496-5f10257002b6?auto=format&fit=crop&q=80',
      },
      {
        id: 55,
        name: 'Ranchi',
        country: 'Jharkhand',
        thingsToDo: 900,
        image: 'https://images.unsplash.com/photo-1614561076934-2e987c14a93f?auto=format&fit=crop&q=80',
      },
      {
        id: 56,
        name: 'Daman',
        country: 'Daman and Diu',
        thingsToDo: 350,
        image: 'https://images.unsplash.com/photo-1605333190861-1c30e4619a86?auto=format&fit=crop&q=80',
      },
      {
        id: 57,
        name: 'Silvassa',
        country: 'Dadra and Nagar Haveli',
        thingsToDo: 200,
        image: 'https://images.unsplash.com/photo-1607590209748-0c33a2007f35?auto=format&fit=crop&q=80',
      },
      {
        id: 58,
        name: 'Nagpur',
        country: 'Maharashtra',
        thingsToDo: 1100,
        image: 'https://images.unsplash.com/photo-1605557769588-e9f05a964a2f?auto=format&fit=crop&q=80',
      },
      {
        id: 59,
        name: 'Raipur',
        country: 'Chhattisgarh',
        thingsToDo: 850,
        image: 'https://images.unsplash.com/photo-1617631835773-a60d815779c1?auto=format&fit=crop&q=80',
      },
      {
        id: 60,
        name: 'Jabalpur',
        country: 'Madhya Pradesh',
        thingsToDo: 750,
        image: 'https://images.unsplash.com/photo-1589148784131-482260f8903c?auto=format&fit=crop&q=80',
      },
      {
        id: 61,
        name: 'Pachmarhi',
        country: 'Madhya Pradesh',
        thingsToDo: 400,
        image: 'https://images.unsplash.com/photo-1627918451842-8c9e50334812?auto=format&fit=crop&q=80',
      },
      {
        id: 62,
        name: 'Amarkantak',
        country: 'Madhya Pradesh',
        thingsToDo: 300,
        image: 'https://images.unsplash.com/photo-1626245842813-f938d6174148?auto=format&fit=crop&q=80',
      },
      {
        id: 63,
        name: 'Chitrakoot',
        country: 'Madhya Pradesh',
        thingsToDo: 550,
        image: 'https://images.unsplash.com/photo-1606992520379-67258079a029?auto=format&fit=crop&q=80',
      },
      {
        id: 64,
        name: 'Bhimbetka',
        country: 'Madhya Pradesh',
        thingsToDo: 250,
        image: 'https://images.unsplash.com/photo-1598961789461-84999dc85e95?auto=format&fit=crop&q=80',
      },
    ],
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
            Explore more destinations in India
          </h1>
          <p className="subtitle">
            Find things to do in cities across different states
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
          {/* Active indicator line - Hidden by CSS for a cleaner look */}
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
              </div>
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
      </div>
    </div>
  );
};

export default PopularDestinations;