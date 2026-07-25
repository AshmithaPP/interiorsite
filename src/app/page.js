import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhoWeAre from "@/components/WhoWeAre";
import PackageOffers from "@/components/PackageOffers";
import DesignProcess from "@/components/DesignProcess";
import BetterHome from "@/components/BetterHome";
import SatisfiedCustomers from "@/components/SatisfiedCustomers";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";
import FaqAccordion from "@/components/FaqAccordion";

const faqs = [
  {
    q: "Why should I choose Kingsford as my interior designer in Chennai?",
    a: "Kingsford offers customized designs, premium materials, expert craftsmanship, and timely project completion for all interior projects.",
  },
  {
    q: "Are you among the best interior designers in Chennai?",
    a: "Yes, Kingsford is known for delivering high-quality residential interior solutions tailored to customer requirements.",
  },
  {
    q: "Do you provide complete home interiors in Chennai?",
    a: "Yes, we offer complete interior solutions including living rooms, bedrooms, kitchens, dining areas, and storage solutions.",
  },
  {
    q: "How much time does a home interior project take?",
    a: "The timeline depends on the project scope, design complexity, and customization requirements. We provide clear project schedules before starting.",
  },
  {
    q: "Why choose Kingsford as your home interior designers in Chennai?",
    a: "Our experienced team focuses on quality, functionality, customer satisfaction, and personalized design solutions that add value to your home.",
  },
];

export default function Home() {
  return (
    <div className="app-wrapper">
      <div className="app-canvas">
        <Navbar />
        <main>
          <Hero />
          <WhoWeAre />
          <PackageOffers />
          <DesignProcess />
          <BetterHome />
          <SatisfiedCustomers />
          <BlogSection />
          <section style={{ backgroundColor: "var(--primary-color)", borderTop: "1px solid rgba(217, 203, 164, 0.15)" }}>
            <div className="container-fluid px-3 px-md-5 py-5" style={{ maxWidth: "1600px" }}>
              <FaqAccordion 
                items={faqs} 
                title="Frequently Asked Questions" 
                subtitle="Answers to common questions about our interior design services and home transformation process." 
              />
            </div>
          </section>
          <Footer />
        </main>
      </div>
    </div>
  );
}
