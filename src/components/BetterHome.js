"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import InView from "./InView";

export default function BetterHome() {
  const [sliderPos, setSliderPos] = useState(50); // percentage 0–100
  const [containerWidth, setContainerWidth] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [talkHover, setTalkHover] = useState(false);
  const [quoteHover, setQuoteHover] = useState(false);
  const [waHover, setWaHover] = useState(false);
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  // Calculate position from mouse/touch event
  const getPos = useCallback((clientX) => {
    if (!containerRef.current) return 50;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = (x / rect.width) * 100;
    return Math.max(0, Math.min(100, pct));
  }, []);

  // Pointer handlers
  const onPointerDown = useCallback(
    (e) => {
      isDragging.current = true;
      setSliderPos(getPos(e.clientX));
      e.preventDefault();
    },
    [getPos]
  );

  const onPointerMove = useCallback(
    (e) => {
      if (!isDragging.current) return;
      setSliderPos(getPos(e.clientX));
    },
    [getPos]
  );

  const onPointerUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  // Sync container width and attach global move/up so dragging works outside the container
  useEffect(() => {
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
      const resizeObserver = new ResizeObserver((entries) => {
        for (let entry of entries) {
          setContainerWidth(entry.contentRect.width);
        }
      });
      resizeObserver.observe(containerRef.current);
      
      return () => {
        window.removeEventListener("pointermove", onPointerMove);
        window.removeEventListener("pointerup", onPointerUp);
        resizeObserver.disconnect();
      };
    }

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };
  }, [onPointerMove, onPointerUp]);

  return (
    <>
      <section
        id="better-home"
        style={{
          backgroundColor: "var(--primary-color)",
          padding: "1.5rem 1.5rem 2.5rem",
          position: "relative",
        }}
        className="py-md-2"
      >
        <InView
          className="container py-2 d-flex flex-column align-items-center reveal-up"
          style={{ maxWidth: "72rem" }}
          threshold={0.1}
        >
          {/* Heading */}
          <h2
            className="text-center mb-2 fw-bold"
            style={{
              fontFamily: "var(--font-outfit), sans-serif",
              fontSize: "clamp(2rem, 5vw, 3.25rem)",
              color: "var(--text-title)",
              letterSpacing: "-0.02em",
              lineHeight: "1.2",
            }}
          >
            Transform Your Dream Space with Kingsford
          </h2>
          <p
            className="text-center mb-4 pb-2"
            style={{
              fontFamily: "var(--font-outfit), sans-serif",
              fontSize: "1rem",
              color: "var(--text-body)",
              fontWeight: 400,
              letterSpacing: "0.01em",
            }}
          >
            Looking for the best interior designers in Chennai to create a beautiful and functional living space? Kingsford is a trusted interior company in Chennai that specializes in designing stylish, comfortable, and personalized interiors for homes.
          </p>

          {/* Before / After image comparison slider */}
          <div
            ref={containerRef}
            onPointerDown={onPointerDown}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="position-relative w-100 shadow-lg"
            style={{
              maxWidth: "68rem",
              borderRadius: "1.25rem",
              overflow: "hidden",
              cursor: "ew-resize",
              userSelect: "none",
              WebkitUserSelect: "none",
              touchAction: "none",
              marginBottom: "2.5rem",
              aspectRatio: "2.22",
              minHeight: "220px",
            }}
          >
            {/* AFTER image (full width, sits behind) */}
            <div className="position-absolute top-0 start-0 w-100 h-100">
              <Image
                src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80"
                alt="After renovation — cozy modern bedroom with warm lighting and customized wardrobe"
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                style={{ objectFit: "cover", display: "block" }}
                draggable="false"
              />
            </div>

            {/* BEFORE image (clipped to sliderPos) */}
            <div
              className="position-absolute top-0 start-0 h-100 overflow-hidden"
              style={{ width: `${sliderPos}%`, zIndex: 2 }}
            >
              <div style={{ width: containerWidth ? `${containerWidth}px` : "100%", height: "100%", position: "relative" }}>
                <Image
                  src="/compare-1.jpg"
                  alt="Before renovation — plain room with bare walls"
                  fill
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  style={{ objectFit: "cover", display: "block" }}
                  draggable="false"
                />
              </div>
            </div>

            {/* Divider line */}
            <div
              className="position-absolute top-0 bottom-0 pointer-events-none"
              style={{
                left: `${sliderPos}%`,
                width: "3px",
                backgroundColor: "#FFFFFF",
                zIndex: 3,
                boxShadow: "0 0 6px rgba(0, 0, 0, 0.3)",
              }}
            />

            {/* Draggable handle */}
            <div
              className="position-absolute top-50 translate-middle d-flex align-items-center justify-content-center"
              style={{
                left: `${sliderPos}%`,
                zIndex: 4,
                width: "44px",
                height: "44px",
                background: "var(--secondary-color)",
                borderRadius: "50%",
                boxShadow: isHovered ? "0 4px 20px rgba(0, 0, 0, 0.5)" : "0 2px 12px rgba(0, 0, 0, 0.35)",
                cursor: "ew-resize",
                transition: "box-shadow 0.2s ease, transform 0.2s ease",
                border: "2px solid var(--primary-color)",
              }}
            >
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ color: "var(--primary-color)", pointerEvents: "none" }}
              >
                <polyline points="15 18 9 12 15 6" />
                <polyline points="9 18 15 12 9 6" transform="translate(6,0)" />
              </svg>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="d-flex align-items-center justify-content-center gap-3 flex-wrap mb-3">
            {/* Talk to our designer */}
            <button
              onMouseEnter={() => setTalkHover(true)}
              onMouseLeave={() => setTalkHover(false)}
              className="btn d-inline-flex align-items-center gap-2 px-4 py-2"
              style={{
                background: talkHover ? "var(--secondary-color)" : "transparent",
                border: "1.5px solid var(--secondary-color)",
                borderRadius: "0.6rem",
                fontFamily: "var(--font-outfit), sans-serif",
                fontSize: "0.875rem",
                fontWeight: 500,
                color: talkHover ? "var(--primary-color)" : "var(--secondary-color)",
                cursor: "pointer",
                transition: "all 0.25s ease",
              }}
            >
              Talk to our designer
              {/* small headset icon */}
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  color: talkHover ? "var(--primary-color)" : "var(--secondary-color)",
                  transition: "color 0.25s ease",
                }}
              >
                <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
              </svg>
            </button>

            {/* Get free quote */}
            <button
              onMouseEnter={() => setQuoteHover(true)}
              onMouseLeave={() => setQuoteHover(false)}
              className="btn d-inline-flex align-items-center gap-2 px-4 py-2 border-0"
              style={{
                backgroundColor: "var(--secondary-color)",
                borderRadius: "0.6rem",
                fontFamily: "var(--font-outfit), sans-serif",
                fontSize: "0.875rem",
                fontWeight: 600,
                color: "var(--primary-color)",
                cursor: "pointer",
                transition: "all 0.25s ease",
                transform: quoteHover ? "translateY(-1px)" : "translateY(0)",
                boxShadow: quoteHover
                  ? "0 4px 14px rgba(15, 32, 24, 0.35)"
                  : "0 2px 8px rgba(15, 32, 24, 0.25)",
              }}
            >
              Get free quote
              <span
                className="d-flex align-items-center justify-content-center"
                style={{
                  width: "22px",
                  height: "22px",
                  backgroundColor: "rgba(217, 203, 164, 0.2)",
                  borderRadius: "50%",
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  width="12"
                  height="12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ color: "var(--primary-color)" }}
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </button>
          </div>

          {/* "takes 2 minutes" note */}
          <p
            className="d-flex align-items-center gap-1 text-muted fst-italic mb-0"
            style={{
              fontFamily: "'Lora', serif",
              fontSize: "0.8rem",
            }}
          >
            {/* clock icon */}
            <svg
              viewBox="0 0 24 24"
              width="14"
              height="14"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ color: "var(--text-muted)" }}
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            takes 2 minutes
          </p>
        </InView>
      </section>
    </>
  );
}
