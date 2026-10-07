'use client';
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Maximize2, ChevronLeft, ChevronRight, X, Play } from 'lucide-react';
import { galleryCategories, galleryItems } from '../data/galleryData';
import './GallerySection.css';

const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Filter items based on active category
  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  // Group items into alternating column pattern:
  // [1 full-height card] -> [2 stacked cards (top & bottom)] -> [1 full-height card] ...
  const groupItemsIntoColumns = (items) => {
    if (!items || items.length === 0) return [];
    
    // For 2 items (like Testimonials tab), present both as full-height vertical cards side-by-side
    if (items.length === 2) {
      return [
        { id: 'col-0', type: 'full', items: [items[0]] },
        { id: 'col-1', type: 'full', items: [items[1]] }
      ];
    }

    const cols = [];
    let i = 0;
    let expectFull = true;

    while (i < items.length) {
      if (expectFull) {
        cols.push({ id: `col-${cols.length}`, type: 'full', items: [items[i]] });
        i += 1;
        expectFull = false;
      } else {
        if (i + 1 < items.length) {
          cols.push({ id: `col-${cols.length}`, type: 'stacked', items: [items[i], items[i + 1]] });
          i += 2;
        } else {
          cols.push({ id: `col-${cols.length}`, type: 'full', items: [items[i]] });
          i += 1;
        }
        expectFull = true;
      }
    }
    return cols;
  };

  const columns = groupItemsIntoColumns(filteredItems);

  // Lightbox Navigation
  const openLightbox = (item) => {
    const itemIdx = filteredItems.findIndex(i => i.id === item.id);
    setLightboxIndex(itemIdx !== -1 ? itemIdx : 0);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    document.body.style.overflow = 'unset';
  }, []);

  const nextImage = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
  }, [lightboxIndex, filteredItems.length]);

  const prevImage = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  }, [lightboxIndex, filteredItems.length]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, closeLightbox, nextImage, prevImage]);

  // Touch Swipe for Mobile Lightbox
  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) {
      nextImage();
    } else if (distance < -50) {
      prevImage();
    }
  };

  const currentItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  // Render individual card
  const renderCard = (item, isStacked = false) => {
    if (!item) return null;
    return (
      <div
        key={item.id}
        className={`site-gallery-card ${isStacked ? 'card-stacked' : 'card-full'} ${item.type || 'image'}`}
        onClick={() => openLightbox(item)}
      >
        <img
          src={item.image?.src || item.image}
          alt={item.title}
          className="site-gallery-img"
          loading="lazy"
        />
        
        {/* Center Play Icon for Video Cards */}
        {item.type === 'video' && (
          <div className="site-gallery-center-play" aria-label="Play Video">
            <div className="site-gallery-play-btn">
              <Play size={26} fill="#d4b347" className="site-gallery-play-icon" />
            </div>
          </div>
        )}

        {/* Hover Overlay with Tag, Title, and Expand Icon */}
        <div className="site-gallery-overlay">
          <div className="site-gallery-card-content">
            <span className="site-gallery-card-tag">{item.category.toUpperCase()}</span>
            <p className="site-gallery-card-title">{item.title}</p>
          </div>
          <div className="site-gallery-expand-icon">
            {item.type === 'video' ? <Play size={20} fill="#000000" /> : <Maximize2 size={18} />}
          </div>
        </div>
      </div>
    );
  };

  // Render a column unit (either 1 full-height card or 2 stacked cards)
  const renderColumn = (col, uniqueKey) => {
    if (col.type === 'full') {
      return (
        <div key={uniqueKey} className="gallery-col gallery-col-full">
          {renderCard(col.items[0], false)}
        </div>
      );
    }
    return (
      <div key={uniqueKey} className="gallery-col gallery-col-stacked">
        {renderCard(col.items[0], true)}
        {col.items[1] && renderCard(col.items[1], true)}
      </div>
    );
  };

  return (
    <section className="site-gallery-section" id="gallery-section">
      <div className="site-gallery-container">
        
        {/* Section Header */}
        <div className="site-gallery-header" data-aos="fade-up">
          <span className="site-gallery-label">OUR WORK</span>
          <h2 className="site-gallery-title">Our Elevator Installations in Kerala</h2>
          <p className="site-gallery-subtitle">
            Explore our portfolio of signature residential, commercial, and panoramic elevator installations.
          </p>
        </div>

        {/* Filter Pills Bar */}
        <div className="site-gallery-tabs" data-aos="fade-up" data-aos-delay="100">
          {galleryCategories.map((cat) => (
            <button
              key={cat.id}
              className={`site-gallery-tab ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* TAB CONTENT: Marquee ONLY for 'ALL', Fixed/Stationary for all other tabs */}
        {activeCategory === 'all' ? (
          <div className="gallery-marquee-container" key="marquee-container">
            <div className="gallery-marquee-track">
              {[0, 1].map((loopIdx) => (
                <div
                  key={`loop-${loopIdx}`}
                  className="gallery-marquee-set"
                  aria-hidden={loopIdx === 1 ? 'true' : undefined}
                >
                  {columns.map((col, cIdx) => renderColumn(col, `marquee-${loopIdx}-${cIdx}`))}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="gallery-fixed-container" key={`fixed-${activeCategory}`}>
            <div className="gallery-fixed-track">
              {columns.map((col, cIdx) => renderColumn(col, `fixed-${activeCategory}-${cIdx}`))}
            </div>
          </div>
        )}
      </div>

      {/* FULL-SCREEN LIGHTBOX MODAL */}
      {currentItem && (
        <div
          className="site-lightbox-backdrop"
          onClick={closeLightbox}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="site-lightbox-container" onClick={(e) => e.stopPropagation()}>
            <button className="site-lightbox-close" onClick={closeLightbox} aria-label="Close Lightbox">
              <X size={24} />
            </button>

            <button className="site-lightbox-nav prev" onClick={prevImage} aria-label="Previous Image">
              <ChevronLeft size={28} />
            </button>

            <div className="site-lightbox-content">
              {currentItem.type === 'video' && currentItem.videoUrl ? (
                <video
                  src={currentItem.videoUrl?.src || currentItem.videoUrl}
                  controls
                  autoPlay
                  playsInline
                  className="site-lightbox-img"
                  style={{ maxHeight: '75vh', width: '100%', borderRadius: '12px' }}
                />
              ) : (
                <img
                  src={currentItem.image?.src || currentItem.image}
                  alt={currentItem.title}
                  className="site-lightbox-img"
                />
              )}
              <div className="site-lightbox-caption">
                <span className="site-lightbox-tag">{currentItem.category.toUpperCase()}</span>
                <h3 className="site-lightbox-title">{currentItem.title}</h3>
                <span className="site-lightbox-counter">
                  {lightboxIndex + 1} / {filteredItems.length}
                </span>
              </div>
            </div>

            <button className="site-lightbox-nav next" onClick={nextImage} aria-label="Next Image">
              <ChevronRight size={28} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
