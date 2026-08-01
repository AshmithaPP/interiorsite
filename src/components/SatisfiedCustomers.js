"use client";

import { useRef } from "react";
import InView from "./InView";
import { LuChevronLeft, LuChevronRight, LuStar } from "react-icons/lu";

const testimonials = [
  {
    name: "Priya S.",
    location: "Chennai",
    rating: 5,
    text: "Kingsford transformed our apartment beautifully. The design was exactly what we wanted, and the entire process was smooth and hassle-free. Highly recommended!"
  },
  {
    name: "Arun K.",
    location: "Chennai",
    rating: 5,
    text: "The team understood our requirements perfectly and delivered quality interiors on time. We are very happy with the final outcome."
  },
  {
    name: "Meena R.",
    location: "Chennai",
    rating: 5,
    text: "From the first consultation to the final handover, everything was handled professionally. The designs are elegant, practical, and within our budget."
  },
  {
    name: "Karthik V.",
    location: "Chennai",
    rating: 5,
    text: "Excellent workmanship and great attention to detail. Our home looks modern, spacious, and exactly how we imagined it. Thank you, Kingsford!"
  },
  {
    name: "Divya M.",
    location: "Chennai",
    rating: 5,
    text: "Choosing Kingsford was the best decision for our home interiors. The team was friendly, responsive, and delivered a beautiful space that exceeded our expectations."
  }
];

export default function SatisfiedCustomers() {
  const testimonialsContainerRef = useRef(null);

  const scrollTestimonials = (direction) => {
    if (testimonialsContainerRef.current) {
      const container = testimonialsContainerRef.current;
      const scrollAmount = container.clientWidth;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <style>{`
        /* Self-contained styling for SatisfiedCustomers carousel section */
        .satisfied-customers-section {
          background-color: var(--secondary-color);
          padding: 5rem 1.5rem;
          position: relative;
          overflow: hidden;
        }
        
        .satisfied-title {
          font-family: var(--font-cormorant), serif;
          font-size: clamp(2rem, 4vw, 2.75rem);
          font-weight: 700;
          color: #ffffff;
          text-align: center;
          margin-bottom: 3.5rem;
          letter-spacing: -0.01em;
        }

        .testimonials-slider-container {
          position: relative;
          max-width: 1200px;
          margin: 0 auto;
        }

        .testimonials-carousel-track {
          display: flex;
          gap: 2rem;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scrollbar-width: none; /* Hide scrollbar for Firefox */
          padding: 1rem 0;
        }

        .testimonials-carousel-track::-webkit-scrollbar {
          display: none; /* Hide scrollbar for Chrome/Safari/Webkit */
        }

        .testimonial-carousel-item {
          flex: 0 0 calc(33.333% - 1.333rem); /* 3 cards visible on desktop */
          scroll-snap-align: start;
        }

        @media (max-width: 991px) {
          .testimonial-carousel-item {
            flex: 0 0 calc(50% - 1rem); /* 2 cards visible on tablet */
          }
        }

        @media (max-width: 768px) {
          .testimonial-carousel-item {
            flex: 0 0 100%; /* 1 card visible on mobile */
          }
        }

        .promo-testimonial-card {
          background-color: var(--fourth-color);
          border: 1px solid rgba(217, 203, 164, 0.1);
          border-radius: 1rem;
          padding: 2.25rem 2rem;
          color: #ffffff;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .promo-testimonial-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
          border-color: rgba(217, 203, 164, 0.25);
        }

        .promo-testimonial-card .stars {
          color: var(--primary-color);
          font-size: 1.1rem;
          letter-spacing: 0.1rem;
        }

        .promo-testimonial-card .quote-text {
          font-family: var(--font-outfit), sans-serif;
          font-size: 0.92rem;
          line-height: 1.6;
          color: var(--text-on-dark-body);
          margin: 0;
          flex-grow: 1;
        }

        .promo-testimonial-card .quote-author {
          font-family: var(--font-inter), sans-serif;
          font-size: 0.82rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05rem;
          color: var(--primary-color);
          margin: 0;
          margin-top: auto;
        }

        .carousel-control-lp {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1px solid var(--secondary-color);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 5;
        }

        .carousel-control-lp:hover {
          background-color: var(--secondary-color) !important;
          color: var(--primary-color) !important;
          border-color: var(--primary-color) !important;
          transform: translateY(-50%) scale(1.1);
        }

        .carousel-control-lp.prev {
          left: -60px;
        }

        .carousel-control-lp.next {
          right: -60px;
        }

        @media (max-width: 1300px) {
          .carousel-control-lp.prev {
            left: -20px;
          }
          .carousel-control-lp.next {
            right: -20px;
          }
        }
      `}</style>

      <section className="satisfied-customers-section">
        <div className="container" style={{ maxWidth: "1200px", padding: 0 }}>
          <InView className="reveal-up" threshold={0.1}>
            <h2 className="satisfied-title">What Our Clients Say</h2>
          </InView>

          {/* Carousel Container with Scroll Arrow controls */}
          <div className="testimonials-slider-container">
            {/* Left Arrow */}
            <button
              onClick={() => scrollTestimonials("left")}
              className="carousel-control-lp prev"
              aria-label="Previous Testimonial"
              style={{
                backgroundColor: "var(--primary-color)",
                color: "var(--secondary-color)",
                borderColor: "var(--secondary-color)"
              }}
            >
              <LuChevronLeft size={20} />
            </button>

            {/* Slider Track */}
            <div ref={testimonialsContainerRef} className="testimonials-carousel-track">
              {testimonials.map((t, idx) => (
                <div key={idx} className="testimonial-carousel-item">
                  <InView className="reveal-up h-100" threshold={0.1} style={{ transitionDelay: `${idx * 0.05}s` }}>
                    <div className="promo-testimonial-card h-100">
                      <div className="stars" style={{ display: "flex", gap: "0.25rem" }}>
                        {[...Array(t.rating)].map((_, i) => (
                          <LuStar key={i} size={16} fill="#ffc107" stroke="#ffc107" />
                        ))}
                      </div>
                      <p className="quote-text">
                        &quot;{t.text}&quot;
                      </p>
                      <h5 className="quote-author">– {t.name}, {t.location}</h5>
                    </div>
                  </InView>
                </div>
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={() => scrollTestimonials("right")}
              className="carousel-control-lp next"
              aria-label="Next Testimonial"
              style={{
                backgroundColor: "var(--primary-color)",
                color: "var(--secondary-color)",
                borderColor: "var(--secondary-color)"
              }}
            >
              <LuChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
