"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InView from "@/components/InView";
import Image from "next/image";
import SatisfiedCustomers from "@/components/SatisfiedCustomers";
import { 
  LuSofa, 
  LuBedDouble, 
  LuFlame, 
  LuDoorOpen, 
  LuUtensils, 
  LuLamp, 
  LuCompass, 
  LuHammer,
  LuEye,
  LuTarget,
  LuAward,
  LuUsers,
  LuCheck,
  LuClock,
  LuShieldCheck,
  LuHeartHandshake,
  LuSparkles,
  LuArrowRight
} from "react-icons/lu";

export default function AboutPage() {
  return (
    <div className="app-wrapper">
      <div className="app-canvas" style={{ backgroundColor: "var(--primary-color)" }}>
        <Navbar />
        
        {/* Style block for premium glass cards and smooth horizontal transitions */}
        <style>{`
          .glass-card-dark {
            background: rgba(15, 32, 24, 0.03) !important;
            border: 1px solid rgba(15, 32, 24, 0.12) !important;
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border-radius: 1.5rem;
            transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1) !important;
          }
          .glass-card-dark:hover {
            background: rgba(15, 32, 24, 0.08) !important;
            border-color: rgba(15, 32, 24, 0.3) !important;
            transform: translateY(-8px);
            box-shadow: 0 15px 30px rgba(15, 32, 24, 0.12);
          }
          
          .glass-card-light {
            background: rgba(255, 255, 255, 0.03) !important;
            border: 1px solid rgba(217, 203, 164, 0.15) !important;
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border-radius: 1.5rem;
            transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1) !important;
          }
          .glass-card-light:hover {
            background: rgba(255, 255, 255, 0.07) !important;
            border-color: rgba(217, 203, 164, 0.35) !important;
            transform: translateY(-8px);
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
          }

          .icon-wrapper-light {
            width: 48px;
            height: 48px;
            border-radius: 50%;
            background-color: rgba(217, 203, 164, 0.1);
            color: var(--primary-color);
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 1.25rem;
            border: 1px solid rgba(217, 203, 164, 0.25);
            transition: all 0.3s ease;
          }
          .glass-card-light:hover .icon-wrapper-light {
            background-color: var(--primary-color);
            color: var(--secondary-color);
            transform: scale(1.1);
          }

          .icon-wrapper-dark {
            width: 48px;
            height: 48px;
            border-radius: 50%;
            background-color: rgba(15, 32, 24, 0.05);
            color: var(--secondary-color);
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 1.25rem;
            border: 1px solid rgba(15, 32, 24, 0.15);
            transition: all 0.3s ease;
          }
          .glass-card-dark:hover .icon-wrapper-dark {
            background-color: var(--secondary-color);
            color: var(--primary-color);
            transform: scale(1.1);
          }
          
          .reveal-up {
            opacity: 0;
            transform: translateY(35px);
            transition: opacity 0.85s cubic-bezier(0.2, 0.8, 0.2, 1), transform 0.85s cubic-bezier(0.2, 0.8, 0.2, 1);
          }
          .reveal-up.in-view {
            opacity: 1;
            transform: translateY(0);
          }

          /* Left slide-in transition for cards */
          .reveal-left {
            opacity: 0;
            transform: translateX(-40px);
            transition: opacity 0.85s cubic-bezier(0.2, 0.8, 0.2, 1), transform 0.85s cubic-bezier(0.2, 0.8, 0.2, 1);
          }
          .reveal-left.in-view {
            opacity: 1;
            transform: translateX(0);
          }

          .hero-grid-pattern {
            display: none;
          }

          .aesthetic-divider {
            width: 80px;
            height: 2px;
            background-color: var(--primary-color);
            margin: 1.5rem auto;
          }

          .aesthetic-divider-dark {
            width: 80px;
            height: 2px;
            background-color: var(--secondary-color);
            margin: 1.5rem 0;
          }
        `}</style>

        <main className="flex-grow-1" style={{ paddingTop: "5.5rem" }}>
          
          {/* Green Hero Section with background image */}
          <section 
            className="d-flex align-items-center position-relative overflow-hidden" 
            style={{ 
              background: "linear-gradient(180deg, rgba(11, 26, 20, 0.88), rgba(11, 26, 20, 0.65)), url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80') no-repeat center center / cover",
              minHeight: "100vh",
              borderBottom: "1px solid rgba(217, 203, 164, 0.15)",
              padding: "6rem 1.5rem"
            }}
          >
            <div className="hero-grid-pattern" />
            <div 
              className="position-absolute top-0 start-0 w-100 h-100" 
              style={{
                backgroundImage: "radial-gradient(circle at 80% 20%, rgba(217, 203, 164, 0.08) 0%, transparent 60%)"
              }}
            />
            <div className="container py-5 position-relative" style={{ zIndex: 2 }}>
              <div className="row align-items-center g-4">
                <div className="col-lg-8">
                  <InView className="reveal-up" threshold={0.1}>
                    <span 
                       style={{ 
                        fontFamily: "var(--font-inter), sans-serif",
                        fontSize: "0.8rem",
                        fontWeight: 700,
                        letterSpacing: "0.25em",
                        color: "var(--primary-color)",
                        textTransform: "uppercase"
                      }}
                    >
                      A Decade of Excellence
                    </span>
                    <h1 
                      className="mt-3 mb-4 fw-bold"
                      style={{ 
                        fontFamily: "var(--font-cormorant), serif", 
                        fontSize: "clamp(3rem, 7vw, 5rem)", 
                        color: "var(--text-on-dark-title)",
                        letterSpacing: "-0.02em",
                        lineHeight: "1.05"
                      }}
                    >
                      About <span style={{ color: "var(--primary-color)", fontStyle: "italic", fontWeight: 400 }}>Kingsford</span>
                    </h1>
                    <div className="aesthetic-divider" style={{ margin: "1.5rem 0" }} />
                    <p 
                      style={{ 
                        fontFamily: "var(--font-outfit), sans-serif", 
                        fontSize: "clamp(1.1rem, 2.5vw, 1.45rem)", 
                        color: "var(--text-on-dark-body)",
                        maxWidth: "700px",
                        lineHeight: "1.6",
                        letterSpacing: "0.02em"
                      }}
                    >
                      Creating Beautiful Interiors for Over 10 Years
                    </p>
                  </InView>
                </div>
              </div>
            </div>
          </section>

          {/* Who We Are & Our Journey Section (Beige Background) */}
          <section className="py-5" style={{ backgroundColor: "var(--primary-color)", borderBottom: "1px solid rgba(15, 32, 24, 0.1)" }}>
            <div className="container-fluid px-3 px-md-5" style={{ maxWidth: "1600px" }}>
              <div className="row g-5 align-items-center">
                {/* Content Left Side */}
                <div className="col-12 col-lg-6">
                  <InView className="reveal-up" threshold={0.1}>
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
                      Who We Are
                    </span>
                    <h2 
                      className="mt-2 mb-3 fw-bold"
                      style={{ 
                        fontFamily: "var(--font-cormorant), serif", 
                        fontSize: "clamp(2rem, 4vw, 2.8rem)", 
                        color: "var(--text-title)",
                        lineHeight: "1.2"
                      }}
                    >
                      Welcome to Kingsford
                    </h2>
                    <div className="aesthetic-divider-dark" style={{ margin: "1.5rem 0" }} />
                    <p 
                      style={{ 
                        fontFamily: "var(--font-outfit), sans-serif", 
                        fontSize: "1.05rem", 
                        color: "var(--text-body)",
                        lineHeight: "1.8",
                        marginBottom: "1.25rem"
                      }}
                    >
                      Welcome to Kingsford, a trusted name in interior design and home transformation. With over 10 years of experience in the industry, we have successfully completed projects for more than 1,000 satisfied clients across Chennai and surrounding areas.
                    </p>
                    <p 
                      style={{ 
                        fontFamily: "var(--font-outfit), sans-serif", 
                        fontSize: "1.05rem", 
                        color: "var(--text-body)",
                        lineHeight: "1.8"
                      }}
                    >
                      At Kingsford, we believe that every space should reflect the personality, lifestyle, and aspirations of its owner. Our team of experienced designers and project specialists work closely with clients to create interiors that combine beauty, functionality, and comfort.
                    </p>
                  </InView>
                </div>
                {/* Image Right Side */}
                <div className="col-12 col-lg-6">
                  <InView className="reveal-up" style={{ transitionDelay: "0.1s" }} threshold={0.1}>
                    <div className="position-relative w-100 overflow-hidden shadow-sm" style={{ aspectRatio: "4/3", borderRadius: "1.5rem" }}>
                      <Image
                        src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
                        alt="Kingsford About Us Home Journey"
                        fill
                        sizes="(max-width: 768px) 100vw, 600px"
                        className="object-fit-cover"
                        priority
                      />
                    </div>
                  </InView>
                </div>
              </div>
            </div>
          </section>

          {/* Stats Grid (Beige background, deep green metrics) */}
          <section className="py-4 py-md-5" style={{ backgroundColor: "rgba(15, 32, 24, 0.03)", borderBottom: "1px solid rgba(15, 32, 24, 0.06)" }}>
            <div className="container py-2">
              <div className="row g-4 text-center">
                {[
                  { value: "10+", label: "Years Experience", icon: LuAward },
                  { value: "1,000+", label: "Satisfied Clients", icon: LuUsers },
                  { value: "100%", label: "Custom Designs", icon: LuCheck },
                  { value: "Chennai", label: "Core Service Area", icon: LuCompass }
                ].map((stat, idx) => {
                  const Icon = stat.icon;
                  const isTextVal = stat.value === "Chennai";
                  return (
                    <div key={idx} className="col-6 col-md-3">
                      <InView className="reveal-up" style={{ transitionDelay: `${idx * 0.08}s` }} threshold={0.1}>
                        <div className="d-flex justify-content-center mb-1">
                          <Icon size={20} style={{ color: "var(--secondary-color)" }} />
                        </div>
                        <div 
                          className="fw-bold"
                          style={{
                            fontFamily: "var(--font-outfit), sans-serif",
                            fontSize: isTextVal ? "clamp(1.4rem, 3.2vw, 2.2rem)" : "clamp(1.8rem, 4vw, 2.6rem)",
                            color: "var(--secondary-color)",
                            lineHeight: "1.1"
                          }}
                        >
                          {stat.value}
                        </div>
                        <div 
                          className="text-uppercase mt-1"
                          style={{
                            fontFamily: "var(--font-inter), sans-serif",
                            fontSize: "0.68rem",
                            fontWeight: 700,
                            letterSpacing: "0.1em",
                            color: "var(--text-muted)",
                            lineHeight: "1.3"
                          }}
                        >
                          {stat.label}
                        </div>
                      </InView>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* What We Do Section (Deep Green Background, Light Glass Cards, Horizontal slide reveals) */}
          <section className="py-5" style={{ backgroundColor: "var(--secondary-color)", borderBottom: "1px solid rgba(217, 203, 164, 0.15)" }}>
            <div className="container py-5">
              <InView className="text-center mb-5 reveal-up" threshold={0.1}>
                <span 
                  style={{ 
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    color: "var(--primary-color)",
                    textTransform: "uppercase"
                  }}
                >
                  Our Offerings
                </span>
                <h2 
                  className="mt-2 fw-bold"
                  style={{ 
                    fontFamily: "var(--font-cormorant), serif", 
                    fontSize: "clamp(2.2rem, 4vw, 3.2rem)", 
                    color: "var(--text-on-dark-title)"
                  }}
                >
                  What We Do
                </h2>
                <div className="aesthetic-divider" />
                <p 
                  className="mx-auto"
                  style={{ fontFamily: "var(--font-outfit), sans-serif", maxWidth: "600px", color: "var(--text-on-dark-muted)" }}
                >
                  Complete interior design and execution services tailored specifically to your residential needs.
                </p>
              </InView>

              <div className="row g-4">
                {[
                  {
                    title: "Living Room Interiors",
                    icon: LuSofa,
                    desc: "Crafting warm, open gathering hubs with custom modular millwork.",
                    bgImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=400&q=80"
                  },
                  {
                    title: "Bedroom Interiors",
                    icon: LuBedDouble,
                    desc: "Designing peaceful sanctuaries optimized for rest & smart storage.",
                    bgImage: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=400&q=80"
                  },
                  {
                    title: "Modular Kitchen Design",
                    icon: LuFlame,
                    desc: "Fusing high-end culinary utility with clean sleek cabinet finishes.",
                    bgImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80"
                  },
                  {
                    title: "Wardrobe Solutions",
                    icon: LuDoorOpen,
                    desc: "Custom space-saving storage layouts with premium soft-close hardware.",
                    bgImage: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=400&q=80"
                  },
                  {
                    title: "Dining Area Design",
                    icon: LuUtensils,
                    desc: "Creating elegant dining zones that encourage community & family sharing.",
                    bgImage: "https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=400&q=80"
                  },
                  {
                    title: "False Ceiling Design",
                    icon: LuLamp,
                    desc: "Ambient architectural details & customized LED lighting grids.",
                    bgImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=400&q=80"
                  },
                  {
                    title: "Space Planning",
                    icon: LuCompass,
                    desc: "Maximizing footprint utility while maintaining open-concept flow.",
                    bgImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=400&q=80"
                  },
                  {
                    title: "Home Renovation Solutions",
                    icon: LuHammer,
                    desc: "Complete interior layout conversions from initial concept to handover.",
                    bgImage: "https://images.unsplash.com/photo-1505797149-43b0069ec26b?auto=format&fit=crop&w=400&q=80"
                  }
                ].map((item, idx) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={idx} className="col-12 col-sm-6 col-lg-3">
                      <InView 
                        className="p-4 h-100 text-center glass-card-light reveal-left"
                        style={{
                          transitionDelay: `${idx * 0.05}s`,
                          borderTop: "3px solid var(--primary-color)",
                          position: "relative",
                          overflow: "hidden"
                        }}
                        threshold={0.15}
                      >
                        <Image
                          src={item.bgImage}
                          alt={item.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 250px"
                          style={{ objectFit: "cover", opacity: 0.3, pointerEvents: "none", zIndex: 0 }}
                        />
                        <div className="d-flex justify-content-center" style={{ position: "relative", zIndex: 1 }}>
                          <div className="icon-wrapper-light">
                            <IconComponent size={20} />
                          </div>
                        </div>
                        <h4 
                          style={{
                            fontFamily: "var(--font-outfit), sans-serif",
                            fontSize: "1.1rem",
                            fontWeight: 600,
                            color: "var(--text-on-dark-title)",
                            marginBottom: "0.5rem",
                            position: "relative",
                            zIndex: 1
                          }}
                        >
                          {item.title}
                        </h4>
                        <p 
                          className="mb-0"
                          style={{
                            fontFamily: "var(--font-outfit), sans-serif",
                            fontSize: "0.85rem",
                            color: "var(--text-on-dark-muted)",
                            lineHeight: "1.5",
                            position: "relative",
                            zIndex: 1
                          }}
                        >
                          {item.desc}
                        </p>
                      </InView>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Why Choose Kingsford (Beige Background, Dark Glass Cards, left-slide staging with top gold border highlights and numbers) */}
          <section className="py-5" style={{ backgroundColor: "var(--primary-color)", borderBottom: "1px solid rgba(15, 32, 24, 0.1)" }}>
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
              </InView>

              <div className="row g-4 justify-content-center">
                {[
                  {
                    num: "01",
                    title: "10+ Years of Design Heritage",
                    icon: LuAward,
                    desc: "A decade of bespoke design expertise, transforming residential spaces into highly tailored personal sanctuaries."
                  },
                  {
                    num: "02",
                    title: "1,000+ Satisfied Homeowners",
                    icon: LuUsers,
                    desc: "Trusted by families across Chennai who value craftsmanship, transparency, and outstanding customer service."
                  },
                  {
                    num: "03",
                    title: "Bespoke Design Solutions",
                    icon: LuSparkles,
                    desc: "Every layout is meticulously custom-tailored to adapt to your specific daily lifestyle and visual requirements."
                  },
                  {
                    num: "04",
                    title: "High-End Sourced Materials",
                    icon: LuShieldCheck,
                    desc: "We select only the finest premium finishes and robust materials to guarantee longevity and enduring beauty."
                  },
                  {
                    num: "05",
                    title: "On-Time Handover Guarantee",
                    icon: LuClock,
                    desc: "Our design specialists follow an agile, structured process to ensure keys are delivered exactly on schedule."
                  }
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="col-12 col-md-6 col-lg-4">
                      <InView 
                        className="p-4 h-100 glass-card-dark reveal-left position-relative overflow-hidden" 
                        style={{ 
                          transitionDelay: `${idx * 0.08}s`,
                          borderTop: "3px solid var(--secondary-color)"
                        }}
                        threshold={0.15}
                      >
                        {/* Number Badge */}
                        <div 
                          className="position-absolute"
                          style={{
                            top: "1.25rem",
                            right: "1.5rem",
                            fontFamily: "var(--font-cormorant), serif",
                            fontSize: "1.75rem",
                            fontWeight: 700,
                            color: "rgba(15, 32, 24, 0.15)",
                            fontStyle: "italic"
                          }}
                        >
                          {item.num}
                        </div>

                        <div className="icon-wrapper-dark">
                          <Icon size={20} />
                        </div>
                        <h4 
                          style={{
                            fontFamily: "var(--font-outfit), sans-serif",
                            fontSize: "1.15rem",
                            fontWeight: 600,
                            color: "var(--text-title)",
                            marginBottom: "0.75rem",
                            paddingRight: "2rem"
                          }}
                        >
                          {item.title}
                        </h4>
                        <p 
                          className="mb-0"
                          style={{
                            fontFamily: "var(--font-outfit), sans-serif",
                            fontSize: "0.875rem",
                            color: "var(--text-body)",
                            lineHeight: "1.6"
                          }}
                        >
                          {item.desc}
                        </p>
                      </InView>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Vision & Mission (Deep Green Background, Light Glass Cards, Horizontal slide reveals) */}
          <section className="py-5" style={{ backgroundColor: "var(--secondary-color)", borderBottom: "1px solid rgba(217, 203, 164, 0.15)" }}>
            <div className="container py-5">
              <div className="row g-5">
                <div className="col-md-6">
                  <InView 
                    className="p-4 h-100 glass-card-light reveal-left" 
                    threshold={0.1}
                    style={{ borderTop: "3px solid var(--primary-color)" }}
                  >
                    <div className="icon-wrapper-light">
                      <LuEye size={22} />
                    </div>
                    <h3 
                      style={{ 
                        fontFamily: "var(--font-cormorant), serif", 
                        fontSize: "1.75rem", 
                        fontWeight: 600,
                        color: "var(--text-on-dark-title)" 
                      }}
                    >
                      Our Vision
                    </h3>
                    <p 
                      className="mt-3 mb-0"
                      style={{ 
                        fontFamily: "var(--font-outfit), sans-serif", 
                        fontSize: "0.95rem", 
                        color: "var(--text-on-dark-muted)",
                        lineHeight: "1.7" 
                      }}
                    >
                      To become one of the most trusted interior design companies by creating inspiring living spaces that enhance the quality of life for our clients.
                    </p>
                  </InView>
                </div>
                <div className="col-md-6">
                  <InView 
                    className="p-4 h-100 glass-card-light reveal-left" 
                    style={{ transitionDelay: "0.1s", borderTop: "3px solid var(--primary-color)" }} 
                    threshold={0.1}
                  >
                    <div className="icon-wrapper-light">
                      <LuTarget size={22} />
                    </div>
                    <h3 
                      style={{ 
                        fontFamily: "var(--font-cormorant), serif", 
                        fontSize: "1.75rem", 
                        fontWeight: 600,
                        color: "var(--text-on-dark-title)" 
                      }}
                    >
                      Our Mission
                    </h3>
                    <p 
                      className="mt-3 mb-0"
                      style={{ 
                        fontFamily: "var(--font-outfit), sans-serif", 
                        fontSize: "0.95rem", 
                        color: "var(--text-on-dark-muted)",
                        lineHeight: "1.7" 
                      }}
                    >
                      To deliver innovative, functional, and aesthetically pleasing interiors while maintaining the highest standards of quality, transparency, and customer service.
                    </p>
                  </InView>
                </div>
              </div>
            </div>
          </section>

          {/* Reusable Testimonials Section */}
          <SatisfiedCustomers />

          {/* Our Clients Section (Parallax Background Image Scroll, Light Glass Cards, Horizontal slide reveals) */}
          <section 
            className="py-5 position-relative" 
            style={{ 
              background: "linear-gradient(rgba(15, 32, 24, 0.85), rgba(15, 32, 24, 0.85)), url('/about_parallax_bg.png') no-repeat center center fixed",
              backgroundSize: "cover",
              borderTop: "1px solid rgba(217, 203, 164, 0.15)", 
              borderBottom: "1px solid rgba(217, 203, 164, 0.15)" 
            }}
          >
            <div className="container py-5 position-relative" style={{ zIndex: 2 }}>
              <InView className="text-center mb-5 reveal-up" threshold={0.1}>
                <span 
                  style={{ 
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    color: "var(--primary-color)",
                    textTransform: "uppercase"
                  }}
                >
                  Our Clients
                </span>
                <h2 
                  className="mt-2 fw-bold"
                  style={{ 
                    fontFamily: "var(--font-cormorant), serif", 
                    fontSize: "clamp(2.2rem, 4vw, 3.2rem)", 
                    color: "var(--text-on-dark-title)"
                  }}
                >
                  Trusted Across Chennai
                </h2>
                <div className="aesthetic-divider" />
                <p 
                  className="mx-auto mt-3"
                  style={{ fontFamily: "var(--font-outfit), sans-serif", maxWidth: "600px", color: "var(--text-on-dark-body)" }}
                >
                  Successfully completed over 1,000 interior spaces in Chennai&apos;s premier residential sectors.
                </p>
              </InView>

              <div className="row g-4 text-center justify-content-center">
                {[
                  { title: "ECR Beach Villas", desc: "Coastal aesthetics & custom cabinetry", tag: "ECR" },
                  { title: "OMR Luxury Apartments", desc: "Compact layouts & space-saving modular kitchens", tag: "OMR" },
                  { title: "Adyar Penthouses", desc: "Luxury false ceilings & premium wardrobes", tag: "Adyar" },
                  { title: "Anna Nagar Residences", desc: "Complete home architectural renewals", tag: "Anna Nagar" }
                ].map((client, idx) => (
                  <div key={idx} className="col-12 col-sm-6 col-lg-3">
                    <InView 
                      className="p-4 h-100 glass-card-light reveal-left"
                      style={{
                        transitionDelay: `${idx * 0.08}s`,
                        borderTop: "3px solid var(--primary-color)"
                      }}
                      threshold={0.15}
                    >
                      <span 
                        className="badge mb-3 px-3 py-2 text-uppercase fw-semibold"
                        style={{
                          backgroundColor: "var(--primary-color)",
                          color: "var(--secondary-color)",
                          fontFamily: "var(--font-inter), sans-serif",
                          fontSize: "0.7rem",
                          borderRadius: "9999px",
                          display: "inline-block"
                        }}
                      >
                        {client.tag}
                      </span>
                      <h4 
                        style={{
                          fontFamily: "var(--font-outfit), sans-serif",
                          fontSize: "1.1rem",
                          fontWeight: 600,
                          color: "var(--text-on-dark-title)",
                          marginBottom: "0.5rem"
                        }}
                      >
                        {client.title}
                      </h4>
                      <p 
                        className="mb-0"
                        style={{
                          fontFamily: "var(--font-outfit), sans-serif",
                          fontSize: "0.85rem",
                          color: "var(--text-on-dark-muted)",
                          lineHeight: "1.5"
                        }}
                      >
                        {client.desc}
                      </p>
                    </InView>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Let's Build Your Dream Home Call to Action (Beige Background) */}
          <section 
            className="py-5 text-center position-relative" 
            style={{ 
              backgroundColor: "var(--primary-color)",
              borderBottom: "1px solid rgba(15, 32, 24, 0.15)"
            }}
          >
            <div className="container py-5 position-relative" style={{ zIndex: 2 }}>
              <InView className="reveal-up" threshold={0.1}>
                <h2 
                  style={{ 
                    fontFamily: "var(--font-cormorant), serif",
                    fontSize: "clamp(2rem, 5vw, 3rem)",
                    color: "var(--secondary-color)",
                    fontWeight: 600
                  }}
                >
                  Let&apos;s Build Your Dream Home
                </h2>
                <div className="aesthetic-divider" style={{ backgroundColor: "rgba(15, 32, 24, 0.15)" }} />
                <p 
                  className="mx-auto mt-3 mb-4"
                  style={{ 
                    fontFamily: "var(--font-outfit), sans-serif", 
                    fontSize: "1.1rem", 
                    color: "var(--secondary-color)",
                    maxWidth: "600px",
                    opacity: 0.9
                  }}
                >
                  Whether you are planning a new home, renovating an existing space, or looking for complete interior solutions, Kingsford is here to bring your vision to life.
                </p>
                <button 
                  onClick={() => {
                    const footer = document.querySelector("#contact");
                    if (footer) footer.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="btn px-4 py-2 border-0 d-inline-flex align-items-center gap-2"
                  style={{
                    backgroundColor: "var(--secondary-color)",
                    color: "var(--primary-color)",
                    fontFamily: "var(--font-inter), sans-serif",
                    fontWeight: 600,
                    borderRadius: "9999px",
                    transition: "all 0.3s ease"
                  }}
                >
                  <span>Contact Our Team</span>
                  <LuArrowRight size={16} />
                </button>
              </InView>
            </div>
          </section>

        </main>

        <Footer />
      </div>
    </div>
  );
}
