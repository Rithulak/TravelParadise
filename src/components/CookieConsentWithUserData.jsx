import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';

const CookieConsentWithUserData = () => {
  const [cookies, setCookie] = useCookies(['tourismConsent', 'userData']);
  const [showBanner, setShowBanner] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // Inline styles object
  const styles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.75)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 10000,
      padding: '20px'
    },
    banner: {
      background: 'white',
      borderRadius: '20px',
      padding: '40px',
      maxWidth: '500px',
      width: '100%',
      maxHeight: '90vh',
      overflowY: 'auto',
      boxShadow: '0 25px 80px rgba(0, 0, 0, 0.4)'
    },
    header: {
      textAlign: 'center',
      marginBottom: '25px'
    },
    emoji: {
      fontSize: '56px',
      display: 'block',
      marginBottom: '15px'
    },
    h2: {
      color: '#2B373B',
      fontSize: '26px',
      marginBottom: '10px',
      margin: 0
    },
    content: {
      marginBottom: '20px'
    },
    paragraph: {
      color: '#555',
      lineHeight: '1.7',
      marginBottom: '20px'
    },
    benefits: {
      background: 'linear-gradient(135deg, #f5f7fa 0%, #e8ecf1 100%)',
      padding: '20px',
      borderRadius: '12px',
      marginBottom: '25px'
    },
    benefitsH3: {
      fontSize: '16px',
      marginBottom: '12px',
      color: '#2B373B',
      marginTop: 0
    },
    benefitsList: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    },
    benefitsItem: {
      padding: '8px 0',
      color: '#444',
      fontSize: '15px'
    },
    actions: {
      display: 'flex',
      gap: '12px',
      marginBottom: '15px'
    },
    btnAccept: {
      flex: 1,
      padding: '16px 24px',
      border: 'none',
      borderRadius: '12px',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      background: 'linear-gradient(135deg, #4CAF50 0%, #45a049 100%)',
      color: 'white',
      boxShadow: '0 4px 15px rgba(76, 175, 80, 0.3)',
      transition: 'all 0.3s ease'
    },
    btnDecline: {
      flex: 1,
      padding: '16px 24px',
      border: 'none',
      borderRadius: '12px',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      background: '#e0e0e0',
      color: '#555',
      transition: 'all 0.3s ease'
    },
    privacyLink: {
      display: 'block',
      textAlign: 'center',
      color: '#4CAF50',
      textDecoration: 'none',
      fontSize: '14px',
      fontWeight: '500'
    },
    formHeaderP: {
      color: '#666',
      fontSize: '15px',
      margin: '10px 0 0 0'
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    },
    formGroup: {
      display: 'flex',
      flexDirection: 'column'
    },
    label: {
      marginBottom: '8px',
      color: '#2B373B',
      fontWeight: '600',
      fontSize: '14px'
    },
    required: {
      color: '#f44336'
    },
    input: {
      padding: '14px 16px',
      border: '2px solid #e0e0e0',
      borderRadius: '10px',
      fontSize: '16px',
      fontFamily: 'inherit',
      transition: 'all 0.3s ease'
    },
    inputError: {
      padding: '14px 16px',
      border: '2px solid #f44336',
      borderRadius: '10px',
      fontSize: '16px',
      fontFamily: 'inherit'
    },
    errorText: {
      color: '#f44336',
      fontSize: '13px',
      marginTop: '6px',
      display: 'flex',
      alignItems: 'center',
      gap: '4px'
    },
    phoneWrapper: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    },
    countryCode: {
      padding: '14px 16px',
      background: '#f5f7fa',
      border: '2px solid #e0e0e0',
      borderRadius: '10px',
      fontWeight: '600',
      color: '#2B373B',
      whiteSpace: 'nowrap'
    },
    phoneInput: {
      flex: 1,
      padding: '14px 16px',
      border: '2px solid #e0e0e0',
      borderRadius: '10px',
      fontSize: '16px',
      fontFamily: 'inherit'
    },
    consentCheckbox: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '12px',
      padding: '16px',
      background: '#f5f7fa',
      borderRadius: '10px'
    },
    checkbox: {
      marginTop: '4px',
      width: '18px',
      height: '18px',
      cursor: 'pointer'
    },
    checkboxLabel: {
      fontSize: '14px',
      color: '#555',
      cursor: 'pointer',
      lineHeight: '1.5',
      marginBottom: 0
    },
    formActions: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      marginTop: '10px'
    },
    btnSubmit: {
      padding: '16px 24px',
      border: 'none',
      borderRadius: '12px',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      background: 'linear-gradient(135deg, #4CAF50 0%, #45a049 100%)',
      color: 'white',
      boxShadow: '0 4px 15px rgba(76, 175, 80, 0.3)',
      transition: 'all 0.3s ease'
    },
    btnSubmitDisabled: {
      padding: '16px 24px',
      border: 'none',
      borderRadius: '12px',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'not-allowed',
      background: 'linear-gradient(135deg, #4CAF50 0%, #45a049 100%)',
      color: 'white',
      boxShadow: '0 4px 15px rgba(76, 175, 80, 0.3)',
      opacity: '0.6'
    },
    btnSkip: {
      padding: '16px 24px',
      border: 'none',
      borderRadius: '12px',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      background: '#e0e0e0',
      color: '#555'
    },
    securityNote: {
      textAlign: 'center',
      fontSize: '13px',
      color: '#666',
      marginTop: '15px',
      lineHeight: '1.5'
    },
    spinner: {
      display: 'inline-block',
      width: '16px',
      height: '16px',
      border: '2px solid rgba(255, 255, 255, 0.3)',
      borderTopColor: 'white',
      borderRadius: '50%',
      marginRight: '8px'
    }
  };

  useEffect(() => {
    if (!cookies.tourismConsent || cookies.tourismConsent === 'declined') {
    setTimeout(() => setShowBanner(true), 2000);
  }
  }, [cookies.tourismConsent]);

