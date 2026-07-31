"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import "./FloatingActions.css";

export default function FloatingActions() {
  const [waHover, setWaHover] = useState(false);
  const [estimateHover, setEstimateHover] = useState(false);
  const pathname = usePathname();

  const handleOpenPopup = () => {
    window.dispatchEvent(new CustomEvent("open-consultation-popup"));
  };

  const handleEstimateClick = () => {
    if (pathname === "/promo") {
      const el = document.getElementById("lead-form-section") || document.getElementById("reusable-faq-section");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      handleOpenPopup();
    }
  };

  return (
    <div className="floating-actions-container">
      {/* Floating Action Badge on the right */}
      <div className="floating-badges-stack">
        {/* WhatsApp Badge - Hidden on promo page */}
        {pathname !== "/promo" && (
          <a
            href="https://wa.me/919789888028"
            target="_blank"
            rel="noopener noreferrer"
            className={`floating-badge wa-badge ${waHover ? "hovered" : ""}`}
            onMouseEnter={() => setWaHover(true)}
            onMouseLeave={() => setWaHover(false)}
            aria-label="Chat on WhatsApp"
          >
            <div className="badge-icon-wrap">
              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="wa-svg-icon">
                <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.5 1.132 6.744 3.054 9.378L1.058 31.14l5.966-1.966A15.907 15.907 0 0 0 16.004 32C24.826 32 32 24.824 32 16.004 32 7.176 24.826 0 16.004 0zm9.342 22.616c-.39 1.1-1.932 2.014-3.164 2.28-.846.18-1.948.324-5.664-1.218-4.756-1.97-7.816-6.8-8.052-7.114-.226-.316-1.9-2.53-1.9-4.828s1.204-3.428 1.63-3.896c.39-.426 1.02-.638 1.626-.638.196 0 .372.01.53.018.468.02.702.048 1.012.782.388.916 1.332 3.248 1.448 3.484.118.236.236.556.076.872-.148.326-.278.47-.514.74-.236.27-.46.476-.696.768-.216.254-.46.526-.196.994.264.46 1.172 1.934 2.518 3.134 1.732 1.544 3.192 2.024 3.644 2.248.338.168.742.138 1.018-.158.348-.378.778-.998 1.216-1.612.31-.438.702-.494 1.078-.334.382.148 2.418 1.14 2.832 1.348.414.206.69.31.792.48.1.17.1.978-.29 2.078z" />
              </svg>
            </div>
            <span className="badge-text">Whatsapp</span>
          </a>
        )}
      </div>

      {/* Free Estimate Button at the center of the right side */}
      <button
        onClick={handleEstimateClick}
        className={`floating-estimate-btn ${estimateHover ? "hovered" : ""}`}
        onMouseEnter={() => setEstimateHover(true)}
        onMouseLeave={() => setEstimateHover(false)}
        aria-label="Get Free Estimate"
        suppressHydrationWarning
      >
        <span className="estimate-text">Free Estimate</span>
        <div className="estimate-arrow-wrap">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </div>
      </button>
    </div>
  );
}
