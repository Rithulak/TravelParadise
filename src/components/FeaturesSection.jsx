// src/components/FeaturesSection.jsx
import React from 'react';
import './FeaturesSection.css';

const FeaturesSection = () => {
  const features = [
    {
      icon: '🌍',
      title: 'Best Destinations',
      description: 'Handpicked locations from around the globe, carefully selected for unforgettable experiences.',
    },
    {
      icon: '🔒',
      title: 'Secure Booking',
      description: 'Your bookings are protected with advanced security measures and comprehensive travel insurance.',
    },
    {
      icon: '📞',
      title: '24/7 Support',
      description: 'Round-the-clock customer support to assist you before, during, and after your travels.',
    },
    {
      icon: '💳',
      title: 'Best Prices',
      description: 'Competitive pricing with exclusive deals and flexible payment options for your convenience.',
    }
  ];

  return (
    <section className="features-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Why Choose Tourism Paradise</h2>
          <p className="section-subtitle">
            We make travel planning effortless with our comprehensive services and expert guidance
          </p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
