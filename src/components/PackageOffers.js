"use client";

import Image from "next/image";
import InView from "./InView";

export default function PackageOffers() {
  const packageData = [
    {
      id: 1,
      title: "Signature Series - 1 BHK - 5.5L",
      price: "5.5",
      unit: "Lakhs",
      description: "Smart and budget-friendly complete 1 BHK home interior design package with premium finishes.",
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
      title: "Elite Series - 2 BHK - 7.8L",
      price: "7.8",
      unit: "Lakhs",
      description: "Elegant and highly customized 2 BHK home interior package with modular units and space-saving solutions.",
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
      title: "Zenith Series - 3 BHK - 10.6L",
      price: "10.6",
      unit: "Lakhs",
      description: "Luxury and ultra-premium 3 BHK design package featuring bespoke materials, custom layouts, and luxury finishes.",
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

        {/* Infinite Scrolling Marquee Banner with Enquiry Button */}
        <div className="running-text-banner-wrapper">
          <div className="running-text-marquee">
            <div className="marquee-content">
              <span>Customizable Designs Package Available</span>
              <span>•</span>
              <span>Customizable Designs Package Available</span>
              <span>•</span>
              <span>Customizable Designs Package Available</span>
              <span>•</span>
              <span>Customizable Designs Package Available</span>
              <span>•</span>
              <span>Customizable Designs Package Available</span>
              <span>•</span>
              <span>Customizable Designs Package Available</span>
              <span>•</span>
              <span>Customizable Designs Package Available</span>
              <span>•</span>
              <span>Customizable Designs Package Available</span>
              <span>•</span>
            </div>
          </div>
          <button 
            onClick={() => window.dispatchEvent(new CustomEvent("open-consultation-popup"))}
            className="marquee-enquiry-btn"
            suppressHydrationWarning
          >
            Enquiry
          </button>
        </div>
      </InView>
    </section>
  );
}

function PackageCard({ pkg, index }) {
  // Stagger reveal delay classes
  const delayClass = index === 0 ? "delay-100" : index === 1 ? "delay-200" : "delay-300";

  return (
    <InView
      className={`package-card reveal-up ${delayClass}`}
      threshold={0.15}
      role="article"
      aria-label={`Package: ${pkg.title}`}
    >
      <div className="package-image-wrapper">
        <Image
          src={pkg.coverImage}
          alt={pkg.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 30vw"
          className="package-image active"
          style={{ objectFit: "cover" }}
          priority={index === 0}
        />

        <div className="image-gradient-overlay" />

        <div className="offer-badge">
          <span>OFFER</span>
        </div>
      </div>

      <div className="package-content">
        <h3 className="package-title">{pkg.title}</h3>
        <div className="package-price-wrapper">
          <span className="price-label">OFFER</span>
          <div className="price-group">
            <span className="package-price">₹{pkg.price}</span>
            <span className="package-unit">{pkg.unit}</span>
          </div>
        </div>
        <p className="package-description">{pkg.description}</p>
        <button 
          onClick={(e) => {
            e.stopPropagation();
            window.dispatchEvent(new CustomEvent("open-consultation-popup"));
          }}
          className="package-cta"
          suppressHydrationWarning
        >
          {pkg.ctaText}
          <i className="bi bi-arrow-right" />
        </button>
      </div>
    </InView>
  );
}
