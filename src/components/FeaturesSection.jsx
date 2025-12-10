// src/components/FeaturesSection.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './FeaturesSection.css';

const FeaturesSection = () => {
  const navigate = useNavigate();
  const [expandedCard, setExpandedCard] = useState(null);
  const { t } = useTranslation(['featureList', 'translation']);

  const features = [
    {
      icon: '🙏',
      titleKey: 'pilgrimPackages',
      descriptionKey: 'pilgrimDescription',
    },
    {
      icon: '🏭',
      titleKey: 'industrialTitle',
      shortDescriptionKey: 'industrialShortDesc',
      fullDescriptionKey: 'industrialFullDesc',
    },
    {
      icon: '🎓',
      titleKey: 'educationTitle',
      descriptionKey: 'educationDescription',
    },
    {
      icon: '⚖️',
      titleKey: 'legalTitle',
      descriptionKey: 'legalDescription',
    }
  ];

  const handleCardClick = (feature, e) => {
    // Prevent navigation when clicking the 'Show More' button
    if (e.target.closest('button')) {
      return;
    }
    // Navigate to destination feed with the feature title as the selected offer
    navigate('/destinationfeed', { state: { selectedOffer: { title: t(feature.titleKey, { ns: 'featureList' }) } } });
  };

  return (
    <section className="features-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t('whyChooseTitle', { ns: 'translation' })}</h2>
          <p className="section-subtitle">
            {t('whyChooseSubtitle', { ns: 'translation' })}
          </p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`feature-card ${feature.shortDescriptionKey && expandedCard === index ? 'expanded' : ''}`}
              onClick={(e) => handleCardClick(feature, e)}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => { if (e.key === 'Enter') handleCardClick(feature, e); }}>
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{t(feature.titleKey, { ns: 'featureList' })}</h3>
              {feature.shortDescriptionKey ? (
                <div>
                  <p className="feature-description">
                    {expandedCard === index ? t(feature.fullDescriptionKey, { ns: 'featureList' }) : t(feature.shortDescriptionKey, { ns: 'featureList' })}
                  </p>
                  <button onClick={(e) => {
                    e.stopPropagation();
                    setExpandedCard(expandedCard === index ? null : index);
                  }} className="show-more-btn">
                    {expandedCard === index ? t('showLess', { ns: 'translation' }) : t('showMore', { ns: 'translation' })}
                  </button>
                </div>
              ) : (
                <p className="feature-description">{t(feature.descriptionKey, { ns: 'featureList' })}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
