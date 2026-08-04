"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FaqAccordion from "@/components/FaqAccordion";
import InView from "@/components/InView";
import {
  LuCheck,
  LuAward,
  LuUsers,
  LuShieldCheck,
  LuSparkles,
  LuClock,
  LuPalette,
  LuLayers,
  LuDollarSign,
  LuCompass,
  LuHouse,
  LuChefHat,
  LuPaintbrush,
  LuLayoutGrid
} from "react-icons/lu";
import DesignProcess from "@/components/DesignProcess";
import "./promo.css";

export default function PromoClient() {
  const projectsContainerRef = useRef(null);
  const testimonialsContainerRef = useRef(null);

  // Budget options
  const budgetOptions = [
    "Select Budget",
    "Below 2 Lakhs",
    "2L - 5L",
    "5L - 8L",
    "8L - 12L",
    "12L+"
  ];

  // Service options
  const serviceOptions = [
    "Select Service Required",
    "Complete Home Interior",
    "Modular Kitchen",
    "Living Room Design",
    "Bedroom Interiors",
    "False Ceiling Decor",
    "Professional Painting",
    "Space Planning",
    "Office / Commercial Interior",
    "Others"
  ];

  // Property types
  const propertyOptions = [
    "Select Property Type",
    "1 BHK Apartment",
    "2 BHK Apartment",
    "3 BHK Apartment",
    "Independent House / Villa",
    "Commercial Space",
    "Others"
  ];

  // State for top form
  const [topFormData, setTopFormData] = useState({
    name: "",
    phone: "",
    serviceRequired: "Select Service Required",
    propertyType: "Select Property Type",
    budget: "Select Budget"
  });
  const [topSubmitted, setTopSubmitted] = useState(false);
  const [topErrors, setTopErrors] = useState({});

  const validateTopForm = () => {
    const newErrors = {};
    if (!topFormData.name || topFormData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }
    const cleaned = (topFormData.phone || "").replace(/[^0-9]/g, "");
    if (cleaned.length !== 10) {
      newErrors.phone = "Phone number must be exactly 10 digits.";
    }
    if (topFormData.serviceRequired === "Select Service Required" || !topFormData.serviceRequired) {
      newErrors.serviceRequired = "Please select a service.";
    }
    setTopErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleTopSubmit = async (e) => {
    e.preventDefault();
    if (!validateTopForm()) return;
    setTopSubmitted(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: topFormData.name,
          phone: topFormData.phone,
          service: topFormData.serviceRequired,
          propertyType: topFormData.propertyType,
          budget: topFormData.budget,
          type: "Hero Quote Form"
        })
      });
    } catch (err) {
      console.error("Error submitting top lead form:", err);
    }
    setTopFormData({
      name: "",
      phone: "",
      serviceRequired: "Select Service Required",
      propertyType: "Select Property Type",
      budget: "Select Budget"
    });
    setTopErrors({});
    setTimeout(() => setTopSubmitted(false), 4000);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollProjects = (direction) => {
    if (projectsContainerRef.current) {
      const container = projectsContainerRef.current;
      const scrollAmount = container.clientWidth;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  const scrollTestimonials = (direction) => {
    if (testimonialsContainerRef.current) {
      const container = testimonialsContainerRef.current;
      const scrollAmount = container.clientWidth;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  const faqData = [
    {
      q: "How much do interiors cost?",
      a: "Pricing depends on your home size and requirements. Contact us for a free quote."
    },
    {
      q: "Do you provide 3D designs?",
      a: "Yes, every project includes a 3D design preview before execution."
    },
    {
      q: "How long will my project take?",
      a: "Most projects are completed within 6–12 weeks."
    },
    {
      q: "Do you serve all of Chennai?",
      a: "Yes, we provide interior design services across Chennai."
    },
    {
      q: "What materials do you use for wardrobes and kitchens?",
      a: "We use high-quality, water-resistant plywood (BWP/BWR grade) with premium laminate or acrylic finishes to ensure long-lasting durability."
    },
    {
      q: "Do you provide a warranty on your interior works?",
      a: "Yes! We offer a comprehensive warranty on our modular woodwork, hardware, and structural elements."
    },
    {
      q: "Can I customize the packages?",
      a: "Absolutely! All our packages are 100% customizable to suit your style, color choices, and specific layout requirements."
    }
    // {
    //   q: "What is the process to get started?",
    //   a: "Simply book a free design consultation. Our designers will discuss your ideas, create initial layouts, and share a detailed quote."
    // }
  ];

  const inclusions = [
    { title: "Space Planning", icon: LuLayoutGrid, desc: "Smart layout mapping to maximize every corner of your home." },
    { title: "Custom Interior Design", icon: LuPaintbrush, desc: "Personalized color palettes, themes, and design concepts." },
    { title: "3D Visualisation", icon: LuCompass, desc: "Photorealistic 3D rendering so you see your home before we build." },
    { title: "Material Selection", icon: LuPalette, desc: "Hands-on choice of premium wood, laminates, and finishes." },
    { title: "Professional Installation", icon: LuLayers, desc: "Flawless on-site assembly by trained expert technicians." },
    { title: "Quality Inspection", icon: LuShieldCheck, desc: "Rigorous checks ensuring structural strength and alignment." },
    { title: "Final Handover", icon: LuSparkles, desc: "Spotless deep cleaning and formal handover with warranty." }
  ];

  const recentProjects = [
    { title: "Living Room Interiors", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80" },
    { title: "Modular Kitchens", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80" },
    { title: "Bedrooms", image: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=800&q=80" },
    { title: "Villas", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80" },
    { title: "Apartments", image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80" },
    { title: "Office Interiors", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" }
  ];

  const packageData = [
    {
      id: 1,
      title: "Signature Series - 1 BHK - 5.5L",
      price: "5.5",
      unit: "Lakhs",
      description: "Smart and budget-friendly complete 1 BHK home interior design package with premium finishes.",
      ctaText: "Book Consultation",
      coverImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Elite Series - 2 BHK - 7.8L",
      price: "7.8",
      unit: "Lakhs",
      description: "Elegant and highly customized 2 BHK home interior package with modular units and space-saving solutions.",
      ctaText: "Book Consultation",
      coverImage: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Zenith Series - 3 BHK - 10.6L",
      price: "10.6",
      unit: "Lakhs",
      description: "Luxury and ultra-premium 3 BHK design package featuring bespoke materials, custom layouts, and luxury finishes.",
      ctaText: "Book Consultation",
      coverImage: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const servicesList = [
    {
      title: "Complete Home Interior",
      desc: "Transform your entire home with customized, end-to-end interior design solutions tailored to your lifestyle.",
      icon: LuHouse
    },
    {
      title: "Modular Kitchen",
      desc: "Modern, space-saving kitchen layouts engineered with high-quality hardware and premium modular finishes.",
      icon: LuChefHat
    },
    {
      title: "Wardrobe & Storage Solutions",
      desc: "Bespoke wardrobes, cupboards, and smart loft styling optimized precisely for your storage needs.",
      icon: LuLayers
    },
    {
      title: "False Ceiling Decor",
      desc: "Elegant designer ceilings with custom ambient lighting layouts, heat insulation, and premium acoustics.",
      icon: LuSparkles
    },
    {
      title: "Professional Painting",
      desc: "Flawless wall finishes, texture designs, and premium emulsion applications handled by expert painters.",
      icon: LuPaintbrush
    },
    {
      title: "Space Planning & 3D Design",
      desc: "Visualize your dream home prior to execution with realistic 3D Concept designs and spatial floor layouts.",
      icon: LuLayoutGrid
    }
  ];

  const testimonials = [
    {
      name: "Priya S.",
      location: "Chennai",
      rating: 5,
      text: "Kingsford transformed our apartment beautifully. The design was exactly what we wanted, and the entire process was smooth and hassle-free. Highly recommended!"
    },
    {
      name: "Arun K.",
      location: "Chennai",
      rating: 5,
      text: "The team understood our requirements perfectly and delivered quality interiors on time. We are very happy with the final outcome."
    },
    {
      name: "Meena R.",
      location: "Chennai",
      rating: 5,
      text: "From the first consultation to the final handover, everything was handled professionally. The designs are elegant, practical, and within our budget."
    },
    {
      name: "Karthik V.",
      location: "Chennai",
      rating: 5,
      text: "Excellent workmanship and great attention to detail. Our home looks modern, spacious, and exactly how we imagined it. Thank you, Kingsford!"
    },
    {
      name: "Divya M.",
      location: "Chennai",
      rating: 5,
      text: "Choosing Kingsford was the best decision for our home interiors. The team was friendly, responsive, and delivered a beautiful space that exceeded our expectations."
    }
  ];

  return (
    <div className="app-wrapper">
      <div className="app-canvas" style={{ backgroundColor: "var(--primary-color)", paddingTop: "5.5rem" }}>
        {/* Reusable Navbar (Conditionally hides menus on /promo) */}
        <Navbar />

        {/* Hero Section (Split Layout) */}
        <section className="promo-hero-section" id="lead-form-section">
          <div className="container" style={{ maxWidth: "1200px", padding: 0 }}>
            <div className="promo-hero-grid">

              {/* Hero Left Content */}
              <InView className="reveal-up text-start" threshold={0.1}>
                <span
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    letterSpacing: "0.2em",
                    color: "var(--primary-color)",
                    textTransform: "uppercase"
                  }}
                >
                  Interior Designers in Chennai
                </span>
                <h1 className="promo-hero-subtitle fw-bold mt-2 mb-3">
Elevate Every Corner of Your Home with Kingsford Interiors                </h1>
                <p className="promo-hero-desc mb-4">
                  Beautiful, Functional & Affordable Interiors Designed Just for You.
                </p>

                <div className="promo-checklist mb-4">
                  <div className="promo-check-item text-white">
                    <i className="bi bi-patch-check-fill" style={{ color: "var(--primary-color)" }} />
                    <span>Free Design Consultation</span>
                  </div>
                  <div className="promo-check-item text-white">
                    <i className="bi bi-patch-check-fill" style={{ color: "var(--primary-color)" }} />
                    <span>10+ Years of Experience</span>
                  </div>
                  <div className="promo-check-item text-white">
                    <i className="bi bi-patch-check-fill" style={{ color: "var(--primary-color)" }} />
                    <span>100+ Happy Clients</span>
                  </div>
                  <div className="promo-check-item text-white">
                    <i className="bi bi-patch-check-fill" style={{ color: "var(--primary-color)" }} />
                    <span>End-to-End Interior Solutions</span>
                  </div>
                </div>

                <button
                  onClick={() => scrollToSection("reusable-faq-section")}
                  className="promo-hero-cta"
                >
                  Book Your Free Consultation Today
                </button>
              </InView>

              {/* Hero Right Lead Form */}
              <InView className="reveal-up" threshold={0.1} style={{ transitionDelay: "0.1s" }}>
                <div className="promo-form-card">
                  <h3 className="promo-form-title">Get a Free Quote</h3>
                  <p className="promo-form-subtitle">Fill in details below to book session</p>

                  <form onSubmit={handleTopSubmit}>
                    <div className="promo-form-group">
                      <label htmlFor="top-name" className="promo-form-label">Name</label>
                      <input
                        id="top-name"
                        type="text"
                        className={`promo-form-input ${topErrors.name ? "is-invalid" : ""}`}
                        placeholder="Your Name"
                        required
                        value={topFormData.name}
                        onChange={(e) => setTopFormData({ ...topFormData, name: e.target.value })}
                        suppressHydrationWarning
                      />
                      {topErrors.name && <span className="promo-error-msg" style={{ color: "#dc3545", fontSize: "0.78rem", marginTop: "0.35rem", display: "block" }}>{topErrors.name}</span>}
                    </div>

                    <div className="promo-form-group">
                      <label htmlFor="top-phone" className="promo-form-label">Phone Number</label>
                      <input
                        id="top-phone"
                        type="tel"
                        className={`promo-form-input ${topErrors.phone ? "is-invalid" : ""}`}
                        placeholder="Phone Number"
                        required
                        value={topFormData.phone}
                        onChange={(e) => setTopFormData({ ...topFormData, phone: e.target.value })}
                        suppressHydrationWarning
                      />
                      {topErrors.phone && <span className="promo-error-msg" style={{ color: "#dc3545", fontSize: "0.78rem", marginTop: "0.35rem", display: "block" }}>{topErrors.phone}</span>}
                    </div>

                    <div className="promo-form-group">
                      <label htmlFor="top-service" className="promo-form-label">Service Required</label>
                      <select
                        id="top-service"
                        className={`promo-form-input ${topErrors.serviceRequired ? "is-invalid" : ""}`}
                        value={topFormData.serviceRequired}
                        onChange={(e) => setTopFormData({ ...topFormData, serviceRequired: e.target.value })}
                        suppressHydrationWarning
                      >
                        {serviceOptions.map((opt, i) => (
                          <option key={i} value={opt}>{opt}</option>
                        ))}
                      </select>
                      {topErrors.serviceRequired && <span className="promo-error-msg" style={{ color: "#dc3545", fontSize: "0.78rem", marginTop: "0.35rem", display: "block" }}>{topErrors.serviceRequired}</span>}
                    </div>

                    <div className="promo-form-group">
                      <label htmlFor="top-prop" className="promo-form-label">Property Type</label>
                      <select
                        id="top-prop"
                        className="promo-form-input"
                        value={topFormData.propertyType}
                        onChange={(e) => setTopFormData({ ...topFormData, propertyType: e.target.value })}
                        suppressHydrationWarning
                      >
                        {propertyOptions.map((opt, i) => (
                          <option key={i} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>

                    <div className="promo-form-group">
                      <label htmlFor="top-budget" className="promo-form-label">Budget</label>
                      <select
                        id="top-budget"
                        className="promo-form-input"
                        value={topFormData.budget}
                        onChange={(e) => setTopFormData({ ...topFormData, budget: e.target.value })}
                        suppressHydrationWarning
                      >
                        {budgetOptions.map((opt, i) => (
                          <option key={i} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>

                    <button type="submit" className="promo-form-btn" suppressHydrationWarning>
                      {topSubmitted ? "Consultation Booked ✓" : "Get Free Consultation"}
                    </button>
                  </form>
                </div>
              </InView>

            </div>
          </div>
        </section>

        {/* Stats Grid Section copied from About Page */}
        <section className="py-4 py-md-5" style={{ backgroundColor: "rgba(15, 32, 24, 0.03)", borderBottom: "1px solid rgba(15, 32, 24, 0.06)" }}>
          <div className="container py-2">
            <div className="row g-4 text-center">
              {[
                { value: "10+", label: "Years Experience", icon: LuAward },
                { value: "100+", label: "Satisfied Clients", icon: LuUsers },
                { value: "100%", label: "Custom Designs", icon: LuCheck },
                { value: "Chennai", label: "Core Service Area", icon: LuCompass }
              ].map((stat, idx) => {
                const Icon = stat.icon;
                const isTextVal = stat.value === "Chennai";
                return (
                  <div key={idx} className="col-6 col-md-3">
                    <InView className="reveal-up" style={{ transitionDelay: `${idx * 0.08}s` }} threshold={0.1}>
                      <div className="d-flex justify-content-center mb-1">
                        <Icon size={20} style={{ color: "var(--secondary-color)" }} />
                      </div>
                      <div
                        className="fw-bold"
                        style={{
                          fontFamily: "var(--font-outfit), sans-serif",
                          fontSize: isTextVal ? "clamp(1.4rem, 3.2vw, 2.2rem)" : "clamp(1.8rem, 4vw, 2.6rem)",
                          color: "var(--secondary-color)",
                          lineHeight: "1.1"
                        }}
                      >
                        {stat.value}
                      </div>
                      <div
                        className="text-uppercase mt-1"
                        style={{
                          fontFamily: "var(--font-inter), sans-serif",
                          fontSize: "0.68rem",
                          fontWeight: 700,
                          letterSpacing: "0.1em",
                          color: "var(--text-muted)",
                          lineHeight: "1.3"
                        }}
                      >
                        {stat.label}
                      </div>
                    </InView>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Our Interior Packages */}
        <section className="promo-section" style={{ backgroundColor: "var(--primary-color)" }}>
          <div className="container" style={{ maxWidth: "1200px", padding: 0 }}>
            <h2 className="promo-section-title">Our Interior Packages</h2>

            <div className="packageoffers-grid">
              {packageData.map((pkg, index) => {
                const delayClass = index === 0 ? "delay-100" : index === 1 ? "delay-200" : "delay-300";
                return (
                  <InView
                    key={pkg.id}
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
                          scrollToSection("reusable-faq-section");
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
              })}
            </div>
          </div>
        </section>

        {/* Our Services Section */}
        <section className="promo-section" style={{ backgroundColor: "var(--secondary-color)", padding: "5rem 5%" }}>
          <div className="container" style={{ maxWidth: "1200px", padding: 0 }}>
            <h2 className="promo-section-title text-white">Our Services</h2>

            <div className="row g-4 justify-content-center">
              {servicesList.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <div key={idx} className="col-12 col-md-6 col-lg-4">
                    <InView className="reveal-up h-100" threshold={0.1} style={{ transitionDelay: `${idx * 0.05}s` }}>
                      <div
                        className="promo-service-card p-4 h-100 d-flex flex-column gap-3 text-start"
                        style={{
                          backgroundColor: "var(--fourth-color)",
                          border: "1px solid rgba(217, 203, 164, 0.15)",
                          borderRadius: "1.5rem",
                          transition: "all 0.3s ease"
                        }}
                      >
                        <div
                          className="d-flex align-items-center justify-content-center"
                          style={{
                            width: "50px",
                            height: "50px",
                            borderRadius: "1rem",
                            backgroundColor: "rgba(217, 203, 164, 0.15)",
                            color: "var(--primary-color)",
                            border: "1px solid rgba(217, 203, 164, 0.3)"
                          }}
                        >
                          <Icon size={24} />
                        </div>
                        <h4
                          style={{
                            fontFamily: "var(--font-outfit), sans-serif",
                            fontSize: "1.25rem",
                            fontWeight: 600,
                            color: "#ffffff",
                            margin: 0
                          }}
                        >
                          {service.title}
                        </h4>
                        <p
                          style={{
                            fontFamily: "var(--font-outfit), sans-serif",
                            fontSize: "0.95rem",
                            lineHeight: "1.6",
                            color: "rgba(255, 255, 255, 0.75)",
                            margin: 0
                          }}
                        >
                          {service.desc}
                        </p>
                      </div>
                    </InView>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Kingsford? */}
        <section className="promo-section" style={{ backgroundColor: "var(--primary-color)", padding: "5rem 5%" }}>
          <div className="container" style={{ maxWidth: "1200px", padding: 0 }}>
            <div className="row g-5 align-items-center">

              {/* Left Side: Content */}
              <div className="col-12 col-lg-6 text-start">
                <InView className="reveal-up" threshold={0.1}>
                  <h2
                    className="fw-bold mb-4"
                    style={{
                      fontFamily: "var(--font-cormorant), serif",
                      fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
                      lineHeight: "1.2",
                      color: "var(--secondary-color)"
                    }}
                  >
                    Why Kingsford?
                  </h2>
                  <p
                    className="mb-4"
                    style={{
                      fontFamily: "var(--font-outfit), sans-serif",
                      fontSize: "1.1rem",
                      lineHeight: "1.8",
                      color: "var(--secondary-color)",
                      opacity: 0.85
                    }}
                  >
                    Instead of simply decorating spaces, we create interiors that match your lifestyle, maximise every corner of your home, and bring your vision to life. From the initial consultation to the final handover, our team ensures a smooth and stress-free experience with designs that are beautiful, functional, and built to last.
                  </p>
                  <button
                    onClick={() => scrollToSection("reusable-faq-section")}
                    className="promo-hero-cta"
                    style={{
                      backgroundColor: "var(--secondary-color)",
                      color: "var(--primary-color)",
                      borderColor: "var(--secondary-color)"
                    }}
                  >
                    Talk to Our Designers
                  </button>
                </InView>
              </div>

              {/* Right Side: Image */}
              <div className="col-12 col-lg-6">
                <InView className="reveal-up" threshold={0.1} style={{ transitionDelay: "0.1s" }}>
                  <div className="position-relative w-100 overflow-hidden shadow-lg" style={{ aspectRatio: "4/3", borderRadius: "1.5rem" }}>
                    <Image
                      src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80"
                      alt="Why Kingsford - Luxury Interior Design Room"
                      fill
                      sizes="(max-width: 768px) 100vw, 600px"
                      className="object-fit-cover"
                    />
                  </div>
                </InView>
              </div>

            </div>
          </div>
        </section>
        {/* What You'll Get Section */}
        <section className="promo-section" style={{ backgroundColor: "var(--secondary-color)", padding: "5rem 5%" }}>
          <div className="container" style={{ maxWidth: "1000px", padding: 0 }}>
            <h2 className="promo-section-title text-white">What You&apos;ll Get</h2>
            <p 
              className="text-center text-uppercase mb-5" 
              style={{ 
                fontFamily: "var(--font-inter), sans-serif", 
                fontSize: "0.85rem", 
                fontWeight: 700, 
                letterSpacing: "0.15em", 
                color: "var(--primary-color)" 
              }}
            >
              Every Project Includes
            </p>
            
            <div className="row g-4 justify-content-center">
              {inclusions.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="col-12 col-md-6 col-lg-4">
                    <InView className="reveal-up h-100" threshold={0.1} style={{ transitionDelay: `${idx * 0.05}s` }}>
                      <div 
                        className="d-flex flex-column gap-3 p-4 h-100"
                        style={{
                          backgroundColor: "var(--fourth-color)",
                          border: "1px solid rgba(217, 203, 164, 0.15)",
                          borderRadius: "1.25rem",
                          boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)",
                          textAlign: "left"
                        }}
                      >
                        <div className="d-flex align-items-center gap-3">
                          <div 
                            style={{ 
                              width: "36px", 
                              height: "36px", 
                              borderRadius: "50%", 
                              backgroundColor: "rgba(217, 203, 164, 0.1)", 
                              display: "flex", 
                              alignItems: "center", 
                              justifyContent: "center",
                              border: "1px solid rgba(217, 203, 164, 0.3)",
                              color: "var(--primary-color)"
                            }}
                          >
                            <Icon size={18} />
                          </div>
                          <h4 
                            style={{
                              fontFamily: "var(--font-cormorant), serif",
                              fontSize: "1.25rem",
                              fontWeight: 700,
                              color: "var(--text-on-dark-title)",
                              margin: 0
                            }}
                          >
                            {item.title}
                          </h4>
                        </div>
                        <p 
                          style={{
                            fontFamily: "var(--font-outfit), sans-serif",
                            fontSize: "0.85rem",
                            color: "var(--text-on-dark-body)",
                            opacity: 0.85,
                            margin: 0,
                            lineHeight: "1.5"
                          }}
                        >
                          {item.desc}
                        </p>
                      </div>
                    </InView>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        {/* Our Design Process Roadmap */}
        <DesignProcess />

        {/* What Our Clients Say */}
        <section className="promo-section" style={{ backgroundColor: "var(--secondary-color)" }}>
          <div className="container" style={{ maxWidth: "1200px", padding: 0 }}>
            <h2 className="promo-section-title text-white">What Our Clients Say</h2>

            {/* Carousel Container with Scroll Arrow controls */}
            <div className="position-relative">
              {/* Left Arrow */}
              <button
                onClick={() => scrollTestimonials("left")}
                className="carousel-control-lp prev"
                aria-label="Previous Testimonial"
                style={{
                  backgroundColor: "var(--primary-color)",
                  color: "var(--secondary-color)",
                  borderColor: "var(--secondary-color)"
                }}
              >
                <i className="bi bi-chevron-left" />
              </button>

              {/* Slider Track */}
              <div ref={testimonialsContainerRef} className="testimonials-carousel-track">
                {testimonials.map((t, idx) => (
                  <div key={idx} className="testimonial-carousel-item animate-fade-in-up" style={{ animationDelay: `${idx * 0.05}s` }}>
                    <div className="promo-testimonial-card h-100">
                      <div className="stars">{"★".repeat(t.rating)}</div>
                      <p className="quote-text">
                        &quot;{t.text}&quot;
                      </p>
                      <h5 className="quote-author">– {t.name}, {t.location}</h5>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Arrow */}
              <button
                onClick={() => scrollTestimonials("right")}
                className="carousel-control-lp next"
                aria-label="Next Testimonial"
                style={{
                  backgroundColor: "var(--primary-color)",
                  color: "var(--secondary-color)",
                  borderColor: "var(--secondary-color)"
                }}
              >
                <i className="bi bi-chevron-right" />
              </button>
            </div>
          </div>
        </section>

        {/* Ready to Transform Your Home? */}
        <section className="promo-section" style={{ background: "linear-gradient(rgba(15, 32, 24, 0.9), rgba(15, 32, 24, 0.9)), url('https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=1600&amp;q=80') no-repeat center center / cover", padding: "6rem 5%" }}>
          <div className="container text-center" style={{ maxWidth: "700px" }}>
            <InView className="reveal-up" threshold={0.1}>
              <h2 className="fw-bold text-white mb-2" style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "2.5rem" }}>
                Ready to Transform Your Home?
              </h2>
              <p className="text-white-50 mb-4" style={{ fontFamily: "var(--font-outfit), sans-serif" }}>
                Get expert guidance from Chennai&apos;s trusted interior designers.
              </p>

              <div className="d-flex flex-wrap justify-content-center gap-4 mb-4 text-white" style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: "0.95rem" }}>
                <span className="d-flex align-items-center gap-2"><LuCheck style={{ color: "var(--primary-color)" }} /> Free Consultation</span>
                <span className="d-flex align-items-center gap-2"><LuCheck style={{ color: "var(--primary-color)" }} /> Free Design Discussion</span>
                <span className="d-flex align-items-center gap-2"><LuCheck style={{ color: "var(--primary-color)" }} /> Custom Quote</span>
              </div>

              <button onClick={() => scrollToSection("reusable-faq-section")} className="promo-hero-cta">
                Book Free Consultation
              </button>
            </InView>
          </div>
        </section>

        {/* Our Recent Projects */}
        <section className="promo-section" style={{ backgroundColor: "var(--primary-color)" }}>
          <div className="container" style={{ maxWidth: "1200px", padding: 0 }}>
            <h2 className="promo-section-title">Our Recent Projects</h2>

            {/* Carousel Container with Scroll Arrow controls */}
            <div className="position-relative">
              {/* Left Arrow */}
              <button
                onClick={() => scrollProjects("left")}
                className="carousel-control-lp prev"
                aria-label="Previous Project"
              >
                <i className="bi bi-chevron-left" />
              </button>

              {/* Slider Track */}
              <div ref={projectsContainerRef} className="projects-carousel-track">
                {recentProjects.map((p, idx) => (
                  <div key={idx} className="project-carousel-item animate-fade-in-up" style={{ animationDelay: `${idx * 0.05}s` }}>
                    <div className="project-card-lp">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 400px"
                        className="object-fit-cover project-img-lp"
                      />
                      <div className="image-gradient-overlay" />
                      <h4 className="project-tag-lp">{p.title}</h4>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Arrow */}
              <button
                onClick={() => scrollProjects("right")}
                className="carousel-control-lp next"
                aria-label="Next Project"
              >
                <i className="bi bi-chevron-right" />
              </button>
            </div>
          </div>
        </section>

        {/* Reusable FAQ Section (FAQs + Lead Form side-by-side) */}
        <section className="promo-section" id="reusable-faq-section" style={{ backgroundColor: "var(--primary-color)", borderTop: "1px solid rgba(15, 32, 24, 0.15)" }}>
          <div className="container-fluid px-3 px-md-5" style={{ maxWidth: "1600px" }}>
            <FaqAccordion
              items={faqData}
              title="Frequently Asked Questions"
              subtitle="Quick Answers to Get You Started"
            />
          </div>
        </section>

        {/* Book Your Free Consultation Last Section */}
        <section className="promo-section text-center" style={{ backgroundColor: "var(--secondary-color)", padding: "5rem 5%", borderTop: "1px solid rgba(217, 203, 164, 0.15)" }}>
          <div className="container" style={{ maxWidth: "700px" }}>
            <InView className="reveal-up" threshold={0.1}>
              <h2 
                style={{ 
                  fontFamily: "var(--font-cormorant), serif", 
                  fontSize: "clamp(2.2rem, 4vw, 3rem)", 
                  fontWeight: 700, 
                  color: "var(--text-on-dark-title)",
                  marginBottom: "1rem"
                }}
              >
                Book Your Free Consultation
              </h2>
              <p 
                style={{ 
                  fontFamily: "var(--font-outfit), sans-serif", 
                  fontSize: "1.1rem", 
                  color: "var(--text-on-dark-body)", 
                  opacity: 0.9,
                  marginBottom: "2rem"
                }}
              >
                Ready to create a home you&apos;ll love? Fill out the form and our design experts will get in touch with you.
              </p>
              <button 
                onClick={() => scrollToSection("lead-form-section")} 
                className="promo-hero-cta"
                style={{
                  backgroundColor: "var(--primary-color)",
                  color: "var(--secondary-color)",
                  borderColor: "var(--primary-color)",
                  fontSize: "0.95rem",
                  padding: "1rem 2.5rem"
                }}
              >
                Get Free Consultation
              </button>
            </InView>
          </div>
        </section>
      </div>
    </div>
  );
}
