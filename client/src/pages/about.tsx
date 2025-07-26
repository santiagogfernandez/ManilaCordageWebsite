import { useEffect } from "react";
import Navigation from "@/components/navigation";
import AboutSection from "@/components/about-section";
import StatsSection from "@/components/stats-section";
import Footer from "@/components/footer";
import ChatWidget from "@/components/chat-widget";

export default function About() {
  useEffect(() => {
    document.title = "About Us - Manila Cordage | 75+ Years of Excellence";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn about Manila Cordage Company - leading rope manufacturer since 1950. Discover our commitment to quality, innovation, and sustainable manufacturing practices.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Learn about Manila Cordage Company - leading rope manufacturer since 1950. Discover our commitment to quality, innovation, and sustainable manufacturing practices.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <AboutSection />
        <StatsSection />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}