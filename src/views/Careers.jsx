'use client';
import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Send, Users, Building, Award, Globe, Mail, Phone, MapPin, ArrowRight, CheckCircle, Star, Briefcase, Clock, DollarSign, AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import emailjs from '@emailjs/browser'; // Add EmailJS import
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Careers.css';

// Import assets (you'll need to add these to your assets folder)
import careersVideo from '../assets/service.mp4';
import teamImage from '../assets/choose.jpeg';
import officeImage from '../assets/choose.jpeg';

// EmailJS Configuration for Careers
const EMAILJS_CAREERS_CONFIG = {
  serviceId: 'service_1ek8u4y',
  templateId: 'template_ahrjb1p',
  publicKey: 'Hz19e9XYQ6Y93PH_b'
};

// Decorative hero particles. These were generated with Math.random() during render,
// so the server-rendered HTML never matched the client's and React threw a hydration
// mismatch on every visit. Fixed positions keep the effect and the markup stable.
const FLOATING_ELEMENTS = [
  { left: '12%', top: '18%', animationDelay: '0s', animationDuration: '7.2s' },
  { left: '27%', top: '72%', animationDelay: '0.8s', animationDuration: '8.6s' },
  { left: '41%', top: '34%', animationDelay: '1.6s', animationDuration: '6.4s' },
  { left: '55%', top: '81%', animationDelay: '2.4s', animationDuration: '9.1s' },
  { left: '63%', top: '12%', animationDelay: '0.4s', animationDuration: '7.8s' },
  { left: '78%', top: '58%', animationDelay: '1.2s', animationDuration: '6.9s' },
  { left: '86%', top: '26%', animationDelay: '2.0s', animationDuration: '8.3s' },
  { left: '94%', top: '67%', animationDelay: '2.8s', animationDuration: '7.5s' },
];

