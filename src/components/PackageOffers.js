"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import InView from "./InView";

export default function PackageOffers() {
  const packageData = [
    {
      id: 1,
      title: "Living Room Interior Design",
      price: "15.84",
      unit: "Lakhs",
      description: "Create an inviting living room with stylish layouts, lighting, and décor elements.",
      ctaText: "Book Consultation",
      coverImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
      sliderImages: [
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80",
      ],
    },
    {
      id: 2,
      title: "Bedroom Interior Design",
      price: "11.41",
      unit: "Lakhs",
      description: "Design comfortable and luxurious bedrooms with smart storage and customized interiors.",
      ctaText: "Book Consultation",
      coverImage: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
      sliderImages: [
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80",
      ],
    },
    {
      id: 3,
      title: "Modular Kitchen Design",
      price: "24.03",
      unit: "Lakhs",
      description: "Create modular kitchens that combine beauty, efficiency, and ergonomic storage solutions.",
      ctaText: "Book Consultation",
      coverImage: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=800&q=80",
      sliderImages: [
        "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80",
      ],
    },
  ];

  return (
    <section id="package-offers" className="packageoffers-section">
      <InView className="packageoffers-container reveal-up" threshold={0.1}>
        {/* Heading with Shimmer Effect */}
        <div className="packageoffers-header">
          <h2 className="packageoffers-heading shimmer-text">
            Complete Home <span className="heading-accent">Interior Services</span>
          </h2>
          <p className="packageoffers-subtitle">
            From living rooms and bedrooms to modular kitchens, dining areas, and smart storage solutions, Kingsford creates customized interiors for every part of your home.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="packageoffers-grid">
          {packageData.map((pkg, index) => (
            <PackageCard key={pkg.id} pkg={pkg} index={index} />
          ))}
        </div>
      </InView>
    </section>
  );
}

function PackageCard({ pkg, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const intervalRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setCurrentImageIndex(1);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCurrentImageIndex(0);
  };

  // Auto-sliding hover timer
  useEffect(() => {
    if (isHovered) {
      intervalRef.current = setInterval(() => {
        setCurrentImageIndex((prevIndex) => {
          const nextIndex = prevIndex + 1;
          if (nextIndex >= pkg.sliderImages.length) {
            return 1; // loop back to first hover slider image
          }
          return nextIndex;
        });
      }, 1500);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovered, pkg.sliderImages.length]);

  const goToImage = (idx) => {
    setCurrentImageIndex(idx);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setCurrentImageIndex((prevIndex) => {
          const nextIndex = prevIndex + 1;
          if (nextIndex >= pkg.sliderImages.length) {
            return 1;
          }
          return nextIndex;
        });
      }, 1500);
    }
  };

  // Convert Price to INR Format Lakhs
  const formattedPrice = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(parseFloat(pkg.price) * 100000);

  // Stagger reveal delay classes
  const delayClass = index === 0 ? "delay-100" : index === 1 ? "delay-200" : "delay-300";

  return (
    <InView
      className={`package-card reveal-up ${delayClass}`}
      threshold={0.15}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="article"
      aria-label={`Package: ${pkg.title}`}
    >
      <div className="package-image-wrapper">
        {pkg.sliderImages.map((img, idx) => (
          <Image
            key={idx}
            src={img}
            alt={`${pkg.title} preview ${idx + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 30vw"
            className={`package-image ${currentImageIndex === idx ? "active" : ""}`}
            style={{ objectFit: "cover" }}
            priority={idx === 0}
          />
        ))}

        <div className="image-gradient-overlay" />

        {isHovered && pkg.sliderImages.length > 1 && (
          <div className="slider-dots" role="tablist" aria-label="Image slider navigation">
            {pkg.sliderImages.map((_, idx) => (
              <button
                key={idx}
                className={`slider-dot ${currentImageIndex === idx ? "active" : ""}`}
                onClick={(e) => {
                  e.stopPropagation();
                  goToImage(idx);
                }}
                aria-label={`View image ${idx + 1}`}
                aria-current={currentImageIndex === idx ? "true" : "false"}
              />
            ))}
          </div>
        )}

        <div className="offer-badge">
          <span>OFFER</span>
        </div>
      </div>

      <div className="package-content">
        <h3 className="package-title">{pkg.title}</h3>
        <div className="package-price-wrapper">
          <span className="price-label">OFFER</span>
          <div className="price-group">
            <span className="package-price">{formattedPrice}</span>
            <span className="package-unit">{pkg.unit}</span>
          </div>
        </div>
        <p className="package-description">{pkg.description}</p>
        <button className="package-cta">
          {pkg.ctaText}
          <i className="bi bi-arrow-right" />
        </button>
      </div>
    </InView>
  );
}
