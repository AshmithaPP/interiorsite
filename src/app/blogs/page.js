"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InView from "@/components/InView";
import BlogCard from "@/components/BlogCard";
import Image from "next/image";
import { 
  LuSearch, 
  LuLayoutGrid, 
  LuList, 
  LuTag, 
  LuTrendingUp, 
  LuSparkles, 
  LuArrowRight 
} from "react-icons/lu";

// Local blog post database
const BLOG_POSTS = [
  {
    id: 1,
    title: "Interior Design Timeline: How Long Does a Home Interior Take?",
    date: "Jul 08, 2026",
    category: "Apartment Interiors",
    readTime: "4 min read",
    excerpt: "Planning a new home is an exciting journey. One of the most common questions homeowners ask when beginning the interiors is how long it will take to complete. While there is no single answer, understanding how the design process works can help manage your timelines.",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Designing a Dream Home in Mangalore with D’LIFE Interiors",
    date: "Jun 25, 2026",
    category: "Design Trends",
    readTime: "5 min read",
    excerpt: "Create a space that is personal, peaceful and rewarding. We turned a standard apartment layout into an open-concept custom contemporary home optimized for natural sea breezes and bespoke modular storage.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Inside Antony Dhas and Harshia’s Modern Home by D’LIFE Interiors, Nagercoil",
    date: "Jun 10, 2026",
    category: "Celebrity Homes",
    readTime: "6 min read",
    excerpt: "This residence of Tamil Nadu cricket player Antony Dhas was envisioned to have a modern design with customizable modular furniture. They were looking for interior decorators to execute custom TV paneling and ambient lighting.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Elegant Modern Home Interiors in Cherthala by D’LIFE Interior Designers",
    date: "May 26, 2026",
    category: "Modular Kitchens",
    readTime: "4 min read",
    excerpt: "Riyas Backer & Siya Backer asked D’LIFE interior designers to design and execute modular kitchen, dining space, bedrooms and living room interiors. Discover how we combined blue matte cabinets and premium hardware.",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "A Premium Home Interior at Mohtisham Amity Apartments, Mangalore",
    date: "May 12, 2026",
    category: "Apartment Interiors",
    readTime: "5 min read",
    excerpt: "Homeowners Jalal and Zeba selected our designers to create premium modular interiors. Features include light-beige fabric headboards, textured custom wall paneling, and indirect warm ceiling illumination.",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "A Perfectly Crafted Home in Thiruvalla by D’LIFE Interiors",
    date: "Apr 29, 2026",
    category: "Space Planning",
    readTime: "4 min read",
    excerpt: "The family was on the lookout for professional interior designers to execute beautiful home interiors. See how we optimized the dining zone flow, using custom glass partitions and built-in consoles.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 7,
    title: "Simplified Payment Process for Home Interiors in India",
    date: "Apr 13, 2026",
    category: "Design Trends",
    readTime: "3 min read",
    excerpt: "Designing your dream home should be an exciting journey. However, for many homeowners, it comes with a lot of stress, particularly around payment schedules, transparency, and unexpected site additions.",
    image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 8,
    title: "How D’LIFE Interiors Turned Interior Design Dreams into Reality",
    date: "Mar 27, 2026",
    category: "Space Planning",
    readTime: "5 min read",
    excerpt: "Turning a design dream into reality has experienced a remarkable shift over the last few years. Previously considered a luxury, see how factory-direct customization makes bespoke spaces highly accessible today.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 9,
    title: "Creating Seamless Interiors with Custom-Made Modular Furniture",
    date: "Mar 06, 2026",
    category: "Modular Kitchens",
    readTime: "4 min read",
    excerpt: "Picture this: you are making a wonderful dinner with your family. Your kitchen feels elegant, functional and completely optimized. See how custom factory manufacturing eliminates onsite carpentry delays.",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=600&auto=format&fit=crop"
  }
];

const CATEGORIES = ["All", "Apartment Interiors", "Modular Kitchens", "Space Planning", "Celebrity Homes", "Design Trends"];

