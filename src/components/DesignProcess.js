"use client";

import React from "react";
import InView from "./InView";
import "./DesignProcess.css";

export default function DesignProcess() {
  const processSteps = [
    { step: 1, title: "Meet Your Designer", desc: "Share ideas & get personalized 3D designs" },
    { step: 2, title: "Visualization & 3D Layouts", desc: "Photorealistic 3D visual mockups" },
    { step: 3, title: "Material Selection", desc: "Choose premium laminates & finishes" },
    { step: 4, title: "Precision Manufacture", desc: "Exact fabrication in our CNC facility" },
    { step: 5, title: "Flawless Installation", desc: "Specialist assembly & precision checks" },
    { step: 6, title: "Move-In & Handover", desc: "Final audit & warranty handover" }
  ];

  return (
    <section className="process-section" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
      <div className="container" style={{ maxWidth: "1200px" }}>
        <div className="process-header text-center mb-4">
          <InView className="reveal-up" threshold={0.1}>
            <h2 className="process-title fw-bold mb-2" style={{ fontFamily: "var(--font-cormorant), serif", color: "var(--text-title)", fontSize: "clamp(2rem, 3.5vw, 2.5rem)", lineHeight: "1.2" }}>
              Our Design Process Roadmap
            </h2>
            <p className="process-subtitle text-muted mx-auto" style={{ maxWidth: "600px", fontSize: "0.9rem", lineHeight: "1.6" }}>
              A step-by-step walkthrough of how we bring your interiors to life.
            </p>
          </InView>
        </div>

        {/* Horizontal Road Timeline (Desktop) */}
        <div className="roadmap-horizontal-wrap d-none d-lg-block">
          <div className="roadmap-horizontal-line" />

          <div className="roadmap-horizontal-items">
            {processSteps.map((item, idx) => {
              const isAbove = idx % 2 === 0;
              return (
                <div
                  key={item.step}
                  className={`roadmap-horizontal-item ${isAbove ? "above" : "below"}`}
                >
                  {isAbove && (
                    <InView className="reveal-up roadmap-item-info" threshold={0.1} style={{ transitionDelay: `${idx * 0.05}s` }}>
                      <span className="roadmap-step-num">Step 0{item.step}</span>
                      <h4 className="roadmap-step-title">{item.title}</h4>
                      <p className="roadmap-step-desc">{item.desc}</p>
                    </InView>
                  )}

                  <div className="roadmap-road-marker">
                    <div className="roadmap-pin">
                      <span>{item.step}</span>
                    </div>
                  </div>

                  {!isAbove && (
                    <InView className="reveal-up roadmap-item-info" threshold={0.1} style={{ transitionDelay: `${idx * 0.05}s` }}>
                      <span className="roadmap-step-num">Step 0{item.step}</span>
                      <h4 className="roadmap-step-title">{item.title}</h4>
                      <p className="roadmap-step-desc">{item.desc}</p>
                    </InView>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Vertical Road Timeline (Mobile & Tablet) */}
        <div className="roadmap-vertical-wrap d-lg-none">
          <div className="roadmap-vertical-line" />

          <div className="roadmap-vertical-items">
            {processSteps.map((item, idx) => (
              <div key={item.step} className="roadmap-vertical-item">
                <div className="roadmap-vertical-marker">
                  <div className="roadmap-pin">
                    <span>{item.step}</span>
                  </div>
                </div>

                <InView className="reveal-up roadmap-vertical-info" threshold={0.1} style={{ transitionDelay: `${idx * 0.05}s` }}>
                  <span className="roadmap-step-num">Step 0{item.step}</span>
                  <h4 className="roadmap-step-title">{item.title}</h4>
                  <p className="roadmap-step-desc">{item.desc}</p>
                </InView>
              </div>
            ))}
          </div>
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
