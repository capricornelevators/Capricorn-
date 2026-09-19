'use client';
import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import logo from '../assets/logo1.png';
import brochurePdf from '../assets/images/Brochure. Capricorn.PDF';
import BrochureModal from './BrochureModal';
import './Header.css';

const Header = ({ onOpenBrochure }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);

  const handleBrochureClick = (e) => {
    e.preventDefault();
    closeMenu();
    if (onOpenBrochure) {
      onOpenBrochure();
    } else {
      setIsBrochureModalOpen(true);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const heroHeight = window.innerHeight; // Hero section is 100vh
      setIsScrolled(scrollTop >= heroHeight - 100); // Change when hero section ends (100px before for smooth transition)
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (activeDropdown && !event.target.closest('.nav-dropdown') && !event.target.closest('.mobile-dropdown')) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [activeDropdown]);

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMenuOpen) {
        setIsMenuOpen(false);
        setActiveDropdown(null);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  const closeDropdowns = () => {
    setActiveDropdown(null);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    closeDropdowns();
  };

  const toggleMobileDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <>
      <header className={`header ${isScrolled ? 'header-scrolled' : ''} ${isMenuOpen ? 'header-menu-open' : ''}`}>
        <div className="header-container">
          <div className="header-content">
            <Link href="/" className="header-logo" onClick={closeMenu}>
              <div className="logo-container">
                <img
                  src={logo?.src || logo}
                  alt="Capricorn Elevators"
                  className="logo-image"
                />
              </div>
            </Link>

            <nav className="header-nav">
              <Link href="/" className="nav-link" onClick={closeMenu}>
                Home
              </Link>

              <Link href="/about" className="nav-link" onClick={closeMenu}>
                About
              </Link>

              {/* Products Dropdown */}
              <div className="nav-dropdown">
                <button
                  className="nav-dropdown-trigger"
                  onClick={() => {
                    setActiveDropdown(activeDropdown === 'products' ? null : 'products');
                  }}
                >
                  Products
                  <ChevronDown
                    size={14}
                    className={`dropdown-icon ${activeDropdown === 'products' ? 'rotated' : ''}`}
                  />
                </button>
                {activeDropdown === 'products' && (
                  <div className="nav-dropdown-menu">
                    <Link href="/products/home" className="dropdown-item" onClick={() => setActiveDropdown(null)}>
                      Home Lifts
                    </Link>
                    <Link href="/products/commercial" className="dropdown-item" onClick={() => setActiveDropdown(null)}>
                      Commercial
                    </Link>
                  </div>
                )}
              </div>

              <Link href="/services" className="nav-link" onClick={closeMenu}>
                Services
              </Link>
              <Link href="/gallery" className="nav-link" onClick={closeMenu}>
                Gallery
              </Link>

              <Link href="/contact" className="nav-link" onClick={closeMenu}>
                Contact
              </Link>

              <Link href="/careers" className="nav-link" onClick={closeMenu}>
                Careers
              </Link>

              <button
                type="button"
                className="nav-link header-brochure-link"
                onClick={handleBrochureClick}
              >
                View Catalogue
              </button>
            </nav>

            <button
              className="mobile-menu-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mobile-menu">
            <div className="mobile-menu-header">
              <Link href="/" className="mobile-logo-link" onClick={closeMenu}>
                <div className="mobile-logo-pill">
                  <img
                    src={logo?.src || logo}
                    alt="Capricorn Elevators"
                    className="mobile-logo-image"
                  />
                </div>
              </Link>
              <button
                className="mobile-close-btn"
                onClick={closeMenu}
                aria-label="Close mobile menu"
              >
                <X size={24} />
              </button>
            </div>

            <div className="mobile-menu-body">
              <nav className="mobile-nav-list">
                <Link href="/" className="mobile-nav-item" onClick={closeMenu}>
                  <span>Home</span>
                  <ArrowRight size={22} className="mobile-item-arrow" />
                </Link>

                <Link href="/about" className="mobile-nav-item" onClick={closeMenu}>
                  <span>About</span>
                  <ArrowRight size={22} className="mobile-item-arrow" />
                </Link>

                <div className="mobile-dropdown">
                  <button
                    className="mobile-dropdown-trigger"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      toggleMobileDropdown('products');
                    }}
                  >
                    <span className="mobile-dropdown-title">Products</span>
                    <ChevronDown
                      size={22}
                      className={`mobile-dropdown-icon ${activeDropdown === 'products' ? 'rotated' : ''}`}
                    />
                  </button>
                  {activeDropdown === 'products' && (
                    <div className="mobile-dropdown-items">
                      <Link href="/products/home" className="mobile-sub-item" onClick={closeMenu}>
                        <span>Home Lifts</span>
                        <ArrowRight size={18} />
                      </Link>
                      <Link href="/products/commercial" className="mobile-sub-item" onClick={closeMenu}>
                        <span>Commercial</span>
                        <ArrowRight size={18} />
                      </Link>
                    </div>
                  )}
                </div>

                <Link href="/services" className="mobile-nav-item" onClick={closeMenu}>
                  <span>Services</span>
                  <ArrowRight size={22} className="mobile-item-arrow" />
                </Link>

                <Link href="/gallery" className="mobile-nav-item" onClick={closeMenu}>
                  <span>Gallery</span>
                  <ArrowRight size={22} className="mobile-item-arrow" />
                </Link>

                <Link href="/contact" className="mobile-nav-item" onClick={closeMenu}>
                  <span>Contact</span>
                  <ArrowRight size={22} className="mobile-item-arrow" />
                </Link>

                <Link href="/careers" className="mobile-nav-item" onClick={closeMenu}>
                  <span>Careers</span>
                  <ArrowRight size={22} className="mobile-item-arrow" />
                </Link>
              </nav>

              <div className="mobile-menu-footer">
                <button
                  type="button"
                  className="mobile-catalogue-btn"
                  onClick={handleBrochureClick}
                >
                  <span>View Catalogue</span>
                  <ArrowRight size={20} />
                </button>

                <div className="mobile-social-links">
                  <a href="https://www.linkedin.com/company/capricornelevators" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  <a href="https://www.instagram.com/capricornelevators/?igsh=bXNtemo1bmtvNTNm#" target="_blank" rel="noopener noreferrer">Instagram</a>
                  <a href="https://www.youtube.com/@capricornelevators" target="_blank" rel="noopener noreferrer">YouTube</a>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      <BrochureModal
        isOpen={isBrochureModalOpen}
        onClose={() => setIsBrochureModalOpen(false)}
      />
    </>
  );
};

export default Header;