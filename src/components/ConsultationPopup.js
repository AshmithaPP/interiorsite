"use client";

import { useState, useEffect } from "react";
import { LuX, LuCircleCheck, LuChevronDown } from "react-icons/lu";
import "./ConsultationPopup.css";

export default function ConsultationPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [propertyType, setPropertyType] = useState("2 BHK");
  const [location, setLocation] = useState("Anna Nagar");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [consent, setConsent] = useState(true);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!name || name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }
    const cleaned = (phone || "").replace(/[^0-9]/g, "");
    if (cleaned.length !== 10) {
      newErrors.phone = "Phone number must be exactly 10 digits.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Locations list for dropdown selection
  const locations = [
    "Anna Nagar",
    "Adyar",
    "Velachery",
    "OMR",
    "ECR",
    "Tambaram",
    "Medavakkam",
    "Porur",
    "T. Nagar",
    "Nungambakkam",
    "Mylapore",
    "Other Location"
  ];

  useEffect(() => {
    // Show popup after 6 seconds of page load
    let timer = setTimeout(() => {
      setIsOpen(true);
    }, 6000);

    // Custom event listener for "Free Estimate" button clicks
    const handleOpenEvent = () => {
      setIsOpen(true);
      setIsSubmitted(false);
      setErrors({});
    };

    window.addEventListener("open-consultation-popup", handleOpenEvent);

    return () => {
      if (timer) clearTimeout(timer);
      window.removeEventListener("open-consultation-popup", handleOpenEvent);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    
    // Simulate successful API call
    setIsSubmitted(true);
    
    // Auto-close after 3 seconds on success
    setTimeout(() => {
      setIsOpen(false);
      setIsSubmitted(false);
      setName("");
      setPropertyType("2 BHK");
      setLocation("Anna Nagar");
      setPhone("");
      setErrors({});
    }, 3500);
  };

  if (!isOpen) return null;

  return (
    <div className="popup-backdrop">
      <div className="popup-modal-container scale-in">
        {/* Close Button */}
        <button className="popup-close-btn" onClick={handleClose} aria-label="Close popup">
          <LuX size={20} />
        </button>

        {/* Modal Content Split */}
        <div className="popup-split-wrapper">
          
          {/* Left Side: Brand Banner (Hidden on Mobile) */}
          <div className="popup-banner-side">
            <div className="banner-overlay" />
            <div className="banner-content">
              <span className="banner-brand-label">KINGSFORD</span>
              <h3 className="banner-title">Flat 25% OFF</h3>
              <p className="banner-subtitle">On Modular Home Interiors</p>
              
              <div className="banner-bullets">
                <div className="bullet-item">
                  <span className="bullet-number">10+</span>
                  <span className="bullet-label">Years of Experience</span>
                </div>
                <div className="bullet-item">
                  <span className="bullet-number">100+</span>
                  <span className="bullet-label">Happy Clients Served</span>
                </div>
                <div className="bullet-item">
                  <span className="bullet-number">10</span>
                  <span className="bullet-label">Years Service Warranty</span>
                </div>
              </div>
              
              <p className="banner-footnote">*Hurry! Book your slot today</p>
            </div>
          </div>

          {/* Right Side: Form / Success screen */}
          <div className="popup-form-side">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="popup-form-content">
                <h4 className="form-title">
                  Get a <span className="text-accent">Free Design Consultation</span>
                </h4>
                
                {/* Property Type Selection */}
                <div className="form-group mb-3">
                  <label className="input-field-label">Property Type</label>
                  <div className="property-type-tabs">
                    {["1 BHK", "2 BHK", "3 BHK", "4+ BHK"].map((type) => (
                      <button
                        key={type}
                        type="button"
                        className={`type-tab-btn ${propertyType === type ? "active" : ""}`}
                        onClick={() => setPropertyType(type)}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Location Select Dropdown */}
                <div className="form-group mb-3 position-relative">
                  <label className="input-field-label" htmlFor="popup-location">Property Location</label>
                  <div className="select-dropdown-wrapper">
                    <select
                      id="popup-location"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="form-select-custom"
                    >
                      {locations.map((loc) => (
                        <option key={loc} value={loc}>
                          {loc}
                        </option>
                      ))}
                    </select>
                    <LuChevronDown className="select-arrow-icon" size={16} />
                  </div>
                </div>

                {/* Name Input */}
                <div className="form-group mb-3">
                  <label className="input-field-label" htmlFor="popup-name">Name</label>
                  <input
                    id="popup-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) setErrors((prev) => ({ ...prev, name: "" }));
                    }}
                    placeholder="Enter your name"
                    className={`form-input-custom ${errors.name ? "is-invalid" : ""}`}
                  />
                  {errors.name && <span className="popup-error-msg" style={{ color: "#dc3545", fontSize: "0.75rem", marginTop: "0.25rem", display: "block" }}>{errors.name}</span>}
                </div>

                {/* Mobile Number Input */}
                <div className="form-group mb-3">
                  <label className="input-field-label" htmlFor="popup-phone">Mobile Number</label>
                  <div className="phone-input-group">
                    <span className="phone-prefix">+91</span>
                    <input
                      id="popup-phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        if (errors.phone) setErrors((prev) => ({ ...prev, phone: "" }));
                      }}
                      placeholder="10-digit number"
                      className={`form-input-custom phone-field ${errors.phone ? "is-invalid" : ""}`}
                    />
                  </div>
                  {errors.phone && <span className="popup-error-msg" style={{ color: "#dc3545", fontSize: "0.75rem", marginTop: "0.25rem", display: "block" }}>{errors.phone}</span>}
                </div>

                {/* Consent Checkbox */}
                <div className="form-check-group mb-4">
                  <input
                    id="popup-consent"
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="form-checkbox-custom"
                  />
                  <label htmlFor="popup-consent" className="checkbox-field-label">
                    Yes, send me updates via WhatsApp and SMS
                  </label>
                </div>

                {/* Submit button */}
                <button type="submit" className="popup-submit-btn">
                  Book Free Consultation
                </button>

                <p className="form-legal-note">
                  By submitting, you agree to our privacy policy and consent to be contacted.
                </p>
              </form>
            ) : (
              <div className="popup-success-screen animate-fade-in">
                <LuCircleCheck className="success-check-icon animate-bounce" size={56} />
                <h4 className="success-title">Thank you!</h4>
                <p className="success-message">
                  Your free consultation request has been submitted successfully. Our expert interior designer will call you shortly.
                </p>
                <div className="success-loader-bar" />
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
