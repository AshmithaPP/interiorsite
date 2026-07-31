"use client";

import React from "react";
import Link from "next/link";
import InView from "./InView";
import { usePathname } from "next/navigation";
import { LuPhone, LuMail, LuMapPin } from "react-icons/lu";

export default function Footer() {
  const pathname = usePathname();
  const isPromo = pathname === "/promo";
  return (
    <>
      <style>{`
        /* Scoped styling for 4-column Footer section */
        .footer-section {
          background-color: var(--fourth-color);
          border-top: 1px solid rgba(217, 203, 164, 0.15);
          padding: 5rem 1.5rem 2rem 1.5rem;
          font-family: var(--font-inter), sans-serif;
          color: var(--text-on-dark-body);
        }

        .footer-container {
          max-width: 85rem;
          margin: 0 auto;
        }

        .footer-title {
          font-family: var(--font-outfit), sans-serif;
          font-size: 0.875rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--primary-color);
          margin-bottom: 1.75rem;
        }

        .footer-desc {
          font-size: 0.9rem;
          line-height: 1.65;
          opacity: 0.8;
          margin-bottom: 1.5rem;
        }

        .footer-logo {
          font-family: var(--font-cormorant), serif;
          font-size: 2.2rem;
          font-weight: 700;
          color: var(--primary-color);
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: -0.5px;
        }

        .footer-links-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .footer-link {
          color: var(--text-on-dark-body);
          text-decoration: none;
          font-size: 0.9rem;
          transition: all 0.2s ease;
          display: inline-block;
        }

        .footer-link:hover {
          color: var(--primary-color);
          transform: translateX(3px);
        }

        .footer-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-size: 0.9rem;
          margin-bottom: 0.85rem;
          opacity: 0.85;
          color: var(--text-on-dark-body);
          text-decoration: none;
        }

        .footer-contact-item:hover {
          color: var(--primary-color);
        }

        .footer-contact-item svg {
          color: var(--primary-color);
          flex-shrink: 0;
          margin-top: 3px;
        }

        .footer-social-icons {
          display: flex;
          gap: 0.75rem;
          margin-top: 1.5rem;
        }

        .footer-social-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.05);
          color: var(--primary-color);
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .footer-social-btn:hover {
          background-color: var(--primary-color);
          color: var(--secondary-color);
          transform: translateY(-3px);
        }

        .footer-map-container {
          margin-bottom: 1.25rem;
          border-radius: 10px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background-color: rgba(0, 0, 0, 0.2);
        }

        .footer-bottom {
          margin-top: 4rem;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .footer-copyright {
          font-size: 0.8rem;
          opacity: 0.6;
          margin: 0;
        }
      `}</style>

      <footer id="contact" className="footer-section">
        <div className="footer-container">
          <div className="row g-5">
            {/* Column 1: Logo & Description & Socials */}
            <div className={`col-12 col-md-6 ${isPromo ? "col-lg-6" : "col-lg-3"}`}>
              <div className="footer-logo">Kingsford</div>
              <p className="footer-desc">
                Crafting timeless interiors that balance elegance, comfort, and modern design. Turn your house into a dream home with our professional interior decor solutions.
              </p>
              {!isPromo && (
                <div className="footer-social-icons">
                  <a href="#" className="footer-social-btn" aria-label="Facebook">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a href="#" className="footer-social-btn" aria-label="Instagram">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>
                  <a href="#" className="footer-social-btn" aria-label="Twitter">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                </div>
              )}
            </div>

            {/* Column 2: Quick Links - Hidden on promo page */}
            {!isPromo && (
              <div className="col-12 col-md-6 col-lg-3">
                <h3 className="footer-title">Quick Links</h3>
                <ul className="footer-links-list">
                  <li>
                    <Link href="/" className="footer-link">Home</Link>
                  </li>
                  <li>
                    <Link href="/about" className="footer-link">About</Link>
                  </li>
                  <li>
                    <Link href="/gallery" className="footer-link">Gallery</Link>
                  </li>
                  <li>
                    <Link href="/blogs" className="footer-link">Blogs</Link>
                  </li>
                  <li>
                    <Link href="/contact" className="footer-link">Contact</Link>
                  </li>
                </ul>
              </div>
            )}

            {/* Column 3: Services - Hidden on promo page */}
            {!isPromo && (
              <div className="col-12 col-md-6 col-lg-3">
                <h3 className="footer-title">Services</h3>
                <ul className="footer-links-list">
                  <li>
                    <Link href="/services/interior-design" className="footer-link">Interior Design</Link>
                  </li>
                  <li>
                    <Link href="/services/modular" className="footer-link">Modular Kitchens</Link>
                  </li>
                  <li>
                    <Link href="/services/painting" className="footer-link">Professional Painting</Link>
                  </li>
                  <li>
                    <Link href="/services/false-ceiling" className="footer-link">False Ceiling Decor</Link>
                  </li>
                  <li>
                    <Link href="/consultation" className="footer-link">Free Consultation</Link>
                  </li>
                </ul>
              </div>
            )}

            {/* Column 4: Map & Contact Info */}
            <div className={`col-12 col-md-6 ${isPromo ? "col-lg-6" : "col-lg-3"}`}>
              <h3 className="footer-title">Get In Touch</h3>
              <div className="footer-map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.123456789!2d80.2707!3d13.0827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA0JzU3LjciTiA4MMKwMTYnMTQuNSJFOg!5e0!3m2!1sen!2sin!4v1625000000000!5m2!1sen!2sin"
                  width="100%"
                  height="150"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Google Maps Location"
                ></iframe>
              </div>
              <div>
                {isPromo ? (
                  <div className="footer-contact-item" style={{ cursor: "default" }}>
                    <LuPhone size={16} />
                    <span>+91 97898 88028</span>
                  </div>
                ) : (
                  <a href="tel:+919789888028" className="footer-contact-item">
                    <LuPhone size={16} />
                    <span>+91 97898 88028</span>
                  </a>
                )}
                {isPromo ? (
                  <div className="footer-contact-item" style={{ cursor: "default" }}>
                    <LuMail size={16} />
                    <span>Kingsfordgroups@gmail.com</span>
                  </div>
                ) : (
                  <a href="mailto:Kingsfordgroups@gmail.com" className="footer-contact-item">
                    <LuMail size={16} />
                    <span>Kingsfordgroups@gmail.com</span>
                  </a>
                )}
                <div className="footer-contact-item">
                  <LuMapPin size={16} />
                  <span>No 29, Ground Floor, Grace Hospital, Balavinayagar Kovil Street Shastri Nagar, Pattabiram, Chennai-600072, Tamil Nadu</span>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-copyright">
              © {new Date().getFullYear()} Kingsford Interiors. All Rights Reserved.
            </p>
            <p className="footer-copyright" style={{ opacity: 0.4 }}>
              Premium Living Redefined
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
