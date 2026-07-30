"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import InView from "./InView";

const customers = [
  {
    name: "Mr. Surendra N M & Family",
    testimonial: "We are extremely satisfied with the service...",
    photo: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Mr. Kiran Nair & Family",
    testimonial: "Proper communication was maintained by DLIFE team..",
    photo: "https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Mr. Azeem C & Family",
    testimonial: "Very professional interior designers. The team was...",
    photo: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Ms. Honey Rose",
    testimonial: "Finding a passionate professional to craft my...",
    photo: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Prannoy HS",
    testimonial: "Structured, organized and pleasant to deal with...",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Mr. Johnson Daniel",
    testimonial: "Dear DLIFE team, we are well pleased...",
    photo: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=300&q=80",
  },
];

export default function SatisfiedCustomers() {
  const [activeDot, setActiveDot] = useState(0);
  const trackRef = useRef(null);

  const handleScroll = () => {
    if (!trackRef.current) return;
    const scrollLeft = trackRef.current.scrollLeft;
    const maxScroll = trackRef.current.scrollWidth - trackRef.current.clientWidth;
    if (maxScroll <= 0) return;
    const pct = scrollLeft / maxScroll;
    // Map to 3 dots (index 0, 1, 2)
    const dotIndex = Math.min(2, Math.max(0, Math.round(pct * 2)));
    setActiveDot(dotIndex);
  };

  const scrollToDot = (idx) => {
    if (!trackRef.current) return;
    const maxScroll = trackRef.current.scrollWidth - trackRef.current.clientWidth;
    const targetScroll = (idx / 2) * maxScroll;
    trackRef.current.scrollTo({ left: targetScroll, behavior: "smooth" });
    setActiveDot(idx);
  };

  return (
    <>
      <style>{`
        /* Self-contained styling for SatisfiedCustomers section */
        .customers-track {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1.5rem 1.25rem;
          padding-bottom: 1rem;
        }
        .customer-card {
          flex: 0 0 calc(50% - 0.75rem);
          max-width: 155px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .customer-photo-wrap {
          position: relative;
          width: 120px;
          height: 120px;
          margin-bottom: 0.75rem;
        }
        .customer-photo {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          display: block;
          border: 3px solid transparent;
          background-image: linear-gradient(var(--primary-color), var(--primary-color)), linear-gradient(135deg, var(--secondary-color), var(--fourth-color), var(--tertiary-color));
          background-origin: border-box;
          background-clip: padding-box, border-box;
        }
        .quote-badge {
          position: absolute;
          bottom: 2px;
          left: 8px;
          width: 28px;
          height: 28px;
          background-color: var(--secondary-color);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 6px rgba(15, 32, 24, 0.25);
        }
        .quote-badge svg {
          width: 13px;
          height: 13px;
          color: var(--primary-color);
          fill: var(--primary-color);
        }
        .customer-name {
          font-family: var(--font-outfit), sans-serif;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-title);
          margin-bottom: 0.35rem;
          line-height: 1.3;
        }
        .customer-testimonial {
          font-family: 'Lora', serif;
          font-size: 0.75rem;
          color: var(--text-body);
          line-height: 1.5;
          font-style: italic;
          max-width: 180px;
        }
        @media (min-width: 768px) {
          .customers-track {
            gap: 2rem;
          }
          .customer-card {
            flex: 0 0 160px;
            max-width: none;
          }
          .customer-photo-wrap {
            width: 130px;
            height: 130px;
          }
        }
        @media (min-width: 1200px) {
          .customers-track {
            flex-wrap: nowrap;
            gap: 2.25rem;
          }
          .customer-card {
            flex: 1;
            min-width: 0;
          }
          .customer-photo-wrap {
            width: 140px;
            height: 140px;
          }
        }
      `}</style>

      <section
        className="pt-3 pt-md-5 pb-3 pb-md-4 position-relative overflow-hidden"
        style={{ backgroundColor: "var(--primary-color)" }}
      >
        <InView
          className="container py-2 reveal-up"
          style={{ maxWidth: "80rem" }}
          threshold={0.1}
        >
          {/* Heading */}
          <h2
            className="text-center mb-5 fw-bold"
            style={{
              fontFamily: "var(--font-outfit), sans-serif",
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              color: "var(--text-title)",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            <span style={{ color: "var(--secondary-color)" }}>100+</span> Happy Customers Served
          </h2>

          {/* Customer cards track */}
          <div className="customers-track">
            {customers.map((c, i) => (
              <InView
                key={i}
                className="customer-card reveal-up"
                style={{ transitionDelay: `${i * 0.08}s` }}
                threshold={0.1}
              >
                {/* Circular photo with gradient border */}
                <div className="customer-photo-wrap">
                  <Image
                    src={c.photo}
                    alt={c.name}
                    width={140}
                    height={140}
                    className="customer-photo"
                  />
                  {/* Quote badge */}
                  <span className="quote-badge">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 8c0-2.21-1.79-4-4-4S2 5.79 2 8c0 1.66.96 3.08 2.35 3.73C4.13 13.54 3 15.61 3 18h2c0-2.76 2.24-5 5-5v-5zm12 0c0-2.21-1.79-4-4-4s-4 1.79-4 4c0 1.66.96 3.08 2.35 3.73C16.13 13.54 15 15.61 15 18h2c0-2.76 2.24-5 5-5v-5z" />
                    </svg>
                  </span>
                </div>

                <p className="customer-name">{c.name}</p>
                <p className="customer-testimonial">{c.testimonial}</p>
              </InView>
            ))}
          </div>
        </InView>
      </section>
    </>
  );
}
