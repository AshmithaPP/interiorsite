"use client";

import React, { useState } from "react";
import InView from "./InView";
import { LuSend, LuShieldCheck } from "react-icons/lu";

export default function BookConsultation({ 
  children,
  title, 
  subtitle, 
  description, 
  formTitle, 
  formSubtitle, 
  dropdownLabel, 
  dropdownOptions,
  backgroundImage
}) {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    projectType: dropdownOptions ? dropdownOptions[0] : "Complete Home Interior",
    location: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name || formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    const cleaned = (formData.mobile || "").replace(/[^0-9]/g, "");
    if (cleaned.length !== 10) {
      newErrors.mobile = "Phone number must be exactly 10 digits.";
    }
    if (!formData.location || formData.location.trim().length < 2) {
      newErrors.location = "Please enter your property location.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setTimeout(() => {
      setSubmitted(true);
      setFormData({
        name: "",
        mobile: "",
        email: "",
        projectType: dropdownOptions ? dropdownOptions[0] : "Complete Home Interior",
        location: "",
        message: ""
      });
      setErrors({});
    }, 600);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const defaultOptions = [
    "Complete Home Interior",
    "Modular Kitchen",
    "Living Room",
    "Bedroom Interior",
    "False Ceiling",
    "Wardrobe Solutions",
    "Painting Project",
    "Interior Consultation"
  ];

  const optionsToRender = dropdownOptions || defaultOptions;

  const bgStyle = backgroundImage 
    ? `linear-gradient(rgba(15, 32, 24, 0.88), rgba(15, 32, 24, 0.88)), url('${backgroundImage}') no-repeat center center fixed`
    : "linear-gradient(rgba(15, 32, 24, 0.88), rgba(15, 32, 24, 0.88)), url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1800&q=80') no-repeat center center fixed";

  return (
    <section 
      className="py-5 d-flex align-items-center position-relative overflow-hidden" 
      style={{ 
        background: bgStyle,
        backgroundSize: "cover",
        minHeight: "75vh",
        borderTop: "1px solid rgba(217, 203, 164, 0.15)"
      }}
    >
      {/* Styles for Reference Form Inputs and Layouts */}
      <style>{`
        .reference-form-card {
          background: rgba(255, 255, 255, 0.96) !important;
          border-radius: 1.25rem !important;
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.25) !important;
          border: none !important;
          padding: 3rem !important;
          transition: all 0.3s ease;
        }

        .reference-input {
          width: 100%;
          padding: 0.9rem 1.15rem;
          background-color: #f1f3f5 !important;
          border: none !important;
          border-radius: 0.5rem !important;
          color: #212529 !important;
          font-family: var(--font-outfit), sans-serif;
          font-size: 0.95rem;
          transition: all 0.3s ease !important;
        }
        .reference-input:focus {
          background-color: #e9ecef !important;
          box-shadow: 0 0 0 3px rgba(15, 32, 24, 0.1) !important;
          outline: none !important;
        }
        .reference-input::placeholder {
          color: #6c757d;
          opacity: 0.8;
        }

        .reference-select {
          appearance: none;
          background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%23495057' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3E%3C/svg%3E") !important;
          background-position: right 1.15rem center !important;
          background-size: 1.25em 1.25em !important;
          background-repeat: no-repeat !important;
          padding-right: 2.5rem !important;
          cursor: pointer;
        }

        .reference-btn {
          background-color: var(--secondary-color) !important;
          color: var(--primary-color) !important;
          font-family: var(--font-inter), sans-serif;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 1.1rem 2rem;
          border-radius: 0.5rem;
          border: none;
          transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
          cursor: pointer;
          width: 100%;
        }
        .reference-btn:hover {
          background-color: #1a382b !important;
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(15, 32, 24, 0.25);
        }

        .hero-accent-line {
          width: 60px;
          height: 3px;
          background-color: var(--primary-color);
          margin: 1.5rem 0;
        }
      `}</style>

      <div className="container py-5 position-relative" style={{ zIndex: 2 }}>
        <div className="row g-5 align-items-center">
          
          {/* Left Column Copy */}
          <div className="col-12 col-lg-6 text-start text-white">
            {children ? children : (
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
                  {subtitle || "Plan Your Renovation"}
                </span>
                <h2 
                  className="mt-3 mb-2 fw-bold"
                  style={{ 
                    fontFamily: "var(--font-cormorant), serif", 
                    fontSize: "clamp(2rem, 4.5vw, 3.2rem)", 
                    color: "var(--text-on-dark-title)",
                    lineHeight: "1.2"
                  }}
                >
                  {title || "Book Your Consultation Today"}
                </h2>
                <div className="hero-accent-line" />
                
                <p 
                  className="mb-4 text-white-50"
                  style={{ 
                    fontFamily: "var(--font-outfit), sans-serif", 
                    fontSize: "1.05rem", 
                    lineHeight: "1.7",
                    maxWidth: "500px"
                  }}
                >
                  {description || "Whether you are planning a new home, apartment, villa, or renovation project, Kingsford is here to help you make the right design decisions. Contact us today to schedule your interior design consultation."}
                </p>

                <div className="d-flex align-items-center gap-2 mt-4 text-white-50">
                  <LuShieldCheck size={20} style={{ color: "var(--primary-color)" }} />
                  <span className="small">All estimations and plans are custom configured.</span>
                </div>
              </InView>
            )}
          </div>

          {/* Right Column Consultation Request Form */}
          <div className="col-12 col-lg-6">
            <InView className="reveal-up" threshold={0.1} style={{ transitionDelay: "0.15s" }}>
              <div className="reference-form-card">
                <h3 
                  className="fw-bold text-center mb-1" 
                  style={{ 
                    fontFamily: "var(--font-cormorant), serif", 
                    color: "var(--secondary-color)", 
                    fontSize: "2rem" 
                  }}
                >
                  {formTitle || "Request Consultation"}
                </h3>
                <p 
                  className="text-center text-muted mb-4" 
                  style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: "0.9rem" }}
                >
                  {formSubtitle || "Book your design slot and our specialist team will call you back."}
                </p>

                {submitted ? (
                  <div className="text-center py-5">
                    <LuShieldCheck size={64} style={{ color: "var(--secondary-color)" }} className="mb-3 animate-fade-in-up" />
                    <h4 className="fw-bold mb-2" style={{ fontFamily: "var(--font-cormorant), serif", color: "var(--text-title)" }}>
                      Request Sent Successfully!
                    </h4>
                    <p className="text-muted" style={{ fontFamily: "var(--font-outfit), sans-serif" }}>
                      Thank you. We will call you within 24 working hours to schedule your consultation.
                    </p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="btn btn-outline-dark rounded-pill mt-4 px-4 py-2"
                      style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "0.85rem", fontWeight: "600" }}
                    >
                      Send Another Request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
                    <div>
                      <input 
                        type="text" 
                        name="name" 
                        className={`reference-input ${errors.name ? "is-invalid" : ""}`} 
                        placeholder="Name*" 
                        required
                        value={formData.name}
                        onChange={handleChange}
                      />
                      {errors.name && <span className="reference-error-msg" style={{ color: "#dc3545", fontSize: "0.75rem", marginTop: "0.25rem", display: "block" }}>{errors.name}</span>}
                    </div>

                    <div>
                      <div className="row g-3">
                        <div className="col-4">
                          <input 
                            type="text" 
                            className="reference-input text-center" 
                            value="+91 IND" 
                            disabled
                            style={{ cursor: "not-allowed", fontWeight: "600", color: "#495057" }}
                          />
                        </div>
                        <div className="col-8">
                          <input 
                            type="tel" 
                            name="mobile" 
                            className={`reference-input ${errors.mobile ? "is-invalid" : ""}`} 
                            placeholder="Mobile Num*" 
                            required
                            value={formData.mobile}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      {errors.mobile && <span className="reference-error-msg" style={{ color: "#dc3545", fontSize: "0.75rem", marginTop: "0.25rem", display: "block" }}>{errors.mobile}</span>}
                    </div>

                    <div>
                      <input 
                        type="email" 
                        name="email" 
                        className={`reference-input ${errors.email ? "is-invalid" : ""}`} 
                        placeholder="Email Address*" 
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {errors.email && <span className="reference-error-msg" style={{ color: "#dc3545", fontSize: "0.75rem", marginTop: "0.25rem", display: "block" }}>{errors.email}</span>}
                    </div>

                    <div>
                      <select 
                        name="projectType" 
                        className="reference-input reference-select"
                        value={formData.projectType}
                        onChange={handleChange}
                      >
                        {optionsToRender.map((opt, idx) => (
                          <option key={idx} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <input 
                        type="text" 
                        name="location" 
                        className={`reference-input ${errors.location ? "is-invalid" : ""}`} 
                        placeholder="Property Location*" 
                        required
                        value={formData.location}
                        onChange={handleChange}
                      />
                      {errors.location && <span className="reference-error-msg" style={{ color: "#dc3545", fontSize: "0.75rem", marginTop: "0.25rem", display: "block" }}>{errors.location}</span>}
                    </div>

                    <div>
                      <textarea 
                        name="message" 
                        rows="3" 
                        className="reference-input" 
                        placeholder="Requirements details (Optional)" 
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="mt-2">
                      <button type="submit" className="reference-btn d-flex align-items-center justify-content-center gap-2">
                        <span>SUBMIT</span>
                        <LuSend size={16} />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </InView>
          </div>

        </div>
      </div>
    </section>
  );
}
