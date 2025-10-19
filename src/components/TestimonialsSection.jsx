// src/components/TestimonialsSection.jsx
import React, { useState } from 'react';
import './TestimonialsSection.css';

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
const testimonials = [
  {
    name: 'Sarah Johnson',
    location: 'New York, USA',
    rating: 5,
    text: 'Absolutely amazing experience! The team at Tourism Paradise planned our honeymoon perfectly. Every detail was taken care of, and we had the most romantic trip to the backwaters of Kerala.',
    image: '👩‍🦰',
    trip: 'Kerala Backwaters Honeymoon' // Changed destination
  },
  {
    name: 'Michael Chen',
    location: 'Toronto, Canada',
    rating: 5,
    text: 'Professional service and incredible attention to detail. Our family trip to Kerala was flawless thanks to their expert planning and local knowledge of the region, including the beaches and hill stations.', // Changed destination and added Kerala context
    image: '👨‍💼',
    trip: 'Kerala Family Adventure' // Changed destination
  },
  {
    name: 'Emily Rodriguez',
    location: 'Barcelona, Spain',
    rating: 5,
    text: 'I travel frequently for work, but this leisure trip organized by Tourism Paradise was exceptional. The personalized itinerary and support for my Ayurveda retreat in Kerala made it stress-free.', // Changed destination and added Kerala context
    image: '👩‍💻',
    trip: 'Kerala Solo Retreat' // Changed destination
  }
  ];

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">What Our Travelers Say</h2>
          <p className="section-subtitle">
            Real experiences from thousands of satisfied customers
          </p>
        </div>
        
        <div className="testimonials-container">
          <div className="testimonial-card">
            <div className="testimonial-content">
              <div className="quote-icon">"</div>
              <p className="testimonial-text">
                {testimonials[activeTestimonial].text}
              </p>
              <div className="rating">
                {'★'.repeat(testimonials[activeTestimonial].rating)}
              </div>
            </div>
            
            <div className="testimonial-author">
              <div className="author-avatar">
                {testimonials[activeTestimonial].image}
              </div>
              <div className="author-info">
                <h4 className="author-name">{testimonials[activeTestimonial].name}</h4>
                <p className="author-location">{testimonials[activeTestimonial].location}</p>
                <p className="trip-type">{testimonials[activeTestimonial].trip}</p>
              </div>
            </div>
          </div>
          
          <div className="testimonial-indicators">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === activeTestimonial ? 'active' : ''}`}
                onClick={() => setActiveTestimonial(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