export default function BlogsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [layoutMode, setLayoutMode] = useState("grid"); // "grid" or "list"
  const [visibleCount, setVisibleCount] = useState(6);

  // Filter posts based on search term and category
  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const displayedPosts = filteredPosts.slice(0, visibleCount);

  // Get most popular posts (first 3 items as placeholders)
  const popularPosts = BLOG_POSTS.slice(0, 3);

  // Count posts per category
  const getCategoryCount = (category) => {
    if (category === "All") return BLOG_POSTS.length;
    return BLOG_POSTS.filter(p => p.category === category).length;
  };

  return (
    <div className="app-wrapper">
      <div className="app-canvas" style={{ backgroundColor: "var(--primary-color)" }}>
        <Navbar />
        
        {/* Style block for local blogs layout */}
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

          .sidebar-widget {
            background: rgba(15, 32, 24, 0.03) !important;
            border: 1px solid rgba(15, 32, 24, 0.12) !important;
            border-top: 3.5px solid var(--secondary-color) !important;
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border-radius: 1.5rem;
            padding: 1.75rem;
            margin-bottom: 2rem;
            box-shadow: 0 8px 25px rgba(15, 32, 24, 0.03);
            transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
          }
          .sidebar-widget:hover {
            box-shadow: 0 15px 35px rgba(15, 32, 24, 0.07);
            transform: translateY(-3px);
          }

          .sidebar-widget-promo {
            background: linear-gradient(135deg, var(--secondary-color) 0%, var(--fourth-color) 100%) !important;
            border: none !important;
            border-top: 3.5px solid var(--primary-color) !important;
            border-radius: 1.5rem;
            padding: 1.75rem;
            margin-bottom: 2rem;
            box-shadow: 0 8px 25px rgba(15, 32, 24, 0.1);
            transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
            position: relative;
            overflow: hidden;
          }
          .sidebar-widget-promo:hover {
            box-shadow: 0 15px 35px rgba(15, 32, 24, 0.2);
            transform: translateY(-3px);
          }

          .search-input-wrapper {
            position: relative;
            width: 100%;
          }
          .search-input {
            width: 100%;
            padding: 0.75rem 1rem 0.75rem 2.75rem;
            background: rgba(15, 32, 24, 0.03);
            border: 1px solid rgba(15, 32, 24, 0.12);
            border-radius: 9999px;
            font-family: var(--font-outfit), sans-serif;
            font-size: 0.9rem;
            color: var(--text-title);
            outline: none;
            transition: all 0.3s ease;
          }
          .search-input:focus {
            background: rgba(15, 32, 24, 0.06);
            border-color: var(--secondary-color);
          }

          .category-link {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0.65rem 0.85rem;
            border-radius: 0.5rem;
            color: var(--text-body);
            font-family: var(--font-outfit), sans-serif;
            font-size: 0.925rem;
            text-decoration: none;
            transition: all 0.3s ease;
            cursor: pointer;
          }
          .category-link:hover, .category-link.active {
            background-color: var(--secondary-color);
            color: var(--primary-color) !important;
          }

          .popular-post-item {
            display: flex;
            gap: 1rem;
            align-items: center;
            padding: 0.75rem 0.5rem;
            border-radius: 0.75rem;
            border-bottom: 1px solid rgba(15, 32, 24, 0.05);
            text-decoration: none;
            transition: all 0.3s ease;
          }
          .popular-post-item:hover {
            background-color: rgba(15, 32, 24, 0.04);
          }
          .popular-post-item:last-child {
            border-bottom: none;
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
            width: 60px;
            height: 2px;
            background-color: var(--secondary-color);
            margin: 1rem 0;
          }

          .filter-pill {
            padding: 0.5rem 1.25rem;
            border-radius: 9999px;
            font-family: var(--font-inter), sans-serif;
            font-size: 0.8rem;
            font-weight: 600;
            background-color: rgba(15, 32, 24, 0.03);
            color: var(--secondary-color);
            border: 1px solid rgba(15, 32, 24, 0.12);
            transition: all 0.3s ease;
            cursor: pointer;
          }
          .filter-pill.active, .filter-pill:hover {
            background-color: var(--secondary-color);
            color: var(--primary-color);
            border-color: var(--secondary-color);
          }
        `}</style>

        <main className="flex-grow-1" style={{ paddingTop: "5.5rem" }}>
          
          {/* Green Hero Banner with background image */}
          <section 
            className="d-flex align-items-center position-relative overflow-hidden" 
            style={{ 
              background: "linear-gradient(180deg, rgba(11, 26, 20, 0.88), rgba(11, 26, 20, 0.65)), url('https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80') no-repeat center center / cover",
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
                      Insights & inspiration
                    </span>
                    <h1 
                      className="mt-3 mb-4 fw-bold"
                      style={{ 
                        fontFamily: "var(--font-cormorant), serif", 
                        fontSize: "clamp(2.5rem, 6vw, 4rem)", 
                        color: "var(--text-on-dark-title)",
                        letterSpacing: "-0.01em",
                        lineHeight: "1.1"
                      }}
                    >
                      Bespoke Design <span style={{ color: "var(--primary-color)", fontStyle: "italic", fontWeight: 400 }}>Journal</span>
                    </h1>
                    <div className="aesthetic-divider" style={{ margin: "1.5rem 0" }} />
                    <p 
                      className="mb-0"
                      style={{ 
                        fontFamily: "var(--font-outfit), sans-serif", 
                        fontSize: "clamp(1.1rem, 2vw, 1.3rem)", 
                        color: "var(--text-on-dark-body)",
                        maxWidth: "600px",
                        lineHeight: "1.6"
                      }}
                    >
                      Exploring the latest in custom home transformations, minimalist modular layouts, and factory craftsmanship.
                    </p>
                  </InView>
                </div>
              </div>
            </div>
          </section>

          {/* Main Content Area (Beige background with deep green texts) */}
          <section className="py-5">
            <div className="container-fluid px-md-5 py-4" style={{ maxWidth: "1600px", margin: "0 auto" }}>
              <div className="row g-5">
                
                {/* Left Column - Main Feed (70%) */}
                <div className="col-lg-8">
                  
                  {/* Filters & View Toggles bar */}
                  <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-4">
                    <div className="d-flex flex-wrap gap-2">
                      {CATEGORIES.map(category => (
                        <button
                          key={category}
                          onClick={() => {
                            setActiveCategory(category);
                            setVisibleCount(6); // reset counts on filter change
                          }}
                          className={`filter-pill ${activeCategory === category ? "active" : ""}`}
                        >
                          {category}
                        </button>
                      ))}
                    </div>

                    <div className="d-flex align-items-center gap-2">
                      <button 
                        onClick={() => setLayoutMode("grid")}
                        className="btn p-2 border-0"
                        style={{ color: layoutMode === "grid" ? "var(--secondary-color)" : "var(--text-muted)" }}
                        title="Grid View"
                      >
                        <LuLayoutGrid size={20} />
                      </button>
                      <button 
                        onClick={() => setLayoutMode("list")}
                        className="btn p-2 border-0"
                        style={{ color: layoutMode === "list" ? "var(--secondary-color)" : "var(--text-muted)" }}
                        title="List View"
                      >
                        <LuList size={20} />
                      </button>
                    </div>
                  </div>

                  {/* Feed count alert */}
                  {searchTerm && (
                    <p className="text-muted mb-4" style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: "0.9rem" }}>
                      Found {filteredPosts.length} matches for search &ldquo;{searchTerm}&rdquo;
                    </p>
                  )}

                  {/* Blog Cards Grid/List */}
                  {displayedPosts.length > 0 ? (
                    <div className="row g-4">
                      {displayedPosts.map((post, idx) => (
                        <div 
                          key={post.id} 
                          className={layoutMode === "grid" ? "col-12 col-md-6" : "col-12"}
                        >
                          <InView className="reveal-up" style={{ transitionDelay: `${(idx % 3) * 0.08}s` }} threshold={0.1}>
                            <BlogCard post={post} layoutType={layoutMode} />
                          </InView>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-5 glass-card-dark">
                      <h4 style={{ fontFamily: "var(--font-cormorant), serif", color: "var(--text-title)" }}>No articles found</h4>
                      <p className="text-muted" style={{ fontFamily: "var(--font-outfit), sans-serif" }}>Try altering your search phrase or category filter selection.</p>
                    </div>
                  )}

                  {/* Load More Pagination */}
                  {filteredPosts.length > displayedPosts.length && (
                    <div className="text-center mt-5">
                      <button 
                        onClick={() => setVisibleCount(prev => prev + 3)}
                        className="btn px-4 py-2 border-0"
                        style={{
                          backgroundColor: "var(--secondary-color)",
                          color: "var(--primary-color)",
                          fontFamily: "var(--font-inter), sans-serif",
                          fontWeight: 600,
                          borderRadius: "9999px",
                          transition: "all 0.3s ease"
                        }}
                      >
                        Load More Articles
                      </button>
                    </div>
                  )}

                </div>

                {/* Right Column - Sidebar (30%) */}
                <div className="col-lg-4">
                  
                  {/* Search Widget */}
                  <div className="sidebar-widget">
                    <h4 
                      style={{ 
                        fontFamily: "var(--font-cormorant), serif", 
                        fontSize: "1.25rem", 
                        fontWeight: 700, 
                        color: "var(--text-title)",
                        marginBottom: "0.5rem"
                      }}
                    >
                      Search Articles
                    </h4>
                    <div className="aesthetic-divider-dark" style={{ margin: "0.5rem 0 1.25rem 0" }} />
                    <div className="search-input-wrapper">
                      <span className="position-absolute top-50 start-0 translate-middle-y ps-3 text-muted">
                        <LuSearch size={16} />
                      </span>
                      <input 
                        type="text" 
                        placeholder="Search here..." 
                        className="search-input"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Categories Widget */}
                  <div className="sidebar-widget">
                    <h4 
                      style={{ 
                        fontFamily: "var(--font-cormorant), serif", 
                        fontSize: "1.25rem", 
                        fontWeight: 700, 
                        color: "var(--text-title)",
                        marginBottom: "0.5rem"
                      }}
                    >
                      Categories
                    </h4>
                    <div className="aesthetic-divider-dark" style={{ margin: "0.5rem 0 1.25rem 0" }} />
                    <div className="d-flex flex-column gap-1">
                      {CATEGORIES.map(category => (
                        <div 
                          key={category}
                          onClick={() => {
                            setActiveCategory(category);
                            setVisibleCount(6);
                          }}
                          className={`category-link d-flex justify-content-between align-items-center ${activeCategory === category ? "active" : ""}`}
                        >
                          <span>{category}</span>
                          <span 
                            className="badge text-xs" 
                            style={{ 
                              background: activeCategory === category ? "var(--primary-color)" : "rgba(15, 32, 24, 0.08)",
                              color: activeCategory === category ? "var(--secondary-color)" : "var(--text-title)",
                              borderRadius: "9999px"
                            }}
                          >
                            {getCategoryCount(category)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Popular Posts Widget */}
                  <div className="sidebar-widget">
                    <h4 
                      style={{ 
                        fontFamily: "var(--font-cormorant), serif", 
                        fontSize: "1.25rem", 
                        fontWeight: 700, 
                        color: "var(--text-title)",
                        marginBottom: "0.5rem"
                      }}
                    >
                      Popular Articles
                    </h4>
                    <div className="aesthetic-divider-dark" style={{ margin: "0.5rem 0 1.25rem 0" }} />
                    <div className="d-flex flex-column">
                      {popularPosts.map(post => (
                        <a 
                          key={post.id} 
                          href={`/blogs/${post.id}`} 
                          className="popular-post-item text-decoration-none"
                        >
                          <div className="position-relative overflow-hidden" style={{ width: "60px", height: "60px", borderRadius: "0.5rem", flexShrink: 0 }}>
                            <Image 
                              src={post.image}
                              alt={post.title}
                              fill
                              sizes="60px"
                              className="object-fit-cover"
                            />
                          </div>
                          <div>
                            <h5 
                              className="mb-1"
                              style={{ 
                                fontFamily: "var(--font-outfit), sans-serif", 
                                fontSize: "0.85rem", 
                                color: "var(--text-title)",
                                fontWeight: 600,
                                lineHeight: "1.3",
                                display: "-webkit-box",
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: "vertical",
                                overflow: "hidden"
                              }}
                            >
                              {post.title}
                            </h5>
                            <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontFamily: "var(--font-inter), sans-serif" }}>
                              {post.date}
                            </span>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>



                </div>

              </div>
            </div>
          </section>

        </main>

        <Footer />
      </div>
    </div>
  );
}
