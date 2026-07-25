"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InView from "@/components/InView";
import WhyChooseKingsford from "@/components/WhyChooseKingsford";
import BookConsultation from "@/components/BookConsultation";
import { 
  LuPhone, 
  LuMail, 
  LuMapPin, 
  LuClock
} from "react-icons/lu";

export default function ContactClient() {
  return (
    <div className="app-wrapper">
      <div className="app-canvas" style={{ backgroundColor: "var(--primary-color)" }}>
        <Navbar />

        {/* Style block for Page Transitions */}
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

          .hero-accent-line {
            width: 60px;
            height: 3px;
            background-color: var(--primary-color);
            margin: 1.5rem 0;
          }
        `}</style>

        <main className="flex-grow-1" style={{ paddingTop: "5.5rem" }}>
          {/* Main Hero & Form Split Section using the Reusable Component */}
          <BookConsultation
            formTitle="Get Free Consultation"
            formSubtitle="Fill out the contact form below and our team will get back to you as soon as possible."
            backgroundImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=80"
          >
            {/* Custom Left Column specific to the Contact page */}
            <InView className="reveal-up" threshold={0.1}>
              <span 
                style={{ 
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.25em",
                  color: "var(--primary-color)",
                  textTransform: "uppercase"
                }}
              >
                Get in touch
              </span>
              <h1 
                className="mt-3 mb-2 fw-bold"
                style={{ 
                  fontFamily: "var(--font-cormorant), serif", 
                  fontSize: "clamp(2.5rem, 5vw, 3.8rem)", 
                  color: "var(--text-on-dark-title)",
                  lineHeight: "1.1"
                }}
              >
                Let&apos;s Create Your Dream Space Together
              </h1>
              <div className="hero-accent-line" />
              
              <p 
                className="mb-5 text-white-50"
                style={{ 
                  fontFamily: "var(--font-outfit), sans-serif", 
                  fontSize: "1rem", 
                  lineHeight: "1.7",
                  maxWidth: "520px"
                }}
              >
                Thank you for your interest in Kingsford. Whether you are planning a complete home interior, modular kitchen, false ceiling, painting project, or interior consultation, our team is here to help. We would be happy to discuss your requirements and provide customized solutions.
              </p>

              {/* Left side details matching visual style of references */}
              <div className="d-flex flex-column gap-3 mb-4" style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: "0.95rem" }}>
                <div className="d-flex align-items-center gap-3">
                  <LuPhone size={18} style={{ color: "var(--primary-color)" }} />
                  <span><strong>Phone:</strong> +91 98765 43210</span>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <LuMail size={18} style={{ color: "var(--primary-color)" }} />
                  <span><strong>Email:</strong> info@kingsford.in</span>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <LuMapPin size={18} style={{ color: "var(--primary-color)" }} />
                  <span><strong>Address:</strong> 12, Khader Nawaz Khan Road, Nungambakkam, Chennai</span>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <LuClock size={18} style={{ color: "var(--primary-color)" }} />
                  <span><strong>Hours:</strong> Monday to Saturday – 9:00 AM to 6:00 PM</span>
                </div>
              </div>

              <p 
                className="fw-bold mb-4"
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  color: "var(--primary-color)",
                  letterSpacing: "0.02em"
                }}
              >
                Book a free consultation with one of our Expert designers!
              </p>

              <Link 
                href="/gallery" 
                className="btn rounded-1 px-4 py-2.5 text-uppercase fw-bold text-decoration-none"
                style={{
                  backgroundColor: "transparent",
                  border: "1.5px solid var(--primary-color)",
                  color: "var(--primary-color)",
                  fontSize: "0.8rem",
                  letterSpacing: "0.08em"
                }}
              >
                View All Projects
              </Link>
            </InView>
          </BookConsultation>

          {/* Reusable Why Choose Kingsford Section */}
          <WhyChooseKingsford />

          {/* Bottom CTA Banner (Dark green background) */}
          <section className="py-5" style={{ backgroundColor: "var(--secondary-color)" }}>
            <div className="container text-center py-5" style={{ maxWidth: "800px" }}>
              <InView className="reveal-up" threshold={0.1}>
                <h2 className="fw-bold mb-3" style={{ fontFamily: "var(--font-cormorant), serif", color: "var(--text-on-dark-title)", fontSize: "2.5rem" }}>
                  Book Your Free Consultation Today
                </h2>
                <p className="mx-auto mb-4" style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: "1.1rem", color: "var(--text-on-dark-body)", lineHeight: "1.7" }}>
                  Ready to transform your home or office? Contact Kingsford today for a free consultation and let our experts bring your vision to life.
                </p>
                <a 
                  href="tel:+919876543210" 
                  className="btn px-4 py-3 rounded-pill" 
                  style={{ 
                    backgroundColor: "var(--primary-color)", 
                    color: "var(--secondary-color)", 
                    fontWeight: "700", 
                    letterSpacing: "0.05em",
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "0.85rem"
                  }}
                >
                  CALL NOW: +91 98765 43210
                </a>
              </InView>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}
