"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InView from "@/components/InView";
import FaqAccordion from "@/components/FaqAccordion";
import { 
  LuCheck, 
  LuSparkles, 
  LuLayoutGrid, 
  LuHouse, 
  LuBuilding, 
  LuAward, 
  LuUsers, 
  LuShieldCheck, 
  LuCalendar, 
  LuChevronRight,
  LuCompass,
  LuWrench
} from "react-icons/lu";
import "./painting.css";

export default function PaintingClient() {
  // Painting services data
  const services = [
    {
      id: "interior",
      title: "Interior Painting Services",
      desc: "Transform your living rooms, bedrooms, kitchens, and offices with elegant color combinations and flawless finishes.",
      image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "exterior",
      title: "Exterior Painting Services",
      desc: "Protect your building from weather damage while improving its overall appearance with high-quality exterior paints.",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "apartment",
      title: "Apartment Painting Services",
      desc: "Complete painting solutions for flats, apartments, and residential communities.",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "villa",
      title: "Villa Painting Services",
      desc: "Customized painting services designed to enhance luxury homes and villas.",
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "office",
      title: "Office Painting Services",
      desc: "Professional painting solutions that create attractive and productive work environments.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "commercial",
      title: "Commercial Painting Services",
      desc: "Painting services for retail stores, showrooms, educational institutions, hospitals, and commercial buildings.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    },
  ];

  // Types of Painting Finishes We Offer
  const finishes = [
    {
      title: "Emulsion Painting",
      desc: "A popular choice for smooth, durable, and attractive wall finishes.",
    },
    {
      title: "Texture Painting",
      desc: "Decorative wall textures that add character and elegance to interiors.",
    },
    {
      title: "Royal Finish Painting",
      desc: "Premium paint finishes for luxury homes and sophisticated interiors.",
    },
    {
      title: "Waterproof Painting",
      desc: "Protect walls from moisture and water damage with specialized coating solutions.",
    },
  ];

  // Benefits data
  const benefits = [
    {
      title: "Enhanced Property Appearance",
      desc: "Fresh paint instantly improves the look and feel of any property.",
    },
    {
      title: "Increased Property Value",
      desc: "Professionally painted properties create a positive impression and improve market value.",
    },
    {
      title: "Long-Term Protection",
      desc: "Quality paints protect walls from dust, moisture, cracks, and environmental damage.",
    },
    {
      title: "Healthier Indoor Environment",
      desc: "Modern low-VOC paints help maintain better indoor air quality.",
    },
  ];

  // Process steps data
  const processSteps = [
    {
      step: "01",
      title: "Site Inspection",
      desc: "We evaluate wall conditions and understand your painting requirements.",
    },
    {
      step: "02",
      title: "Surface Preparation",
      desc: "Proper cleaning, putty application, crack filling, and priming for perfect results.",
    },
    {
      step: "03",
      title: "Professional Painting",
      desc: "Expert application techniques ensure smooth and consistent finishes.",
    },
    {
      step: "04",
      title: "Final Quality Inspection",
      desc: "Every project undergoes a thorough quality check before completion.",
    },
  ];

  // FAQs data
  const faqs = [
    {
      q: "Why choose Kingsford as painting contractors in Chennai?",
      a: "Kingsford offers professional painters, premium materials, quality workmanship, and timely project completion.",
    },
    {
      q: "What painting services do you provide in Chennai?",
      a: "We provide interior painting, exterior painting, apartment painting, villa painting, office painting, and commercial painting services.",
    },
    {
      q: "How often should a home be repainted?",
      a: "Most homes benefit from repainting every 5 to 7 years, depending on paint quality and environmental conditions.",
    },
    {
      q: "Do you provide waterproof painting solutions?",
      a: "Yes, we offer waterproof coatings and protective painting solutions for enhanced durability.",
    },
    {
      q: "How long does a painting project take?",
      a: "The timeline depends on the size of the property and project requirements. Our team provides a clear schedule before starting the work.",
    },
  ];

  return (
    <div className="app-wrapper">
      <div className="app-canvas" style={{ backgroundColor: "var(--primary-color)" }}>
        <Navbar />

        <main className="flex-grow-1 painting-page-container">
          
          {/* Section: Hero Banner */}
          <section className="painting-hero">
            <div className="painting-hero-pattern" />
            <div className="container text-center text-lg-start position-relative" style={{ zIndex: 2 }}>
              <div className="row justify-content-center justify-content-lg-start">
                <div className="col-12 col-lg-8 hero-content">
                  <InView className="reveal-up" threshold={0.1}>
                    <p className="painting-hero-subtitle">Painting Contractors in Chennai</p>
                    <h1 className="painting-hero-title">
                      Painting <span>Contractors in Chennai</span>
                    </h1>
                    <p className="painting-hero-copy">
                      Kingsford delivers professional painting services with premium paints, flawless finishes, and durable protection for residential and commercial spaces.
                    </p>
                    <button
                      onClick={() => window.dispatchEvent(new CustomEvent("open-consultation-popup"))}
                      className="painting-hero-cta"
                      suppressHydrationWarning
                    >
                      Get Free Estimate
                    </button>
                  </InView>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Painting Introduction */}
          <section className="py-5">
            <div className="container-fluid px-3 px-md-5" style={{ maxWidth: "1600px" }}>
              <div className="row align-items-center gy-4 gx-lg-5">
                {/* Content Left Side */}
                <div className="col-12 col-lg-6">
                  <InView className="reveal-up" threshold={0.1}>
                    <div className="intro-content-wrap">
                      <span className="text-uppercase fw-bold d-block mb-2" style={{ color: "var(--primary-color)", letterSpacing: "0.15em", fontSize: "0.85rem" }}>
                        Kingsford Interiors Chennai
                      </span>
                      <h2 className="fw-bold mb-3 font-serif" style={{ fontFamily: "var(--font-cormorant), serif", color: "var(--text-title)", fontSize: "clamp(2rem, 3.5vw, 2.75rem)", lineHeight: "1.2" }}>
                        Painting Contractors in Chennai
                      </h2>
                      <p className="mb-4 text-muted" style={{ fontSize: "1rem", lineHeight: "1.7" }}>
                        Looking for reliable <strong>Painting Contractors in Chennai</strong>? Kingsford provides professional painting solutions for residential, commercial, and office spaces. With skilled painters, premium-quality paints, and attention to detail, we help transform your property with beautiful and long-lasting finishes.
                      </p>
                      <p className="m-0 text-muted" style={{ fontSize: "1rem", lineHeight: "1.7" }}>
                        Our expert team offers customized <strong>Painting Services in Chennai</strong> that enhance the appearance, value, and protection of your property. Whether you need interior painting, exterior painting, texture finishes, or complete repainting services, Kingsford delivers exceptional results.
                      </p>
                    </div>
                  </InView>
                </div>

                {/* Image Right Side */}
                <div className="col-12 col-lg-6">
                  <InView className="reveal-up" style={{ transitionDelay: "0.08s" }} threshold={0.1}>
                    <div className="position-relative w-100 overflow-hidden shadow-sm" style={{ aspectRatio: "4/3", borderRadius: "1.5rem" }}>
                      <Image
                        src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=800&q=80"
                        alt="Kingsford Painting Chennai"
                        fill
                        sizes="(max-width: 768px) 100vw, 600px"
                        className="object-fit-cover"
                        priority
                      />
                    </div>
                  </InView>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Why Choose Kingsford */}
          <section className="py-5" style={{ backgroundColor: "rgba(15, 32, 24, 0.02)" }}>
            <div className="container-fluid px-3 px-md-5" style={{ maxWidth: "1600px" }}>
              <div className="text-center mb-5">
                <InView className="reveal-up" threshold={0.1}>
                  <h2 className="painting-section-title">Why Choose Kingsford for Painting Services?</h2>
                  <span className="painting-section-subtitle">
                    Painting is more than applying color to walls. It creates the atmosphere and personality of your space.
                  </span>
                </InView>
              </div>

              <div className="row g-4 justify-content-center">
                <div className="col-12 col-md-6">
                  <InView className="reveal-up h-100" threshold={0.1}>
                    <div className="painting-dark-card h-100">
                      <h3 className="painting-card-title">Experienced Painting Professionals</h3>
                      <p className="painting-card-desc">
                        Our team has extensive experience handling residential, commercial, and office painting projects of all sizes with attention to surface preparation and clean execution.
                      </p>
                    </div>
                  </InView>
                </div>

                <div className="col-12 col-md-6">
                  <InView className="reveal-up h-100" style={{ transitionDelay: "0.1s" }} threshold={0.1}>
                    <div className="painting-dark-card h-100">
                      <h3 className="painting-card-title">Premium Quality Paints</h3>
                      <p className="painting-card-desc">
                        We use trusted paint brands, modern low-VOC eco-friendly emulsions, and high-quality primers/putty to ensure maximum durability and superior gloss or matte finish.
                      </p>
                    </div>
                  </InView>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Our Painting Services in Chennai */}
          <section className="painting-section" style={{ backgroundColor: "rgba(15, 32, 24, 0.03)" }}>
            <div className="container-fluid px-3 px-md-5" style={{ maxWidth: "1600px" }}>
              <div className="text-center mb-5">
                <InView className="reveal-up" threshold={0.1}>
                  <h2 className="painting-section-title">Our Painting Services in Chennai</h2>
                  <span className="painting-section-subtitle">Comprehensive Painting Solutions for Every Setup</span>
                </InView>
              </div>

              <div className="row g-4">
                {services.map((service, idx) => (
                  <div key={service.id} className="col-12 col-md-6 col-lg-4">
                    <InView
                      className="reveal-up h-100"
                      style={{ transitionDelay: `${idx * 0.08}s` }}
                      threshold={0.1}
                    >
                      <div className="painting-image-card">
                        <div className="painting-image-img">
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            sizes="(max-width: 576px) 100vw, (max-width: 992px) 50vw, 33vw"
                            className="object-fit-cover"
                            loading="lazy"
                          />
                        </div>
                        <div className="painting-image-overlay" />
                        <div className="painting-image-content">
                          <h3 className="painting-image-title">{service.title}</h3>
                          <p className="painting-image-desc">{service.desc}</p>
                        </div>
                      </div>
                    </InView>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section: Types of Painting Finishes We Offer */}
          <section className="painting-section">
            <div className="container-fluid px-3 px-md-5" style={{ maxWidth: "1600px" }}>
              <div className="text-center mb-5">
                <InView className="reveal-up" threshold={0.1}>
                  <h2 className="painting-section-title">Types of Painting Finishes We Offer</h2>
                  <span className="painting-section-subtitle">Decorative concept wall coatings</span>
                </InView>
              </div>

              <div className="row g-4">
                {finishes.map((finish, idx) => (
                  <div key={idx} className="col-12 col-md-6 col-lg-3">
                    <InView
                      className="reveal-up h-100"
                      style={{ transitionDelay: `${idx * 0.08}s` }}
                      threshold={0.1}
                    >
                      <div className="painting-dark-card h-100">
                        <div className="painting-card-icon">
                          <LuSparkles size={28} />
                        </div>
                        <h3 className="painting-card-title">{finish.title}</h3>
                        <p className="painting-card-desc">{finish.desc}</p>
                      </div>
                    </InView>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section: Benefits of Professional Painting Services */}
          <section className="painting-section" style={{ backgroundColor: "rgba(15, 32, 24, 0.03)" }}>
            <div className="container-fluid px-3 px-md-5" style={{ maxWidth: "1600px" }}>
              <div className="text-center mb-5">
                <InView className="reveal-up" threshold={0.1}>
                  <h2 className="painting-section-title">Benefits of Professional Painting Services</h2>
                  <span className="painting-section-subtitle">Protection and long-term value enhancements</span>
                </InView>
              </div>

              <div className="row g-4">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="col-12 col-md-6 col-lg-3">
                    <InView
                      className="reveal-up h-100"
                      style={{ transitionDelay: `${idx * 0.08}s` }}
                      threshold={0.1}
                    >
                      <div className="painting-dark-card h-100">
                        <div className="painting-card-icon">
                          <LuCheck size={28} />
                        </div>
                        <h3 className="painting-card-title">{benefit.title}</h3>
                        <p className="painting-card-desc">{benefit.desc}</p>
                      </div>
                    </InView>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section: Why Homeowners Trust Kingsford */}
          <section className="painting-section">
            <div className="container-fluid px-3 px-md-5" style={{ maxWidth: "1600px" }}>
              <div className="text-center mb-5">
                <InView className="reveal-up" threshold={0.1}>
                  <h2 className="painting-section-title">Why Homeowners Trust Kingsford</h2>
                  <span className="painting-section-subtitle">Delivering Quality & Trust Across Chennai</span>
                </InView>
              </div>

              <div className="row g-3 justify-content-center">
                <div className="col-6 col-md-3">
                  <InView className="reveal-up h-100" threshold={0.1}>
                    <div className="painting-stat-card h-100 d-flex flex-column justify-content-center">
                      <div className="painting-stat-number">10+</div>
                      <div className="painting-stat-label">Years Experience</div>
                    </div>
                  </InView>
                </div>
                <div className="col-6 col-md-3">
                  <InView className="reveal-up h-100" style={{ transitionDelay: "0.08s" }} threshold={0.1}>
                    <div className="painting-stat-card h-100 d-flex flex-column justify-content-center">
                      <div className="painting-stat-number">100+</div>
                      <div className="painting-stat-label">Happy Clients</div>
                    </div>
                  </InView>
                </div>
                <div className="col-6 col-md-3">
                  <InView className="reveal-up h-100" style={{ transitionDelay: "0.16s" }} threshold={0.1}>
                    <div className="painting-stat-card h-100 d-flex flex-column justify-content-center">
                      <div className="painting-stat-number is-text">Skilled</div>
                      <div className="painting-stat-label">Painting Team</div>
                    </div>
                  </InView>
                </div>
                <div className="col-6 col-md-3">
                  <InView className="reveal-up h-100" style={{ transitionDelay: "0.24s" }} threshold={0.1}>
                    <div className="painting-stat-card h-100 d-flex flex-column justify-content-center">
                      <div className="painting-stat-number is-text">Affordable</div>
                      <div className="painting-stat-label">Pricing</div>
                    </div>
                  </InView>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Our Painting Process */}
          <section className="painting-section" style={{ backgroundColor: "rgba(15, 32, 24, 0.03)" }}>
            <div className="container-fluid px-3 px-md-5" style={{ maxWidth: "1600px" }}>
              <div className="text-center mb-5">
                <InView className="reveal-up" threshold={0.1}>
                  <h2 className="painting-section-title">Our Painting Process</h2>
                  <span className="painting-section-subtitle">Structured project steps for flawless finishes</span>
                </InView>
              </div>

              <div className="row g-4 justify-content-center">
                {processSteps.map((step, idx) => (
                  <div key={idx} className="col-12 col-md-6 col-lg-3">
                    <InView
                      className="reveal-up h-100"
                      style={{ transitionDelay: `${idx * 0.08}s` }}
                      threshold={0.1}
                    >
                      <div className="painting-process-card h-100">
                        <div className="painting-process-num">{step.step}</div>
                        <h3 className="painting-process-title">{step.title}</h3>
                        <p className="painting-process-desc">{step.desc}</p>
                      </div>
                    </InView>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section: Get a Free Painting Consultation Today (CTA) */}
          <section className="painting-section" style={{ backgroundColor: "var(--secondary-color)", color: "var(--text-on-dark-body)", borderTop: "1px solid rgba(217, 203, 164, 0.15)" }}>
            <div className="container text-center py-4">
              <InView className="reveal-up" threshold={0.1}>
                <h2 className="mb-3 font-serif fw-bold text-white" style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                  Get a Free Painting Consultation Today
                </h2>
                <p className="mx-auto mb-4 text-white-50" style={{ maxWidth: "750px", fontSize: "0.95rem" }}>
                  If you are searching for trusted Painting Contractors in Chennai, Kingsford is your ideal choice. We provide high-quality Painting Services in Chennai that combine aesthetics, durability, and value. Contact Kingsford today for a free site visit and customized painting quotation.
                </p>
                <Link href="/contact" className="painting-cta-btn rounded-pill fw-bold text-uppercase d-inline-flex align-items-center gap-2">
                  <span>Get Free Quotation</span>
                  <LuChevronRight size={16} />
                </Link>
              </InView>
            </div>
          </section>

          {/* Section: FAQs */}
          <section className="painting-section">
            <div className="container-fluid px-3 px-md-5" style={{ maxWidth: "1600px" }}>
              <FaqAccordion 
                items={faqs} 
                title="Frequently Asked Questions" 
                subtitle="Answers to common questions about our painting services and home transformation process." 
              />
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}
