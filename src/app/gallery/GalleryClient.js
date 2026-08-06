"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InView from "@/components/InView";
import { LuX, LuChevronLeft, LuChevronRight, LuZoomIn } from "react-icons/lu";
import "./gallery.css";

export default function GalleryClient() {
  const categories = [
    "All",
    "Modular Kitchen",
    "Living Room",
    "Bedroom",
    "False Ceiling",
    "Wardrobes",
    "Villas & Apartments"
  ];

  const bannerCards = [
    {
      id: "kitchen-banner",
      label: "Featured Space",
      title: "Modular <span>Kitchens</span>",
      desc: "Sleek, ergonomic, and customized modular kitchens designed for modern culinary experiences.",
      cta: "Explore Kitchens",
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "living-banner",
      label: "Luxury Living",
      title: "Living & <span>Bedrooms</span>",
      desc: "Warm, welcoming living rooms and serene bedrooms tailored for ultimate comfort and custom aesthetics.",
      cta: "Explore Rooms",
      image: "/gallery/bedroom1.jpeg",
    },
    {
      id: "bespoke-banner",
      label: "Bespoke Designs",
      title: "Villas & <span>Apartments</span>",
      desc: "Grand bespoke villa architecture, false ceilings, and smart storage wardrobes matching your lifestyle.",
      cta: "Explore Architecture",
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const galleryImages = [
    // Kitchens
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
      category: "Modular Kitchen",
      title: "Modern Matte Charcoal Modular Kitchen",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=800&q=80",
      category: "Modular Kitchen",
      title: "Contemporary Oak & Marble Kitchen",
    },
    {
      id: 3,
      src: "/hero/modular-kitchen/kitchen1.png",
      category: "Modular Kitchen",
      title: "Luxury Glossy Acrylic White Kitchen",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1565183997392-2f6f122e5912?auto=format&fit=crop&w=800&q=80",
      category: "Modular Kitchen",
      title: "Minimalist Nordic Island Kitchen",
    },
    // Bedrooms
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80",
      category: "Bedroom",
      title: "Master Suite with Velvet Headboard",
    },
    {
      id: 6,
      src: "/gallery/bedroom1.jpeg",
      category: "Bedroom",
      title: "Warm Oak Accented Cozy Bedroom",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
      category: "Bedroom",
      title: "Minimalist Loft-Style Guest Bedroom",
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800&q=80",
      category: "Bedroom",
      title: "Elegant Luxury Suite with Warm Lights",
    },
    // Living Rooms
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
      category: "Living Room",
      title: "Sophisticated Mid-Century Living Room",
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
      category: "Living Room",
      title: "Plush Gray L-Sectional Lounge",
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
      category: "Living Room",
      title: "Chic Contemporary Bright Lounge",
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      category: "Living Room",
      title: "Luminous Minimalist Living Room",
    },
    // False Ceilings
    {
      id: 13,
      src: "/hero/false-ceiling/false1.png",
      category: "False Ceiling",
      title: "Linear Drop Ceiling with Cove Lighting",
    },
    {
      id: 14,
      src: "/hero/false-ceiling/false2.jpg",
      category: "False Ceiling",
      title: "Recessed Panel Lighting for Dining Halls",
    },
    {
      id: 15,
      src: "/hero/false-ceiling/false3.webp",
      category: "False Ceiling",
      title: "Modern Wooden Beam Ceiling Accent",
    },
    {
      id: 16,
      src: "/hero/false-ceiling/false4.jpg",
      category: "False Ceiling",
      title: "Minimal Geometric Drywall Multi-tier Ceiling",
    },
    // Wardrobes
    {
      id: 17,
      src: "/wordrobe1.webp",
      category: "Wardrobes",
      title: "Modern Matte Sliding Closet",
    },
    {
      id: 18,
      src: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=800&q=80",
      category: "Wardrobes",
      title: "Built-in Luxury Walk-in Wardrobe",
    },
    {
      id: 19,
      src: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80",
      category: "Wardrobes",
      title: "Minimalist Floating Glass-door Armoire",
    },
    {
      id: 20,
      src: "/wardrobe-img.jpg",
      category: "Wardrobes",
      title: "Compact Built-in Wooden Closet Setup",
    },
    // Villas & Apartments
    {
      id: 21,
      src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80",
      category: "Villas & Apartments",
      title: "Spacious Luxury Living Room in Premium Villa",
    },
    {
      id: 22,
      src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
      category: "Villas & Apartments",
      title: "Minimalist Contemporary Apartment Bedroom",
    },
    {
      id: 23,
      src: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80",
      category: "Villas & Apartments",
      title: "Stunning Double Height Open Villa Concept",
    },
    {
      id: 24,
      src: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=800&q=80",
      category: "Villas & Apartments",
      title: "Urban Chic High-Rise Penthouse Lounge",
    },
  ];

  // States
  const [activeTab, setActiveTab] = useState("All");
  const [displayCount, setDisplayCount] = useState(12);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Filtered list
  const filteredImages = galleryImages.filter(
    (img) => activeTab === "All" || img.category === activeTab
  );

  // Visible subset
  const visibleImages = filteredImages.slice(0, displayCount);

  // Reset page limit on tab change
  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
    setDisplayCount(12);
  };

  // Load more trigger
  const handleLoadMore = () => {
    setDisplayCount((prev) => Math.min(prev + 4, filteredImages.length));
  };

  // Modal navigation helpers
  const handlePrev = () => {
    setLightboxIndex((prev) => (prev > 0 ? prev - 1 : filteredImages.length - 1));
  };

  const handleNext = () => {
    setLightboxIndex((prev) => (prev < filteredImages.length - 1 ? prev + 1 : 0));
  };

  // Keyboard controls
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) => (prev > 0 ? prev - 1 : filteredImages.length - 1));
      }
      if (e.key === "ArrowRight") {
        setLightboxIndex((prev) => (prev < filteredImages.length - 1 ? prev + 1 : 0));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredImages.length]);

  return (
    <div className="app-wrapper">
      <div className="app-canvas" style={{ backgroundColor: "var(--primary-color)" }}>
        <Navbar />

        <main className="flex-grow-1 gallery-page-container">
          {/* Gallery Header */}
          <section className="gallery-hero">
            <div className="gallery-hero-pattern" />
            <div className="container py-5 position-relative" style={{ zIndex: 2 }}>
              <InView className="reveal-up" threshold={0.1}>
                <span className="gallery-hero-subtitle">Welcome to the Kingsford Gallery</span>
                <h1 className="gallery-hero-title">
                  Gallery
                </h1>
                <div
                  style={{
                    width: "80px",
                    height: "2px",
                    backgroundColor: "var(--primary-color)",
                    margin: "1.5rem 0",
                  }}
                />
                
                <p className="text-white-50" style={{ maxWidth: "800px", fontSize: "1.05rem", lineHeight: "1.7" }}>
                  Explore our collection of completed interior design projects, showcasing our creativity, craftsmanship, and attention to detail. From modular kitchens and living rooms to bedrooms, false ceilings, and complete home interiors, our gallery highlights the quality and excellence we bring to every project.
                </p>
              </InView>
            </div>
          </section>

          {/* Core Content (White background - using dark text class for visibility) */}
          <section className="gallery-section-padding">
            <div className="container-fluid px-md-5" style={{ maxWidth: "1600px" }}>

              {/* Category Cards Section */}
              <InView className="reveal-up" threshold={0.1}>
                <h2 className="gallery-section-title">Our Featured Projects</h2>
                {/* Changed text-white-50 to text-muted (dark text on white page background) */}
                <p className="text-muted text-center mx-auto mb-5" style={{ maxWidth: "700px", fontSize: "1rem", lineHeight: "1.6" }}>
                  Each project reflects our commitment to creating beautiful, functional, and customized spaces that match our clients&apos; lifestyles and preferences.
                </p>
              </InView>

              <div className="category-banners-grid">
                {bannerCards.map((card, idx) => (
                  <InView
                    key={card.id}
                    className="reveal-up"
                    style={{ transitionDelay: `${idx * 0.1}s` }}
                    threshold={0.1}
                  >
                    <div className="category-banner-card">
                      <div className="category-banner-bg">
                        <Image
                          src={card.image}
                          alt={card.id}
                          fill
                          sizes="(max-width: 992px) 100vw, 33vw"
                          className="object-fit-cover"
                          priority={idx === 0}
                        />
                      </div>
                      <div className="category-banner-overlay" />
                      <div className="category-banner-content">
                        <span className="category-banner-label">{card.label}</span>
                        <h3
                          className="category-banner-title"
                          dangerouslySetInnerHTML={{ __html: card.title }}
                        />
                        <p className="category-banner-desc">{card.desc}</p>
                        <button 
                          className="category-banner-btn"
                          onClick={() => {
                            let tabName = "All";
                            if (card.title.includes("Kitchen")) tabName = "Modular Kitchen";
                            else if (card.title.includes("Living")) tabName = "Living Room";
                            else if (card.title.includes("Villa")) tabName = "Villas & Apartments";
                            handleTabChange(tabName);
                            const target = document.querySelector("#photo-gallery-showcase");
                            if (target) target.scrollIntoView({ behavior: "smooth" });
                          }}
                        >
                          {card.cta}
                        </button>
                      </div>
                    </div>
                  </InView>
                ))}
              </div>

              {/* Transform Your Space with Kingsford - Smooth Transition Card before Gallery heading */}
              <InView className="reveal-up my-5" threshold={0.1}>
                <div 
                  className="mx-auto p-5 rounded-5 transition-all duration-300"
                  style={{
                    maxWidth: "1000px",
                    background: "linear-gradient(135deg, rgba(217, 203, 164, 0.15) 0%, rgba(217, 203, 164, 0.05) 100%)",
                    border: "1px solid rgba(217, 203, 164, 0.35)",
                    boxShadow: "0 10px 30px rgba(217, 203, 164, 0.08)",
                    textAlign: "center"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow = "0 18px 40px rgba(217, 203, 164, 0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 10px 30px rgba(217, 203, 164, 0.08)";
                  }}
                >
                  <h3 className="fw-bold mb-3" style={{ color: "var(--secondary-color)", fontFamily: "var(--font-cormorant), serif", fontSize: "2.1rem" }}>
                    Transform Your Space with Kingsford
                  </h3>
                  <p className="mx-auto mb-4" style={{ color: "var(--text-body)", maxWidth: "800px", fontSize: "1.05rem", lineHeight: "1.7" }}>
                    Browse our gallery for inspiration and discover how Kingsford can bring your dream interiors to life. Contact us today to discuss your interior design requirements and start your transformation journey.
                  </p>
                  <Link 
                    href="/#contact" 
                    className="btn px-4 py-2.5 rounded-pill"
                    style={{ 
                      backgroundColor: "var(--secondary-color)", 
                      color: "var(--primary-color)", 
                      fontWeight: "700", 
                      fontSize: "0.85rem",
                      letterSpacing: "0.08em"
                    }}
                  >
                    START YOUR TRANSFORMATION
                  </Link>
                </div>
              </InView>

              {/* Photos Gallery Showcase */}
              <InView id="photo-gallery-showcase" className="reveal-up" threshold={0.1}>
                <div className="gallery-divider-header">
                  <div className="gallery-divider-line" />
                  <h2 className="gallery-divider-text">
                    Interior <span className="fw-bold">Gallery</span>
                  </h2>
                  <div className="gallery-divider-line" />
                </div>
              </InView>

              {/* Filter Tabs */}
              <div className="gallery-tabs">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => handleTabChange(cat)}
                    className={`gallery-tab-btn ${activeTab === cat ? "active" : ""}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Images Grid */}
              <div className="gallery-images-grid">
                {visibleImages.map((img, idx) => (
                  <InView
                    key={img.id}
                    className="gallery-image-card reveal-up"
                    style={{ transitionDelay: `${(idx % 4) * 0.08}s` }}
                    threshold={0.1}
                    onClick={() => setLightboxIndex(idx)}
                  >
                    <div className="gallery-image-wrap">
                      <Image
                        src={img.src}
                        alt={img.title}
                        fill
                        sizes="(max-width: 576px) 100vw, (max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                        className="object-fit-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="gallery-image-overlay">
                      <div className="gallery-zoom-icon">
                        <LuZoomIn size={22} />
                      </div>
                    </div>
                  </InView>
                ))}
              </div>

              {/* Load More Button */}
              {displayCount < filteredImages.length && (
                <div className="gallery-actions">
                  <button onClick={handleLoadMore} className="gallery-load-btn">
                    Load More Photos
                  </button>
                </div>
              )}
            </div>
          </section>
        </main>

        <Footer />

        {/* Lightbox Modal Portal */}
        {lightboxIndex !== null && (
          <div className="lightbox-overlay" onClick={() => setLightboxIndex(null)}>
            <button className="lightbox-close-btn" onClick={() => setLightboxIndex(null)}>
              <LuX size={32} />
            </button>

            <button
              className="lightbox-nav-btn lightbox-nav-prev"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
            >
              <LuChevronLeft size={30} />
            </button>

            <div className="lightbox-image-container" onClick={(e) => e.stopPropagation()}>
              <Image
                src={filteredImages[lightboxIndex].src}
                alt={filteredImages[lightboxIndex].title}
                fill
                className="lightbox-img"
                priority
              />
              <span className="lightbox-index-badge">
                {lightboxIndex + 1} / {filteredImages.length}
              </span>
            </div>

            <button
              className="lightbox-nav-btn lightbox-nav-next"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
            >
              <LuChevronRight size={30} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
