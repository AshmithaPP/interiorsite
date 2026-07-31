"use client";

import React, { useState } from "react";
import { LuChevronDown } from "react-icons/lu";
import InView from "./InView";
import "./FaqAccordion.css";

export default function FaqAccordion({ items, title, subtitle }) {
  const [activeFaq, setActiveFaq] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const toggleFaq = (idx) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
          type: "FAQ Consultation Form"
        })
      });
    } catch (err) {
      console.error("Error submitting FAQ lead form:", err);
    }
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  if (!items || items.length === 0) return null;

  return (
    <div className="faq-section-wrapper">
      {/* LEFT SIDE - HEADING + FAQ ACCORDION */}
      <div className="faq-accordion-container">
        {title && (
          <InView className="reveal-up faq-left-heading" threshold={0.1}>
            <h2 className="faq-left-title">{title}</h2>
            {subtitle && <span className="faq-left-subtitle">{subtitle}</span>}
          </InView>
        )}
        {items.map((faq, idx) => {
          const isActive = activeFaq === idx;

          return (
            <InView
              key={idx}
              className={`faq-item ${isActive ? "active" : ""} reveal-up`}
              style={{ transitionDelay: `${idx * 0.05}s` }}
              threshold={0.1}
            >
              <button
                type="button"
                className="faq-trigger"
                onClick={() => toggleFaq(idx)}
                suppressHydrationWarning
              >
                <h3 className="faq-question">{faq.q}</h3>
                <span className="faq-icon-wrap">
                  <LuChevronDown size={20} />
                </span>
              </button>
              <div
                className="faq-answer-wrapper"
                style={{ maxHeight: isActive ? "12rem" : "0px" }}
              >
                <div
                  className="faq-answer"
                  style={{
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? "translateY(0)" : "translateY(-8px)",
                  }}
                >
                  <p className="faq-answer-text">{faq.a}</p>
                </div>
              </div>
            </InView>
          );
        })}
      </div>

      {/* RIGHT SIDE - FORM */}
      <InView className="faq-form-container reveal-up" threshold={0.1}>
        <div className="faq-form-header">
          <h3 className="faq-form-title">Still have questions?</h3>
          <p className="faq-form-subtitle">
            Fill out the form below and we&apos;ll get back to you shortly.
          </p>
        </div>

        <form className="faq-form" onSubmit={handleSubmit}>
          <div className="faq-form-group">
            <label htmlFor="faq-name" className="faq-form-label">
              Name
            </label>
            <input
              id="faq-name"
              type="text"
              name="name"
              className="faq-form-input"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="faq-form-group">
            <label htmlFor="faq-email" className="faq-form-label">
              Email
            </label>
            <input
              id="faq-email"
              type="email"
              name="email"
              className="faq-form-input"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="faq-form-group">
            <label htmlFor="faq-phone" className="faq-form-label">
              Contact Number
            </label>
            <input
              id="faq-phone"
              type="tel"
              name="phone"
              className="faq-form-input"
              placeholder="Your phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="faq-form-group">
            <label htmlFor="faq-service" className="faq-form-label">
              Service Required
            </label>
            <select
              id="faq-service"
              name="service"
              className="faq-form-input"
              value={formData.service}
              onChange={handleChange}
              required
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                color: "var(--text-on-dark-body)",
                border: "1px solid rgba(217, 203, 164, 0.25)"
              }}
            >
              <option value="" style={{ backgroundColor: "var(--fourth-color)" }}>Select Service</option>
              <option value="Complete Home Interior" style={{ backgroundColor: "var(--fourth-color)" }}>Complete Home Interior</option>
              <option value="Modular Kitchen" style={{ backgroundColor: "var(--fourth-color)" }}>Modular Kitchen</option>
              <option value="Living Room Design" style={{ backgroundColor: "var(--fourth-color)" }}>Living Room Design</option>
              <option value="Bedroom Interiors" style={{ backgroundColor: "var(--fourth-color)" }}>Bedroom Interiors</option>
              <option value="False Ceiling Decor" style={{ backgroundColor: "var(--fourth-color)" }}>False Ceiling Decor</option>
              <option value="Professional Painting" style={{ backgroundColor: "var(--fourth-color)" }}>Professional Painting</option>
              <option value="Space Planning" style={{ backgroundColor: "var(--fourth-color)" }}>Space Planning</option>
              <option value="Office / Commercial Interior" style={{ backgroundColor: "var(--fourth-color)" }}>Office / Commercial Interior</option>
              <option value="Others" style={{ backgroundColor: "var(--fourth-color)" }}>Others</option>
            </select>
          </div>

          <div className="faq-form-group">
            <label htmlFor="faq-message" className="faq-form-label">
              Message
            </label>
            <textarea
              id="faq-message"
              name="message"
              className="faq-form-textarea"
              placeholder="Ask us anything..."
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="faq-form-submit">
            {submitted ? "Message Sent ✓" : "Send Message"}
          </button>
        </form>
      </InView>
    </div>
  );
}