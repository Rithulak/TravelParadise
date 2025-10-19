import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Calendar, Users, MapPin, Star, Wifi, Wind, Utensils, Phone,
  ChevronLeft, ChevronRight, Check, MessageCircle
} from 'lucide-react';

import './HouseboatDetail.css';

const DUMMY_DETAILS = {
  name: "Luxury Kerala Houseboat",
  location: "Alleppey, Kerala",
  rating: 4.8,
  reviews: 247,
  description: "Experience the serene backwaters of Kerala in this luxurious houseboat. Perfect for couples and families seeking a peaceful getaway with authentic Kerala hospitality and cuisine.",
  fullDescription: "Our premium houseboat offers an unforgettable journey through the enchanting backwaters of Alleppey. With spacious rooms, modern amenities, and traditional Kerala architecture, you'll enjoy comfort while being surrounded by nature's beauty. Our experienced crew ensures your safety and comfort throughout the journey.",
  features: [
    { icon: Wind, text: "AC & Non-AC Rooms" },
    { icon: Utensils, text: "All Meals Included" },
    { icon: Phone, text: "24/7 Support" },
    { icon: Wifi, text: "Free WiFi" },
    { icon: Star, text: "Lake View Deck" },
    { icon: Users, text: "Up to 6 Guests" }
  ],
  amenities: ["King Size Beds", "Private Bathroom", "Hot Water", "Life Jackets", "First Aid Kit", "Music System"],
  price: 7999,
  images: [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1444065381814-865dc9da92c0?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80"
  ],
  host: {
    name: "Rajesh Kumar",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80",
    verified: true,
    responseTime: "Within 1 hour"
  }
};

