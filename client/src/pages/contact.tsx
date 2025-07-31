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
        {/* Contact Header */}
        <section className="section-padding bg-gray-50">
          <div className="container mx-auto container-padding">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="responsive-heading font-bold mb-4 text-navy-dark">
                {t('nav.contact')}
              </h1>
              <p className="responsive-body text-gray-600 mb-8">
                Get in touch with our team for inquiries, quotes, and support. We're here to help with all your rope manufacturing needs.
              </p>
            </div>
            
            
          </div>
        </section>
        
        <QuoteSection />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}