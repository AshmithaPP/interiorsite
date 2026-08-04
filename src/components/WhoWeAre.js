import Image from "next/image";
import InView from "./InView";

export default function WhoWeAre() {
  return (
    <section id="who-we-are" className="whoweare-section">
      <InView className="whoweare-card reveal-up" threshold={0.15}>
        
        {/* LEFT: Stats Card - slide-from-left */}
        <InView className="whoweare-stats-card reveal-left delay-200" threshold={0.15}>
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80"
            alt="Luxury interior design plan"
            fill
            sizes="(max-width: 768px) 100vw, 360px"
            style={{ objectFit: "cover", opacity: 0.45, mixBlendMode: "multiply", pointerEvents: "none", zIndex: 0 }}
          />
          {/* Top label */}
          <div className="stats-card-top">
            <p className="stats-label">
              OUR COMPANY<br />IN NUMBERS
            </p>
            {/* Decorative brush strokes icon */}
            <svg className="stats-icon" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20 60 C25 30, 35 15, 50 10"
                stroke="rgba(255,255,255,0.35)"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M28 62 C32 35, 42 20, 55 15"
                stroke="rgba(255,255,255,0.3)"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M36 62 C38 42, 48 28, 60 22"
                stroke="rgba(255,255,255,0.25)"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </div>

          {/* Bottom stats row with modern numbers */}
          <div className="stats-card-bottom">
            <div className="stat-item">
              <span className="stat-number modern-number">100+</span>
              <span className="stat-desc">Furniture Suppliers</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-number modern-number">10+</span>
              <span className="stat-desc">Years of Industry Experience</span>
            </div>
          </div>
        </InView>

        {/* CENTER: Text Content */}
        <div className="whoweare-text">
          <h2 className="whoweare-heading">
            Why Choose <em>Kingsford</em> for Home Interiors in Chennai?
          </h2>
          <p className="whoweare-para">
            At Kingsford, we understand that every home reflects the personality of its owner. Our experienced designers work closely with clients to create unique interior solutions that maximize space, comfort, and aesthetics.
          </p>
          <p className="whoweare-para">
            Every project is designed according to your requirements. From contemporary styles to traditional themes, we create interiors that perfectly suit your vision.
          </p>
        </div>

        {/* RIGHT: Image with scale-in reveal */}
        <InView className="whoweare-image-wrap reveal-scale delay-300" threshold={0.15}>
          <Image
            src="/hero/home2.png"
            alt="Team collaborating on design materials"
            fill
            sizes="(max-width: 768px) 100vw, 320px"
            className="whoweare-image"
            style={{ objectFit: "cover" }}
          />
        </InView>
        
      </InView>
    </section>
  );
}
