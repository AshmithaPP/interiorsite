"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InView from "@/components/InView";
import FaqAccordion from "@/components/FaqAccordion";
import { 
  LuCheck, 
  LuSparkles, 
  LuLayoutGrid, 
  LuHouse, 
  LuBuilding, 
  LuAward, 
  LuUsers, 
  LuShieldCheck, 
  LuCalendar, 
  LuChevronRight,
  LuCompass,
  LuWrench
} from "react-icons/lu";
import "./false-ceiling.css";

export default function FalseCeilingClient() {
  // Types of False Ceiling Designs data
  const ceilingTypes = [
    {
      id: "gypsum",
      title: "Gypsum False Ceiling",
      desc: "One of the most popular options for modern homes, offering a smooth finish and elegant appearance.",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "pop",
      title: "POP False Ceiling",
      desc: "Plaster of Paris ceilings provide attractive decorative designs and creative patterns.",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "pvc",
      title: "PVC False Ceiling",
      desc: "A durable and low-maintenance solution suitable for kitchens, bathrooms, and commercial spaces.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "wooden",
      title: "Wooden False Ceiling",
      desc: "Adds warmth and luxury to living rooms, bedrooms, and premium interiors.",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "grid",
      title: "Grid False Ceiling",
      desc: "Ideal for offices, showrooms, hospitals, and commercial buildings.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "designer",
      title: "Designer False Ceiling",
      desc: "Customized ceiling concepts with unique patterns, textures, and lighting integration.",
      image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80",
    },
  ];

  // Benefits data
  const benefits = [
    {
      title: "Enhanced Interior Appearance",
      desc: "Creates a modern and elegant look for your home or office.",
    },
    {
      title: "Better Lighting Effects",
      desc: "Supports LED lights, cove lighting, spotlights, and decorative lighting arrangements.",
    },
    {
      title: "Improved Thermal Insulation",
      desc: "Helps reduce heat and improves indoor comfort.",
    },
    {
      title: "Conceals Wiring and Ducts",
      desc: "Hides electrical wiring, pipes, and air-conditioning ducts for a clean appearance.",
    },
    {
      title: "Noise Reduction",
      desc: "Improves acoustic performance and reduces sound transmission.",
    },
  ];

  // Applications data
  const applications = [
    {
      id: "living",
      icon: <LuHouse size={28} />,
      title: "Living Room False Ceiling",
      desc: "Create a stylish focal point with modern ceiling designs and ambient lighting.",
    },
    {
      id: "bedroom",
      icon: <LuSparkles size={28} />,
      title: "Bedroom False Ceiling",
      desc: "Add elegance and comfort with customized ceiling concepts.",
    },
    {
      id: "dining",
      icon: <LuLayoutGrid size={28} />,
      title: "Dining Room False Ceiling",
      desc: "Enhance the overall dining experience with attractive lighting features.",
    },
    {
      id: "office",
      icon: <LuBuilding size={28} />,
      title: "Office False Ceiling",
      desc: "Professional ceiling solutions for offices, meeting rooms, and workspaces.",
    },
  ];

  // Installation Process steps data
  const processSteps = [
    {
      step: "01",
      title: "Site Inspection",
      desc: "Our team evaluates your space and discusses design requirements in detail.",
    },
    {
      step: "02",
      title: "Design Planning",
      desc: "We create customized ceiling concepts based on your preferences.",
    },
    {
      step: "03",
      title: "Professional Installation",
      desc: "Skilled technicians ensure accurate and safe installation.",
    },
    {
      step: "04",
      title: "Final Quality Check",
      desc: "Every project undergoes thorough inspection before handover.",
    },
  ];

  // FAQs data
  const faqs = [
    {
      q: "Why should I choose Kingsford as false ceiling contractors in Chennai?",
      a: "We offer customized designs, quality materials, experienced installation teams, and timely project completion.",
    },
    {
      q: "What is the best material for a false ceiling?",
      a: "Gypsum and POP are popular choices for residential interiors, while PVC and grid ceilings are ideal for specific applications.",
    },
    {
      q: "How long does false ceiling installation take?",
      a: "The timeline depends on the size and complexity of the project, but most installations are completed efficiently within the planned schedule.",
    },
    {
      q: "Can false ceilings improve lighting?",
      a: "Yes. False ceilings are perfect for integrating LED lights, cove lighting, spotlights, and decorative lighting solutions.",
    },
    {
      q: "Do you provide false ceiling services for offices?",
      a: "Yes. We offer false ceiling installation services for homes, offices, commercial spaces, showrooms, and retail establishments.",
    },
  ];

  return (
    <div className="app-wrapper">
      <div className="app-canvas" style={{ backgroundColor: "var(--primary-color)" }}>
        <Navbar />

        <main className="flex-grow-1 ceiling-page-container">
          
          {/* Section: Hero Banner */}
          <section className="ceiling-hero">
            <div className="ceiling-hero-pattern" />
            <div className="container text-center text-lg-start position-relative" style={{ zIndex: 2 }}>
              <div className="row justify-content-center justify-content-lg-start">
                <div className="col-12 col-lg-8 hero-content">
                  <InView className="reveal-up" threshold={0.1}>
                    <p className="ceiling-hero-subtitle">False Ceiling Contractors in Chennai</p>
                    <h1 className="ceiling-hero-title">
                      False Ceiling <span>Contractors in Chennai</span>
                    </h1>
                    <p className="ceiling-hero-copy">
                      Kingsford creates premium false ceiling solutions for homes, offices, and commercial spaces with elegant finishes and expert installation.
                    </p>
                    <button
                      onClick={() => window.dispatchEvent(new CustomEvent("open-consultation-popup"))}
                      className="ceiling-hero-cta"
                      suppressHydrationWarning
                    >
                      Get Free Estimate
                    </button>
                  </InView>
                </div>
              </div>
            </div>
          </section>

          {/* Section: False Ceiling Introduction */}
          <section className="py-5">
            <div className="container-fluid px-3 px-md-5" style={{ maxWidth: "1600px" }}>
              <div className="row align-items-center gy-4 gx-lg-5">
                {/* Content Left Side */}
                <div className="col-12 col-lg-6">
                  <InView className="reveal-up" threshold={0.1}>
                    <div className="intro-content-wrap">
                      <span className="text-uppercase fw-bold d-block mb-2" style={{ color: "var(--primary-color)", letterSpacing: "0.15em", fontSize: "0.85rem" }}>
                        Expert Grid & Gypsum Installers
                      </span>
                      <h2 className="fw-bold mb-3 font-serif" style={{ fontFamily: "var(--font-cormorant), serif", color: "var(--text-title)", fontSize: "clamp(2rem, 3.5vw, 2.75rem)", lineHeight: "1.2" }}>
                        False Ceiling Contractors in Chennai
                      </h2>
                      <p className="mb-4 text-muted" style={{ fontSize: "1rem", lineHeight: "1.7" }}>
                        Looking for professional <strong>False Ceiling Contractors in Chennai</strong>? Kingsford provides customized false ceiling solutions for homes, apartments, villas, offices, and commercial spaces. Our experienced team designs and installs stylish false ceilings that enhance the beauty, lighting, and functionality of your interiors.
                      </p>
                      <p className="m-0 text-muted" style={{ fontSize: "1rem", lineHeight: "1.7" }}>
                        Whether you want a modern ceiling design for your living room or a decorative ceiling for your office, Kingsford delivers high-quality workmanship and durable solutions tailored to your needs.
                      </p>
                    </div>
                  </InView>
                </div>

                {/* Image Right Side */}
                <div className="col-12 col-lg-6">
                  <InView className="reveal-up" style={{ transitionDelay: "0.08s" }} threshold={0.1}>
                    <div className="position-relative w-100 overflow-hidden shadow-sm" style={{ aspectRatio: "4/3", borderRadius: "1.5rem" }}>
                      <Image
                        src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
                        alt="Kingsford False Ceiling Chennai"
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

          {/* Section: Why Choose Kingsford */}
          <section className="py-5" style={{ backgroundColor: "rgba(15, 32, 24, 0.02)" }}>
            <div className="container-fluid px-3 px-md-5" style={{ maxWidth: "1600px" }}>
              <div className="text-center mb-5">
                <InView className="reveal-up" threshold={0.1}>
                  <h2 className="ceiling-section-title">Why Choose Kingsford for False Ceiling Installation?</h2>
                  <span className="ceiling-section-subtitle">
                    A well-designed false ceiling can completely transform the appearance of a room.
                  </span>
                </InView>
              </div>

              <div className="row g-4 justify-content-center">
                <div className="col-12 col-md-6">
                  <InView className="reveal-up h-100" threshold={0.1}>
                    <div className="ceiling-dark-card h-100">
                      <h3 className="ceiling-card-title">Experienced False Ceiling Contractors</h3>
                      <p className="ceiling-card-desc">
                        With years of industry experience, we provide professional installation services with attention to detail, quality materials, and structural safety guidelines.
                      </p>
                    </div>
                  </InView>
                </div>

                <div className="col-12 col-md-6">
                  <InView className="reveal-up h-100" style={{ transitionDelay: "0.1s" }} threshold={0.1}>
                    <div className="ceiling-dark-card h-100">
                      <h3 className="ceiling-card-title">Customized Ceiling Designs</h3>
                      <p className="ceiling-card-desc">
                        Every project is designed according to your space, budget, and design preferences, using high-quality gypsum boards, wood, or metal grids.
                      </p>
                    </div>
                  </InView>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Types of False Ceiling Designs */}
          <section className="ceiling-section" style={{ backgroundColor: "rgba(15, 32, 24, 0.03)" }}>
            <div className="container-fluid px-3 px-md-5" style={{ maxWidth: "1600px" }}>
              <div className="text-center mb-5">
                <InView className="reveal-up" threshold={0.1}>
                  <h2 className="ceiling-section-title">Types of False Ceiling Designs</h2>
                  <span className="ceiling-section-subtitle">We offer a wide range of ceiling solutions for properties.</span>
                </InView>
              </div>

              <div className="row g-4">
                {ceilingTypes.map((ceiling, idx) => (
                  <div key={ceiling.id} className="col-12 col-md-6 col-lg-4">
                    <InView
                      className="reveal-up h-100"
                      style={{ transitionDelay: `${idx * 0.08}s` }}
                      threshold={0.1}
                    >
                      <div className="ceiling-image-card">
                        <div className="ceiling-image-img">
                          <Image
                            src={ceiling.image}
                            alt={ceiling.title}
                            fill
                            sizes="(max-width: 576px) 100vw, (max-width: 992px) 50vw, 33vw"
                            className="object-fit-cover"
                            loading="lazy"
                          />
                        </div>
                        <div className="ceiling-image-overlay" />
                        <div className="ceiling-image-content">
                          <h3 className="ceiling-image-title">{ceiling.title}</h3>
                          <p className="ceiling-image-desc">{ceiling.desc}</p>
                        </div>
                      </div>
                    </InView>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section: Benefits of Installing a False Ceiling */}
          <section className="ceiling-section">
            <div className="container-fluid px-3 px-md-5" style={{ maxWidth: "1600px" }}>
              <div className="text-center mb-5">
                <InView className="reveal-up" threshold={0.1}>
                  <h2 className="ceiling-section-title">Benefits of Installing a False Ceiling</h2>
                  <span className="ceiling-section-subtitle">Enhancing Comfort, Acoustics, and Aesthetics</span>
                </InView>
              </div>

              <div className="row g-4">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="col-12 col-md-6 col-lg-4">
                    <InView
                      className="reveal-up h-100"
                      style={{ transitionDelay: `${idx * 0.08}s` }}
                      threshold={0.1}
                    >
                      <div className="ceiling-dark-card h-100">
                        <div className="ceiling-card-icon">
                          <LuCheck size={28} />
                        </div>
                        <h3 className="ceiling-card-title">{benefit.title}</h3>
                        <p className="ceiling-card-desc">{benefit.desc}</p>
                      </div>
                    </InView>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section: False Ceiling Applications */}
          <section className="ceiling-section" style={{ backgroundColor: "rgba(15, 32, 24, 0.03)" }}>
            <div className="container-fluid px-3 px-md-5" style={{ maxWidth: "1600px" }}>
              <div className="text-center mb-5">
                <InView className="reveal-up" threshold={0.1}>
                  <h2 className="ceiling-section-title">False Ceiling Applications</h2>
                  <span className="ceiling-section-subtitle">Tailored Settings For Every Room</span>
                </InView>
              </div>

              <div className="row g-4">
                {applications.map((app, idx) => (
                  <div key={app.id} className="col-12 col-md-6 col-lg-3">
                    <InView
                      className="reveal-up h-100"
                      style={{ transitionDelay: `${idx * 0.08}s` }}
                      threshold={0.1}
                    >
                      <div className="ceiling-dark-card h-100">
                        <div className="ceiling-card-icon">{app.icon}</div>
                        <h3 className="ceiling-card-title">{app.title}</h3>
                        <p className="ceiling-card-desc">{app.desc}</p>
                      </div>
                    </InView>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section: Why Homeowners Trust Kingsford (Stats) */}
          <section className="ceiling-section">
            <div className="container-fluid px-3 px-md-5" style={{ maxWidth: "1600px" }}>
              <div className="text-center mb-5">
                <InView className="reveal-up" threshold={0.1}>
                  <h2 className="ceiling-section-title">Why Homeowners Trust Kingsford</h2>
                  <span className="ceiling-section-subtitle">Delivering Quality & Trust Across Chennai</span>
                </InView>
              </div>

              <div className="row g-3 justify-content-center">
                <div className="col-6 col-md-3">
                  <InView className="reveal-up h-100" threshold={0.1}>
                    <div className="ceiling-stat-card h-100 d-flex flex-column justify-content-center">
                      <div className="ceiling-stat-number">10+</div>
                      <div className="ceiling-stat-label">Years Experience</div>
                    </div>
                  </InView>
                </div>
                <div className="col-6 col-md-3">
                  <InView className="reveal-up h-100" style={{ transitionDelay: "0.08s" }} threshold={0.1}>
                    <div className="ceiling-stat-card h-100 d-flex flex-column justify-content-center">
                      <div className="ceiling-stat-number">1000+</div>
                      <div className="ceiling-stat-label">Happy Clients</div>
                    </div>
                  </InView>
                </div>
                <div className="col-6 col-md-3">
                  <InView className="reveal-up h-100" style={{ transitionDelay: "0.16s" }} threshold={0.1}>
                    <div className="ceiling-stat-card h-100 d-flex flex-column justify-content-center">
                      <div className="ceiling-stat-number is-text">Premium</div>
                      <div className="ceiling-stat-label">Quality Materials</div>
                    </div>
                  </InView>
                </div>
                <div className="col-6 col-md-3">
                  <InView className="reveal-up h-100" style={{ transitionDelay: "0.24s" }} threshold={0.1}>
                    <div className="ceiling-stat-card h-100 d-flex flex-column justify-content-center">
                      <div className="ceiling-stat-number is-text">Timely</div>
                      <div className="ceiling-stat-label">Project Completion</div>
                    </div>
                  </InView>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Installation Process */}
          <section className="ceiling-section" style={{ backgroundColor: "rgba(15, 32, 24, 0.03)" }}>
            <div className="container-fluid px-3 px-md-5" style={{ maxWidth: "1600px" }}>
              <div className="text-center mb-5">
                <InView className="reveal-up" threshold={0.1}>
                  <h2 className="ceiling-section-title">Our Installation Process</h2>
                  <span className="ceiling-section-subtitle">Structured Project Execution Stages</span>
                </InView>
              </div>

              <div className="row g-4 justify-content-center">
                {processSteps.map((step, idx) => (
                  <div key={idx} className="col-12 col-md-6 col-lg-3">
                    <InView
                      className="reveal-up h-100"
                      style={{ transitionDelay: `${idx * 0.08}s` }}
                      threshold={0.1}
                    >
                      <div className="ceiling-process-card h-100">
                        <div className="ceiling-process-num">{step.step}</div>
                        <h3 className="ceiling-process-title">{step.title}</h3>
                        <p className="ceiling-process-desc">{step.desc}</p>
                      </div>
                    </InView>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section: Contact Kingsford Today (CTA) */}
          <section className="ceiling-section" style={{ backgroundColor: "var(--secondary-color)", color: "var(--text-on-dark-body)", borderTop: "1px solid rgba(217, 203, 164, 0.15)" }}>
            <div className="container text-center py-4">
              <InView className="reveal-up" threshold={0.1}>
                <h2 className="mb-3 font-serif fw-bold text-white" style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                  Contact Kingsford Today
                </h2>
                <p className="mx-auto mb-4 text-white-50" style={{ maxWidth: "750px", fontSize: "0.95rem" }}>
                  If you are searching for reliable False Ceiling Contractors in Chennai or looking for False Ceiling Contractors Near Me, Kingsford is your trusted partner. Our team is ready to create beautiful and functional ceiling solutions that elevate your interior spaces.
                </p>
                <Link href="/contact" className="ceiling-cta-btn rounded-pill fw-bold text-uppercase d-inline-flex align-items-center gap-2">
                  <span>Get Project Estimate</span>
                  <LuChevronRight size={16} />
                </Link>
              </InView>
            </div>
          </section>

          {/* Section: FAQs */}
          <section className="ceiling-section">
            <div className="container-fluid px-3 px-md-5" style={{ maxWidth: "1600px" }}>
              <FaqAccordion 
                items={faqs} 
                title="Frequently Asked Questions" 
                subtitle="Answers to common questions about our false ceiling designs and installation process." 
              />
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}
