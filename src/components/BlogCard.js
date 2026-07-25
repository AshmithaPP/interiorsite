"use client";

import Image from "next/image";
import Link from "next/link";
import { LuClock, LuArrowRight, LuCalendar, LuTag } from "react-icons/lu";

export default function BlogCard({ post, layoutType = "grid" }) {
  const { id, title, date, category, excerpt, image, readTime } = post;

  if (layoutType === "list") {
    return (
      <div 
        className="glass-card-dark p-3 overflow-hidden mb-4"
        style={{ 
          border: "1px solid rgba(15, 32, 24, 0.08)",
          borderRadius: "1.5rem",
          transition: "all 0.3s ease"
        }}
      >
        <div className="row g-3 align-items-stretch">
          {/* Image Container with inner padding and rounded corners */}
          <div className="col-md-4 position-relative" style={{ minHeight: "200px" }}>
            <div className="w-100 h-100 position-relative overflow-hidden" style={{ borderRadius: "1.25rem" }}>
              <Image
                src={image}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-fit-cover"
                priority={false}
              />
              
              {/* Overlay Badge */}
              <span 
                className="position-absolute px-3 py-1.5 fw-semibold"
                style={{
                  top: "0.85rem",
                  left: "0.85rem",
                  backgroundColor: "#ffffff",
                  color: "var(--secondary-color)",
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "0.7rem",
                  borderRadius: "9999px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                  zIndex: 2
                }}
              >
                {category}
              </span>
            </div>
          </div>

          {/* Details Column */}
          <div className="col-md-8 p-3 d-flex flex-column justify-content-between">
            <div>
              <h3 
                style={{ 
                  fontFamily: "var(--font-outfit), sans-serif", 
                  fontSize: "1.25rem", 
                  fontWeight: 600, 
                  color: "var(--text-title)",
                  lineHeight: "1.3",
                  marginBottom: "0.5rem"
                }}
              >
                {title}
              </h3>
              
              <p 
                style={{ 
                  fontFamily: "var(--font-outfit), sans-serif", 
                  fontSize: "0.875rem", 
                  color: "var(--text-muted)",
                  lineHeight: "1.5",
                  marginBottom: "1rem"
                }}
              >
                {excerpt}
              </p>
            </div>

            {/* Bottom Row split metrics like the reference layout */}
            <div className="pt-3 border-top d-flex align-items-center justify-content-between" style={{ borderColor: "rgba(15, 32, 24, 0.08)" }}>
              <div className="d-flex align-items-center gap-2 text-muted" style={{ fontSize: "0.8rem", fontFamily: "var(--font-inter), sans-serif" }}>
                <LuCalendar size={14} />
                <span>{date}</span>
                <span style={{ color: "rgba(15, 32, 24, 0.15)" }}>|</span>
                <LuClock size={14} />
                <span>{readTime}</span>
              </div>
              
              <Link 
                href={`/blogs/${id}`}
                className="text-decoration-none d-flex align-items-center gap-1 fw-bold"
                style={{ 
                  color: "var(--secondary-color)", 
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "0.8rem"
                }}
              >
                <span>Read Article</span>
                <LuArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Reference UI Card Layout (Grid Mode)
  return (
    <div 
      className="glass-card-dark p-3 overflow-hidden h-100 d-flex flex-column justify-content-between"
      style={{ 
        border: "1px solid rgba(15, 32, 24, 0.08)",
        borderRadius: "1.5rem",
        transition: "all 0.3s ease",
        minHeight: "420px"
      }}
    >
      <div>
        {/* Rounded Image Container */}
        <div className="position-relative overflow-hidden" style={{ height: "200px", width: "100%", borderRadius: "1.25rem" }}>
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 576px) 100vw, (max-width: 992px) 50vw, 33vw"
            className="object-fit-cover"
            priority={false}
          />
          
          {/* Overlay Tag / Category (Reference: Guest Favourite) */}
          <span 
            className="position-absolute px-3 py-1.5 fw-semibold"
            style={{
              top: "0.85rem",
              left: "0.85rem",
              backgroundColor: "#ffffff",
              color: "var(--secondary-color)",
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "0.7rem",
              borderRadius: "9999px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
              zIndex: 2
            }}
          >
            {category}
          </span>
        </div>
        
        {/* Info Layout */}
        <div className="pt-3 pb-2">
          <div className="d-flex align-items-baseline justify-content-between mb-2">
            <h3 
              style={{ 
                fontFamily: "var(--font-outfit), sans-serif", 
                fontSize: "1.15rem", 
                fontWeight: 600, 
                color: "var(--text-title)",
                lineHeight: "1.3"
              }}
            >
              {title}
            </h3>
          </div>
          
          <p 
            style={{ 
              fontFamily: "var(--font-outfit), sans-serif", 
              fontSize: "0.85rem", 
              color: "var(--text-muted)",
              lineHeight: "1.5"
            }}
          >
            {excerpt}
          </p>
        </div>
      </div>

      {/* Bottom Row split metrics like the reference layout */}
      <div className="pt-3 border-top d-flex align-items-center justify-content-between" style={{ borderColor: "rgba(15, 32, 24, 0.08)" }}>
        <div className="d-flex align-items-center gap-2 text-muted" style={{ fontSize: "0.75rem", fontFamily: "var(--font-inter), sans-serif" }}>
          <LuCalendar size={13} />
          <span>{date}</span>
          <span style={{ color: "rgba(15, 32, 24, 0.12)" }}>|</span>
          <LuClock size={13} />
          <span>{readTime}</span>
        </div>
        
        <Link 
          href={`/blogs/${id}`}
          className="text-decoration-none d-flex align-items-center gap-1.5 fw-bold"
          style={{ 
            color: "var(--secondary-color)", 
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "0.8rem"
          }}
        >
          <span>Read Article</span>
          <LuArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
