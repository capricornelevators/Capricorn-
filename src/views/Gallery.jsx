'use client';
import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import AOS from 'aos';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'aos/dist/aos.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BrochureModal from '../components/BrochureModal';
import GallerySection from '../components/GallerySection';
import './Gallery.css';

// Import assets
import galleryHeroVideo from '../assets/about.mp4';
import galleryPosterImage from '../assets/3.jpeg';

const Gallery = () => {
  // States
  const [scrollY, setScrollY] = useState(0);
  const [heroVisible, setHeroVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);

  // Refs
  const heroRef = useRef(null);
  const videoRef = useRef(null);

  // Register GSAP plugins
  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }
  }, []);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Initialize effects
  useEffect(() => {
    if (!isMobile) {
      AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        mirror: false,
        offset: 50
      });
    } else {
      AOS.init({ disable: true });
    }

    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Video autoplay failed:', error);
      });
    }

    const tl = gsap.timeline({ delay: 0.5 });
    tl.fromTo('.gallery-hero-content',
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    const heroObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setHeroVisible(true);
      }
    }, { threshold: 0.1, rootMargin: '50px' });

    if (heroRef.current) heroObserver.observe(heroRef.current);

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
      heroObserver.disconnect();
      AOS.refresh();
    };
  }, [isMobile]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="gallery-page">
      <Header onOpenBrochure={() => setIsBrochureOpen(true)} />

      {/* Hero Section with Video Background */}
      <section
        ref={heroRef}
        className={`gallery-hero-section ${heroVisible ? 'visible' : ''}`}
      >
        <div className="gallery-video-container">
          <video
            poster={galleryPosterImage?.src || galleryPosterImage}
            preload="metadata"
            ref={videoRef}
            className="gallery-hero-video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src={galleryHeroVideo?.src || galleryHeroVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="gallery-video-overlay"></div>
        </div>

        <div
          className="gallery-hero-content"
          style={{
            transform: isMobile ? 'none' : `translateY(${scrollY * -0.2}px)`,
            opacity: isMobile ? 1 : Math.max(0, 1 - scrollY / 600)
          }}
        >
          <div className="gallery-hero-badge">
            <span className="gallery-hero-subtitle">Project Gallery</span>
          </div>
          <h1 className="gallery-hero-title">
            <span className="title-line-1">Elevator Installations</span>
            <span className="title-line-2">Across Kerala</span>
          </h1>
          <p className="gallery-hero-description">
            Explore our portfolio of premium elevator installations across residential,
            commercial, and specialized projects. Each project represents our commitment
            to excellence, innovation, and customer satisfaction.
          </p>
        </div>

        <div className="scroll-indicator-gallery">
          <ChevronDown size={28} />
        </div>
      </section>

      {/* Gallery Section with Category Filters & Masonry Grid */}
      <GallerySection />

      {/* Brochure Modal */}
      <BrochureModal
        isOpen={isBrochureOpen}
        onClose={() => setIsBrochureOpen(false)}
      />

      <Footer />
    </div>
  );
};

export default Gallery;