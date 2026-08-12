"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InView from "@/components/InView";
import PackageOffers from "@/components/PackageOffers";
import { 
  LuCheck, 
  LuCalendar, 
  LuShield, 
  LuAward, 
  LuFactory, 
  LuUsers, 
  LuHeartHandshake, 
  LuArrowRight 
} from "react-icons/lu";
import "./services.css";

export default function ServicesPage() {
  // Jump scroll helper
  const scrollToAnchor = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Why choose us items
  const whyChooseUsData = [
    {
      id: 1,
      icon: <LuAward size={36} />,
      title: "10+ Years Experience",
      desc: "Being the best affordable interior designers in Chennai, we bring expertise and dedication to every project, turning your design dreams into reality.",
    },
    {
      id: 2,
      icon: <LuCalendar size={36} />,
      title: "45 Days Delivery",
      desc: "We are acknowledged as a premier interior design company in Chennai; our designers take pride in crafting luxury projects within the agreed timeframe.",
    },
    {
      id: 3,
      icon: <LuShield size={36} />,
      title: "10 Years Warranty",
      desc: "Specializing in interior decor services, we provide quality solutions that last long. All our interior design products come with an affordable cost and a 10-year warranty.",
    },
    {
      id: 4,
      icon: <LuFactory size={36} />,
      title: "Customised Interior Solutions",
      desc: "We create interiors tailored to your lifestyle, preferences, and budget—combining functionality, aesthetics, and smart design.",
    },
    {
      id: 5,
      icon: <LuUsers size={36} />,
      title: "100+ Happy Customers",
      desc: "Save your time and ensure your project is in good hands! We have successfully completed over 100+ luxury villas and commercial projects.",
    },
    {
      id: 6,
      icon: <LuHeartHandshake size={36} />,
      title: "Dedicated Support & Service",
      desc: "Our relationship doesn’t end after project completion. We provide reliable support and service to help keep your interiors looking and functioning their best.",
    },
  ];

  // Hover-slide services
  const hoverServices = [
    {
      id: "residential",
      title: "Residential",
      desc: "Our home interior designers in Chennai craft elegant and practical living spaces, including bedrooms, kitchens, and living rooms, tailored to your style and needs.",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "commercial",
      title: "Commercial",
      desc: "We specialize in creating modern, efficient commercial interiors for retail outlets, clinics, and salons that boost customer experience and brand appeal.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "Vila",
      title: "Vila",
      desc: "Our Vila interior design solutions enhance vila productivity with smart space planning, stylish spaces, and collaborative vila areas.",
      image: "/vila img1.webp",
    },
  ];


  // Portfolio items
  const portfolioItems = [
    {
      id: 1,
      title: "Compact Modular Kitchen",
      tag: "Budget Kitchen — ₹1.2L",
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Modern Sliding Wardrobe",
      tag: "Wardrobe — ₹85K",
      image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Gold-Beige Accent TV Unit",
      tag: "TV Lounge — ₹60K",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      title: "Minimalist Dining Alcove",
      tag: "Dining Space — ₹90K",
      image: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=800&q=80",
    },
  ];

  // Form submission success states
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!name || name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    const cleaned = (phone || "").replace(/[^0-9]/g, "");
    if (cleaned.length !== 10) {
      newErrors.phone = "Phone number must be exactly 10 digits.";
    }
    if (!location || location.trim().length < 2) {
      newErrors.location = "Please enter your property location.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setFormSubmitted(true);
    setName("");
    setEmail("");
    setPhone("");
    setLocation("");
    setErrors({});
  };

  return (
    <div className="app-wrapper">
      <div className="app-canvas" style={{ backgroundColor: "var(--primary-color)" }}>
        <Navbar />

        <main className="flex-grow-1 services-page-container">
          {/* Services Hero */}
          <section className="services-hero">
            <div className="services-hero-pattern" />
            <div className="container text-center text-lg-start position-relative" style={{ zIndex: 2 }}>
              <div className="row justify-content-center justify-content-lg-start">
                <div className="col-12 col-lg-8 hero-content">
                  <InView className="reveal-up" threshold={0.1}>
                    <p className="services-hero-subtitle">Premium Interior Services & Pricing for Every Home</p>
                    <h1 className="services-hero-title">
                      Services & <span>Pricing Guide</span>
                    </h1>
                    <p className="services-hero-copy">
                      Explore our service offerings for interiors, modular kitchens, false ceilings, painting, and consultation with transparent pricing plans and expert delivery.
                    </p>
                    <button
                      onClick={() => window.dispatchEvent(new CustomEvent("open-consultation-popup"))}
                      className="services-hero-cta"
                      suppressHydrationWarning
                    >
                      Get Free Estimate
                    </button>
                  </InView>
                </div>
              </div>
            </div>
          </section>

          {/* Submenu navigation bar */}
          <div className="services-submenu-bar">
            <div className="services-submenu-container">
              <button onClick={() => scrollToAnchor("why-us")} className="services-submenu-link">
                Why Us
              </button>
              <button onClick={() => scrollToAnchor("services")} className="services-submenu-link">
                Services
              </button>
              <button onClick={() => scrollToAnchor("pricing")} className="services-submenu-link">
                Pricing
              </button>
              <button onClick={() => scrollToAnchor("portfolio")} className="services-submenu-link">
                Portfolio
              </button>
              <button onClick={() => scrollToAnchor("estimation")} className="services-submenu-link">
                Enquire
              </button>
            </div>
          </div>

          {/* Section: Best Interior Designer in Chennai (Why Choose Us) */}
          <section id="why-us" className="services-section">
            <div className="container-fluid px-md-5" style={{ maxWidth: "1600px" }}>
              <InView className="reveal-up" threshold={0.1}>
                <h2 className="services-section-title">Best Interior Designer in Chennai</h2>
                <span className="services-section-subtitle">Why Choose Us?</span>
              </InView>

              <div className="why-choose-grid">
                {whyChooseUsData.map((card, idx) => (
                  <InView
                    key={card.id}
                    className="why-choose-card reveal-up"
                    style={{ transitionDelay: `${idx * 0.08}s` }}
                    threshold={0.1}
                  >
                    <div className="why-choose-icon">{card.icon}</div>
                    <h3 className="why-choose-title">{card.title}</h3>
                    <p className="why-choose-desc">{card.desc}</p>
                  </InView>
                ))}
              </div>

              <div className="services-cta-wrap">
                <button onClick={() => scrollToAnchor("estimation")} className="services-primary-btn">
                  Get Free Estimation <LuArrowRight size={16} />
                </button>
              </div>
            </div>
          </section>

          {/* Section: Our Interior Design Services */}
          <section id="services" className="services-section" style={{ backgroundColor: "rgba(15, 32, 24, 0.03)" }}>
            <div className="container-fluid px-md-5" style={{ maxWidth: "1600px" }}>
              <InView className="reveal-up" threshold={0.1}>
                <h2 className="services-section-title">Our Interior Design Services</h2>
                <span className="services-section-subtitle">Spaces Designed for Elevated Styles</span>
              </InView>

              <div className="services-hover-grid">
                {hoverServices.map((srv, idx) => (
                  <InView
                    key={srv.id}
                    className="services-hover-card reveal-up"
                    style={{ transitionDelay: `${idx * 0.1}s` }}
                    threshold={0.1}
                  >
                    <div className="services-hover-img">
                      <Image
                        src={srv.image}
                        alt={srv.title}
                        fill
                        sizes="(max-width: 992px) 100vw, 33vw"
                        className="object-fit-cover"
                      />
                    </div>
                    <div className="services-hover-overlay" />
                    <div className="services-hover-content">
                      <h3 className="services-hover-title">{srv.title}</h3>
                      <p className="services-hover-desc">{srv.desc}</p>
                    </div>
                  </InView>
                ))}
              </div>
            </div>
          </section>

          {/* Section: Home Interiors Pricing Packages */}
          <div id="pricing">
            <PackageOffers />
          </div>

          {/* Section: low budget interior designers in chennai - Our Latest Portfolio */}
          <section id="portfolio" className="services-section" style={{ backgroundColor: "rgba(15, 32, 24, 0.03)" }}>
            <div className="container-fluid px-md-5" style={{ maxWidth: "1600px" }}>
              <InView className="reveal-up" threshold={0.1}>
                <h2 className="services-section-title">Low Budget Interior Designers - Our Latest Portfolio</h2>
                <span className="services-section-subtitle">High Quality Works Within Reach</span>
              </InView>

              <div className="portfolio-grid">
                {portfolioItems.map((item, idx) => (
                  <InView
                    key={item.id}
                    className="portfolio-card reveal-up"
                    style={{ transitionDelay: `${idx * 0.08}s` }}
                    threshold={0.1}
                  >
                    <div className="portfolio-img">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 576px) 100vw, (max-width: 992px) 50vw, 25vw"
                        className="object-fit-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="portfolio-overlay">
                      <span className="portfolio-tag">{item.tag}</span>
                      <h3 className="portfolio-title">{item.title}</h3>
                    </div>
                  </InView>
                ))}
              </div>
            </div>
          </section>

          {/* Section: Contact / Estimation Form */}
          <section id="estimation" className="estimation-section">
            <div className="estimation-outer">
              <InView className="reveal-up" threshold={0.1}>
                <div className="estimation-header-block">
                  <span className="estimation-eyebrow">Free Consultation</span>
                  <h2 className="estimation-main-title">Contact Our Designers!</h2>
                  <p className="estimation-main-sub">
                    Get a Free Site Evaluation and Consultation Today
                  </p>
                </div>
              </InView>

              <div className="estimation-split-card">
                {/* Left Info Panel */}
                <div className="estimation-info-panel">
                  <div className="estimation-info-inner">
                    <h3 className="estimation-info-title">Why Connect With Us?</h3>
                    <ul className="estimation-info-list">
                      <li className="estimation-info-item">
                        <span className="estimation-info-icon"><LuCheck size={16} /></span>
                        <span>100% Free Site Visit &amp; Measurement</span>
                      </li>
                      <li className="estimation-info-item">
                        <span className="estimation-info-icon"><LuCheck size={16} /></span>
                        <span>Personalized 3D Design Proposals</span>
                      </li>
                      <li className="estimation-info-item">
                        <span className="estimation-info-icon"><LuCheck size={16} /></span>
                        <span>Transparent Pricing, No Hidden Costs</span>
                      </li>
                      <li className="estimation-info-item">
                        <span className="estimation-info-icon"><LuCheck size={16} /></span>
                        <span>Dedicated Project Manager Assigned</span>
                      </li>
                    </ul>
                    <div className="estimation-info-divider" />
                    <p className="estimation-info-footer-text">
                      Trusted by <strong>100+</strong> homeowners across Chennai
                    </p>
                  </div>
                </div>

                {/* Right Form Panel */}
                <div className="estimation-form-panel">
                  {formSubmitted ? (
                    <div className="estimation-success-block">
                      <div className="estimation-success-icon">
                        <LuCheck size={32} />
                      </div>
                      <h3 className="estimation-success-title">Thank You!</h3>
                      <p className="estimation-success-text">
                        Our design consultant will contact you shortly with your free estimation report.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="estimation-form-grid">
                      <div className="estimation-input-group">
                        <label className="estimation-label">Full Name</label>
                        <input 
                          type="text" 
                          required 
                          className={`estimation-input ${errors.name ? "is-invalid" : ""}`} 
                          placeholder="e.g. John Doe"
                          value={name}
                          onChange={(e) => {
                            setName(e.target.value);
                            if (errors.name) setErrors((prev) => ({ ...prev, name: "" }));
                          }}
                        />
                        {errors.name && <span className="estimation-error-msg">{errors.name}</span>}
                      </div>

                      <div className="estimation-input-group">
                        <label className="estimation-label">Email Address</label>
                        <input 
                          type="email" 
                          required 
                          className={`estimation-input ${errors.email ? "is-invalid" : ""}`} 
                          placeholder="e.g. john@example.com"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            if (errors.email) setErrors((prev) => ({ ...prev, email: "" }));
                          }}
                        />
                        {errors.email && <span className="estimation-error-msg">{errors.email}</span>}
                      </div>

                      <div className="estimation-input-group">
                        <label className="estimation-label">Mobile Number</label>
                        <input 
                          type="tel" 
                          required 
                          className={`estimation-input ${errors.phone ? "is-invalid" : ""}`} 
                          placeholder="e.g. +91 98765 43210"
                          value={phone}
                          onChange={(e) => {
                            setPhone(e.target.value);
                            if (errors.phone) setErrors((prev) => ({ ...prev, phone: "" }));
                          }}
                        />
                        {errors.phone && <span className="estimation-error-msg">{errors.phone}</span>}
                      </div>

                      <div className="estimation-input-group">
                        <label className="estimation-label">Property Location</label>
                        <input 
                          type="text" 
                          required 
                          className={`estimation-input ${errors.location ? "is-invalid" : ""}`} 
                          placeholder="e.g. Chennai, Adyar"
                          value={location}
                          onChange={(e) => {
                            setLocation(e.target.value);
                            if (errors.location) setErrors((prev) => ({ ...prev, location: "" }));
                          }}
                        />
                        {errors.location && <span className="estimation-error-msg">{errors.location}</span>}
                      </div>

                      <div className="estimation-submit-wrap">
                        <button type="submit" className="estimation-submit-btn">
                          Get Free Estimation <LuArrowRight size={16} />
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}
