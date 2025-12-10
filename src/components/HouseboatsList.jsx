import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './HouseboatsList.css';


const dummyHouseboats = [
  { id: 1, titleKey: 'houseboatsHotelsInAlleppeyAlappuzhaKerala' },
  { id: 2, titleKey: 'houseboatsHotelsInMunnar' },
  { id: 3, titleKey: 'houseboatsHotelsInCochin' },
  { id: 4, titleKey: 'houseboatsHotelsInKumarakomLake' },
  { id: 5, titleKey: 'houseboatsHotelsInKottayam' },
  { id: 6, titleKey: 'houseboatsHotelsInAlleppey' },
  { id: 7, titleKey: 'houseboatsHotelsInChottanikara' },
  { id: 8, titleKey: 'houseboatsHotelsInThiruvananthapuram' },
  { id: 9, titleKey: 'houseboatsHotelsInKovalamBeach' },
  { id: 10, titleKey: 'houseboatsHotelsInThekkady' },
  { id: 11, titleKey: 'houseboatsHotelsInWayanad' },
  { id: 12, titleKey: 'houseboatsHotelsInAlappuzha' },
  { id: 13, titleKey: 'houseboatsHotelsInGuruvayur' },
  { id: 14, titleKey: 'houseboatsHotelsInVagamon' },
  { id: 15, titleKey: 'houseboatsHotelsInAthirapillyWaterFalls' },
  { id: 16, titleKey: 'houseboatsHotelsInMarariBeach' },
  { id: 17, titleKey: 'houseboatsHotelsInPoovarBeach' },
  { id: 18, titleKey: 'houseboatsHotelsInVarkalaBeach' },
  { id: 19, titleKey: 'houseboatsHotelsInAshtamudiLake' },
  { id: 20, titleKey: 'houseboatsHotelsInKanyakumariBeach' },
  { id: 21, titleKey: 'houseboatsHotelsInAlleppeyBeach' },
  { id: 22, titleKey: 'houseboatsHotelsInAlappuzhaLake' },
  { id: 23, titleKey: 'houseboatsHotelsInIndia' },
  { id: 24, titleKey: 'houseboatsHotelsInKerala' },
  { id: 25, titleKey: 'houseBoatHotelsInAlleppey' },
  { id: 26, titleKey: 'boatHouseHotelsInIndia' },
  { id: 27, titleKey: 'boatHouseHotelsInKerala' },
  { id: 28, titleKey: 'sharingHouseboatsHotelsInAlleppey' },
  { id: 29, titleKey: 'sharingBoatHouseHotelsInKerala' },
  { id: 30, titleKey: 'dayTripHouseboatsHotelsInAlleppey' },
  { id: 31, titleKey: 'dayCruiseHouseboatsHotelsInAlleppey' },
  { id: 32, titleKey: 'sharingHouseboatsHotelsInAlleppey' },
  { id: 33, titleKey: 'fiveStarHouseboatsHotelsInAlleppey' },
  { id: 34, titleKey: 'fourStarHouseboatsHotelsInAlleppey' },
  { id: 35, titleKey: 'threeStarHouseboatsHotelsInAlleppey' },
  { id: 36, titleKey: 'twoStarHouseboatsHotelsInAlleppey' },
  { id: 37, titleKey: 'budgetHouseboatsHotelsInAlleppey' },
  { id: 38, titleKey: 'standardBoatHouseHotelsInAlleppey' },
];

const HouseboatsList = () => {
  const [houseboats, setHouseboats] = useState(dummyHouseboats);
  const [searchTerm, setSearchTerm] = useState('');
  const { t } = useTranslation(['houseboatList', 'translation']);
   const navigate = useNavigate();


  // Fetch houseboats from backend
  // useEffect(() => {
  //   axios.get('http://localhost:8080/TourismParadise/home')
  //     .then(response => {
  //       if (response.data && Array.isArray(response.data.houseboats)) {
  //         setHouseboats(response.data.houseboats);
  //       } else {
  //         console.warn("Houseboats data not found:", response.data);
  //         setHouseboats([]);
  //       }
  //     })
  //     .catch(error => {
  //       console.error("Error fetching houseboats:", error);
  //       setHouseboats([]);
  //     });
  // }, []);

  // Filter by search term
  const filteredHouseboats = houseboats.filter(boat =>
    t(boat.titleKey, { ns: 'houseboatList' }).toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleCardClick = (boat) => {
    const translatedTitle = t(boat.titleKey, { ns: 'houseboatList' });
    navigate(`/destinationfeed`, { state: { selectedOffer: { title: translatedTitle } } });
  };

  return (
    <div className="houseboats-container">
      {/* Header */}
      <div
        className="houseboats-header"
        onClick={() => navigate('/destinationfeed', { state: { selectedOffer: { title: 'Houseboats' } } })}
        style={{ cursor: 'pointer' }}
        role="button"
        tabIndex={0}
        onKeyPress={(e) => { if (e.key === 'Enter') navigate('/destinationfeed', { state: { selectedOffer: { title: 'Houseboats' } } }); }}
      >
        <h1 className="houseboats-title">
          {t('houseboats', { ns: 'translation' })}
        </h1>
      </div>


      {/* Results */}
      <div className="houseboats-results-grid">
        {filteredHouseboats.map((boat) => (
          <div
            key={boat.id}
            onClick={() => handleCardClick(boat)}
            className="houseboats-result-card"
            style={{ cursor: 'pointer' }}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => { if (e.key === 'Enter') handleCardClick(boat); }}
          >
            <div className="houseboats-card-content">
              <h3 className="houseboats-card-title">{t(boat.titleKey, { ns: 'houseboatList' })}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredHouseboats.length === 0 && (
        <div className="houseboats-no-results">
          <p className="houseboats-no-results-text">
            {t('noHouseboatsFound', { ns: 'translation' })}
          </p>
        </div>
      )}
    </div>
  );
};

export default HouseboatsList;
