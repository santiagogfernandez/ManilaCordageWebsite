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
            
            {/* Contact Information */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="bg-accent-blue text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-navy-dark mb-2">Phone</h3>
                <p className="text-gray-600">+63 (2) 8123-4567</p>
              </div>
              
              <div className="text-center">
                <div className="bg-accent-blue text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-navy-dark mb-2">Email</h3>
                <p className="text-gray-600">info@manilacordage.com</p>
              </div>
              
              <div className="text-center">
                <div className="bg-accent-blue text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-navy-dark mb-2">Address</h3>
                <p className="text-gray-600">Manila, Philippines<br />Industrial Complex</p>
              </div>
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