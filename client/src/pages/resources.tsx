import { useEffect } from "react";
import Navigation from "@/components/navigation";
import ResourcesSection from "@/components/resources-section";
import Footer from "@/components/footer";
import ChatWidget from "@/components/chat-widget";

export default function Resources() {
  useEffect(() => {
    document.title = "Resources - Manila Cordage | Technical Guides & Documentation";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Access technical guides, safety manuals, and educational resources for rope applications. Download specifications, care instructions, and industry standards.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Access technical guides, safety manuals, and educational resources for rope applications. Download specifications, care instructions, and industry standards.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <ResourcesSection />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}