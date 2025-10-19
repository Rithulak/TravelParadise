import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './HouseboatsList.css';


const dummyHouseboats = [
  { id: 1, title: 'Houseboats Hotels In Alleppey Alappuzha Kerala' },
  { id: 2, title: 'Houseboats Hotels In Munnar' },
  { id: 3, title: 'Houseboats hotels In Cochin' },
  { id: 4, title: 'Houseboats Hotels In Kumarakom Lake' },
  { id: 5, title: 'Houseboats Hotels In Kottayam' },
  { id: 6, title: 'Houseboats Hotels In Alleppey' },
  { id: 7, title: 'Houseboats Hotels In Chottanikara' },
  { id: 8, title: 'Houseboats Hotels In Thiruvananthapuram' },
  { id: 9, title: 'Houseboats Hotels In Kovalam Beach' },
  { id: 10, title: 'Houseboats Hotels In Thekkady' },
  { id: 11, title: 'Houseboats Hotels In wayanad' },
  { id: 12, title: 'Houseboats Hotels In Alappuzha' },
  { id: 13, title: 'Houseboats Hotels In Guruvayur' },
  { id: 14, title: 'Houseboats Hotels In Vagamon' },
  { id: 15, title: 'Houseboats Hotels In Athirapilly Water Falls' },
  { id: 16, title: 'Houseboats Hotels In Marari Beach' },
  { id: 17, title: 'Houseboats Hotels In Poovar Beach' },
  { id: 18, title: 'Houseboats Hotels In Varkala Beach' },
  { id: 19, title: 'Houseboats Hotels In Ashtamudi Lake' },
  { id: 20, title: 'Houseboats Hotels In Kanyakumari Beach' },
  { id: 21, title: 'Houseboats Hotels In Alleppey Beach' },
  { id: 22, title: 'Houseboats Hotels In Alappuzha Lake' },
  { id: 23, title: 'Houseboats Hotels In india' },
  { id: 24, title: 'Houseboats Hotels In Kerala' },
  { id: 25, title: 'House Boat Hotels In Alleppey' },
  { id: 26, title: 'Boat House Hotels In India' },
  { id: 27, title: 'Boat House Hotels In Kerala' },
  { id: 28, title: 'Sharing Houseboats Hotels In Alleppey' },
  { id: 29, title: 'Sharing Boat House Hotels In Kerala' },
  { id: 30, title: 'Day Trip Houseboats Hotels In Alleppey' },
  { id: 31, title: 'Day Cruise Houseboats Hotels In Alleppey' },
  { id: 32, title: 'Shared Houseboats Hotels In Alleppey' },
  { id: 33, title: '5 Star Houseboats Hotels In Alleppey' },
  { id: 34, title: '4 Star Houseboats Hotels In Alleppey' },
  { id: 35, title: '3 Star Houseboats Hotels In Alleppey' },
  { id: 36, title: '2 Star Houseboats Hotels In Alleppey' },
  { id: 37, title: 'Budget Houseboats Hotels In Alleppey' },
  { id: 38, title: 'Standard Boat House Hotels In Alleppey' },
];

const HouseboatsList = () => {
  const [houseboats, setHouseboats] = useState(dummyHouseboats);
  const [searchTerm, setSearchTerm] = useState('');
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
    boat.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleCardClick = (boat) => {
    const slug = boat.title.toLowerCase().replace(/\s+/g, '-');
    navigate(`/destinationfeed`, { state: { houseboat: boat } });
  };

  return (
    <div className="houseboats-container">
      {/* Header */}
      <div className="houseboats-header">
        <h1 className="houseboats-title">Kerala Houseboats</h1>
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
              <h3 className="houseboats-card-title">{boat.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredHouseboats.length === 0 && (
        <div className="houseboats-no-results">
          <p className="houseboats-no-results-text">
            No houseboats found matching your search.
          </p>
        </div>
      )}
    </div>
  );
};

export default HouseboatsList;
