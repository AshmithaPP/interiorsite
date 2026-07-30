"use client";

import React from "react";
import InView from "./InView";
import { 
  LuAward, 
  LuUsers, 
  LuSparkles, 
  LuShieldCheck, 
  LuClock 
} from "react-icons/lu";

export default function WhyChooseKingsford({ items }) {
  const defaultItems = [
    {
      title: "10+ Years of Experience",
      desc: "Over a decade of refining residential and commercial spaces into personalized works of art.",
      icon: LuAward
    },
    {
      title: "100+ Happy Clients",
      desc: "A proven history of trust and visual excellence with homeowners throughout Chennai.",
      icon: LuUsers
    },
    {
      title: "Customized Design Solutions",
      desc: "Bespoke millwork and styling engineered precisely around your daily routine and storage needs.",
      icon: LuSparkles
    },
    {
      title: "Professional Guidance",
      desc: "Expert designers collaborating transparently with you from visual concept boards to site handover.",
      icon: LuShieldCheck
    },
    {
      title: "Quality Workmanship",
      desc: "Using high-end hardware, robust base woods, and premium laminates for an enduring home life.",
      icon: LuSparkles
    },
    {
      title: "Timely Project Completion",
      desc: "A strict timeline management system to ensure keys are delivered on time without delays.",
      icon: LuClock
    }
  ];

  const listToRender = items || defaultItems;

  return (
    <section 
      className="py-5" 
      style={{ 
        backgroundColor: "rgba(15, 32, 24, 0.02)", 
        borderTop: "1px solid rgba(15, 32, 24, 0.08)", 
        borderBottom: "1px solid rgba(15, 32, 24, 0.08)" 
      }}
    >
      {/* Styles for Why Choose Cards */}
      <style>{`
        .why-choose-card {
          background-color: #15301f !important;
          border: 1px solid rgba(217, 203, 164, 0.15) !important;
          border-radius: 1.5rem;
          transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1) !important;
        }
        .why-choose-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(21, 48, 31, 0.25);
          border-color: var(--primary-color) !important;
        }

        .why-choose-icon-box {
          width: 56px;
          height: 56px;
          border-radius: 1.25rem;
          background-color: rgba(217, 203, 164, 0.15);
          color: var(--primary-color);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(217, 203, 164, 0.3);
          transition: all 0.3s ease;
        }
        .why-choose-card:hover .why-choose-icon-box {
          background-color: var(--primary-color);
          color: #15301f;
          transform: scale(1.05);
        }
      `}</style>

      <div className="container py-5">
        <InView className="text-center mb-5 reveal-up" threshold={0.1}>
          <span 
            style={{ 
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
              color: "var(--secondary-color)",
              textTransform: "uppercase"
            }}
          >
            Key Advantages
          </span>
          <h2 
            className="mt-2 fw-bold"
            style={{ 
              fontFamily: "var(--font-cormorant), serif", 
              fontSize: "clamp(2.2rem, 4vw, 3.2rem)", 
              color: "var(--text-title)"
            }}
          >
            Why Choose Kingsford?
          </h2>
          <div 
            style={{
              width: "60px",
              height: "2px",
              backgroundColor: "var(--secondary-color)",
              margin: "1.5rem auto",
            }}
          />
        </InView>

        <div className="row g-4 justify-content-center">
          {listToRender.map((item, idx) => {
            const Icon = item.icon;
            // Alternating transition: Odd index is Left-to-Right, Even index is Right-to-Left
            const revealClass = idx % 2 === 0 ? "reveal-left" : "reveal-right";
            
            return (
              <div key={idx} className="col-12 col-md-6 col-lg-4">
                <InView 
                  className={`${revealClass} h-100`} 
                  threshold={0.15}
                >
                  <div 
                    className="p-4 h-100 why-choose-card d-flex flex-column gap-3"
                    style={{
                      borderTop: "3px solid var(--primary-color)"
                    }}
                  >
                    <div className="d-flex align-items-center gap-3">
                      <div className="why-choose-icon-box">
                        <Icon size={24} />
                      </div>
                      <h4 
                        style={{
                          fontFamily: "var(--font-outfit), sans-serif",
                          fontSize: "1.2rem",
                          fontWeight: 600,
                          color: "#ffffff",
                          margin: 0
                        }}
                      >
                        {item.title}
                      </h4>
                    </div>
                    <p 
                      className="mb-0"
                      style={{
                        fontFamily: "var(--font-outfit), sans-serif",
                        fontSize: "0.95rem",
                        lineHeight: "1.6",
                        color: "rgba(255, 255, 255, 0.75)"
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </InView>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
