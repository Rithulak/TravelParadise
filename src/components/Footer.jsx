
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Plane } from 'lucide-react';
import './Footer.css';
import { useTranslation } from 'react-i18next';  

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
        
            
            {/* Brand & Social Section */}
            <div className="footer-section footer-brand-section">
              <div className="footer-brand">
                <Link to="/info" className="brand-logo">
                  <span className="brand-text"><span style={{color: 'red'}}>T</span>ourism <span style={{color: 'red'}}>P</span>aradise</span>
                </Link>
                <p className="footer-description">
                  Your trusted travel companion for unforgettable journeys. Creating memories that last a lifetime.
                </p>
                <div className="social-links">
                  <a href="#" aria-label="Facebook" className="social-link"><Facebook size={20} /></a>
                  <a href="#" aria-label="Instagram" className="social-link"><Instagram size={20} /></a>
                  <a href="#" aria-label="Twitter" className="social-link"><Twitter size={20} /></a>
                  <a href="#" aria-label="YouTube" className="social-link"><Youtube size={20} /></a>
                </div>
              </div>
            </div>
            <div className="footer-section-destination">
              <h3 className="footer-title-destination">Destinations</h3>
              <ul className="footer-links-destination">
                <li><Link to="/destinationfeed">Kerala Budget Houseboat</Link></li>
                <li><Link to="/destinationfeed">Luxury Top End Houseboat</Link></li>
                <li><Link to="/destinationfeed">B2b Price Kerala Houseboats</Link></li>
                <li><Link to="/destinationfeed">Houseboats in Alappuzha</Link></li>
                <li><Link to="/destinationfeed">Budget Boat House Allepey</Link></li>
                <li><Link to="/destinationfeed">Budget Boat House Alappuzha</Link></li>
                <li><Link to="/destinationfeed">Budget Houseboat Allepey</Link></li>
                <li><Link to="/destinationfeed">Budget Houseboat Alappuzha</Link></li>
                <li><Link to="/destinationfeed">Budget Alleppey Boat House</Link></li>
                <li><Link to="/destinationfeed">Spot Booking Boat House</Link></li>
                <li><Link to="/destinationfeed">Prepaid Taxi Service in Cochin Airport</Link></li>
                <li><Link to="/destinationfeed">Budget Alappuzha Houseboats</Link></li>
                <li><Link to="/destinationfeed">Budget Alleppey Houseboats</Link></li>
                <li><Link to="/destinationfeed">B2b Alleppey Houseboats</Link></li>
                <li><Link to="/destinationfeed">Private Alleppey Houseboats</Link></li>
                <li><Link to="/destinationfeed">Houseboats in India</Link></li>

                <li><Link to="/destinationfeed">Shared houseboats In Alleppey </Link></li>
                <li><Link to="/destinationfeed">Sharing Houseboats In Alleppey </Link></li>
                <li><Link to="/destinationfeed">Sharing Boathouse In Alleppey</Link></li>
                <li><Link to="/destinationfeed">Sharing Houseboats In Alleppey </Link></li>
                <li><Link to="/destinationfeed">Clubbing Houseboats In Alleppey</Link></li>
                <li><Link to="/destinationfeed">Clubbing Boathouse In Alleppey</Link></li>
                <li><Link to="/destinationfeed">Luxury Houseboats In Alleppey</Link></li>
                <li><Link to="/destinationfeed">Premium Houseboats In Alleppey</Link></li>
                <li><Link to="/destinationfeed">Deluxe Houseboats In Alleppey</Link></li>
                <li><Link to="/destinationfeed">Standard Houseboats In Alleppey</Link></li>
                <li><Link to="/destinationfeed">Ultra Luxury Houseboats In Alleppey</Link></li>
                <li><Link to="/destinationfeed">Ultra Luxury Sharing Houseboats In Alleppey</Link></li>
                <li><Link to="/destinationfeed">Best Houseboats In Alleppey</Link></li>
                <li><Link to="/destinationfeed">Best Luxury Houseboats In Alleppey</Link></li>
                <li><Link to="/destinationfeed">Best Premium Houseboats In Alleppey</Link></li>
                <li><Link to="/destinationfeed">Best Deluxe Houseboats In Alleppey</Link></li>
                <li><Link to="/destinationfeed">Best Standard Houseboats In Alleppey</Link></li>
                <li><Link to="/destinationfeed">Best Alappuzha Houseboat Packages</Link></li>
                <li><Link to="/destinationfeed">Best Alappuzha Boat House Packages</Link></li>
              </ul>
            </div>
            <div className="footer-grid">
            {/* Quick Links Sections */}
            
            <div className="footer-section">
              <h3 className="footer-title">Services</h3>
              <ul className="footer-links">
                <li><Link to="/destinationfeed">Flight Booking</Link></li>
                <li><Link to="/destinationfeed">Hotel Reservation</Link></li>
                <li><Link to="/destinationfeed">Tour Packages</Link></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h3 className="footer-title">Company</h3>
              <ul className="footer-links">
                <li><Link to="/about">About Us</Link></li>    
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
            
            {/* <div className="footer-section">
              <h3 className="footer-title">Support</h3>
              <ul className="footer-links">
                <li><Link to="/help">Help Center</Link></li>
                <li><Link to="/terms">Terms of Service</Link></li>
                <li><Link to="/privacy">Privacy Policy</Link></li>
                <li><Link to="/refund">Refund Policy</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
      
      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p className="copyright-text">
              © 2025 Tourism Paradise. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
