import React, { useEffect, useState } from 'react';
import './OffersCarousel.css';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const dummyOffers = [
  {
    id: 1,
    title: "Hotels",
    price: 12999,
    imagePath: "/Travel_image/Hotel.jpg",
  },
  {
    id: 2,
    title: "Houseboats in Alleppey day and night cruise",
    price: 7999,
    imagePath: "/Travel_image/Houseboats in Alleppey day and night cruise.jpeg",
  },
  {
    id: 3,
    title: "Houseboats in Alleppey day and night 1 bedroom",
    price: 15999,
    imagePath: "/Travel_image/Houseboats in Alleppey day and night 1 bedroom.jpg",
  },
  {
    id: 4,
    title: "Houseboats in Alappuzha day cruise 1 bedroom upper deck private",
    price: 299,
    imagePath: "/Travel_image/Houseboats in Allapuzha day cruise 1 bedroom upper deck private.jpg",
  },
  {
    id: 5,
    title: "Kerala honeymoon houseboat",
    price: 4999,
    imagePath: "/Travel_image/Kerala honeymoon houseboat.png",
  },
  {
    id: 6,
    title: "Houseboat in Alleppey day and night 1 bedroom upper deck private houseboat",
    price: 18999,
    imagePath: "/Travel_image/Houseboats in Allapuzha day cruise 1 bedroom upper deck private.jpg",
  },
  {
    id: 7,
    title: "Houseboats in Alleppey day and night 1 bedroom upper deck private houseboat",
    price: 2999,
    imagePath: "/Travel_image/Houseboat in Alleppey day and night 1 bedroom upper deck private houseboat.jpg",
  },
  {
    id: 8,
    title: "Houseboats in Alleppey day trip upper deck houseboat",
    price: 3499,
    imagePath: "/Travel_image/Houseboats in Alleppey day trip upper deck houseboat.jpg",
  },
  {
    id: 9,
    title: "Houseboats in Alleppey b2b price for 1 bedroom",
    price: 8999,
    imagePath: "/Travel_image/Houseboats in Alleppey b2b price for 1 bedroom.jpg",
  },
  {
    id: 10,
    title: "Sharing houseboats in Alleppey 2 people price",
    price: 6999,
    imagePath: "/Travel_image/Sharing houseboats in Alleppey 2 people price.jpg",
  },
  {
    id: 11,
    title: "Ultra premium houseboats in Alleppey",
    price: 1299,
    imagePath: "/Travel_image/Ultra premium houseboats in Alleppey.jpg",
  },
  {
    id: 12,
    title: "Kerala tour budget packages",
    price: 11999,
    imagePath: "/Travel_image/Kerala tour budget packages.jpg",
  },
  {
    id: 13,
    title: "Kerala Boating",
    price: 1999,
    imagePath: "/Travel_image/Kerala Boating.jpg",
  },
  {
    id: 14,
    title: "B2B price travel deals for - kerala house boat packages",
    price: 2499,
    imagePath: "/Travel_image/B2B price travel deals for - kerala house boat packages.jpg",
  },
  {
    id: 15,
    title: "Petals flower's",
    price: 899,
    imagePath: "/Travel_image/Petals flower's.jpg",
  },
  {
    id: 16,
    title: "Orchid for sale - orchid flowering plants",
    price: 699,
    imagePath: "/Travel_image/Orchid flowering plants.jpg",
  },
  {
    id: 17,
    title: "Oxidised Ornaments",
    price: 1499,
    imagePath: "/Travel_image/Oxidised Ornaments.jpg",
  },
  {
    id: 18,
    title: "Kerala Handlooms - kerala kasavu sarees",
    price: 5499,
    imagePath: "/Travel_image/Kerala Handlooms - kerala kasavu sarees.jpg",
  },
  {
    id: 19,
    title: "Kerala handicrafts",
    price: 3999,
    imagePath: "/Travel_image/Kerala handicrafts.jpg",
  },
  {
    id: 20,
    title: "kerala chips - kerala banana chips",
    price: 2299,
    imagePath: "/Travel_image/Food order online - kerala banana chips.jpg",
  },
  {
    id: 21,
    title: "Kerala Spices",
    price: 650,
    imagePath: "https://tse4.mm.bing.net/th/id/OIP.h8g8FW499Ga90twq5xa2RwHaDt?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 22,
    title: "Dried fish",
    price: 589,
    imagePath: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=800",
  },
  {
    id: 23,
    title: "Kerala Real Estate",
    price: 269000000,
    imagePath: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800",
  },
  {
    id: 24,
    title: "Kerala lottery tickets - kerala bumper lottery tickets",
    price: 50,
    imagePath: "https://tse1.mm.bing.net/th/id/OIP.aBgXwEuvoH4I5v2oZbsEgAHaEK?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 25,
    title: "Kerala Home Decor",
    price: 2500,
    imagePath: "Travel_image/kerala_home_decor.jpg",
  },
  {
    id: 26,
    title: "Transportation in Kerala",
    price: 2500,
    imagePath: "Travel_image/Transportation in Kerala.jpg",
  },
  {
    id: 27,
    title: "Kerala Coir Products",
    price: 2500,
    imagePath: "Travel_image/choir.jpg",
  },
  {
    id: 28,
    title: "Food Order Online",
    price: 2500,
    imagePath: "Travel_image/Food.jpg",
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
  // Navigate to OffersFeed (DestinationFeed)
  navigate('/destinationfeed', { state: { selectedOffer: offer } });
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
            <div className="card-image-container">
              <img 
                src={item.imagePath}
                alt={item.title} 
                className="card-image" 
              />
              <div className="card-price-tag">
                ₹{item.price.toLocaleString('en-IN')}
              </div>
            </div>
            <div className="card-content-below">
              <h3 className="card-title-below">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OffersGrid;