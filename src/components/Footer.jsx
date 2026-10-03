'use client';
import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import logo from '../assets/logo1.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <Link href="/" className="footer-logo">
              <div className="footer-logo-container">
                <img 
                  src={logo?.src || logo} 
                  alt="Capricorn Elevators" 
                  className="footer-logo-image"
                />
              </div>
              <span className="footer-logo-text">Capricorn Elevators</span>
            </Link>
            <p className="footer-description">
              Elevating experiences with premium elevator solutions. 
              Your trusted partner for reliable, safe, and stylish vertical transportation.
            </p>
            <div className="footer-social">
              <a href="https://www.facebook.com/people/Capricorn-Elevators/61578797188516/?mibextid=wwXIfr&rdid=LiNpFQ4qUqCO9aRq&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18Sc67Jroc%2F%3Fmibextid%3DwwXIfr" className="social-link" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <Facebook size={18} />
              </a>
              <a href="https://www.instagram.com/capricornelevators/?igsh=bXNtemo1bmtvNTNm#" className="social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <Instagram size={18} />
              </a>
              <a href="https://www.linkedin.com/company/capricornelevators" className="social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <Linkedin size={18} />
              </a>
              <a href="https://www.youtube.com/@capricornelevators" className="social-link" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <div className="footer-links">
              <Link href="/" className="footer-link">Home</Link>
              <Link href="/about" className="footer-link">About Us</Link>
             
              <Link href="/services" className="footer-link">Services</Link>
              <Link href="/contact" className="footer-link">Contact</Link>
              <Link href="/careers" className="footer-link">Careers</Link>
            </div>
          </div>

          {/* Products */}
          <div className="footer-section">
            <h3 className="footer-title">Lifts We Supply</h3>
            <div className="footer-links">
              <Link href="/home-lifts/" className="footer-link">Home Lifts</Link>
              <Link href="/passenger-lifts/" className="footer-link">Passenger Lifts</Link>
              <Link href="/hospital-lifts/" className="footer-link">Hospital Lifts</Link>
              <Link href="/capsule-lifts/" className="footer-link">Capsule Lifts</Link>
              <Link href="/glass-lifts/" className="footer-link">Glass Lifts</Link>
              <Link href="/goods-lifts/" className="footer-link">Goods Lifts</Link>
              <Link href="/dumbwaiters/" className="footer-link">Dumbwaiters</Link>
              <Link href="/hydraulic-lifts/" className="footer-link">Hydraulic Lifts</Link>
              <Link href="/wheelchair-lifts/" className="footer-link">Wheelchair Lifts</Link>
            </div>
          </div>

          {/* Service and price pages. These were only reachable from the sitemap
              before, which gave them almost no internal link equity. */}
          <div className="footer-section">
            <h3 className="footer-title">Service &amp; Pricing</h3>
            <div className="footer-links">
              <Link href="/elevator-amc/" className="footer-link">Elevator AMC</Link>
              <Link href="/elevator-modernization/" className="footer-link">Modernization</Link>
              <Link href="/home-lift-price-kerala/" className="footer-link">Home Lift Price in Kerala</Link>
              <Link href="/products/home" className="footer-link">Home Elevator Range</Link>
              <Link href="/products/commercial" className="footer-link">Commercial Range</Link>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Where We Work</h3>
            <div className="footer-links">
              <Link href="/elevator-company-in-kochi/" className="footer-link">Kochi</Link>
              <Link href="/elevator-company-in-thiruvananthapuram/" className="footer-link">Thiruvananthapuram</Link>
              <Link href="/elevator-company-in-kozhikode/" className="footer-link">Kozhikode</Link>
              <Link href="/elevator-company-in-thrissur/" className="footer-link">Thrissur</Link>
              <Link href="/elevator-company-in-kollam/" className="footer-link">Kollam</Link>
              <Link href="/elevator-company-in-kannur/" className="footer-link">Kannur</Link>
              <Link href="/elevator-company-in-alappuzha/" className="footer-link">Alappuzha</Link>
              <Link href="/elevator-company-in-palakkad/" className="footer-link">Palakkad</Link>
              <Link href="/elevator-company-in-kottayam/" className="footer-link">Kottayam</Link>
              <Link href="/elevator-company-in-malappuram/" className="footer-link">Malappuram</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3 className="footer-title">Contact Info</h3>
            <div className="footer-contact">
              <div className="contact-item">
                <div className="contact-icon">
                  <Phone size={16} />
                </div>
                <span>+91 7593 000 222</span>
                
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <Mail size={16} />
                </div>
                <span>info@capricornelevators.com</span>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <MapPin size={16} />
                </div>
                <span>Unit 03, 11th Floor, Jomer Symphony, Ponnurunni East, Vyttila, Ernakulam, Kerala 682028</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              © 2025 Capricorn Elevators. All rights reserved.
            </p>
            <div className="footer-legal">
              <Link href="/privacy" className="legal-link">Privacy Policy</Link>
              <Link href="/terms" className="legal-link">Terms & Conditions</Link>
             
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;