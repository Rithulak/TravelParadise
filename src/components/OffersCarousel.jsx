import React, { useEffect, useState } from 'react';
import './OffersCarousel.css';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const dummyOffers = [
  {
    id: 1,
    title: 'Luxury Alleppey Houseboat Stay',
    imagePath: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 2,
    title: 'Budget Munnar Resort Escape',
    imagePath: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 3,
    title: 'Cochin Heritage Hotel Offer',
    imagePath: 'https://images.unsplash.com/photo-1505691723518-41cb85eea23a?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 4,
    title: 'Kumarakom Lake View Discount',
    imagePath: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 5,
    title: 'Kottayam Family Package',
    imagePath: 'https://images.unsplash.com/photo-1465101178521-c8c77a56a5a6?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 6,
    title: 'Chottanikara Temple Tour Offer',
    imagePath: 'https://images.unsplash.com/photo-1468339710584-313c5dc2c3c7?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 7,
    title: 'Thiruvananthapuram Luxury Package',
    imagePath: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 8,
    title: 'Kovalam Beach Getaway',
    imagePath: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 9,
    title: 'Thekkady Nature Retreat Deal',
    imagePath: 'https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 10,
    title: 'Wayanad Jungle Adventure',
    imagePath: 'https://images.unsplash.com/photo-1468637344921-9aa01041d321?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 11,
    title: 'Guruvayur Temple Experience',
    imagePath: 'https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 12,
    title: 'Vagamon Hills Trekking',
    imagePath: 'https://images.unsplash.com/photo-1444065381814-865dc9da92c0?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 13,
    title: 'Athirapilly Waterfalls Day Trip',
    imagePath: 'https://images.unsplash.com/photo-1465101162946-4377e57745c3?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 14,
    title: 'Marari Beachside Resort Deal',
    imagePath: 'https://images.unsplash.com/photo-1424746219973-8fe3bd07d8e1?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 15,
    title: 'Poovar Beach Holiday Offer',
    imagePath: 'https://images.unsplash.com/photo-1454982523318-4b6396f39d3a?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 16,
    title: 'Varkala Cliff Stay',
    imagePath: 'https://images.unsplash.com/photo-1454789476662-5597e4215a13?auto=format&fit=crop&w=600&q=80',
  },
];

const OffersGrid = () => {
  const [offers, setOffers] = useState(dummyOffers);
  const navigate = useNavigate();
  

  // useEffect(() => {
  //   axios.get('http://localhost:8080/TourismParadise/home')
  //     .then(response => {
  //       const data = response.data; 
  //       if (data && Array.isArray(data.offers)) {
  //         setOffers(data.offers);
  //       } else {
  //         console.warn("Offers data not found in response:", data);
  //         setOffers([]); // Prevent rendering crash
  //       }
  //     })
  //     .catch(error => {
  //       console.error("Error fetching offers:", error);
  //     });
  // }, []);
  const handleCardClick = (offer) => {
    // Create a slug for the URL from title
    const slug = offer.title.toLowerCase().replace(/\s+/g, '-');
    // Navigate to DestinationFeed route with slug param and pass offer data in state
    navigate(`/destinationfeed`, { state: { offer } });
  };

  return (
    <section className="offers-grid-section">
      <h2 className="section-title">Budget Travel Deals For You</h2>
      <div className="grid-container">
        {offers.map((item) => (
          <div
            key={item.id}
            className="grid-card"
            onClick={() => handleCardClick(item)}
            style={{ cursor: 'pointer' }}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => { if (e.key === 'Enter') handleCardClick(item); }}
          >
            <img 
              src={item.imagePath}//{`http://localhost:8080/TourismParadise/image/${item.imagePath}`} 
              alt={item.title} 
              className="card-image" 
            />
            <div className="card-overlay">
              <h3 className="card-title-offer">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OffersGrid;
