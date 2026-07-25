"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InView from "@/components/InView";
import FaqAccordion from "@/components/FaqAccordion";
import DesignProcess from "@/components/DesignProcess";
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
  LuCompass
} from "react-icons/lu";
import "./modular.css";

export default function ModularClient() {
  // 6 Types of Kitchens data
  const kitchenTypes = [
    {
      id: "l-shape",
      title: "L-Shaped Modular Kitchen",
      desc: "Perfect for small and medium-sized homes, offering efficient workflow and maximum space utilization.",
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "u-shape",
      title: "U-Shaped Modular Kitchen",
      desc: "Provides ample storage and countertop space for larger families and spacious homes.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "parallel",
      title: "Parallel Modular Kitchen",
      desc: "An ideal option for compact spaces, featuring two parallel workstations for efficient cooking.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "island",
      title: "Island Modular Kitchen",
      desc: "Modern and luxurious kitchen design with a central island for additional workspace and seating.",
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "straight",
      title: "Straight Modular Kitchen",
      desc: "A simple and elegant solution for apartments and compact homes.",
      image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "open",
      title: "Open Modular Kitchen",
      desc: "Designed to blend seamlessly with your living and dining areas, creating a spacious and modern look.",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
    },
  ];

  // Services offered data
  const servicesOffered = [
    {
      id: "install",
      icon: <LuLayoutGrid size={28} />,
      title: "Modular Kitchen Design & Installation",
      desc: "Complete design, manufacturing, and installation services tailored to your kitchen requirements.",
    },
    {
      id: "renovate",
      icon: <LuSparkles size={28} />,
      title: "Kitchen Renovation Services",
      desc: "Upgrade your existing kitchen with modern layouts, improved storage cabinet access, and premium finishes.",
    },
    {
      id: "optimize",
      icon: <LuCompass size={28} />,
      title: "Storage Optimization Solutions",
      desc: "Smart cabinets, pull-out units, corner storage carousel systems, and pantry solutions for better organization.",
    },
    {
      id: "counter",
      icon: <LuBuilding size={28} />,
      title: "Countertop and Backsplash Design",
      desc: "Enhance the beauty and functionality of your kitchen with stylish countertops and backsplash options.",
    },
  ];

  // Benefits data
  const benefits = [
    "Better space utilization",
    "Easy maintenance and cleaning",
    "Modern and attractive appearance",
    "Increased storage capacity",
    "Faster installation process",
    "Durable and long-lasting materials",
    "Improved functionality and workflow",
  ];

  // FAQs data
  const faqs = [
    {
      q: "What are the benefits of Modular Kitchen Designs in Chennai?",
      a: "Modular kitchens offer better storage, improved functionality, modern aesthetics, and efficient space utilization.",
    },
    {
      q: "Why choose Kingsford as your kitchen interior designers in Chennai?",
      a: "We provide customized designs, premium materials, professional installation, and excellent customer support.",
    },
    {
      q: "Which modular kitchen layout is best for small homes?",
      a: "L-shaped and straight modular kitchens are commonly preferred for compact homes and apartments.",
    },
    {
      q: "Can you renovate my existing kitchen?",
      a: "Yes. We offer complete kitchen renovation and remodeling services based on your requirements.",
    },
    {
      q: "How long does modular kitchen installation take?",
      a: "The timeline depends on the project size and customization requirements, but most installations are completed efficiently within the planned schedule.",
    },
  ];

  // Installation Process steps data
  const processSteps = [
    {
      step: "01",
      title: "Consultation",
      desc: "Understanding your kitchen requirements, layout habits, and available space in detail.",
    },
    {
      step: "02",
      title: "3D Visualization",
      desc: "Creating detailed modular kitchen layouts, cabinet spacing plans, and realistic 3D designs.",
    },
    {
      step: "03",
      title: "Installation",
      desc: "Precision manufacturing and professional cabinet installation for flawless execution.",
    },
  ];

  return (
    <div className="app-wrapper">
      <div className="app-canvas" style={{ backgroundColor: "var(--primary-color)" }}>
        <Navbar />

        <main className="flex-grow-1 modular-page-container">
          
          {/* Section: Hero Banner */}
          <section className="modular-hero">
            <div className="modular-hero-pattern" />
            <div className="container text-center text-lg-start position-relative" style={{ zIndex: 2 }}>
              <div className="row justify-content-center justify-content-lg-start">
                <div className="col-12 col-lg-8 hero-content">
                  <InView className="reveal-up" threshold={0.1}>
                    <p className="modular-hero-subtitle">Modular Kitchen Designs in Chennai</p>
                    <h1 className="modular-hero-title">
                      Modular Kitchen <span>Designs in Chennai</span>
                    </h1>
                    <p className="modular-hero-copy">
                      Kingsford designs stylish and efficient modular kitchens with premium finishes, smart storage, and easy maintenance for modern homes.
                    </p>
                    <button
                      onClick={() => window.dispatchEvent(new CustomEvent("open-consultation-popup"))}
                      className="modular-hero-cta"
                      suppressHydrationWarning
                    >
                      Get Free Estimate
                    </button>
                  </InView>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Modular Kitchen Introduction */}
          <section className="py-5">
            <div className="container-fluid px-3 px-md-5" style={{ maxWidth: "1600px" }}>
              <div className="row align-items-center gy-4 gx-lg-5">
                {/* Content Left Side */}
                <div className="col-12 col-lg-6">
                  <InView className="reveal-up" threshold={0.1}>
                    <div className="intro-content-wrap">
                      <span className="text-uppercase fw-bold d-block mb-2" style={{ color: "var(--primary-color)", letterSpacing: "0.15em", fontSize: "0.85rem" }}>
                        Modern Cooking Spaces
                      </span>
                      <h2 className="fw-bold mb-3 font-serif" style={{ fontFamily: "var(--font-cormorant), serif", color: "var(--text-title)", fontSize: "clamp(2rem, 3.5vw, 2.75rem)", lineHeight: "1.2" }}>
                        Modular Kitchen Designs in Chennai
                      </h2>
                      <p className="mb-4 text-muted" style={{ fontSize: "1rem", lineHeight: "1.7" }}>
                        Looking for stylish and functional <strong>Modular Kitchen Designs in Chennai</strong>? Kingsford specializes in creating modern, space-efficient, and customized kitchens that perfectly match your lifestyle and cooking needs. Our expert team combines innovative designs, premium materials, and smart storage solutions to create kitchens that are beautiful, practical, and durable.
                      </p>
                      <p className="m-0 text-muted" style={{ fontSize: "1rem", lineHeight: "1.7" }}>
                        As experienced kitchen interior designers in Chennai, we transform ordinary kitchens into elegant and highly functional spaces that enhance your daily living experience.
                      </p>
                    </div>
                  </InView>
                </div>

                {/* Image Right Side */}
                <div className="col-12 col-lg-6">
                  <InView className="reveal-up" style={{ transitionDelay: "0.08s" }} threshold={0.1}>
                    <div className="position-relative w-100 overflow-hidden shadow-sm" style={{ aspectRatio: "4/3", borderRadius: "1.5rem" }}>
                      <Image
                        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                        alt="Kingsford Modular Kitchen Design Chennai"
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

          {/* Section: Why Choose Kingsford for Modular */}
          <section className="py-5" style={{ backgroundColor: "rgba(15, 32, 24, 0.02)" }}>
            <div className="container-fluid px-3 px-md-5" style={{ maxWidth: "1600px" }}>
              <div className="text-center mb-5">
                <InView className="reveal-up" threshold={0.1}>
                  <h2 className="modular-section-title">
                    Why Choose Kingsford for Modular Kitchen Designs?
                  </h2>
                  <span className="modular-section-subtitle">
                    A kitchen is the heart of every home. At Kingsford, we focus on designing kitchens that offer maximum convenience, efficient storage, and a premium appearance.
                  </span>
                </InView>
              </div>

              <div className="row g-4 justify-content-center">
                <div className="col-12 col-md-6">
                  <InView className="reveal-up h-100" threshold={0.1}>
                    <div className="modular-dark-card h-100">
                      <h3 className="modular-card-title">Customized Kitchen Solutions</h3>
                      <p className="modular-card-desc">
                        Every family has unique requirements. We design kitchens that suit your cooking habits, storage needs, and available space, mapping out ergonomic layouts that flow naturally.
                      </p>
                    </div>
                  </InView>
                </div>

                <div className="col-12 col-md-6">
                  <InView className="reveal-up h-100" style={{ transitionDelay: "0.1s" }} threshold={0.1}>
                    <div className="modular-dark-card h-100">
                      <h3 className="modular-card-title">Premium Quality Materials</h3>
                      <p className="modular-card-desc">
                        We use high-quality plywood, laminates, acrylic finishes, hardware, and smart soft-close accessories to ensure long-lasting performance, durability, and a clean luxury gloss finish.
                      </p>
                    </div>
                  </InView>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Types of Modular Kitchen Designs */}
          <section className="modular-section" style={{ backgroundColor: "rgba(15, 32, 24, 0.03)" }}>
            <div className="container-fluid px-3 px-md-5" style={{ maxWidth: "1600px" }}>
              <div className="text-center mb-5">
                <InView className="reveal-up" threshold={0.1}>
                  <h2 className="modular-section-title">Types of Modular Kitchen Designs</h2>
                  <span className="modular-section-subtitle">We offer a wide range of modular kitchen layouts to suit different preferences.</span>
                </InView>
              </div>

              <div className="row g-4">
                {kitchenTypes.map((kitchen, idx) => (
                  <div key={kitchen.id} className="col-12 col-md-6 col-lg-4">
                    <InView
                      className="reveal-up h-100"
                      style={{ transitionDelay: `${idx * 0.08}s` }}
                      threshold={0.1}
                    >
                      <div className="modular-image-card">
                        <div className="modular-image-img">
                          <Image
                            src={kitchen.image}
                            alt={kitchen.title}
                            fill
                            sizes="(max-width: 576px) 100vw, (max-width: 992px) 50vw, 33vw"
                            className="object-fit-cover"
                            loading="lazy"
                          />
                        </div>
                        <div className="modular-image-overlay" />
                        <div className="modular-image-content">
                          <h3 className="modular-image-title">{kitchen.title}</h3>
                          <p className="modular-image-desc">{kitchen.desc}</p>
                        </div>
                      </div>
                    </InView>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section: Services Offered by Kitchen Designers */}
          <section className="modular-section">
            <div className="container-fluid px-3 px-md-5" style={{ maxWidth: "1600px" }}>
              <div className="text-center mb-5">
                <InView className="reveal-up" threshold={0.1}>
                  <h2 className="modular-section-title">Services Offered by Our Kitchen Interior Designers</h2>
                  <span className="modular-section-subtitle">Expert Culinary space planners in Chennai</span>
                </InView>
              </div>

              <div className="row g-4">
                {servicesOffered.map((service, idx) => (
                  <div key={service.id} className="col-12 col-md-6 col-lg-3">
                    <InView
                      className="reveal-up h-100"
                      style={{ transitionDelay: `${idx * 0.08}s` }}
                      threshold={0.1}
                    >
                      <div className="modular-dark-card h-100">
                        <div className="modular-card-icon">{service.icon}</div>
                        <h3 className="modular-card-title">{service.title}</h3>
                        <p className="modular-card-desc">{service.desc}</p>
                      </div>
                    </InView>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section: Benefits of Modular Kitchen Designs */}
          <section className="py-5" style={{ backgroundColor: "var(--primary-color)", borderBottom: "1px solid rgba(15, 32, 24, 0.05)" }}>
            <div className="container-fluid px-3 px-md-5" style={{ maxWidth: "1600px" }}>
              <div className="text-center mb-5">
                <InView className="reveal-up" threshold={0.1}>
                  <h2 className="fw-bold mb-3 font-serif" style={{ fontFamily: "var(--font-cormorant), serif", color: "var(--text-title)", fontSize: "clamp(2rem, 3.5vw, 2.75rem)" }}>
                    Benefits of Modular Kitchen Designs
                  </h2>
                  <span className="text-uppercase text-muted d-block small mb-4 fw-bold" style={{ letterSpacing: "0.15em", fontSize: "0.8rem" }}>
                    Why Modern Kitchens Outperform Traditional Carpentry
                  </span>
                </InView>
              </div>
              <div className="row g-4 justify-content-center">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="col-12 col-sm-6 col-md-4 col-lg-3">
                    <InView className="reveal-up h-100" style={{ transitionDelay: `${idx * 0.05}s` }} threshold={0.15}>
                      <div className="card h-100 p-4 border-0 shadow-sm text-center" style={{ backgroundColor: "var(--fourth-color)", borderRadius: "1.25rem", border: "1px solid rgba(255, 255, 255, 0.05)" }}>
                        <div className="d-flex justify-content-center mb-3">
                          <span className="d-flex align-items-center justify-content-center rounded-circle" style={{ width: "32px", height: "32px", backgroundColor: "var(--primary-color)", color: "var(--secondary-color)" }}>
                            <LuCheck size={16} />
                          </span>
                        </div>
                        <h4 className="h6 fw-semibold text-white mb-0" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                          {benefit}
                        </h4>
                      </div>
                    </InView>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section: Why Homeowners Trust Kingsford */}
          <section className="py-5" style={{ backgroundColor: "rgba(15, 32, 24, 0.03)", borderBottom: "1px solid rgba(15, 32, 24, 0.05)" }}>
            <div className="container-fluid px-3 px-md-5" style={{ maxWidth: "1600px" }}>
              <div className="text-center mb-5">
                <InView className="reveal-up" threshold={0.1}>
                  <h2 className="fw-bold mb-3 font-serif" style={{ fontFamily: "var(--font-cormorant), serif", color: "var(--text-title)", fontSize: "clamp(2rem, 3.5vw, 2.75rem)" }}>
                    Why Homeowners Trust Kingsford
                  </h2>
                  <span className="text-uppercase text-muted d-block small mb-4 fw-bold" style={{ letterSpacing: "0.15em", fontSize: "0.8rem" }}>
                    Delivering Quality and Reliability in Every Kitchen Project
                  </span>
                </InView>
              </div>

              <div className="row g-4 justify-content-center">
                <div className="col-6 col-lg-3">
                  <InView className="reveal-up" threshold={0.1}>
                    <div className="modular-stat-card text-center p-4" style={{ backgroundColor: "var(--fourth-color)", borderRadius: "1.25rem", border: "1px solid rgba(255, 255, 255, 0.05)" }}>
                      <div className="modular-stat-number fw-bold text-white mb-2" style={{ fontSize: "2rem" }}>10+</div>
                      <div className="modular-stat-label text-white-50 small">Years Experience</div>
                    </div>
                  </InView>
                </div>

                <div className="col-6 col-lg-3">
                  <InView className="reveal-up" style={{ transitionDelay: "0.08s" }} threshold={0.1}>
                    <div className="modular-stat-card text-center p-4" style={{ backgroundColor: "var(--fourth-color)", borderRadius: "1.25rem", border: "1px solid rgba(255, 255, 255, 0.05)" }}>
                      <div className="modular-stat-number fw-bold text-white mb-2" style={{ fontSize: "2rem" }}>1000+</div>
                      <div className="modular-stat-label text-white-50 small">Happy Clients</div>
                    </div>
                  </InView>
                </div>

                <div className="col-6 col-lg-3">
                  <InView className="reveal-up" style={{ transitionDelay: "0.16s" }} threshold={0.1}>
                    <div className="modular-stat-card text-center p-4" style={{ backgroundColor: "var(--fourth-color)", borderRadius: "1.25rem", border: "1px solid rgba(255, 255, 255, 0.05)" }}>
                      <div className="modular-stat-number fw-bold text-white mb-2" style={{ fontSize: "1.35rem" }}>End-to-End</div>
                      <div className="modular-stat-label text-white-50 small">Project Management</div>
                    </div>
                  </InView>
                </div>

                <div className="col-6 col-lg-3">
                  <InView className="reveal-up" style={{ transitionDelay: "0.24s" }} threshold={0.1}>
                    <div className="modular-stat-card text-center p-4" style={{ backgroundColor: "var(--fourth-color)", borderRadius: "1.25rem", border: "1px solid rgba(255, 255, 255, 0.05)" }}>
                      <div className="modular-stat-number fw-bold text-white mb-2" style={{ fontSize: "1.35rem" }}>Customized</div>
                      <div className="modular-stat-label text-white-50 small">Affordable Rates</div>
                    </div>
                  </InView>
                </div>
              </div>
            </div>
          </section>

          {/* Reusable Design Process Section */}
          <DesignProcess />

          {/* Section: Get Your Dream Modular Kitchen Today (CTA) */}
          <section className="modular-section" style={{ backgroundColor: "var(--secondary-color)", color: "var(--text-on-dark-body)", borderTop: "1px solid rgba(217, 203, 164, 0.15)" }}>
            <div className="container text-center py-4">
              <InView className="reveal-up" threshold={0.1}>
                <h2 className="mb-3 font-serif fw-bold text-white" style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                  Get Your Dream Modular Kitchen Today
                </h2>
                <p className="mx-auto mb-4 text-white-50" style={{ maxWidth: "750px", fontSize: "0.95rem" }}>
                  Transform your cooking space with Kingsford&apos;s innovative Modular Kitchen Designs in Chennai. Whether you need a compact apartment kitchen or a luxury modular kitchen, our experts are ready to create the perfect solution for your home.
                </p>
                <Link href="/contact" className="modular-cta-btn rounded-pill fw-bold text-uppercase d-inline-flex align-items-center gap-2">
                  <span>Get Free Consultation</span>
                  <LuChevronRight size={16} />
                </Link>
              </InView>
            </div>
          </section>

          {/* Section: FAQs */}
          <section className="modular-section">
            <div className="container-fluid px-3 px-md-5" style={{ maxWidth: "1600px" }}>
              <FaqAccordion 
                items={faqs} 
                title="Frequently Asked Questions" 
                subtitle="Answers to common questions about our modular kitchen designs and installation process." 
              />
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}
