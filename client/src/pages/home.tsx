import { useEffect } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import StatsSection from "@/components/stats-section";
import BrandsSection from "@/components/brands-section";
import ClientBrandsSection from "@/components/client-brands-section";

import AboutSection from "@/components/about-section";

import Footer from "@/components/footer";
import ChatWidget from "@/components/chat-widget";

export default function Home() {
  useEffect(() => {
    // Set SEO meta tags
    document.title = "Manila Cordage - Premium Rope Manufacturing Solutions";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Leading manufacturer of high-quality rope products for marine, industrial, and construction applications. Expert craftsmanship since 1950.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Leading manufacturer of high-quality rope products for marine, industrial, and construction applications. Expert craftsmanship since 1950.';
      document.head.appendChild(meta);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'rope manufacturing, manila rope, marine rope, industrial rope, construction rope, cordage');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = 'rope manufacturing, manila rope, marine rope, industrial rope, construction rope, cordage';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <BrandsSection />
      <ClientBrandsSection />
      <Footer />
      <ChatWidget />
    </div>
  );
}
