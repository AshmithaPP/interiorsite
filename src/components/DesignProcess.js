"use client";

import React from "react";
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
      title: "Material Selection",
      desc: "Touch and feel premium surface finishes. Choose from a rich, curated selection of laminates, modular boards, glass finishes, and textures to define your style.",
      image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80"
    },
    {
      step: 4,
      title: "Precision Manufacture",
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

  const [activeStep, setActiveStep] = React.useState(1);
  const currentProcess = processSteps.find((item) => item.step === activeStep);

  return (
    <section className="process-section" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
      <div className="container" style={{ maxWidth: "1100px" }}>
        <div className="process-header text-center mb-4">
          <InView className="reveal-up" threshold={0.1}>
            <h2 className="process-title fw-bold mb-2" style={{ fontFamily: "var(--font-cormorant), serif", color: "var(--text-title)", fontSize: "clamp(2rem, 3.5vw, 2.75rem)", lineHeight: "1.2" }}>
              Our Design Process Roadmap
            </h2>
            <p className="process-subtitle text-muted mx-auto" style={{ maxWidth: "600px", fontSize: "0.9rem", lineHeight: "1.6" }}>
              Click each step on the roadmap to preview our detailed process.
            </p>
          </InView>
        </div>

        {/* Horizontal Winding Roadmap Timeline (Desktop) */}
        <div className="roadmap-horizontal-wrapper my-5 d-none d-lg-flex">
          <div className="roadmap-horizontal-line" />
          <div className="roadmap-horizontal-steps">
            {processSteps.map((item) => {
              const isActive = item.step === activeStep;
              return (
                <button
                  key={item.step}
                  type="button"
                  className={`roadmap-horizontal-step-btn ${isActive ? "active" : ""}`}
                  onClick={() => setActiveStep(item.step)}
                >
                  <div className="map-pin">
                    <span>{item.step}</span>
                  </div>
                  <span className="roadmap-step-title">{item.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile Timeline Pills */}
        <div className="roadmap-mobile-steps d-lg-none mb-4">
          <div className="d-flex flex-wrap justify-content-center gap-2">
            {processSteps.map((item) => {
              const isActive = item.step === activeStep;
              return (
                <button
                  key={item.step}
                  type="button"
                  className={`mobile-step-pill ${isActive ? "active" : ""}`}
                  onClick={() => setActiveStep(item.step)}
                >
                  {item.step}. {item.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Step Detailed Content Panel */}
        <div className="roadmap-details-panel">
          <InView className="reveal-up" threshold={0.15} key={activeStep}>
            <div className="row gy-4 align-items-center">
              <div className="col-12 col-md-5">
                <div className="roadmap-panel-image">
                  <Image
                    src={currentProcess.image}
                    alt={currentProcess.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-fit-cover"
                    priority
                  />
                </div>
              </div>
              <div className="col-12 col-md-7">
                <div className="roadmap-panel-body">
                  <span className="roadmap-step-badge">Phase 0{currentProcess.step}</span>
                  <h3 className="roadmap-panel-title">{currentProcess.title}</h3>
                  <p className="roadmap-panel-desc">{currentProcess.desc}</p>
                </div>
              </div>
            </div>
          </InView>
        </div>

        {/* Centered CTA Button */}
        <div className="text-center mt-5">
          <InView className="reveal-up" style={{ transitionDelay: "0.1s" }} threshold={0.1}>
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
