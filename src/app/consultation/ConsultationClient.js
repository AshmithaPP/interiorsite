"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InView from "@/components/InView";
import WhyChooseKingsford from "@/components/WhyChooseKingsford";
import BookConsultation from "@/components/BookConsultation";
import { 
  LuCompass, 
  LuPalette, 
  LuFlame, 
  LuCalculator,
  LuAward,
  LuUsers,
  LuSparkles,
  LuUserCheck,
  LuShieldCheck
} from "react-icons/lu";

export default function ConsultationClient() {
  const services = [
    {
      title: "Space Planning",
      desc: "Smart layout solutions to maximize space and functionality throughout your floorplan.",
      icon: LuCompass
    },
    {
      title: "Design Suggestions",
      desc: "Expert advice on colors, materials, furniture selection, and finishing decors.",
      icon: LuPalette
    },
    {
      title: "Modular Kitchen Planning",
      desc: "Customized kitchen design recommendations tailored around your daily lifestyle.",
      icon: LuFlame
    },
    {
      title: "Interior Cost Estimation",
      desc: "Clear, transparent guidance on project scope, estimations, and budgeting plans.",
      icon: LuCalculator
    }
  ];

  const whyChooseList = [
    {
      title: "10+ Years of Experience",
      desc: "With over a decade of experience, we bring expertise, creativity, and attention to detail to every interior project we undertake.",
      icon: LuAward
    },
    {
      title: "100+ Happy Clients",
      desc: "Over 1,000 Chennai homeowners trust our designers for quality and execution.",
      icon: LuUsers
    },
    {
      title: "Customized Design Solutions",
      desc: "Personalized styling guidelines tailored around your budget and specific design tastes.",
      icon: LuSparkles
    },
    {
      title: "Professional Guidance",
      desc: "Expert interior designers providing design feedback to simplify your decisions.",
      icon: LuUserCheck
    },
    {
      title: "End-to-End Interior Support",
      desc: "Full execution tracking and support from initial space renders to final keys handover.",
      icon: LuShieldCheck
    }
  ];

  return (
    <div className="app-wrapper">
      <div className="app-canvas" style={{ backgroundColor: "var(--primary-color)" }}>
        <Navbar />

        {/* Custom Styles for Consultation Page transitions */}
        <style>{`
          /* Custom Alternating Transitions */
          .reveal-left {
            opacity: 0;
            transform: translateX(-60px);
            transition: opacity 0.85s cubic-bezier(0.25, 1, 0.5, 1), transform 0.85s cubic-bezier(0.25, 1, 0.5, 1);
          }
          .reveal-left.in-view {
            opacity: 1;
            transform: translateX(0);
          }

          .reveal-right {
            opacity: 0;
            transform: translateX(60px);
            transition: opacity 0.85s cubic-bezier(0.25, 1, 0.5, 1), transform 0.85s cubic-bezier(0.25, 1, 0.5, 1);
          }
          .reveal-right.in-view {
            opacity: 1;
            transform: translateX(0);
          }

          .reveal-up {
            opacity: 0;
            transform: translateY(40px);
            transition: opacity 0.85s cubic-bezier(0.25, 1, 0.5, 1), transform 0.85s cubic-bezier(0.25, 1, 0.5, 1);
          }
          .reveal-up.in-view {
            opacity: 1;
            transform: translateY(0);
          }

          /* Glassmorphic Dark cards */
          .glass-card-dark {
            background: rgba(15, 32, 24, 0.03) !important;
            border: 1px solid rgba(15, 32, 24, 0.12) !important;
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border-radius: 1.5rem;
            transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1) !important;
          }
          .glass-card-dark:hover {
            background: rgba(15, 32, 24, 0.06) !important;
            border-color: rgba(15, 32, 24, 0.28) !important;
            transform: translateY(-5px);
            box-shadow: 0 12px 24px rgba(15, 32, 24, 0.08);
          }

          .service-icon-box {
            width: 52px;
            height: 52px;
            border-radius: 50%;
            background-color: rgba(15, 32, 24, 0.05);
            color: var(--secondary-color);
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(15, 32, 24, 0.1);
            transition: all 0.3s ease;
          }
          .glass-card-dark:hover .service-icon-box {
            background-color: var(--secondary-color);
            color: var(--primary-color);
          }

          .hero-grid-pattern {
            display: none;
          }
        `}</style>

        <main className="flex-grow-1" style={{ paddingTop: "5.5rem" }}>
          
          {/* Main Hero & Form Split Section using the Reusable Component */}
          <BookConsultation
            formTitle="Get Free Consultation"
            formSubtitle="Fill out the contact form below and our team will get back to you as soon as possible."
            backgroundImage="/hero/int-consultation/1.png"
          >
            {/* Custom Left Column specific to the Consultation page */}
            <InView className="reveal-up" threshold={0.1}>
              <span 
                style={{ 
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  letterSpacing: "0.25em",
                  color: "var(--primary-color)",
                  textTransform: "uppercase"
                }}
              >
                Bespoke Renders & Advice
              </span>
              <h1 
                className="mt-3 mb-4 fw-bold"
                style={{ 
                  fontFamily: "var(--font-cormorant), serif", 
                  fontSize: "clamp(2.3rem, 5.5vw, 3.8rem)", 
                  color: "var(--text-on-dark-title)",
                  lineHeight: "1.1"
                }}
              >
                Interior Design Consultation Services
              </h1>
              <div 
                style={{
                  width: "80px",
                  height: "2px",
                  backgroundColor: "var(--primary-color)",
                  margin: "1.5rem 0",
                }}
              />
              <p 
                className="mb-5 text-white-50"
                style={{ 
                  fontFamily: "var(--font-outfit), sans-serif", 
                  fontSize: "1.05rem", 
                  lineHeight: "1.7",
                  maxWidth: "520px"
                }}
              >
                Looking for expert guidance for your home interiors? Kingsford offers professional Interior Design Consultation Services to help you plan and design beautiful, functional, and stylish living spaces. Our experienced interior designers understand your requirements, budget, and preferences to provide personalized design recommendations for your home.
              </p>
            </InView>
          </BookConsultation>

          {/* Consultation Services Cards */}
          <section className="py-5" style={{ backgroundColor: "var(--primary-color)" }}>
            <div className="container py-5">
              <InView className="text-center mb-5 reveal-up" threshold={0.1}>
                <span 
                  style={{ 
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    color: "var(--secondary-color)",
                    textTransform: "uppercase"
                  }}
                >
                  Consultation scope
                </span>
                <h2 
                  className="mt-2 fw-bold"
                  style={{ 
                    fontFamily: "var(--font-cormorant), serif", 
                    fontSize: "clamp(2.2rem, 4vw, 3.2rem)", 
                    color: "var(--text-title)"
                  }}
                >
                  Our Consultation Services Include
                </h2>
                <div 
                  style={{
                    width: "60px",
                    height: "2px",
                    backgroundColor: "var(--secondary-color)",
                    margin: "1.5rem auto",
                  }}
                />
              </InView>

              <div className="row g-4">
                {services.map((srv, idx) => {
                  const Icon = srv.icon;
                  return (
                    <div key={idx} className="col-12 col-md-6 col-lg-3">
                      <InView 
                        className="reveal-up h-100" 
                        style={{ transitionDelay: `${idx * 0.08}s` }} 
                        threshold={0.1}
                      >
                        <div className="p-4 h-100 glass-card-dark d-flex flex-column gap-3">
                          <div className="service-icon-box">
                            <Icon size={22} />
                          </div>
                          <h4 
                            style={{
                              fontFamily: "var(--font-outfit), sans-serif",
                              fontSize: "1.25rem",
                              fontWeight: 600,
                              color: "var(--text-title)",
                              margin: 0
                            }}
                          >
                            {srv.title}
                          </h4>
                          <p 
                            className="mb-0 text-muted"
                            style={{
                              fontFamily: "var(--font-outfit), sans-serif",
                              fontSize: "0.92rem",
                              lineHeight: "1.6"
                            }}
                          >
                            {srv.desc}
                          </p>
                        </div>
                      </InView>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Reusable Why Choose Kingsford Section (Alternating animations, #15301f cards) */}
          <WhyChooseKingsford items={whyChooseList} />

          {/* Reusable Book Consultation Split Form Section */}
          <BookConsultation 
            title="Book Your Consultation Today"
            subtitle="Plan Your Renovation"
            description="Whether you are planning a new home, apartment, villa, or renovation project, Kingsford is here to help you make the right design decisions. Contact us today to schedule your interior design consultation."
            formTitle="Request Consultation"
            formSubtitle="Book your design slot and our specialist team will call you back."
            dropdownOptions={["General Consultation", "Space Planning", "Design Suggestions", "Modular Kitchen Planning","False-ceiling","Painting", "Cost Estimation","Interior design"]}
            backgroundImage="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1800&q=80"
          />
        </main>

        <Footer />
      </div>
    </div>
  );
}
