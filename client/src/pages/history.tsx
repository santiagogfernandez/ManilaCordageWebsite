import { useEffect, useState } from "react";
import { useLanguage } from "@/hooks/use-language";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import historicalPhoto from "@assets/MCCHistory1_1754037057282.jpg";
import modernPhoto from "@assets/MCC MSI Group_1753799439492.jpg";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  milestone: boolean;
  image?: string;
}

export default function History() {
  const { t } = useLanguage();
  const [visibleEvents, setVisibleEvents] = useState<Set<number>>(new Set());

  const timelineEvents: TimelineEvent[] = [
    {
      year: "1924",
      title: "Founding Years",
      description: "On February 20, 1924, Manila Cordage Company, a subsidiary of Tubbs Cordage Company of San Francisco, began operations at the junction of Cristobal and Otis streets in Paco, which had easy access to the Pasig. Its basic raw material was abaca, also known as Manila hemp, which by then was a much sought after commodity in North America.",
      milestone: true,
      image: historicalPhoto
    },
    {
      year: "1941-1945",
      title: "World War II",
      description: "In December of 1941, the Pacific War broke out and ravaged the country. For the next three years, the mill was run as a branch of the Tokyo Rope Works and its managers imprisoned at a concentration camp. In early 1945, Manila was liberated and by mid-year, the mill was back in business. The first ropes produced were for the U.S. Army.\n\nBy the late 1950's, the Paco mill was overflowing. Manila itself was getting crowded. Manco had to relocate.",
      milestone: true,
      image: "/images/manila-cordage-wwii.jpg"
    },

    {
      year: "1964-1970s",
      title: "Post-War Expansion",
      description: "Groundbreaking for the new mill in Makati took place in 1964. A year later, the work was finished; the mill was cited as the \"most modern rope facility in the Far East.\" In 1966, Manila Cordage began the production of large-sized plaited synthetic ropes, the first to do so in the Philippines. The Seventies ushered in a major organization change. A group of Filipino businessmen acquired majority control of the Company. Under the new management team, Manco entered a new growth stage.",
      milestone: true,
      image: "/images/manila-cordage-expansion.jpg"
    },
    {
      year: "1990s",
      title: "New Era Of Excellence",
      description: "Manila Cordage solidifies its position as the leading rope manufacturer in the Philippines, holding the top spot in the local industry for over 33 years.\n\nThe company operates two dedicated mills—one for synthetic fibers and another for hard fibers—allowing focused innovation across product lines. As the only ISO 9001:2000-certified cordage manufacturer in the country, Manco sets the benchmark for quality and reliability.\n\nWith growing demand for synthetic rope, Manco continues to expand production while maintaining Manila rope as a vital offering—recognized for its eco-friendly qualities and indispensable role in industries like construction and oil drilling.",
      milestone: true
    },
    {
      year: "2001",
      title: "A Century of Craftsmanship, A Future of Possibility",
      description: "Manila Cordage enters the new millennium with a bold move—relocating to a 6.4-hectare facility in the heart of the country's industrial hub. Purpose-built for expansion, this new home positions Manco for long-term growth and operational efficiency.\n\nBacked by a dedicated and loyal workforce, the company continues to thrive—evolving with the times while staying true to its legacy of quality and innovation.\n\nIn 2024, Manila Cordage proudly celebrated its 100th year—an enduring symbol of resilience, craftsmanship, and leadership in the rope and cordage industry. With a century behind it and a strong foundation ahead, Manco looks to the future with confidence and purpose.",
      milestone: false
    }
  ];

  useEffect(() => {
    const observeElements = () => {
      const timelineItems = document.querySelectorAll('.timeline-item');
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const index = parseInt(entry.target.getAttribute('data-index') || '0');
              setVisibleEvents(prev => new Set(prev).add(index));
            }
          });
        },
        {
          threshold: 0.3,
          rootMargin: '0px 0px -100px 0px'
        }
      );

      timelineItems.forEach((item) => observer.observe(item));

      return () => observer.disconnect();
    };

    const timer = setTimeout(observeElements, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Hero Section */}
      <section 
        className="relative bg-navy-dark text-white py-16 sm:py-24 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `linear-gradient(rgba(28, 42, 70, 0.85), rgba(28, 42, 70, 0.85)), url(${modernPhoto})` 
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Materials That Stand the Test of Time</h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8">100+ Years of Quality Rope Making</p>
          </div>
        </div>
      </section>
      {/* Timeline Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-dark mb-4">Discover the milestones that shaped Manila Cordage into the industry leader we are today</h2>
          </div>

          <div className="max-w-7xl mx-auto space-y-12">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                data-index={index}
                className={`timeline-item transition-all duration-700 ease-out ${
                  visibleEvents.has(index) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[450px]">
                    {/* Image Section */}
                    {event.image && (
                      <div className="relative bg-gray-100 overflow-hidden flex items-center justify-center">
                        <img 
                          src={event.image} 
                          alt={`${event.title} - ${event.year}`}
                          className="w-full h-full object-contain"
                        />

                        {/* Year Badge on Image */}
                        <div className="absolute top-6 left-6">
                          <span className="inline-block px-4 py-2 rounded-full text-sm font-bold text-white shadow-lg bg-[#006fd3]">
                            {event.year}
                          </span>
                        </div>
                      </div>
                    )}
                    
                    {/* Content Section */}
                    <div className={`p-8 lg:p-12 flex flex-col justify-center ${
                      !event.image ? 'col-span-2 bg-gray-50' : 'bg-white'
                    }`}>
                      {!event.image && (
                        <div className="mb-6">
                          <span className={`inline-block px-4 py-2 rounded-full text-sm font-bold ${
                            event.milestone 
                              ? 'bg-orange-accent text-white' 
                              : 'bg-navy-dark text-white'
                          }`}>
                            {event.year}
                          </span>
                        </div>
                      )}
                      
                      <h3 className="text-2xl lg:text-3xl font-bold text-navy-dark mb-6">
                        {event.title}
                      </h3>
                      
                      <div className="space-y-4 text-gray-600 leading-relaxed text-base lg:text-lg">
                        {event.description.split('\n\n').map((paragraph, pIndex) => (
                          <p key={pIndex}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Call to Action Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-dark mb-4">
              Building the Future Together
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our history is just the beginning. Join us as we continue to innovate and lead the rope manufacturing industry into the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/about/team"
                className="hover:bg-navy-dark/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors bg-[#006ed2]"
              >
                Learn About Team
              </a>
              <a
                href="/quote"
                className="hover:bg-orange-accent/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors bg-[#006fd3]"
              >
                Get Quote
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}