const HouseboatDetail = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(2);
  const [showAllAmenities, setShowAllAmenities] = useState(false);
    const { title } = useParams();
  const readableTitle = decodeURIComponent(title).replace(/-/g, ' ');


  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % DUMMY_DETAILS.images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + DUMMY_DETAILS.images.length) % DUMMY_DETAILS.images.length);
  };

  const calculateNights = () => {
    if (!checkIn || !checkOut) return 0;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const nights = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
    return nights > 0 ? nights : 0;
  };

  const nights = calculateNights();
  const totalPrice = nights * DUMMY_DETAILS.price;
  const serviceFee = Math.round(totalPrice * 0.1);
  const grandTotal = totalPrice + serviceFee;

  const handleBooking = () => {
    const message = `Hi, I want to book ${readableTitle}\n\nCheck-in: ${checkIn}\nCheck-out: ${checkOut}\nGuests: ${guests}\nTotal: ₹${grandTotal.toLocaleString('en-IN')}`;
    const whatsappUrl = `https://wa.me/919999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const canBook = checkIn && checkOut && nights > 0;

  return (
    <div className="houseboat-booking-container">
      <div className="houseboat-main-content">
        <div className="houseboat-grid-layout">
          {/* Left Column - Details */}
          <div className="houseboat-content-section">
            {/* Image Gallery */}
            <div className="houseboat-image-gallery">
              <img
                src={DUMMY_DETAILS.images[currentImage]}
                alt={`Houseboat view ${currentImage + 1}`}
                className="houseboat-gallery-image"
              />
              <button onClick={prevImage} className="houseboat-gallery-btn houseboat-gallery-btn-left">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button onClick={nextImage} className="houseboat-gallery-btn houseboat-gallery-btn-right">
                <ChevronRight className="w-5 h-5" />
              </button>
              <div className="houseboat-gallery-dots">
                {DUMMY_DETAILS.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImage(idx)}
                    className={`houseboat-gallery-dot ${idx === currentImage ? 'houseboat-gallery-dot-active' : ''}`}
                  />
                ))}
              </div>
              <div className="houseboat-gallery-counter">
                {currentImage + 1} / {DUMMY_DETAILS.images.length}
              </div>
            </div>

            {/* Title and Location */}
            <div className="houseboat-card">
              <h1 className="houseboat-card-title">{readableTitle}</h1>
              <div className="houseboat-location-row">
                <div className="houseboat-location-item">
                  <MapPin className="w-5 h-5 houseboat-icon" />
                  <span className="houseboat-location-text">{DUMMY_DETAILS.location}</span>
                </div>
                <div className="houseboat-rating-item">
                  <Star className="w-5 h-5 houseboat-rating-star" />
                  <span className="houseboat-rating-score">{DUMMY_DETAILS.rating.toFixed(1)}</span>
                  <span className="houseboat-rating-reviews">({DUMMY_DETAILS.reviews} reviews)</span>
                </div>
              </div>
            </div>

            {/* Host Info */}
            <div className="houseboat-card">
              <h2 className="houseboat-card-subtitle">Hosted by {DUMMY_DETAILS.host.name}</h2>
              <div className="houseboat-host-section">
                <img
                  src={DUMMY_DETAILS.host.image}
                  alt={DUMMY_DETAILS.host.name}
                  className="houseboat-host-image"
                />
                <div>
                  <div className="houseboat-host-verified">
                    <span style={{ fontWeight: 500 }}>{DUMMY_DETAILS.host.name}</span>
                    {DUMMY_DETAILS.host.verified && (
                      <span className="houseboat-verified-badge">
                        <Check className="w-4 h-4" /> Verified
                      </span>
                    )}
                  </div>
                  <p className="houseboat-response-time">Response time: {DUMMY_DETAILS.host.responseTime}</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="houseboat-card">
              <h2 className="houseboat-card-subtitle">About this houseboat</h2>
              <p className="houseboat-description-text">{DUMMY_DETAILS.description}</p>
              <p className="houseboat-description-text">{DUMMY_DETAILS.fullDescription}</p>
            </div>

            {/* Features */}
            <div className="houseboat-card">
              <h2 className="houseboat-card-subtitle">What this place offers</h2>
              <div className="houseboat-features-grid">
                {DUMMY_DETAILS.features.map((feature, idx) => {
                  const Icon = feature.icon;
                  return (
                    <div key={idx} className="houseboat-feature-item">
                      <Icon className="w-5 h-5 houseboat-icon" />
                      <span className="houseboat-feature-text">{feature.text}</span>
                    </div>
                  );
                })}
              </div>
              {!showAllAmenities && (
                <button onClick={() => setShowAllAmenities(true)} className="houseboat-show-more-btn">
                  Show all amenities
                </button>
              )}

              {showAllAmenities && (
                <div className="houseboat-amenities-grid">
                  <h3 className="houseboat-amenities-title">Additional Amenities</h3>
                  {DUMMY_DETAILS.amenities.map((amenity, idx) => (
                    <div key={idx} className="houseboat-amenity-item">
                      <Check className="w-4 h-4 houseboat-amenity-check" />
                      <span className="houseboat-amenity-text">{amenity}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Booking Card */}
          <div>
            <div className="houseboat-booking-card">
              <div className="houseboat-price-display">
                <span className="houseboat-price-amount">₹{DUMMY_DETAILS.price.toLocaleString('en-IN')}</span>
                <span className="houseboat-price-label">/ night</span>
              </div>

              {/* Date Selection */}
              <div>
                <div className="houseboat-form-group">
                  <label className="houseboat-form-label">
                    <Calendar className="w-4 h-4 houseboat-icon-inline" />
                    Check-in
                  </label>
                  <input
                    type="date"
                    value={checkIn}
                    onChange={e => setCheckIn(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="houseboat-form-input"
                  />
                </div>
                <div className="houseboat-form-group">
                  <label className="houseboat-form-label">
                    <Calendar className="w-4 h-4 houseboat-icon-inline" />
                    Check-out
                  </label>
                  <input
                    type="date"
                    value={checkOut}
                    onChange={e => setCheckOut(e.target.value)}
                    min={checkIn || new Date().toISOString().split('T')[0]}
                    className="houseboat-form-input"
                  />
                </div>
                <div className="houseboat-form-group">
                  <label className="houseboat-form-label">
                    <Users className="w-4 h-4 houseboat-icon-inline" />
                    Guests
                  </label>
                  <select
                    value={guests}
                    onChange={e => setGuests(Number(e.target.value))}
                    className="houseboat-form-input"
                  >
                    {[1, 2, 3, 4, 5, 6].map(num => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Price Breakdown */}
              {nights > 0 && (
                <div className="houseboat-price-breakdown">
                  <div className="houseboat-price-row">
                    <span>₹{DUMMY_DETAILS.price.toLocaleString('en-IN')} × {nights} {nights === 1 ? 'night' : 'nights'}</span>
                    <span>₹{totalPrice.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="houseboat-price-row">
                    <span>Service fee</span>
                    <span>₹{serviceFee.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="houseboat-price-total">
                    <span>Total</span>
                    <span>₹{grandTotal.toLocaleString('en-IN')}</span>
                  </div>
                </div>
              )}

              {/* Booking Button */}
              <button
                onClick={handleBooking}
                disabled={!canBook}
                className={`houseboat-book-btn ${canBook ? 'houseboat-book-btn-active' : 'houseboat-book-btn-disabled'}`}
              >
                <MessageCircle className="w-5 h-5" />
                Book on WhatsApp
              </button>
              <p className="houseboat-book-disclaimer">You won't be charged yet</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseboatDetail;
