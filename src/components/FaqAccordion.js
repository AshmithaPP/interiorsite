"use client";

import React, { useState } from "react";
import { LuChevronDown } from "react-icons/lu";
import InView from "./InView";
import "./FaqAccordion.css";

export default function FaqAccordion({ items, title, subtitle }) {
  const [activeFaq, setActiveFaq] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const toggleFaq = (idx) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with your actual submit logic (API call, email service, etc.)
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
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