const Careers = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeJob, setActiveJob] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '', // Add country for phone validation
    position: '',
    experience: '',
    location: '', // Add location preference
    resume: null,
    coverLetter: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [whyUsVisible, setWhyUsVisible] = useState(false);
  const [jobsVisible, setJobsVisible] = useState(false);
  const [processVisible, setProcessVisible] = useState(false);
  const [phoneError, setPhoneError] = useState('');
  const [submitError, setSubmitError] = useState(''); // Add submit error state

  // Refs
  const heroRef = useRef(null);
  const videoRef = useRef(null);
  const whyUsRef = useRef(null);
  const jobsRef = useRef(null);
  const processRef = useRef(null);

  // Countries array for phone validation
  const countries = [
    { 
      code: '+91', 
      name: 'India', 
      pattern: /^[6-9]\d{9}$/, 
      placeholder: 'Enter 10-digit number (e.g., 9876543210)', 
      example: '9876543210',
      description: '10 digits starting with 6-9'
    },
    { 
      code: '+971', 
      name: 'UAE', 
      pattern: /^[5]\d{8}$/, 
      placeholder: 'Enter 9-digit number (e.g., 501234567)', 
      example: '501234567',
      description: '9 digits starting with 5'
    },
    { 
      code: '+1', 
      name: 'USA', 
      pattern: /^[2-9]\d{9}$/, 
      placeholder: 'Enter 10-digit number (e.g., 2125551234)', 
      example: '2125551234',
      description: '10 digits starting with 2-9'
    },
    { 
      code: '+44', 
      name: 'UK', 
      pattern: /^[1-9]\d{9,10}$/, 
      placeholder: 'Enter 10-11 digit number (e.g., 2012345678)', 
      example: '2012345678',
      description: '10-11 digits starting with 1-9'
    },
    { 
      code: '+33', 
      name: 'France', 
      pattern: /^[1-9]\d{8}$/, 
      placeholder: 'Enter 9-digit number (e.g., 123456789)', 
      example: '123456789',
      description: '9 digits starting with 1-9'
    },
    { 
      code: '+49', 
      name: 'Germany', 
      pattern: /^[1-9]\d{9,11}$/, 
      placeholder: 'Enter 10-12 digit number (e.g., 1712345678)', 
      example: '1712345678',
      description: '10-12 digits starting with 1-9'
    },
    { 
      code: '+81', 
      name: 'Japan', 
      pattern: /^[1-9]\d{9,10}$/, 
      placeholder: 'Enter 10-11 digit number (e.g., 9012345678)', 
      example: '9012345678',
      description: '10-11 digits starting with 1-9'
    },
    { 
      code: '+86', 
      name: 'China', 
      pattern: /^[1]\d{10}$/, 
      placeholder: 'Enter 11-digit number (e.g., 13812345678)', 
      example: '13812345678',
      description: '11 digits starting with 1'
    },
    { 
      code: '+61', 
      name: 'Australia', 
      pattern: /^[4]\d{8}$/, 
      placeholder: 'Enter 9-digit number (e.g., 412345678)', 
      example: '412345678',
      description: '9 digits starting with 4'
    },
    { 
      code: '+65', 
      name: 'Singapore', 
      pattern: /^[8-9]\d{7}$/, 
      placeholder: 'Enter 8-digit number (e.g., 81234567)', 
      example: '81234567',
      description: '8 digits starting with 8 or 9'
    }
  ];

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(EMAILJS_CAREERS_CONFIG.publicKey);
  }, []);

  // Updated job positions data
  const jobPositions = [
    {
      id: 1,
      title: 'BDM (Business Development Manager)',
      department: 'Sales',
      location: 'Multiple Locations',
      type: 'Full-time',
      experience: '5-8 years',
      salary: 'Competitive + Incentives',
      description: 'Lead business development initiatives and drive strategic partnerships for elevator solutions.',
      requirements: ['Business development experience', 'Strategic planning skills', 'Client relationship management', 'Market analysis abilities']
    },
    {
      id: 2,
      title: 'BDE (Business Development Executive)',
      department: 'Sales',
      location: 'Multiple Locations',
      type: 'Full-time',
      experience: '2-4 years',
      salary: 'Competitive + Commission',
      description: 'Execute business development strategies and generate new business opportunities.',
      requirements: ['Sales experience', 'Lead generation skills', 'Communication skills', 'Target-oriented approach']
    },
    {
      id: 3,
      title: 'Inside Sales Associates',
      department: 'Sales',
      location: 'Head Office',
      type: 'Full-time',
      experience: '1-3 years',
      salary: 'Competitive',
      description: 'Handle inbound sales inquiries and support the sales team with lead qualification.',
      requirements: ['Sales experience', 'Communication skills', 'CRM knowledge', 'Customer service orientation']
    },
    {
      id: 4,
      title: 'Project Coordinator',
      department: 'Operations',
      location: 'Multiple Locations',
      type: 'Full-time',
      experience: '3-5 years',
      salary: 'Competitive',
      description: 'Coordinate elevator installation projects and ensure timely delivery.',
      requirements: ['Project coordination experience', 'Planning skills', 'Team coordination', 'Problem-solving abilities']
    },
    {
      id: 5,
      title: 'CRM (Customer Relationship Manager)',
      department: 'Customer Service',
      location: 'Head Office',
      type: 'Full-time',
      experience: '3-6 years',
      salary: 'Competitive',
      description: 'Manage customer relationships and ensure customer satisfaction across all touchpoints.',
      requirements: ['CRM software expertise', 'Customer service experience', 'Relationship management', 'Data analysis skills']
    },
    {
      id: 6,
      title: 'Tech Head',
      department: 'Technical',
      location: 'Head Office',
      type: 'Full-time',
      experience: '8-12 years',
      salary: 'Competitive',
      description: 'Lead technical operations and oversee elevator installation and maintenance activities.',
      requirements: ['Technical leadership experience', 'Elevator systems expertise', 'Team management', 'Safety protocols knowledge']
    },
    {
      id: 7,
      title: 'Sales Head',
      department: 'Sales',
      location: 'Head Office',
      type: 'Full-time',
      experience: '10-15 years',
      salary: 'Competitive',
      description: 'Lead the sales team and drive overall sales strategy and performance.',
      requirements: ['Sales leadership experience', 'Strategic planning', 'Team management', 'Market development skills']
    },
    {
      id: 8,
      title: 'RM (Regional Manager)',
      department: 'Operations',
      location: 'Multiple Locations',
      type: 'Full-time',
      experience: '6-10 years',
      salary: 'Competitive',
      description: 'Manage regional operations and ensure business growth in assigned territories.',
      requirements: ['Regional management experience', 'Business development', 'Team leadership', 'Market knowledge']
    },
    {
      id: 9,
      title: 'BUH (Business Unit Head)',
      department: 'Management',
      location: 'Head Office',
      type: 'Full-time',
      experience: '12-18 years',
      salary: 'Competitive',
      description: 'Lead business unit operations and drive strategic business growth.',
      requirements: ['Business unit management', 'Strategic leadership', 'P&L responsibility', 'Industry expertise']
    },
    {
      id: 10,
      title: 'Accounts Executive',
      department: 'Finance',
      location: 'Head Office',
      type: 'Full-time',
      experience: '2-5 years',
      salary: 'Competitive',
      description: 'Handle financial accounting, reporting, and ensure compliance with accounting standards.',
      requirements: ['Accounting degree/certification', 'Financial reporting', 'Tally/ERP knowledge', 'Attention to detail']
    }
  ];

  // Why choose us data
  const whyChooseUs = [
    {
      icon: <Globe size={32} />,
      title: 'Global Presence',
      description: 'Work across 2 countries with international project opportunities and cultural diversity.'
    },
    {
      icon: <Award size={32} />,
      title: '25+ Years Excellence',
      description: 'Join a company with proven track record and industry-leading expertise.'
    },
    {
      icon: <Users size={32} />,
      title: 'Team Growth',
      description: 'Professional development programs and clear career advancement paths.'
    },
    {
      icon: <Building size={32} />,
      title: 'Innovation Focus',
      description: 'Work with cutting-edge technology and contribute to innovative solutions.'
    }
  ];

  // Enhanced Phone Validation Functions
  const validatePhoneNumber = (phone, countryCode) => {
    if (!phone || !countryCode) return false;
    
    const selectedCountry = countries.find(c => c.code === countryCode);
    if (!selectedCountry) return false;
    
    // Remove formatting characters
    const cleanPhone = phone.replace(/[\s\-\(\)]/g, '');
    
    // Must contain only digits
    if (!/^\d+$/.test(cleanPhone)) {
      return false;
    }
    
    // Must match country-specific pattern
    return selectedCountry.pattern.test(cleanPhone);
  };

  const getSelectedCountryInfo = () => {
    return countries.find(c => c.code === formData.country);
  };

  // Event handlers
  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    
    if (name === 'resume') {
      setFormData(prev => ({ ...prev, [name]: files[0] }));
    } else if (name === 'phone') {
      // Only allow digits, spaces, hyphens, and parentheses
      let cleanValue = value.replace(/[^\d\s\-\(\)]/g, '');
      
      // Additional check: if the input contains letters, show immediate error
      if (/[a-zA-Z]/.test(value)) {
        const selectedCountry = getSelectedCountryInfo();
        setPhoneError(`Phone number must contain only digits. Please enter a valid ${selectedCountry?.name || ''} phone number.`);
      }
      
      setFormData(prev => ({ ...prev, [name]: cleanValue }));
      
      // Real-time validation
      if (formData.country && cleanValue) {
        const isValid = validatePhoneNumber(cleanValue, formData.country);
        const selectedCountry = getSelectedCountryInfo();
        
        // Check if contains only digits (after removing formatting)
        const digitsOnly = cleanValue.replace(/[\s\-\(\)]/g, '');
        if (!/^\d+$/.test(digitsOnly)) {
          setPhoneError(`Phone number must contain only digits. Please enter a valid ${selectedCountry?.name || ''} phone number.`);
        } else if (!isValid && selectedCountry) {
          setPhoneError(`Please enter a valid ${selectedCountry.name} phone number. Example: ${selectedCountry.example}`);
        } else if (isValid) {
          setPhoneError(''); // Clear error for valid numbers
        }
      } else if (formData.country && !cleanValue) {
        setPhoneError('Phone number is required');
      }
    } else if (name === 'country') {
      setFormData(prev => ({ ...prev, [name]: value }));
      setPhoneError(''); // Reset phone error when country changes
      
      // Re-validate existing phone number with new country
      if (formData.phone) {
        const isValid = validatePhoneNumber(formData.phone, value);
        const selectedCountry = countries.find(c => c.code === value);
        
        const digitsOnly = formData.phone.replace(/[\s\-\(\)]/g, '');
        if (!/^\d+$/.test(digitsOnly)) {
          setPhoneError(`Phone number must contain only digits. Please enter a valid ${selectedCountry?.name || ''} phone number.`);
        } else if (!isValid && selectedCountry) {
          setPhoneError(`Please enter a valid ${selectedCountry.name} phone number. Example: ${selectedCountry.example}`);
        } else if (isValid) {
          setPhoneError('');
        }
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  // Updated handleSubmit function with EmailJS integration
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Reset errors
    setPhoneError('');
    setSubmitError('');
    let hasErrors = false;
    
    // Validate required fields
    if (!formData.name?.trim()) {
      hasErrors = true;
    }
    
    if (!formData.email?.trim()) {
      hasErrors = true;
    }
    
    if (!formData.coverLetter?.trim()) {
      hasErrors = true;
    }
    
    // Phone validation
    if (!formData.phone?.trim()) {
      setPhoneError('Phone number is required');
      hasErrors = true;
    } else if (!formData.country) {
      setPhoneError('Please select a country code');
      hasErrors = true;
    } else {
      // Check if phone contains only digits (after removing formatting)
      const digitsOnly = formData.phone.replace(/[\s\-\(\)]/g, '');
      if (!/^\d+$/.test(digitsOnly)) {
        const selectedCountry = getSelectedCountryInfo();
        setPhoneError(`Phone number must contain only digits. Please enter a valid ${selectedCountry?.name || ''} phone number.`);
        hasErrors = true;
      } else {
        // Validate against country pattern
        const isValid = validatePhoneNumber(formData.phone, formData.country);
        if (!isValid) {
          const selectedCountry = getSelectedCountryInfo();
          setPhoneError(`Please enter a valid ${selectedCountry?.name || ''} phone number. Example: ${selectedCountry?.example || ''}`);
          hasErrors = true;
        }
      }
    }
    
    // Stop submission if there are errors
    if (hasErrors) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Prepare email data for EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: `${formData.country} ${formData.phone}`,
        position: formData.position || 'Not specified',
        experience: formData.experience || 'Not specified',
        location: formData.location || 'Not specified',
        message: formData.coverLetter
      };

      console.log('Sending career application with params:', templateParams);

      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_CAREERS_CONFIG.serviceId,
        EMAILJS_CAREERS_CONFIG.templateId,
        templateParams,
        EMAILJS_CAREERS_CONFIG.publicKey
      );

      console.log('Career application sent successfully:', result);
      
      // Success - show success message
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        country: '',
        position: '',
        experience: '',
        location: '',
        resume: null,
        coverLetter: ''
      });
      setPhoneError('');
      
      // Hide success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
      
    } catch (error) {
      console.error('Career application sending failed:', error);
      
      if (error.text) {
        setSubmitError(`Failed to send application: ${error.text}`);
      } else if (error.status === 400) {
        setSubmitError('Please check your application data and try again.');
      } else if (error.status === 401) {
        setSubmitError('Email service configuration error. Please try again later.');
      } else {
        setSubmitError('Failed to send application. Please try again or contact us directly.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleJobDetails = (jobId) => {
    setActiveJob(activeJob === jobId ? null : jobId);
  };

  // Effects
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }

    // Intersection observers
    const createObserver = (ref, setState) => {
      return new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setState(true);
        }
      }, { threshold: 0.3 });
    };

    const whyUsObserver = createObserver(whyUsRef, setWhyUsVisible);
    const jobsObserver = createObserver(jobsRef, setJobsVisible);
    const processObserver = createObserver(processRef, setProcessVisible);

    if (whyUsRef.current) whyUsObserver.observe(whyUsRef.current);
    if (jobsRef.current) jobsObserver.observe(jobsRef.current);
    if (processRef.current) processObserver.observe(processRef.current);

    return () => {
      whyUsObserver.disconnect();
      jobsObserver.disconnect();
      processObserver.disconnect();
    };
  }, []);

  const selectedCountryInfo = getSelectedCountryInfo();

  return (
    <div className="cap-careers-page">
      <Header />

      {/* Hero Section with Video Background */}
      <section ref={heroRef} className="cap-careers-hero-section">
        <div className="cap-video-container">
          <video ref={videoRef} className="cap-hero-video" autoPlay muted loop playsInline>
            <source src={careersVideo?.src || careersVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="cap-video-overlay"></div>
        </div>

        <div className="cap-hero-bg-elements">
          {FLOATING_ELEMENTS.map((style, i) => (
            <div key={i} className="cap-floating-element" style={style} />
          ))}
        </div>

        <div className="cap-hero-content" style={{
          transform: `translateY(${scrollY * -0.2}px)`,
          opacity: Math.max(0, 1 - scrollY / 600)
        }}>
          <h1 className="cap-hero-title">
            <span className="cap-hero-title-line-1">Build Your Career</span>
            <span className="cap-hero-title-line-2">at Capricorn Elevators</span>
          </h1>

          <div className="cap-hero-stats">
            <div className="cap-stat-item">
              <Globe size={20} />
              <span>2 Countries</span>
            </div>
            <div className="cap-stat-item">
              <Building size={20} />
              <span>200+ Projects</span>
            </div>
            <div className="cap-stat-item">
              <Award size={20} />
              <span>25+ Years</span>
            </div>
            <div className="cap-stat-item">
              <Users size={20} />
              <span>200+ Team</span>
            </div>
          </div>
        </div>

        <div className="cap-scroll-indicator">
          <ChevronDown size={28} />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section ref={whyUsRef} className={`cap-why-choose-us-section ${whyUsVisible ? 'cap-visible' : ''}`}>
        <div className="cap-container">
          <div className="cap-section-header">
            <div className="cap-section-badge">Why Capricorn</div>
            <h2 className="cap-section-title">
              Why Choose <span className="cap-highlight">Capricorn Elevators?</span>
            </h2>
            <p className="cap-section-subtitle">
              Join a company that values innovation, excellence, and personal growth in the elevator industry.
            </p>
          </div>

          <div className="cap-why-us-grid">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="cap-why-us-card" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="cap-card-icon">{item.icon}</div>
                <h3 className="cap-card-title">{item.title}</h3>
                <p className="cap-card-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="application-form" className="cap-application-section">
        <div className="cap-container">
          <div className="cap-application-content">
            <div className="cap-application-info">
              <div className="cap-section-header">
                <div className="cap-section-badge">Join Us</div>
                <h2 className="cap-section-title">
                  Submit Your <span className="cap-highlight">Application</span>
                </h2>
                <p className="cap-section-subtitle">
                  Ready to take the next step? Send us your details and let's start the conversation.
                </p>
              </div>

              <div className="cap-contact-info">
                <div className="cap-contact-item">
                  <Mail size={20} />
                  <div>
                    <strong>Email</strong>
                    <span>hr@capricornelevators.com</span>
                  </div>
                </div>
                <div className="cap-contact-item">
                  <Phone size={20} />
                  <div>
                    <strong>Phone</strong>
                    <span>+971509169002</span>
                  </div>
                </div>
                <div className="cap-contact-item">
                  <MapPin size={20} />
                  <div>
                    <strong>Office</strong>
                    <span>Unit 03, 11th Floor, Jomer Symphony, Ponnurunni East, Vyttila, Ernakulam, Kerala 682028</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="cap-application-form">
              {isSubmitted ? (
                <div className="cap-success-message">
                  <div className="cap-success-icon">
                    <CheckCircle size={48} />
                  </div>
                  <h3>Application Submitted!</h3>
                  <p>Thank you for your interest. Our HR team will review your application and get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {/* Add error message display */}
                  {submitError && (
                    <div className="cap-career-error-message">
                      <AlertTriangle size={20} />
                      <span>{submitError}</span>
                    </div>
                  )}

                  <div className="cap-form-row">
                    <div className="cap-form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="cap-form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="cap-form-row">
                    <div className="cap-form-group">
                      <label htmlFor="country">Country Code *</label>
                      <select
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Select country code</option>
                        {countries.map((country, index) => (
                          <option key={index} value={country.code}>
                            {country.code} - {country.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="cap-form-group">
                      <label htmlFor="phone">Phone Number *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder={selectedCountryInfo ? selectedCountryInfo.placeholder : "Select country code first"}
                        disabled={!formData.country}
                      />
                      {phoneError && (
                        <div className="cap-phone-error-message">
                          <AlertTriangle size={16} />
                          <span>{phoneError}</span>
                        </div>
                      )}
                      {selectedCountryInfo && (
                        <div className="cap-phone-help-text">
                          Format: {selectedCountryInfo.code} {selectedCountryInfo.example}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="cap-form-row">
                    <div className="cap-form-group">
                      <label htmlFor="position">Position Applied For</label>
                      <select
                        id="position"
                        name="position"
                        value={formData.position}
                        onChange={handleInputChange}
                      >
                        <option value="">Select position</option>
                        {jobPositions.map(job => (
                          <option key={job.id} value={job.title}>{job.title}</option>
                        ))}
                      </select>
                    </div>
                    <div className="cap-form-group">
                      <label htmlFor="experience">Years of Experience</label>
                      <select
                        id="experience"
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                      >
                        <option value="">Select experience</option>
                        <option value="0-1">0-1 years</option>
                        <option value="2-3">2-3 years</option>
                        <option value="4-5">4-5 years</option>
                        <option value="6-10">6-10 years</option>
                        <option value="10+">10+ years</option>
                      </select>
                    </div>
                  </div>

                  <div className="cap-form-group">
                    <label htmlFor="location">Preferred Work Location</label>
                    <select
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                    >
                      <option value="">Select location</option>
                      <option value="Kerala, India">Kerala, India</option>
                      <option value="Dubai, UAE">Dubai, UAE</option>
                      <option value="Remote">Remote</option>
                     
                    </select>
                  </div>

                  <div className="cap-form-group">
                    <label htmlFor="resume">Resume (Optional for now)</label>
                    <input
                      type="file"
                      id="resume"
                      name="resume"
                      onChange={handleInputChange}
                      accept=".pdf,.doc,.docx"
                    />
                  </div>

                  <div className="cap-form-group">
                    <label htmlFor="coverLetter">Cover Letter / Why do you want to work with us? *</label>
                    <textarea
                      id="coverLetter"
                      name="coverLetter"
                      value={formData.coverLetter}
                      onChange={handleInputChange}
                      rows={5}
                      required
                      placeholder="Tell us why you're interested in this position and why you want to work with Capricorn Elevators..."
                    ></textarea>
                  </div>

                  <button type="submit" className="cap-submit-button" disabled={isSubmitting || phoneError}>
                    {isSubmitting ? (
                      <>
                        <div className="cap-spinner"></div>
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Application
                        <Send size={18} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;