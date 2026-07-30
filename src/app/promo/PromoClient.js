"use client";

import React, { useState } from "react";
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
  LuDollarSign
} from "react-icons/lu";
import "./promo.css";

export default function PromoClient() {
  // Budget options
  const budgetOptions = [
    "Select Budget",
    "2.5L - 5L",
    "5L - 8L",
    "8L - 12L",
    "12L+"
  ];

  // Property types
  const propertyOptions = [
    "Select Property Type",
    "1 BHK Apartment",
    "2 BHK Apartment",
    "3 BHK Apartment",
    "Independent House / Villa",
    "Commercial Space"
  ];

  // State for top form
  const [topFormData, setTopFormData] = useState({
    name: "",
    phone: "",
    propertyType: "Select Property Type",
    budget: "Select Budget"
  });
  const [topSubmitted, setTopSubmitted] = useState(false);

  const handleTopSubmit = (e) => {
    e.preventDefault();
    console.log("Top form submitted:", topFormData);
    setTopSubmitted(true);
    setTopFormData({ name: "", phone: "", propertyType: "Select Property Type", budget: "Select Budget" });
    setTimeout(() => setTopSubmitted(false), 4000);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
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
    }
  ];

  const recentProjects = [
    { title: "Living Room Interiors", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80" },
    { title: "Modular Kitchens", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80" },
    { title: "Bedrooms", image: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=800&q=80" },
    { title: "Villas", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80" },
    { title: "Apartments", image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80" },
    { title: "Office Interiors", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" }
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
                  Transform Your Dream Home with Kingsford Interiors
                </h1>
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
                        className="promo-form-input" 
                        placeholder="Your Name"
                        required
                        value={topFormData.name}
                        onChange={(e) => setTopFormData({ ...topFormData, name: e.target.value })}
                      />
                    </div>
                    
                    <div className="promo-form-group">
                      <label htmlFor="top-phone" className="promo-form-label">Phone Number</label>
                      <input 
                        id="top-phone"
                        type="tel" 
                        className="promo-form-input" 
                        placeholder="Phone Number"
                        required
                        value={topFormData.phone}
                        onChange={(e) => setTopFormData({ ...topFormData, phone: e.target.value })}
                      />
                    </div>

                    <div className="promo-form-group">
                      <label htmlFor="top-prop" className="promo-form-label">Property Type</label>
                      <select 
                        id="top-prop"
                        className="promo-form-input" 
                        value={topFormData.propertyType}
                        onChange={(e) => setTopFormData({ ...topFormData, propertyType: e.target.value })}
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
                      >
                        {budgetOptions.map((opt, i) => (
                          <option key={i} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>

                    <button type="submit" className="promo-form-btn">
                      {topSubmitted ? "Consultation Booked ✓" : "Get Free Consultation"}
                    </button>
                  </form>
                </div>
              </InView>
              
            </div>
          </div>
        </section>

        {/* Our Interior Packages */}
        <section className="promo-section" style={{ backgroundColor: "var(--primary-color)" }}>
          <div className="container" style={{ maxWidth: "1150px", padding: 0 }}>
            <h2 className="promo-section-title">Our Interior Packages</h2>
            
            <div className="promo-packages-grid">
              {/* Essential Package */}
              <InView className="reveal-up" threshold={0.15}>
                <div className="promo-package-card h-100">
                  <h3 className="pkg-title">Essential Package</h3>
                  <span className="pkg-subtitle">Perfect for 1 & 2 BHK Homes</span>
                  <ul className="pkg-list">
                    <li className="pkg-item"><i className="bi bi-check-circle-fill" />Modular Kitchen</li>
                    <li className="pkg-item"><i className="bi bi-check-circle-fill" />Wardrobes</li>
                    <li className="pkg-item"><i className="bi bi-check-circle-fill" />TV Unit</li>
                    <li className="pkg-item"><i className="bi bi-check-circle-fill" />Basic False Ceiling</li>
                  </ul>
                  <button onClick={() => scrollToSection("reusable-faq-section")} className="pkg-btn">Get Quote</button>
                </div>
              </InView>

              {/* Premium Package */}
              <InView className="reveal-up" threshold={0.15} style={{ transitionDelay: "0.08s" }}>
                <div className="promo-package-card popular h-100">
                  <div className="popular-badge">Most Popular</div>
                  <h3 className="pkg-title">Premium Package</h3>
                  <span className="pkg-subtitle">Everything in Essential & More</span>
                  <ul className="pkg-list">
                    <li className="pkg-item"><i className="bi bi-check-circle-fill" />Everything in Essential</li>
                    <li className="pkg-item"><i className="bi bi-check-circle-fill" />Premium Finishes</li>
                    <li className="pkg-item"><i className="bi bi-check-circle-fill" />Living Room Design</li>
                    <li className="pkg-item"><i className="bi bi-check-circle-fill" />Bedroom Interiors</li>
                    <li className="pkg-item"><i className="bi bi-check-circle-fill" />3D Design</li>
                  </ul>
                  <button onClick={() => scrollToSection("reusable-faq-section")} className="pkg-btn">Get Quote</button>
                </div>
              </InView>

              {/* Luxury Package */}
              <InView className="reveal-up" threshold={0.15} style={{ transitionDelay: "0.16s" }}>
                <div className="promo-package-card h-100">
                  <h3 className="pkg-title">Luxury Package</h3>
                  <span className="pkg-subtitle">For Premium Homes & Villas</span>
                  <ul className="pkg-list">
                    <li className="pkg-item"><i className="bi bi-check-circle-fill" />Complete Home Interiors</li>
                    <li className="pkg-item"><i className="bi bi-check-circle-fill" />Custom Furniture</li>
                    <li className="pkg-item"><i className="bi bi-check-circle-fill" />Luxury Materials</li>
                    <li className="pkg-item"><i className="bi bi-check-circle-fill" />Smart Storage</li>
                    <li className="pkg-item"><i className="bi bi-check-circle-fill" />Designer Lighting</li>
                  </ul>
                  <button onClick={() => scrollToSection("reusable-faq-section")} className="pkg-btn">Get Quote</button>
                </div>
              </InView>
            </div>
          </div>
        </section>

        {/* Why Kingsford? */}
        <section className="promo-section" style={{ backgroundColor: "var(--secondary-color)" }}>
          <div className="container" style={{ maxWidth: "1200px", padding: 0 }}>
            <h2 className="promo-section-title text-white">Why Kingsford?</h2>
            
            <div className="promo-why-grid mb-5">
              <div className="promo-why-card">
                <div className="why-icon"><LuAward /></div>
                <h4 className="why-title">10+ Years Experience</h4>
              </div>
              <div className="promo-why-card">
                <div className="why-icon"><LuShieldCheck /></div>
                <h4 className="why-title">100+ Completed Projects</h4>
              </div>
              <div className="promo-why-card">
                <div className="why-icon"><LuPalette /></div>
                <h4 className="why-title">Expert Interior Designers</h4>
              </div>
              <div className="promo-why-card">
                <div className="why-icon"><LuLayers /></div>
                <h4 className="why-title">Premium Materials</h4>
              </div>
              <div className="promo-why-card">
                <div className="why-icon"><LuDollarSign /></div>
                <h4 className="why-title">Transparent Pricing</h4>
              </div>
              <div className="promo-why-card">
                <div className="why-icon"><LuClock /></div>
                <h4 className="why-title">On-Time Delivery</h4>
              </div>
              <div className="promo-why-card">
                <div className="why-icon"><LuSparkles /></div>
                <h4 className="why-title">3D Design Preview</h4>
              </div>
              <div className="promo-why-card">
                <div className="why-icon"><LuUsers /></div>
                <h4 className="why-title">Dedicated Project Manager</h4>
              </div>
            </div>
            
            <div className="text-center mt-5">
              <InView className="reveal-up" threshold={0.1}>
                <h3 className="fw-bold text-white mb-4" style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "2rem" }}>
                  Start Your Dream Home Today
                </h3>
                <button onClick={() => scrollToSection("reusable-faq-section")} className="promo-hero-cta">
                  Book Free Consultation
                </button>
              </InView>
            </div>
          </div>
        </section>

        {/* What Our Clients Say */}
        <section className="promo-section" style={{ backgroundColor: "var(--primary-color)" }}>
          <div className="container" style={{ maxWidth: "1100px", padding: 0 }}>
            <h2 className="promo-section-title">What Our Clients Say</h2>
            
            <div className="promo-testimonial-row">
              {/* Testimonial 1 */}
              <InView className="reveal-up" threshold={0.15}>
                <div className="promo-testimonial-card">
                  <div className="stars">★★★★★</div>
                  <p className="quote-text">
                    &quot;Excellent service from design to execution. Highly recommended.&quot;
                  </p>
                  <h5 className="quote-author">– Priya, Chennai</h5>
                </div>
              </InView>

              {/* Testimonial 2 */}
              <InView className="reveal-up" threshold={0.15} style={{ transitionDelay: "0.08s" }}>
                <div className="promo-testimonial-card">
                  <div className="stars">★★★★★</div>
                  <p className="quote-text">
                    &quot;Beautiful interiors delivered on time and within budget.&quot;
                  </p>
                  <h5 className="quote-author">– Arun, Chennai</h5>
                </div>
              </InView>
            </div>
          </div>
        </section>

        {/* Ready to Transform Your Home? */}
        <section className="promo-section" style={{ background: "linear-gradient(rgba(15, 32, 24, 0.9), rgba(15, 32, 24, 0.9)), url('https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=1600&q=80') no-repeat center center / cover", padding: "6rem 5%" }}>
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
            
            <div className="projects-grid mb-5">
              {recentProjects.map((p, idx) => (
                <InView key={idx} className="reveal-up" threshold={0.15} style={{ transitionDelay: `${idx * 0.05}s` }}>
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
                </InView>
              ))}
            </div>

            <div className="text-center mt-4">
              <a 
                href="/gallery"
                target="_blank"
                rel="noopener noreferrer"
                className="btn px-4 py-2.5 text-uppercase fw-bold text-decoration-none"
                style={{
                  backgroundColor: "transparent",
                  border: "1.5px solid var(--secondary-color)",
                  color: "var(--secondary-color)",
                  fontSize: "0.8rem",
                  letterSpacing: "0.08em",
                  fontFamily: "var(--font-inter), sans-serif",
                  borderRadius: "2rem"
                }}
              >
                View Our Gallery
              </a>
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

        {/* Reusable Official Footer */}
        <Footer />
      </div>
    </div>
  );
}
