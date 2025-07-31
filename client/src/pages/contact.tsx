import { useEffect } from "react";
import Navigation from "@/components/navigation";
import QuoteSection from "@/components/quote-section";
import Footer from "@/components/footer";
import ChatWidget from "@/components/chat-widget";
import { useLanguage } from "@/hooks/use-language";

export default function Quote() {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = "Get Quote - Manila Cordage | Custom Rope Solutions";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Get a custom quote for Manila Cordage rope solutions. Fast response times, bulk pricing, and expert consultation for all your rope manufacturing needs.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Get a custom quote for Manila Cordage rope solutions. Fast response times, bulk pricing, and expert consultation for all your rope manufacturing needs.';
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