"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function HowWeSimplify() {
  const steps = [
    {
      id: 1,
      number: "01",
      title: "Design Consultation",
      description: "We understand your requirements, preferences, lifestyle, and budget before creating a personalized design plan.",
    },
    {
      id: 2,
      number: "02",
      title: "Space Planning",
      description: "We optimize every square foot of your home to ensure a seamless flow between spaces while maintaining comfort and elegance.",
    },
    {
      id: 3,
      number: "03",
      title: "Execution & Installation",
      description: "Our team handles everything from material selection to installation, ensuring a hassle-free experience for homeowners.",
    },
    {
      id: 4,
      number: "04",
      title: "Premium Materials & Finishes",
      description: "We use high-quality materials, accessories, and finishes to ensure durability and long-lasting beauty.",
    },
    {
      id: 5,
      number: "05",
      title: "Timely Project Delivery",
      description: "Our project management process ensures smooth execution and on-time completion without compromising quality.",
    },
  ];

  const [activeCardIndex, setActiveCardIndex] = useState(4); // Start with card 5 (index 4)
  const [showStacked, setShowStacked] = useState(true);
  const [fade, setFade] = useState(true);
  const [btnHover, setBtnHover] = useState(false);
  const [isCooking, setIsCooking] = useState(false);
  const [stackPreFade, setStackPreFade] = useState(true);
  const activeTimeouts = useRef([]);

  const registerTimeout = (fn, delay) => {
    const id = setTimeout(fn, delay);
    activeTimeouts.current.push(id);
    return id;
  };

  const clearAllTimeouts = () => {
    activeTimeouts.current.forEach(clearTimeout);
    activeTimeouts.current = [];
  };

  const startSequentialAnimation = () => {
    const order = [4, 3, 2, 1, 0]; // 5 → 4 → 3 → 2 → 1
    let i = 0;

    const showCard = () => {
      if (i < order.length) {
        // Trigger fade out
        setFade(false);

        // Wait for exit transition (400ms), then load new card index and fade in
        registerTimeout(() => {
          setActiveCardIndex(order[i]);
          setFade(true);
          i++;

          if (i < order.length) {
            // Keep card active for 2.8s
            registerTimeout(() => {
              showCard();
            }, 2800);
          }
        }, 400);
      }
    };

    showCard();
  };

  // Auto-start animation after initial load
  useEffect(() => {
    const timer1 = setTimeout(() => {
      setStackPreFade(false);

      const timer2 = setTimeout(() => {
        setShowStacked(false);
        startSequentialAnimation();
      }, 2200);
      activeTimeouts.current.push(timer2);
    }, 200);
    activeTimeouts.current.push(timer1);

    return () => {
      clearAllTimeouts();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const replayAnimation = () => {
    setIsCooking(true);
    clearAllTimeouts();
    setFade(false);
    setStackPreFade(true);

    registerTimeout(() => {
      setShowStacked(true);

      registerTimeout(() => {
        setStackPreFade(false);

        registerTimeout(() => {
          setIsCooking(false);
          setShowStacked(false);
          startSequentialAnimation();
        }, 1800); // Display stagger wave and prepare stack
      }, 100);
    }, 400);
  };

  const currentStep = activeCardIndex >= 0 ? steps[activeCardIndex] : null;

  // Configs for stacked card preview overlays
  const getStackedStyle = (idx) => {
    const configurations = [
      { top: "0px", opacity: 0.35, scale: 0.92 },
      { top: "22px", opacity: 0.45, scale: 0.94 },
      { top: "44px", opacity: 0.6, scale: 0.96 },
      { top: "66px", opacity: 0.75, scale: 0.98 },
      { top: "88px", opacity: 0.95, scale: 1.0 },
    ];
    const config = configurations[idx] || { top: "0px", opacity: 0.35, scale: 0.92 };

    return {
      position: "absolute",
      top: config.top,
      opacity: stackPreFade ? 0 : config.opacity,
      transform: stackPreFade ? `translateY(-30px) scale(${config.scale - 0.05})` : `translateY(0) scale(${config.scale})`,
      width: "100%",
      display: "flex",
      alignItems: "center",
      gap: "1rem",
      backgroundColor: "rgba(21, 48, 31, 0.95)",
      borderRadius: "1.25rem",
      padding: "1.1rem 1.4rem",
      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
      border: "1px solid rgba(217, 203, 164, 0.15)",
      color: "var(--text-on-dark-body)",
      zIndex: idx + 1,
      transition: "all 0.6s cubic-bezier(0.25, 1, 0.5, 1)",
      transitionDelay: stackPreFade ? "0s" : `${idx * 0.15}s`, // Staggered entry wave delay
    };
  };

  return (
    <section
      id="how-we-simplify"
      className="how-we-simplify-section py-5"
      style={{
        backgroundColor: "var(--primary-color)",
      }}
    >
      <style>{`
        .how-we-simplify-section {
          padding-top: 2rem !important;
          padding-bottom: 2rem !important;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .spin-loader {
          display: inline-block;
          animation: spin 1s linear infinite;
        }
        @media (min-width: 768px) {
          .how-we-simplify-section {
            padding-top: 4rem !important;
            padding-bottom: 4rem !important;
          }
        }
      `}</style>
      <div className="container py-2">
        {/* Title */}
        <div className="mb-5">
          <h2
            className="display-5 fw-bold"
            style={{
              fontFamily: "var(--font-cormorant), serif",
              color: "var(--text-title)",
              lineHeight: "1.15",
            }}
          >
            Our Interior Design Process
          </h2>
        </div>

        <div className="row g-5 align-items-start">
          {/* Left Column: Cards Area */}
          <div className="col-lg-6 position-relative" style={{ minHeight: "520px" }}>
            {/* Stacked Preview (initially visible) */}
            {showStacked && (
              <div className="position-relative w-100" style={{ zIndex: 5, pointerEvents: "none", height: "180px" }}>
                {steps
                  .slice()
                  .reverse()
                  .map((step, idx) => (
                    <div key={step.id} style={getStackedStyle(idx)}>
                      <span className="fw-bold fs-5" style={{ color: "var(--primary-color)" }}>
                        {step.number}
                      </span>
                      <span className="fw-semibold" style={{ letterSpacing: "0.5px" }}>
                        {step.title}
                      </span>
                    </div>
                  ))}
              </div>
            )}

            {/* Active Animated Card */}
            {currentStep && !showStacked && (
              <div
                style={{
                  transition: "opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1), transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
                  opacity: fade ? 1 : 0,
                  transform: fade ? "translateY(0) scale(1)" : "translateY(30px) scale(0.96)",
                  backgroundColor: "var(--fourth-color)",
                  borderRadius: "1.75rem",
                  padding: "2.5rem 2.2rem",
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.3)",
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                  minHeight: "420px",
                  position: "relative",
                  zIndex: 10,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <div
                  className="fw-extrabold"
                  style={{
                    fontSize: "6.8rem",
                    color: "rgba(217, 203, 164, 0.15)",
                    lineHeight: "1",
                    marginBottom: "1.2rem",
                  }}
                >
                  {currentStep.number}
                </div>
                <h3
                  className="fw-semibold"
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontSize: "2rem",
                    color: "var(--text-on-dark-title)",
                    marginBottom: "1.25rem",
                    lineHeight: "1.25",
                  }}
                >
                  {currentStep.title}
                </h3>
                <p
                  style={{
                    fontSize: "1.02rem",
                    lineHeight: "1.7",
                    color: "var(--text-on-dark-body)",
                  }}
                >
                  {currentStep.description}
                </p>
              </div>
            )}

            {/* Replay Button */}
            <button
              className="btn rounded-pill mt-4 px-4 py-2 border-2 d-inline-flex align-items-center gap-2"
              onMouseEnter={() => setBtnHover(true)}
              onMouseLeave={() => setBtnHover(false)}
              style={{
                borderColor: "var(--secondary-color)",
                color: btnHover || isCooking ? "var(--primary-color)" : "var(--secondary-color)",
                backgroundColor: btnHover || isCooking ? "var(--secondary-color)" : "transparent",
                transition: "all 0.3s ease",
                fontWeight: "600",
                letterSpacing: "0.5px",
                zIndex: 12,
                position: "relative",
                opacity: isCooking ? 0.8 : 1,
              }}
              onClick={replayAnimation}
              disabled={isCooking}
            >
              <span className={isCooking ? "spin-loader" : ""}>↻</span>
              <span>{isCooking ? "Preparing Sequence..." : "Replay Sequence"}</span>
            </button>
          </div>

          {/* Right Column: Static Image */}
          <div className="col-lg-6">
            <div className="position-relative overflow-hidden shadow-lg rounded-4" style={{ height: "450px" }}>
              <Image
                src="https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
                alt="Luxury modern hotel lobby interior"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
                className="img-fluid"
                priority={false}
              />
              <div
                className="position-absolute bottom-0 end-0 bg-black bg-opacity-50 text-white-50 px-3 py-1 m-3 rounded-2"
                style={{ fontSize: "0.8rem", zIndex: 5 }}
              >
                iStock
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
