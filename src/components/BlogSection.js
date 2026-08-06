"use client";

import Image from "next/image";
import InView from "./InView";

export default function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      title: "Simple Kitchen Ideas: Smart Layouts for Modern Homes",
      author: "Elixir",
      date: "Apr 09, 2026",
      category: "MODERN KITCHEN IDEAS 2026",
      image: "/blogs/1.png",
    },
    {
      id: 2,
      title: "Wardrobe Design Ideas: Modern Storage Solutions for Stylish Homes",
      author: "Elixir",
      date: "Apr 09, 2026",
      category: "WARDROBE DESIGN IDEAS",
      image: "/blogs/2.png",
    },
    {
      id: 3,
      title: "Wooden Door Colour Ideas: Modern & Classic Choices for Your Home",
      author: "Elixir",
      date: "Apr 08, 2026",
      category: "INTERIOR DESIGN IDEAS",
      image: "/blogs/3.png",
    },
  ];

  const categories = [
    "MODERN KITCHEN IDEAS 2026",
    "WARDROBE DESIGN IDEAS",
    "INTERIOR DESIGN IDEAS",
  ];

  return (
    <>
      <style>{`
        /* Local component styles for BlogSection */
        .blog-section {
          background-color: var(--primary-color);
          padding: 1.5rem 1.5rem 3rem 1.5rem;
          position: relative;
        }
        .logo-text {
          font-family: var(--font-cormorant), serif;
          font-size: 1.8rem;
          font-weight: 600;
          color: var(--text-title);
          letter-spacing: -0.02em;
        }
        .nav-link-item {
          background: transparent;
          border: none;
          font-family: var(--font-inter), sans-serif;
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--text-body);
          cursor: pointer;
          padding: 0.25rem 0;
          transition: color 0.3s ease;
          letter-spacing: -0.01em;
          text-decoration: none;
        }
        .nav-link-item:hover {
          color: var(--text-title);
        }
        .newsletter-title {
          font-family: var(--font-cormorant), serif;
          font-size: 1.7rem;
          font-weight: 500;
          color: var(--text-title);
          letter-spacing: -0.01em;
        }
        .newsletter-input {
          background: transparent;
          border: none;
          border-bottom: 1.5px solid var(--secondary-color);
          padding: 0.6rem 0.25rem;
          font-family: var(--font-inter), sans-serif;
          font-size: 0.9rem;
          font-weight: 400;
          color: var(--text-title);
          width: 240px;
          transition: border-color 0.3s ease;
        }
        .newsletter-input:focus {
          outline: none;
          border-bottom-color: var(--fourth-color);
        }
        .newsletter-input::placeholder {
          color: var(--text-muted);
          font-weight: 400;
          font-size: 0.85rem;
        }
        .subscribe-btn {
          background: transparent;
          border: none;
          font-family: var(--font-inter), sans-serif;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--secondary-color);
          cursor: pointer;
          padding: 0.6rem 0;
          transition: color 0.3s ease;
          text-transform: uppercase;
        }
        .subscribe-btn:hover {
          color: var(--fourth-color);
        }
        .category-btn {
          background: transparent;
          border: none;
          font-family: var(--font-inter), sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          color: var(--text-body);
          cursor: pointer;
          padding: 0.6rem 0;
          transition: color 0.3s ease;
          white-space: nowrap;
          text-transform: uppercase;
        }
        .category-btn:hover {
          color: var(--text-title);
        }
        .blog-post-card {
          display: flex;
          flex-direction: column;
          cursor: pointer;
          transition: transform 0.4s cubic-bezier(0.2, 0, 0, 1), box-shadow 0.4s cubic-bezier(0.2, 0, 0, 1), border-color 0.4s cubic-bezier(0.2, 0, 0, 1);
          background-color: var(--fourth-color);
          border-radius: 1.25rem;
          padding: 1.25rem;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .blog-post-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 32px rgba(0, 0, 0, 0.3);
          border-color: rgba(217, 203, 164, 0.2);
        }
        .post-category {
          font-family: var(--font-inter), sans-serif;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: var(--primary-color);
          margin-bottom: 1rem;
          text-transform: uppercase;
        }
        .post-image {
          transition: transform 0.6s cubic-bezier(0.2, 0, 0, 1);
        }
        .blog-post-card:hover .post-image {
          transform: scale(1.04);
        }
        .post-title {
          font-family: var(--font-cormorant), serif;
          font-size: 1.35rem;
          font-weight: 600;
          color: var(--text-on-dark-title);
          line-height: 1.3;
          margin-bottom: 0.85rem;
          letter-spacing: -0.01em;
        }
        .post-meta {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-outfit), sans-serif;
          font-size: 0.75rem;
          font-weight: 400;
          color: var(--text-on-dark-muted);
          letter-spacing: -0.01em;
        }
        .post-author {
          font-weight: 500;
          color: var(--primary-color);
        }
        .post-meta span:not(:last-child)::after {
          content: "•";
          margin-left: 0.6rem;
          color: var(--primary-color);
        }
        .view-all-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.7rem;
          background: transparent;
          border: 1.5px solid var(--secondary-color);
          padding: 0.8rem 2rem;
          border-radius: 3rem;
          font-family: var(--font-inter), sans-serif;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--secondary-color);
          cursor: pointer;
          transition: all 0.35s ease;
          letter-spacing: -0.01em;
          text-decoration: none;
        }
        .view-all-btn svg {
          transition: transform 0.35s cubic-bezier(0.2, 0, 0, 1);
          color: var(--secondary-color);
        }
        .view-all-btn:hover {
          background: var(--secondary-color);
          border-color: var(--secondary-color);
          color: var(--primary-color);
        }
        .view-all-btn:hover svg {
          transform: translateX(5px);
          color: var(--primary-color);
        }
        @media (min-width: 768px) {
          .blog-section {
            padding: 2rem 2rem 4rem 2rem;
          }
          .logo-text {
            font-size: 2rem;
          }
          .newsletter-title {
            font-size: 1.9rem;
          }
          .post-title {
            font-size: 1.45rem;
          }
        }
        @media (min-width: 1280px) {
          .blog-section {
            padding: 2.5rem 4rem 4.5rem 4rem;
          }
        }
      `}</style>

      <section id="blog-section" className="blog-section">
        <div className="container" style={{ maxWidth: "85rem" }}>
<div className="text-center mb-5">
  <h2 className="section-title display-5 fw-bold">Recent Blogs</h2>
</div>
          {/* Blog Posts Grid - 3 columns */}
          <div className="row g-4 mb-5">
            {blogPosts.map((post, index) => (
              <div key={post.id} className="col-12 col-md-6 col-lg-4">
                <InView
                  className="blog-post-card h-100 reveal-up"
                  style={{ transitionDelay: `${index * 0.1}s` }}
                  threshold={0.1}
                >
                  {/* Category Tag */}
                  <div className="post-category">{post.category}</div>

                  {/* Post Image */}
                  <div
                    className="position-relative overflow-hidden w-100 rounded-3 mb-3"
                    style={{
                      aspectRatio: "4 / 3",
                      backgroundColor: "var(--secondary-color)",
                    }}
                  >
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 30vw"
                      style={{ objectFit: "cover" }}
                      className="post-image"
                    />
                  </div>

                  {/* Post Title */}
                  <h4 className="post-title">{post.title}</h4>

                  {/* Post Meta */}
                  <div className="post-meta mt-auto">
                    <span className="post-author">{post.author}</span>
                    <span className="post-date">{post.date}</span>
                  </div>
                </InView>
              </div>
            ))}
          </div>

          {/* View All Posts Button */}
          <InView
            className="d-flex justify-content-center reveal-up"
            style={{ transitionDelay: "0.3s" }}
            threshold={0.1}
          >
            <button className="view-all-btn" suppressHydrationWarning>
              View all posts
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </InView>
        </div>
      </section>
    </>
  );
}
