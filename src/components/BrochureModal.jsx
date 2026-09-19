'use client';
import React, { useState, useEffect } from 'react';
import { 
  X, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Building,
  CheckCircle, 
  AlertTriangle,
  Send,
  FileText,
  Download
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import brochurePdf from '../assets/images/Brochure. Capricorn.PDF';
import modalElevatorImage from '../assets/luxuary.jpeg';
import './BrochureModal.css';

// EmailJS Configuration
const EMAILJS_CONFIG = {
  serviceId: 'service_1ek8u4y',
  templateId: 'template_6b8ubiq',
  publicKey: 'Hz19e9XYQ6Y93PH_b'
};

const countries = [
  { 
    code: '+91', 
    name: 'India', 
    pattern: /^[6-9]\d{9}$/, 
    placeholder: 'Enter 10-digit number', 
    example: '9876543210'
  },
  { 
    code: '+971', 
    name: 'UAE', 
    pattern: /^[5]\d{8}$/, 
    placeholder: 'Enter 9-digit number', 
    example: '501234567'
  },
  { 
    code: '+1', 
    name: 'USA', 
    pattern: /^[2-9]\d{9}$/, 
    placeholder: 'Enter 10-digit number', 
    example: '2125551234'
  },
  { 
    code: '+44', 
    name: 'UK', 
    pattern: /^[1-9]\d{9,10}$/, 
    placeholder: 'Enter 10-11 digit number', 
    example: '2012345678'
  },
  { 
    code: '+33', 
    name: 'France', 
    pattern: /^[1-9]\d{8}$/, 
    placeholder: 'Enter 9-digit number', 
    example: '123456789'
  },
  { 
    code: '+49', 
    name: 'Germany', 
    pattern: /^[1-9]\d{9,11}$/, 
    placeholder: 'Enter 10-12 digit number', 
    example: '1712345678'
  },
  { 
    code: '+81', 
    name: 'Japan', 
    pattern: /^[1-9]\d{9,10}$/, 
    placeholder: 'Enter 10-11 digit number', 
    example: '9012345678'
  },
  { 
    code: '+86', 
    name: 'China', 
    pattern: /^[1]\d{10}$/, 
    placeholder: 'Enter 11-digit number', 
    example: '13812345678'
  },
  { 
    code: '+61', 
    name: 'Australia', 
    pattern: /^[4]\d{8}$/, 
    placeholder: 'Enter 9-digit number', 
    example: '412345678'
  },
  { 
    code: '+65', 
    name: 'Singapore', 
    pattern: /^[8-9]\d{7}$/, 
    placeholder: 'Enter 8-digit number', 
    example: '81234567'
  }
];

const projectTypes = [
  'Residential Elevator',
  'Commercial Elevator',
  'Industrial Elevator',
  'Hospital Elevator',
  'Freight Elevator',
  'Passenger Elevator',
  'Maintenance Service',
  'Modernization',
  'Other'
];

const BrochureModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '+91',
    location: '',
    projectType: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [phoneError, setPhoneError] = useState('');
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    emailjs.init(EMAILJS_CONFIG.publicKey);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const brochureFileUrl = brochurePdf?.src || brochurePdf;
  const modalImgSrc = modalElevatorImage?.src || modalElevatorImage;

  const validatePhoneNumber = (phone, countryCode) => {
    if (!phone || !countryCode) return false;
    const selectedCountry = countries.find(c => c.code === countryCode);
    if (!selectedCountry) return false;
    const cleanPhone = phone.replace(/[\s\-\(\)]/g, '');
    if (!/^\d+$/.test(cleanPhone)) return false;
    return selectedCountry.pattern.test(cleanPhone);
  };

  const getSelectedCountryInfo = () => {
    return countries.find(c => c.code === formData.country);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'phone') {
      let cleanValue = value.replace(/[^\d\s\-\(\)]/g, '');
      setFormData(prev => ({ ...prev, [name]: cleanValue }));
      
      if (formData.country && cleanValue) {
        const isValid = validatePhoneNumber(cleanValue, formData.country);
        const selectedCountry = getSelectedCountryInfo();
        const digitsOnly = cleanValue.replace(/[\s\-\(\)]/g, '');
        
        if (!/^\d+$/.test(digitsOnly)) {
          setPhoneError(`Digits only permitted.`);
        } else if (!isValid && selectedCountry) {
          setPhoneError(`Valid ${selectedCountry.name} phone number required.`);
        } else {
          setPhoneError('');
        }
      } else if (formData.country && !cleanValue) {
        setPhoneError('Phone number is required');
      }
    } else if (name === 'country') {
      setFormData(prev => ({ ...prev, [name]: value }));
      setPhoneError('');
      if (formData.phone) {
        const isValid = validatePhoneNumber(formData.phone, value);
        const selectedCountry = countries.find(c => c.code === value);
        const digitsOnly = formData.phone.replace(/[\s\-\(\)]/g, '');
        if (!/^\d+$/.test(digitsOnly)) {
          setPhoneError(`Digits only permitted.`);
        } else if (!isValid && selectedCountry) {
          setPhoneError(`Valid ${selectedCountry?.name || ''} phone number required.`);
        } else {
          setPhoneError('');
        }
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPhoneError('');
    setSubmitError('');
    let hasErrors = false;

    if (!formData.name?.trim() || !formData.email?.trim() || !formData.location?.trim()) {
      hasErrors = true;
    }

    if (!formData.phone?.trim()) {
      setPhoneError('Phone number is required');
      hasErrors = true;
    } else if (!formData.country) {
      setPhoneError('Please select a country code');
      hasErrors = true;
    } else {
      const digitsOnly = formData.phone.replace(/[\s\-\(\)]/g, '');
      if (!/^\d+$/.test(digitsOnly)) {
        setPhoneError('Phone number must contain only digits.');
        hasErrors = true;
      } else {
        const isValid = validatePhoneNumber(formData.phone, formData.country);
        if (!isValid) {
          const selectedCountry = getSelectedCountryInfo();
          setPhoneError(`Please enter a valid ${selectedCountry?.name || ''} phone number.`);
          hasErrors = true;
        }
      }
    }

    if (hasErrors) return;

    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: `${formData.country} ${formData.phone}`,
        company: 'Brochure Request',
        location: formData.location,
        project_type: formData.projectType || 'Brochure Request',
        message: `[Brochure Request]\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.country} ${formData.phone}\nLocation: ${formData.location}\nProject Type: ${formData.projectType || 'N/A'}`
      };

      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams,
        EMAILJS_CONFIG.publicKey
      );

      setIsSubmitted(true);
      setIsSubmitting(false);

      // Open brochure automatically in new tab
      if (brochureFileUrl) {
        window.open(brochureFileUrl, '_blank');
      }
    } catch (err) {
      console.error('EmailJS submission error:', err);
      setSubmitError('Failed to send details. Please try again.');
      setIsSubmitting(false);
    }
  };

  const handleOpenBrochure = () => {
    if (brochureFileUrl) {
      window.open(brochureFileUrl, '_blank');
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      country: '+91',
      location: '',
      projectType: ''
    });
    setPhoneError('');
    setSubmitError('');
  };

  const selectedCountryInfo = getSelectedCountryInfo();

  return (
    <div className="brochure-modal-overlay" onClick={(e) => {
      if (e.target === e.currentTarget) onClose();
    }}>
      <div className="brochure-modal-card">
        {/* Close Button */}
        <button className="brochure-modal-close-btn" onClick={onClose} aria-label="Close popup">
          <X size={20} />
        </button>

        {/* Left Side: Image Panel */}
        <div className="brochure-modal-image-panel">
          <img src={modalImgSrc} alt="Capricorn Elevator" className="brochure-modal-img" />
          <div className="brochure-modal-img-overlay">
            <div className="brochure-modal-img-content">
              <span className="brochure-img-tag">Capricorn Elevators</span>
              <h3>Elevating Luxury & Engineering Excellence</h3>
              <p>Download our official product brochure to explore custom luxury elevator designs.</p>
            </div>
          </div>
        </div>

        {/* Right Side: Form Panel */}
        <div className="brochure-modal-form-panel">
          <div className="brochure-modal-form-header">
            <span className="brochure-badge">Get Catalogue</span>
            <h2>Download Brochure</h2>
            <p>Fill out the form below to instantly view our brochure.</p>
          </div>

          {isSubmitted ? (
            <div className="brochure-success-container">
              <div className="brochure-success-icon">
                <CheckCircle size={48} />
              </div>
              <h3>Thank You!</h3>
              <p>Your details have been submitted. Your brochure has opened in a new tab.</p>
              <div className="brochure-success-actions">
                <button className="brochure-download-btn" onClick={handleOpenBrochure}>
                  <Download size={18} />
                  Open Brochure PDF
                </button>
                <button className="brochure-secondary-btn" onClick={handleReset}>
                  Submit Another
                </button>
              </div>
            </div>
          ) : (
            <form className="brochure-form" onSubmit={handleSubmit}>
              {submitError && (
                <div className="brochure-error-message">
                  <AlertTriangle size={16} />
                  <span>{submitError}</span>
                </div>
              )}

              {/* Name */}
              <div className="brochure-form-group">
                <label htmlFor="modal-name">Full Name *</label>
                <div className="brochure-input-wrapper">
                  <User size={16} className="brochure-input-icon" />
                  <input
                    type="text"
                    id="modal-name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="brochure-form-group">
                <label htmlFor="modal-email">Email Address *</label>
                <div className="brochure-input-wrapper">
                  <Mail size={16} className="brochure-input-icon" />
                  <input
                    type="email"
                    id="modal-email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              {/* Phone Number (Country Code + Input) */}
              <div className="brochure-form-group">
                <label htmlFor="modal-phone">Phone Number *</label>
                <div className="brochure-phone-row">
                  <div className="brochure-select-wrapper brochure-country-select">
                    <select
                      id="modal-country"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      required
                    >
                      {countries.map((c, i) => (
                        <option key={i} value={c.code}>
                          {c.code} ({c.name})
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="brochure-input-wrapper brochure-phone-input">
                    <Phone size={16} className="brochure-input-icon" />
                    <input
                      type="tel"
                      id="modal-phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder={selectedCountryInfo ? selectedCountryInfo.placeholder : "Phone number"}
                    />
                  </div>
                </div>
                {phoneError && (
                  <div className="brochure-field-error">
                    <AlertTriangle size={13} />
                    <span>{phoneError}</span>
                  </div>
                )}
              </div>

              {/* Location */}
              <div className="brochure-form-group">
                <label htmlFor="modal-location">Location (City / Country) *</label>
                <div className="brochure-input-wrapper">
                  <MapPin size={16} className="brochure-input-icon" />
                  <input
                    type="text"
                    id="modal-location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your city or country"
                  />
                </div>
              </div>

              {/* Project Type */}
              <div className="brochure-form-group">
                <label htmlFor="modal-projectType">Project Type *</label>
                <div className="brochure-select-wrapper">
                  <select
                    id="modal-projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select project type</option>
                    {projectTypes.map((type, i) => (
                      <option key={i} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="brochure-submit-btn"
                disabled={isSubmitting || !!phoneError}
              >
                {isSubmitting ? (
                  <>
                    <div className="brochure-spinner" />
                    <span>Opening Brochure...</span>
                  </>
                ) : (
                  <>
                    <span>Submit & Get Brochure</span>
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default BrochureModal;
