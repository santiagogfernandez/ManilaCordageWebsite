import { useEffect } from "react";
import Navigation from "@/components/navigation";
import ProductsSection from "@/components/products-section";
import Footer from "@/components/footer";
import ChatWidget from "@/components/chat-widget";

export default function Products() {
  useEffect(() => {
    document.title = "Products - Manila Cordage | Premium Rope Manufacturing";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore our comprehensive range of high-quality rope products including marine ropes, industrial cordage, and construction materials. Custom solutions available.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Explore our comprehensive range of high-quality rope products including marine ropes, industrial cordage, and construction materials. Custom solutions available.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <ProductsSection />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}