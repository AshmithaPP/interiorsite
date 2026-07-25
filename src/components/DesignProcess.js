"use client";

import React, { useState } from "react";
import Image from "next/image";
import InView from "./InView";
import "./DesignProcess.css";

export default function DesignProcess() {
  const processSteps = [
    {
      step: 1,
      title: "Meet Your Designer",
      desc: "Share your ideas and floor plan to receive personalised 3D designs and an instant quote. Our expert design team listens closely to your vision and delivers a tailored interior solution that fits your lifestyle.",
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80"
    },
    {
      step: 2,
      title: "Visualization & 3D Layouts",
      desc: "Experience your home before it is built. Our designers draft photorealistic 3D visual mockups, giving you absolute clarity on spatial flows, color schemes, and modular layouts.",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80"
    },
    {
      step: 3,
      title: "Material & Finish Selection",
      desc: "Touch and feel premium surface finishes. Choose from a rich, curated selection of laminates, modular boards, glass finishes, and textures to define your style.",
      image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80"
    },
    {
      step: 4,
      title: "Precision Manufacturing",
      desc: "Flawless modular panels engineered under strict QA parameters. We use advanced computer-numeric CNC machines at our facility to guarantee exact margins and quality standards.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
    },
    {
      step: 5,
      title: "Flawless Installation",
      desc: "Our specialized installation teams assemble modular structures, drawers, false ceilings, and painting items on-site with flawless alignment and 100% precision checks.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80"
    },
    {
      step: 6,
      title: "Move-In & Handover",
      desc: "Final detailed audit checklist. We run a comprehensive deep cleaning of the premises and hand over the keys to your brand-new dream interiors with follow-up warranty updates.",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const [activeStep, setActiveStep] = useState(1);
  const currentProcess = processSteps.find((item) => item.step === activeStep);

  const handlePrevStep = () => {
    setActiveStep((prev) => Math.max(1, prev - 1));
  };

  const handleNextStep = () => {
    setActiveStep((prev) => Math.min(processSteps.length, prev + 1));
  };

  return (
    <section className="process-section" style={{ paddingTop: "6rem", paddingBottom: "6rem" }}>
      <div className="container" style={{ maxWidth: "1100px" }}>
        <div className="process-header text-center mb-4">
          <InView className="reveal-up" threshold={0.1}>
            <h2 className="process-title fw-bold mb-0" style={{ fontFamily: "var(--font-cormorant), serif", color: "var(--text-title)", fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
              From Design to Move-In
            </h2>
          </InView>
        </div>

        {/* Progress Timeline Header */}
        <div className="process-timeline-container mb-5">
          <div className="process-timeline-line" />
          <div className="process-timeline-steps">
            {processSteps.map((item) => (
              <button
                key={item.step}
                type="button"
                className={`process-timeline-step-btn ${item.step === activeStep ? "active" : ""}`}
                onClick={() => setActiveStep(item.step)}
              >
                {item.step}
              </button>
            ))}
          </div>
        </div>

        {/* Slider Content Area with Arrows */}
        <div className="process-slider-wrapper position-relative">
          {/* Prev Arrow */}
          <button
            type="button"
            className="slider-arrow-btn prev"
            onClick={handlePrevStep}
            disabled={activeStep === 1}
            aria-label="Previous step"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Content Row */}
          <div className="row align-items-center gy-4 justify-content-between">
            <div className="col-12 col-md-6 col-lg-5">
              <InView className="reveal-up" threshold={0.1}>
                <div className="process-copy">
                  <h3 className="process-copy-title fw-bold mb-3" style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "clamp(1.5rem, 3vw, 2.2rem)", color: "var(--text-title)" }}>
                    {currentProcess.title}
                  </h3>
                  <p className="process-copy-text text-muted" style={{ fontSize: "0.95rem", lineHeight: "1.7" }}>
                    {currentProcess.desc}
                  </p>
                </div>
              </InView>
            </div>

            <div className="col-12 col-md-6 col-lg-6 text-center">
              <InView className="reveal-up" style={{ transitionDelay: "0.08s" }} threshold={0.1}>
                <div className="process-image-card shadow position-relative overflow-hidden w-100" style={{ aspectRatio: "4/3", borderRadius: "1.5rem" }}>
                  <Image
                    src={currentProcess.image}
                    alt={currentProcess.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-fit-cover process-step-photo"
                    priority
                  />
                </div>
              </InView>
            </div>
          </div>

          {/* Next Arrow */}
          <button
            type="button"
            className="slider-arrow-btn next"
            onClick={handleNextStep}
            disabled={activeStep === processSteps.length}
            aria-label="Next step"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        {/* Centered CTA Button */}
        <div className="text-center mt-5">
          <InView className="reveal-up" style={{ transitionDelay: "0.15s" }} threshold={0.1}>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("open-consultation-popup"))}
              className="process-cta-btn"
              suppressHydrationWarning
            >
              Book Free Design Session
            </button>
          </InView>
        </div>
      </div>
    </section>
  );
}