if (!showBanner || (cookies.tourismConsent && cookies.tourismConsent !== 'declined')) {
  return null;
}


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }
    
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Enter valid 10-digit Indian mobile number';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAccept = () => {
    setStep(2);
  };

  const handleDecline = () => {
    setCookie('tourismConsent', 'declined', {
      path: '/',
      maxAge: 604800,
      sameSite: 'lax',
      secure: true
    });
    setShowBanner(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/.netlify/functions/saveCookieConsent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name.trim(),
          phone: formData.phone.replace(/\s/g, ''),
          timestamp: new Date().toISOString(),
          consentType: 'accepted',
          source: 'cookie_banner',
          userAgent: navigator.userAgent
        })
      });

      if (response.ok) {
        const result = await response.json();
        
        setCookie('tourismConsent', 'accepted', {
          path: '/',
          maxAge: 31536000,
          sameSite: 'lax',
          secure: true
        });

        setCookie('userData', JSON.stringify({
          name: formData.name.trim(),
          phone: formData.phone.replace(/\s/g, ''),
          userId: result.userId || Date.now()
        }), {
          path: '/',
          maxAge: 31536000,
          sameSite: 'lax',
          secure: true
        });

        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('consent', 'update', {
            analytics_storage: 'granted',
            ad_storage: 'granted'
          });
          
          window.gtag('event', 'user_consent_accepted', {
            user_name: formData.name,
            consent_method: 'cookie_banner'
          });
        }

        setShowBanner(false);
        alert(`Thank you ${formData.name}! You'll receive exclusive travel deals.`);
      } else {
        const error = await response.json();
        alert('Failed to save details: ' + (error.error || 'Unknown error'));
      }
    } catch (error) {
      console.error('Error saving consent:', error);
      alert('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSkip = () => {
    setCookie('tourismConsent', 'accepted_minimal', {
      path: '/',
      maxAge: 31536000,
      sameSite: 'lax',
      secure: true
    });
    setShowBanner(false);
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.banner}>
        {step === 1 ? (
          <>
            <div style={styles.header}>
              <span style={styles.emoji}>🍪</span>
              <h2 style={styles.h2}>Welcome to Tourism Paradise Kerala!</h2>
            </div>
            
            <div style={styles.content}>
              <p style={styles.paragraph}>
                We use cookies to enhance your browsing experience, personalize content, 
                and analyze our traffic. By clicking "Accept", you consent to our use of cookies.
              </p>
              
              <div style={styles.benefits}>
                <h3 style={styles.benefitsH3}>✨ What you get:</h3>
                <ul style={styles.benefitsList}>
                  <li style={styles.benefitsItem}>🎯 Personalized travel recommendations</li>
                  <li style={styles.benefitsItem}>💰 Exclusive deals via WhatsApp</li>
                  <li style={styles.benefitsItem}>❤️ Save favorite destinations</li>
                  <li style={styles.benefitsItem}>🚀 Faster booking experience</li>
                </ul>
              </div>
            </div>

            <div style={styles.actions}>
              <button style={styles.btnAccept} onClick={handleAccept}>
                Accept & Continue
              </button>
              <button style={styles.btnDecline} onClick={handleDecline}>
                Decline
              </button>
            </div>

            <a href="/privacy-policy" style={styles.privacyLink} target="_blank" rel="noopener noreferrer">
              Privacy Policy & Cookie Policy
            </a>
          </>
        ) : (
          <>
            <div style={styles.header}>
              <span style={styles.emoji}>📋</span>
              <h2 style={styles.h2}>Get Personalized Offers!</h2>
              <p style={styles.formHeaderP}>Share your details to receive exclusive Kerala travel deals</p>
            </div>

            <form onSubmit={handleSubmit} style={styles.form}>
              <div style={styles.formGroup}>
                <label htmlFor="name" style={styles.label}>
                  Full Name <span style={styles.required}>*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  style={errors.name ? styles.inputError : styles.input}
                  disabled={loading}
                  autoFocus
                />
                {errors.name && (
                  <span style={styles.errorText}>⚠️ {errors.name}</span>
                )}
              </div>

              <div style={styles.formGroup}>
                <label htmlFor="phone" style={styles.label}>
                  Mobile Number <span style={styles.required}>*</span>
                </label>
                <div style={styles.phoneWrapper}>
                  <span style={styles.countryCode}>+91</span>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="9876543210"
                    maxLength="10"
                    style={errors.phone ? styles.inputError : styles.phoneInput}
                    disabled={loading}
                  />
                </div>
                {errors.phone && (
                  <span style={styles.errorText}>⚠️ {errors.phone}</span>
                )}
              </div>

              <div style={styles.consentCheckbox}>
                <input type="checkbox" id="whatsapp" defaultChecked style={styles.checkbox} />
                <label htmlFor="whatsapp" style={styles.checkboxLabel}>
                  I agree to receive travel deals & updates via WhatsApp
                </label>
              </div>

              <div style={styles.formActions}>
                <button 
                  type="submit" 
                  style={loading ? styles.btnSubmitDisabled : styles.btnSubmit}
                  disabled={loading}
                >
                  {loading ? '⏳ Saving...' : '✅ Submit & Start Exploring'}
                </button>
                <button 
                  type="button" 
                  style={styles.btnSkip}
                  onClick={handleSkip}
                  disabled={loading}
                >
                  Skip for now
                </button>
              </div>
            </form>

            <p style={styles.securityNote}>
              🔒 Your information is secure and will never be shared with third parties
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default CookieConsentWithUserData;
