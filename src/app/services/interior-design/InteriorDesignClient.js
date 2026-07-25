"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InView from "@/components/InView";
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
  LuChevronLeft,
  LuChevronRight,
  LuCompass
} from "react-icons/lu";
import FaqAccordion from "@/components/FaqAccordion";
import DesignProcess from "@/components/DesignProcess";
import "./interior-design.css";

export default function InteriorDesignClient() {

  // 6 types of homes data - with background images
  const homeTypes = [
    {
      id: "1bhk",
      icon: <LuHouse size={32} />,
      title: "1 BHK Interior Design",
      desc: "Smart and space-saving interior solutions designed for compact homes and apartments, prioritizing layout efficiency.",
      bgImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "2bhk",
      icon: <LuLayoutGrid size={32} />,
      title: "2 BHK Interior Design",
      desc: "Functional and stylish interiors that maximize comfort, storage, and aesthetics for standard apartment living.",
      bgImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "3bhk",
      icon: <LuSparkles size={32} />,
      title: "3 BHK Interior Design",
      desc: "Premium interior solutions that create a perfect balance between luxury and practicality for spacious family homes.",
      bgImage: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "villa",
      icon: <LuBuilding size={32} />,
      title: "Villa Interior Design",
      desc: "Elegant and highly customized interiors designed to complement modern architectures and luxury villa properties.",
      bgImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "apartment",
      icon: <LuLayoutGrid size={32} />,
      title: "Apartment Interior Design",
      desc: "Contemporary and smart interiors that enhance the beauty and functionality of urban apartment layouts.",
      bgImage: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "house",
      icon: <LuHouse size={32} />,
      title: "Independent House Interior Design",
      desc: "Personalized interior designs tailored from scratch to suit your family lifestyle and custom space requirements.",
      bgImage: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80",
    },
  ];

  // 6 specializations data
  const specializations = [
    {
      id: "kitchen",
      title: "Modular Kitchen Design",
      desc: "Modern kitchens with smart storage layouts, premium finishes, and efficient layouts.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "living",
      title: "Living Room Design",
      desc: "Create an inviting and stylish space for family gatherings and entertainment.",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "bedroom",
      title: "Bedroom Design",
      desc: "Comfortable and elegant bedroom interiors with customized wardrobes and storage.",
      image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "ceiling",
      title: "False Ceiling Design",
      desc: "Modern ceiling concepts with decorative lighting and premium finishes.",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "wardrobe",
      title: "Wardrobe Design",
      desc: "Customized wardrobes that maximize storage and improve room organization.",
      image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "planning",
      title: "Space Planning",
      desc: "Efficient space utilization for better functionality and comfort.",
      image: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=800&q=80",
    },
  ];



  // FAQ data
  const faqs = [
    {
      q: "Why should I choose Kingsford as my interior designer in Chennai?",
      a: "Kingsford offers customized designs, premium materials, expert craftsmanship, and timely project completion for all interior projects.",
    },
    {
      q: "Are you among the best interior designers in Chennai?",
      a: "Yes, Kingsford is known for delivering high-quality residential interior solutions tailored to customer requirements.",
    },
    {
      q: "Do you provide complete home interiors in Chennai?",
      a: "Yes, we offer complete interior solutions including living rooms, bedrooms, kitchens, dining areas, and storage solutions.",
    },
    {
      q: "How much time does a home interior project take?",
      a: "The timeline depends on the project scope, design complexity, and customization requirements. We provide clear project schedules before starting.",
    },
    {
      q: "Why choose Kingsford as your home interior designers in Chennai?",
      a: "Our experienced team focuses on quality, functionality, customer satisfaction, and personalized design solutions that add value to your home.",
    },
  ];

  return (
    <div className="app-wrapper">
      <div className="app-canvas" style={{ backgroundColor: "var(--primary-color)" }}>
        <Navbar />

        <main className="flex-grow-1 pt-5 mt-4 mt-md-5" style={{ minHeight: "100vh" }}>
          {/* Hero Banner */}
          <section className="sub-hero">
            <div className="sub-hero-pattern" />
            <div className="container text-center text-lg-start position-relative" style={{ zIndex: 2 }}>
              <div className="row justify-content-center justify-content-lg-start">
                <div className="col-12 col-lg-8 hero-content">
                  <InView className="reveal-up" threshold={0.1}>
                    <p className="sub-hero-subtitle">Best Home Interior Designers in Chennai</p>
                    <h1 className="sub-hero-title">
                      Best Interior <span>Designers in Chennai</span>
                    </h1>
                    <p className="sub-hero-copy">
                      Kingsford delivers luxury home interiors with smart planning, elegant finishes, and seamless execution for apartments, villas, and independent homes.
                    </p>
                    <button
                      onClick={() => window.dispatchEvent(new CustomEvent("open-consultation-popup"))}
                      className="sub-hero-cta"
                      suppressHydrationWarning
                    >
                      Get Free Estimate
                    </button>
                  </InView>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Best Interior Designers Introduction */}
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
                        Best Interior Designers in Chennai
                      </h2>
                      <p className="mb-0 text-muted" style={{ fontSize: "1rem", lineHeight: "1.7" }}>
                        Are you looking for the <strong>Best Interior Designers in Chennai</strong> to transform your dream home into a beautiful and functional living space? Kingsford specializes in creating modern, elegant, and customized interiors for apartments, villas, independent houses, and commercial spaces. With over <strong>10 years of experience</strong> and <strong>1000+ happy clients</strong>, we have built a strong reputation for delivering high-quality interior solutions that combine creativity, comfort, and functionality.
                      </p>
                    </div>
                  </InView>
                </div>

                {/* Image Right Side */}
                <div className="col-12 col-lg-6">
                  <InView className="reveal-up" style={{ transitionDelay: "0.08s" }} threshold={0.1}>
                    <div className="position-relative w-100 overflow-hidden shadow-sm" style={{ aspectRatio: "4/3", borderRadius: "1.5rem" }}>
                      <Image
                        src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80"
                        alt="Kingsford Interior Design Chennai"
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

          {/* Subsection: Why Kingsford */}
          <section className="py-5" style={{ backgroundColor: "rgba(15, 32, 24, 0.02)" }}>
            <div className="container-fluid px-3 px-md-5" style={{ maxWidth: "1600px" }}>
              <div className="mb-5 text-center">
                <InView className="reveal-up" threshold={0.1}>
                  <h2 className="text-center fw-bold font-serif mb-2" style={{ fontFamily: "var(--font-cormorant), serif", color: "var(--text-title)", fontSize: "clamp(1.8rem, 4vw, 2.75rem)" }}>
                    Why Kingsford is Among the Best Interior Designers in Chennai
                  </h2>
                  <span className="text-center text-uppercase text-muted d-block small mb-5 fw-bold" style={{ letterSpacing: "0.15em", fontSize: "0.8rem" }}>
                    Dedicated Craftsmanship & Personalized Solutions
                  </span>
                </InView>
              </div>

              <div className="row g-4 justify-content-center">
                <div className="col-12 col-md-6">
                  <InView className="reveal-up h-100" threshold={0.1}>
                    <div className="card h-100 p-4 p-md-5 border-0 shadow-sm" style={{ backgroundColor: "var(--fourth-color)", borderRadius: "1.5rem", border: "1px solid rgba(255, 255, 255, 0.05)" }}>
                      <h3 className="h4 fw-bold font-serif text-white mb-3" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                        Customized Interior Solutions
                      </h3>
                      <p className="text-white-50 small m-0" style={{ lineHeight: "1.6" }}>
                        Every project is designed based on your preferences, budget, and space requirements. We believe every home deserves a unique layout that reflects the lifestyle and personality of its owner, maximizing aesthetics and space efficiency.
                      </p>
                    </div>
                  </InView>
                </div>

                <div className="col-12 col-md-6">
                  <InView className="reveal-up h-100" style={{ transitionDelay: "0.1s" }} threshold={0.1}>
                    <div className="card h-100 p-4 p-md-5 border-0 shadow-sm" style={{ backgroundColor: "var(--fourth-color)", borderRadius: "1.5rem", border: "1px solid rgba(255, 255, 255, 0.05)" }}>
                      <h3 className="h4 fw-bold font-serif text-white mb-3" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                        End-to-End Interior Services
                      </h3>
                      <p className="text-white-50 small m-0" style={{ lineHeight: "1.6" }}>
                        From initial concept 2D/3D visualization to final installation and handover, we handle every single aspect of your interior project. Enjoy a smooth, hassle-free layout execution managed entirely by our expert designers.
                      </p>
                    </div>
                  </InView>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Interior Design Services for Every Home - SAME SIZE + BG IMAGE + SMALL BUTTON */}
          <section className="py-5" style={{ backgroundColor: "rgba(15, 32, 24, 0.03)" }}>
            <div className="container-fluid px-3 px-md-5" style={{ maxWidth: "1600px" }}>
              <div className="text-center mb-5">
                <InView className="reveal-up" threshold={0.1}>
                  <h2 className="text-center fw-bold font-serif mb-2" style={{ fontFamily: "var(--font-cormorant), serif", color: "var(--text-title)", fontSize: "clamp(1.8rem, 4vw, 2.75rem)" }}>
                    Interior Design Services for Every Home
                  </h2>
                  <span className="text-center text-uppercase text-muted d-block small mb-5 fw-bold" style={{ letterSpacing: "0.15em", fontSize: "0.8rem" }}>
                    Tailored Spacing Configurations For All Properties
                  </span>
                </InView>
              </div>

              <div className="row g-4">
                {homeTypes.map((home, idx) => (
                  <div key={home.id} className="col-12 col-md-6 col-lg-4">
                    <InView
                      className="reveal-up h-100"
                      style={{ transitionDelay: `${idx * 0.08}s` }}
                      threshold={0.1}
                    >
                      <div 
                        className="card h-100 p-4 border-0 shadow-sm position-relative overflow-hidden"
                        style={{ 
                          backgroundColor: "var(--fourth-color)", 
                          borderRadius: "1.5rem", 
                          border: "1px solid rgba(255, 255, 255, 0.05)",
                          backgroundImage: `url(${home.bgImage})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          minHeight: "280px"
                        }}
                      >
                        {/* Dark overlay for readability */}
                        <div 
                          className="position-absolute top-0 start-0 w-100 h-100"
                          style={{ 
                            background: "linear-gradient(135deg, rgba(11, 26, 20, 0.88) 0%, rgba(11, 26, 20, 0.7) 60%, rgba(11, 26, 20, 0.5) 100%)",
                            zIndex: 1
                          }}
                        />
                        
                        {/* Content */}
                        <div className="position-relative d-flex flex-column h-100" style={{ zIndex: 2 }}>
                          <div className="mb-3" style={{ color: "var(--primary-color)" }}>{home.icon}</div>
                          <h3 className="h5 fw-bold text-white mb-2" style={{ fontFamily: "var(--font-inter), sans-serif", fontVariantNumeric: "lining-nums", fontFeatureSettings: "'lnum' 1" }}>
                            {home.title}
                          </h3>
                          <p className="text-white-50 small mb-3" style={{ lineHeight: "1.6" }}>{home.desc}</p>
                          
                          {/* SMALL BUTTON at bottom */}
                          <button
                            onClick={() => window.dispatchEvent(new CustomEvent("open-consultation-popup"))}
                            className="btn btn-sm rounded-pill fw-bold mt-auto align-self-start"
                            style={{ 
                              backgroundColor: "var(--primary-color)", 
                              color: "var(--secondary-color)",
                              fontSize: "0.75rem",
                              padding: "0.35rem 1.25rem",
                              letterSpacing: "0.05em",
                              transition: "all 0.3s ease",
                              border: "none"
                            }}
                            suppressHydrationWarning
                          >
                            Explore
                          </button>
                        </div>
                      </div>
                    </InView>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section: Our Interior Design Services (Specializations) */}
          <section className="py-5">
            <div className="container-fluid px-3 px-md-5" style={{ maxWidth: "1600px" }}>
              <div className="text-center mb-5">
                <InView className="reveal-up" threshold={0.1}>
                  <h2 className="text-center fw-bold font-serif mb-2" style={{ fontFamily: "var(--font-cormorant), serif", color: "var(--text-title)", fontSize: "clamp(1.8rem, 4vw, 2.75rem)" }}>
                    Our Interior Design Services
                  </h2>
                  <span className="text-center text-uppercase text-muted d-block small mb-5 fw-bold" style={{ letterSpacing: "0.15em", fontSize: "0.8rem" }}>
                    Comprehensive Services For Absolute Lifestyles
                  </span>
                </InView>
              </div>

              <div className="row g-4">
                {specializations.map((spec, idx) => (
                  <div key={spec.id} className="col-12 col-md-6 col-lg-4">
                    <InView
                      className="reveal-up"
                      style={{ transitionDelay: `${idx * 0.08}s` }}
                      threshold={0.1}
                    >
                      <div className="position-relative overflow-hidden w-100 shadow border-0" style={{ aspectRatio: "4/3", borderRadius: "1.5rem" }}>
                        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ zIndex: 1 }}>
                          <Image
                            src={spec.image}
                            alt={spec.title}
                            fill
                            sizes="(max-width: 576px) 100vw, (max-width: 992px) 50vw, 33vw"
                            className="object-fit-cover"
                            loading="lazy"
                          />
                        </div>
                        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: "linear-gradient(to bottom, rgba(15, 32, 24, 0.15) 0%, rgba(8, 23, 16, 0.88) 100%)", zIndex: 2 }} />
                        <div className="position-absolute bottom-0 start-0 w-100 p-4" style={{ zIndex: 3 }}>
                          <h3 className="h5 text-white fw-bold mb-2" style={{ fontFamily: "var(--font-cormorant), serif" }}>{spec.title}</h3>
                          <p className="text-white-50 small m-0" style={{ lineHeight: "1.4" }}>{spec.desc}</p>
                        </div>
                      </div>
                    </InView>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section: Why Homeowners Choose Kingsford (Stats) */}
          <section className="py-5" style={{ backgroundColor: "rgba(15, 32, 24, 0.03)" }}>
            <div className="container-fluid px-3 px-md-5" style={{ maxWidth: "1600px" }}>
              <div className="text-center mb-5">
                <InView className="reveal-up" threshold={0.1}>
                  <h2 className="text-center fw-bold font-serif mb-2" style={{ fontFamily: "var(--font-cormorant), serif", color: "var(--text-title)", fontSize: "clamp(1.8rem, 4vw, 2.75rem)" }}>
                    Why Homeowners Choose Kingsford
                  </h2>
                  <span className="text-center text-uppercase text-muted d-block small mb-5 fw-bold" style={{ letterSpacing: "0.15em", fontSize: "0.8rem" }}>
                    Delivering Quality & Trust Across Chennai
                  </span>
                </InView>
              </div>

              <div className="row g-3 justify-content-center">
                <div className="col-6 col-md-3">
                  <InView className="reveal-up" threshold={0.1}>
                    <div className="card p-4 border-0 text-center" style={{ backgroundColor: "var(--fourth-color)", borderRadius: "1.25rem", border: "1px solid rgba(255, 255, 255, 0.04)" }}>
                      <div className="display-5 fw-bold mb-2" style={{ color: "var(--primary-color)", fontFamily: "var(--font-inter), sans-serif", fontVariantNumeric: "lining-nums", fontFeatureSettings: "'lnum' 1" }}>10+</div>
                      <div className="small fw-semibold text-white-50 text-uppercase" style={{ letterSpacing: "0.05em" }}>Years of Experience</div>
                    </div>
                  </InView>
                </div>
                <div className="col-6 col-md-3">
                  <InView className="reveal-up" style={{ transitionDelay: "0.08s" }} threshold={0.1}>
                    <div className="card p-4 border-0 text-center" style={{ backgroundColor: "var(--fourth-color)", borderRadius: "1.25rem", border: "1px solid rgba(255, 255, 255, 0.04)" }}>
                      <div className="display-5 fw-bold mb-2" style={{ color: "var(--primary-color)", fontFamily: "var(--font-inter), sans-serif", fontVariantNumeric: "lining-nums", fontFeatureSettings: "'lnum' 1" }}>1000+</div>
                      <div className="small fw-semibold text-white-50 text-uppercase" style={{ letterSpacing: "0.05em" }}>Happy Clients</div>
                    </div>
                  </InView>
                </div>
                <div className="col-6 col-md-3">
                  <InView className="reveal-up" style={{ transitionDelay: "0.16s" }} threshold={0.1}>
                    <div className="card p-4 border-0 text-center" style={{ backgroundColor: "var(--fourth-color)", borderRadius: "1.25rem", border: "1px solid rgba(255, 255, 255, 0.04)" }}>
                      <div className="display-5 fw-bold mb-2" style={{ color: "var(--primary-color)", fontFamily: "var(--font-inter), sans-serif", fontVariantNumeric: "lining-nums", fontFeatureSettings: "'lnum' 1" }}>Premium</div>
                      <div className="small fw-semibold text-white-50 text-uppercase" style={{ letterSpacing: "0.05em" }}>Quality Materials</div>
                    </div>
                  </InView>
                </div>
                <div className="col-6 col-md-3">
                  <InView className="reveal-up" style={{ transitionDelay: "0.24s" }} threshold={0.1}>
                    <div className="card p-4 border-0 text-center" style={{ backgroundColor: "var(--fourth-color)", borderRadius: "1.25rem", border: "1px solid rgba(255, 255, 255, 0.04)" }}>
                      <div className="display-5 fw-bold mb-2" style={{ color: "var(--primary-color)", fontFamily: "var(--font-inter), sans-serif", fontVariantNumeric: "lining-nums", fontFeatureSettings: "'lnum' 1" }}>Timely</div>
                      <div className="small fw-semibold text-white-50 text-uppercase" style={{ letterSpacing: "0.05em" }}>Project Delivery</div>
                    </div>
                  </InView>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Reusable Design Process */}
          <DesignProcess />

          {/* Section: Transform Your Dream Home (CTA) */}
          <section className="py-5" style={{ backgroundColor: "var(--secondary-color)", color: "var(--text-on-dark-body)", borderTop: "1px solid rgba(217, 203, 164, 0.15)" }}>
            <div className="container text-center py-4">
              <InView className="reveal-up" threshold={0.1}>
                <h2 className="mb-3 font-serif fw-bold" style={{ fontFamily: "var(--font-cormorant), serif", color: "var(--text-on-dark-title)", fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                  Transform Your Dream Home with Kingsford
                </h2>
                <p className="mx-auto mb-4 text-white-50" style={{ maxWidth: "700px", fontSize: "0.95rem" }}>
                  Whether you own a 1 BHK apartment, a 2 BHK flat, a 3 BHK home, a luxury villa, or an independent house, Kingsford has the expertise to create interiors that perfectly match your lifestyle.
                </p>
                <Link href="/contact" className="btn px-5 py-3 rounded-pill fw-bold text-uppercase d-inline-flex align-items-center gap-2" style={{ backgroundColor: "var(--primary-color)", color: "var(--secondary-color)", transition: "all 0.3s ease", fontSize: "0.85rem", letterSpacing: "0.08em" }}>
                  <span>Book Free Consultation</span>
                  <LuChevronRight size={16} />
                </Link>
              </InView>
            </div>
          </section>

          {/* Section: Frequently Asked Questions */}
          <section className="sub-section">
            <div className="container-fluid px-3 px-md-5" style={{ maxWidth: "1600px" }}>
              <FaqAccordion 
                items={faqs} 
                title="Frequently Asked Questions" 
                subtitle="Answers to common questions about our interior design services and home transformation process." 
              />
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}