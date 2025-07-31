import { useEffect } from "react";
import Navigation from "@/components/navigation";
import QuoteSection from "@/components/quote-section";
import Footer from "@/components/footer";
import ChatWidget from "@/components/chat-widget";
import { useLanguage } from "@/hooks/use-language";

export default function Contact() {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = "Contact Us - Manila Cordage | Get Quote & Support";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Contact Manila Cordage for custom rope solutions, bulk quotes, and technical support. Fast response times and expert consultation available.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Contact Manila Cordage for custom rope solutions, bulk quotes, and technical support. Fast response times and expert consultation available.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        
        
        <QuoteSection />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}