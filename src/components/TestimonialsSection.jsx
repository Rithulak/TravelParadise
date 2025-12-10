// src/components/TestimonialsSection.jsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './TestimonialsSection.css';

const TestimonialsSection = () => {
  const { t } = useTranslation('testimonials'); // use testimonials namespace
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Each testimonial now references translation keys and includes fallback text via defaultValue
  const testimonials = [
    {
      nameKey: 'person1.name',
      locationKey: 'person1.location',
      rating: 5,
      textKey: 'person1.text',
      image: '👩‍🦰',
      tripKey: 'person1.trip',
      // fallback values are used as defaultValue when calling t()
      fallback: {
        name: 'Sarah Johnson',
        location: 'New York, USA',
        text:
          'Absolutely amazing experience! The team at Tourism Paradise planned our honeymoon perfectly. Every detail was taken care of, and we had the most romantic trip to the backwaters of Kerala.',
        trip: 'Kerala Backwaters Honeymoon'
      }
    },
    {
      nameKey: 'person2.name',
      locationKey: 'person2.location',
      rating: 5,
      textKey: 'person2.text',
      image: '👨‍💼',
      tripKey: 'person2.trip',
      fallback: {
        name: 'Michael Chen',
        location: 'Toronto, Canada',
        text:
          'Professional service and incredible attention to detail. Our family trip to Kerala was flawless thanks to their expert planning and local knowledge of the region, including the beaches and hill stations.',
        trip: 'Kerala Family Adventure'
      }
    },
    {
      nameKey: 'person3.name',
      locationKey: 'person3.location',
      rating: 5,
      textKey: 'person3.text',
      image: '👩‍💻',
      tripKey: 'person3.trip',
      fallback: {
        name: 'Emily Rodriguez',
        location: 'Barcelona, Spain',
        text:
          'I travel frequently for work, but this leisure trip organized by Tourism Paradise was exceptional. The personalized itinerary and support for my Ayurveda retreat in Kerala made it stress-free.',
        trip: 'Kerala Solo Retreat'
      }
    }
  ];

  // UI strings also localized
  const sectionTitle = t('sectionTitle', 'What Our Travelers Say');
  const sectionSubtitle = t(
    'sectionSubtitle',
    'Real experiences from thousands of satisfied customers'
  );
  const quoteOpen = t('quoteOpen', '"');

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{sectionTitle}</h2>
          <p className="section-subtitle">{sectionSubtitle}</p>
        </div>

        <div className="testimonials-container">
          <div className="testimonial-card">
            <div className="testimonial-content">
              <div className="quote-icon">{quoteOpen}</div>

              <p className="testimonial-text">
                {t(testimonials[activeTestimonial].textKey, {
                  defaultValue: testimonials[activeTestimonial].fallback.text
                })}
              </p>

              <div className="rating">
                {Array.from(
                  { length: testimonials[activeTestimonial].rating },
                  (_, i) => '★'
                ).join('')}
              </div>
            </div>

            <div className="testimonial-author">
              <div className="author-avatar">
                {testimonials[activeTestimonial].image}
              </div>
              <div className="author-info">
                <h4 className="author-name">
                  {t(testimonials[activeTestimonial].nameKey, {
                    defaultValue: testimonials[activeTestimonial].fallback.name
                  })}
                </h4>
                <p className="author-location">
                  {t(testimonials[activeTestimonial].locationKey, {
                    defaultValue: testimonials[activeTestimonial].fallback.location
                  })}
                </p>
                <p className="trip-type">
                  {t(testimonials[activeTestimonial].tripKey, {
                    defaultValue: testimonials[activeTestimonial].fallback.trip
                  })}
                </p>
              </div>
            </div>
          </div>

          <div className="testimonial-indicators">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === activeTestimonial ? 'active' : ''}`}
                onClick={() => setActiveTestimonial(index)}
                aria-label={t('indicatorAria', 'Show testimonial {{index}}', {
                  index: index + 1
                })}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
