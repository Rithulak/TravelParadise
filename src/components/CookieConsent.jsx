import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';

function CookieConsent() {
  const [cookies, setCookie] = useCookies(['tourismConsent']);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!cookies.tourismConsent) {
      setTimeout(() => setShow(true), 2000);
    }
  }, [cookies.tourismConsent]);

  const handleAccept = () => {
    setCookie('tourismConsent', 'accepted', { 
      path: '/', 
      maxAge: 31536000,
      sameSite: 'lax'
    });
    setShow(false);
  };

  const handleDecline = () => {
    setCookie('tourismConsent', 'declined', { 
      path: '/', 
      maxAge: 604800,
      sameSite: 'lax'
    });
    setShow(false);
  };

  if (!show) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: '#2c3e50',
      color: 'white',
      padding: '20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      zIndex: 9999
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <span style={{ fontSize: '24px' }}>🍪</span>
        <p style={{ margin: 0 }}>We use cookies to enhance your experience.</p>
      </div>
      <div style={{ display: 'flex', gap: '10px' }}>
        <button onClick={handleAccept} style={{
          padding: '10px 20px',
          backgroundColor: '#27ae60',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}>
          Accept
        </button>
        <button onClick={handleDecline} style={{
          padding: '10px 20px',
          backgroundColor: '#95a5a6',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}>
          Decline
        </button>
      </div>
    </div>
  );
}

export default CookieConsent;
