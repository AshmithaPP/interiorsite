import { Outfit, Cormorant_Garamond, Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";
import "@/components/Navbar.css";
import "@/components/Hero.css";
import "@/components/WhoWeAre.css";
import "@/components/PackageOffers.css";
import BootstrapClient from "@/components/BootstrapClient";
import FloatingActions from "@/components/FloatingActions";
import ConsultationPopup from "@/components/ConsultationPopup";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-outfit",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata = {
  title: {
    default: "Kingsford | Modern Premium Furnishing Solutions",
    template: "%s | Kingsford",
  },
  description: "Exquisite and simple furnishing services for boutique hotels and luxury residences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${outfit.variable} ${cormorant.variable} ${inter.variable}`}>
      <body suppressHydrationWarning>
        <BootstrapClient />
        {children}
        <FloatingActions />
        <ConsultationPopup />
      </body>
    </html>
  );
}
