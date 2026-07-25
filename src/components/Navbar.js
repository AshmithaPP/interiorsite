"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash === "#home") {
      window.history.replaceState("", document.title, window.location.pathname + window.location.search);
    }

    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  const scrollToSection = (href) => {
    setMenuOpen(false);
    setDropdownOpen(false);
    setMobileDropdownOpen(false);

    if (href === "#home" || href === "/") {
      if (pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        if (typeof window !== "undefined") {
          window.history.pushState("", document.title, window.location.pathname + window.location.search);
        }
      } else {
        window.location.href = "/";
      }
      return;
    }

    if (pathname !== "/") {
      window.location.href = "/" + href;
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="nav-container">
      <div className={`nav-pill ${scrolled ? "scrolled" : ""}`}>
{/* LOGO */}
<button
  onClick={() => scrollToSection("#home")}
  className="nav-logo"
>
  <span>Kingsford</span>
</button>
        {/* DESKTOP NAV LINKS */}
        <div className="nav-links">
          <button onClick={() => scrollToSection("#home")} className="nav-link-btn">
            Home
          </button>
          <Link href="/about" className="nav-link-btn text-decoration-none">
            About
          </Link>

          {/* Services Dropdown */}
          <div
            className="nav-dropdown"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <Link
              href="/services"
              className="nav-link-btn text-decoration-none d-flex align-items-center gap-1"
            >
              Services <LuChevronDown size={14} className="ms-1" />
            </Link>
            {dropdownOpen && (
              <div className="nav-dropdown-menu animate-fade-in-up" style={{ animationDuration: "0.2s" }}>
                <Link href="/services/interior-design" className="nav-dropdown-item text-decoration-none">
                  Interior Design
                </Link>
                <Link href="/services/modular" className="nav-dropdown-item text-decoration-none">
                  Modular
                </Link>
                <Link href="/services/false-ceiling" className="nav-dropdown-item text-decoration-none">
                  False Ceiling
                </Link>
                <Link href="/services/painting" className="nav-dropdown-item text-decoration-none">
                  Painting
                </Link>
              </div>
            )}
          </div>

          <Link href="/consultation" className="nav-link-btn text-decoration-none">
            Interior Design Consultation
          </Link>
          <Link href="/gallery" className="nav-link-btn text-decoration-none">
            Gallery
          </Link>
          <Link href="/blogs" className="nav-link-btn text-decoration-none">
            Blogs
          </Link>
          <Link href="/contact" className="nav-link-btn text-decoration-none">
            Contact
          </Link>
          <div className="d-flex align-items-center gap-2 ms-2">
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="d-inline-flex align-items-center justify-content-center text-decoration-none"
              style={{
                color: "#25D366",
                transition: "transform 0.2s ease"
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.1)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1.0)"}
              title="WhatsApp Contact"
            >
              <FaWhatsapp size={28} />
            </a>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("open-consultation-popup"))}
              className="nav-estimate-btn d-inline-flex align-items-center justify-content-center"
              suppressHydrationWarning
            >
              Get Free Estimate
            </button>
          </div>
        </div>

        {/* HAMBURGER FOR MOBILE */}
        <button
          className={`hamburger-btn ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {menuOpen && (
        <div className="mobile-menu animate-fade-in-up" style={{ animationDuration: "0.2s" }}>
          <button onClick={() => scrollToSection("#home")}>Home</button>
          <Link href="/about" className="text-decoration-none py-1" onClick={() => setMenuOpen(false)}>
            About
          </Link>

          {/* Mobile Services dropdown */}
          <div className="mobile-dropdown">
            <div className="d-flex align-items-center justify-content-between w-100">
              <Link 
                href="/services" 
                className="text-decoration-none py-1 flex-grow-1" 
                onClick={() => setMenuOpen(false)}
                style={{ color: "var(--text-body)", fontWeight: 500, fontSize: "1rem" }}
              >
                Services
              </Link>
              <button
                onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                style={{
                  background: "none",
                  border: "none",
                  color: "var(--text-body)",
                  cursor: "pointer",
                  padding: "0.5rem",
                  display: "flex",
                  alignItems: "center"
                }}
              >
                {mobileDropdownOpen ? <LuChevronUp size={18} /> : <LuChevronDown size={18} />}
              </button>
            </div>
            {mobileDropdownOpen && (
              <div className="mobile-dropdown-menu animate-fade-in-up" style={{ animationDuration: "0.2s" }}>
                <Link href="/services/interior-design" className="text-decoration-none py-1 ps-3" onClick={() => setMenuOpen(false)}>
                  Interior Design
                </Link>
                <Link href="/services/modular" className="text-decoration-none py-1 ps-3" onClick={() => setMenuOpen(false)}>
                  Modular
                </Link>
                <Link href="/services/false-ceiling" className="text-decoration-none py-1 ps-3" onClick={() => setMenuOpen(false)}>
                  False Ceiling
                </Link>
                <Link href="/services/painting" className="text-decoration-none py-1 ps-3" onClick={() => setMenuOpen(false)}>
                  Painting
                </Link>
              </div>
            )}
          </div>

          <Link href="/consultation" className="text-decoration-none py-1" onClick={() => setMenuOpen(false)}>
            Interior Design Consultation
          </Link>
          <Link href="/gallery" className="text-decoration-none py-1" onClick={() => setMenuOpen(false)}>
            Gallery
          </Link>
          <Link href="/blogs" className="text-decoration-none py-1" onClick={() => setMenuOpen(false)}>Blogs</Link>
          <Link href="/contact" className="text-decoration-none py-1" onClick={() => setMenuOpen(false)}>Contact</Link>

          <hr className="mobile-divider" />
          <div className="d-flex align-items-center justify-content-center gap-3 w-100 px-3">
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="d-inline-flex align-items-center justify-content-center text-decoration-none"
              style={{
                color: "#25D366"
              }}
              title="WhatsApp Contact"
            >
              <FaWhatsapp size={32} />
            </a>
            <button
              onClick={() => {
                setMenuOpen(false);
                window.dispatchEvent(new CustomEvent("open-consultation-popup"));
              }}
              className="mobile-estimate-btn text-center flex-grow-1"
              suppressHydrationWarning
            >
              Get Free Estimate
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
