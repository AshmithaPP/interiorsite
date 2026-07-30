import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      {/* Optimized Background Image (LCP optimization) */}
      <div className="hero-bg-wrapper">
        <Image
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80"
          alt="Modern Luxury Living Room"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
          quality={85}
        />
      </div>
      
      {/* Soft gradient overlay */}
      <div className="hero-overlay" />

      {/* Content Container */}
      <div className="hero-container">
        
        {/* LEFT COLUMN: Main Heading */}
        <div className="hero-left animate-fade-in-left">
          <h1 className="hero-title">
            <span className="title-large">
             Interior design consultant in chennai

            </span>
            <span className="title-sub">
              Kingsford | Home Interior Designers in Chennai
            </span>
          </h1>
        </div>

        {/* RIGHT COLUMN: Description & Button */}
        <div className="hero-right animate-fade-in-right delay-200">
          <p className="hero-desc">
            Kingsford is one of the best interior designers in Chennai, providing premium home interiors in Chennai with customized designs, quality materials, and expert execution. Contact us today.
          </p>
          
          <button className="hero-btn">
            Contact Kingsford Today
          </button>
        </div>

      </div>
    </section>
  );
}
