import { useEffect, useState } from "react";
import { useLanguage } from "@/hooks/use-language";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
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
      image: modernPhoto
    },
    {
      year: "1950s",
      title: "Post-War Expansion",
      description: "Following World War II, Manila Cordage rebuilt and expanded operations, adapting to new technologies while maintaining focus on quality abaca fiber processing.",
      milestone: false
    },
    {
      year: "1970s",
      title: "Modernization Era",
      description: "Invested in modern rope manufacturing equipment and techniques, establishing Manila Cordage as a leader in the Philippine cordage industry.",
      milestone: false
    },
    {
      year: "1990s",
      title: "Synthetic Fiber Innovation",
      description: "Expanded product lines to include synthetic fibers alongside traditional abaca, meeting evolving market demands for diverse rope applications.",
      milestone: true
    },
    {
      year: "2001",
      title: "New Millennium Growth",
      description: "Entered the 21st century with renewed focus on quality manufacturing, establishing modern facilities and embracing technological advances.",
      milestone: false
    },
    {
      year: "2015",
      title: "Cordage Institute USA Membership",
      description: "Became a proud member of the Cordage Institute USA, joining the leading association for rope and cordage manufacturers.",
      milestone: true
    },
    {
      year: "2018",
      title: "Technology Innovation Center",
      description: "Established our Research & Development center, focusing on innovative rope technologies and sustainable manufacturing processes.",
      milestone: false
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Implemented advanced digital systems and e-commerce capabilities to better serve our customers worldwide.",
      milestone: false
    },
    {
      year: "2022",
      title: "Sustainability Initiative Launch",
      description: "Launched comprehensive sustainability programs, including eco-friendly materials and responsible sourcing practices.",
      milestone: false
    },
    {
      year: "2025",
      title: "Global Excellence Recognition",
      description: "Continuing our journey of excellence with over 100+ years of quality rope making heritage and innovation.",
      milestone: true
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
      <section className="bg-navy-dark text-white py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Our History
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8">
              100+ Years of Quality Rope Making - From 1924 to Today
            </p>
            <div className="w-24 h-1 bg-orange-accent mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-navy-dark mb-4">
                Journey Through Time
              </h2>
              <p className="text-lg text-gray-600">
                Discover the milestones that shaped Manila Cordage into the industry leader we are today
              </p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 transform md:-translate-x-0.5"></div>

              {/* Timeline Events */}
              <div className="space-y-12">
                {timelineEvents.map((event, index) => (
                  <div
                    key={index}
                    data-index={index}
                    className={`timeline-item relative transition-all duration-700 ease-out ${
                      visibleEvents.has(index) 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-8'
                    }`}
                  >
                    <div className={`flex flex-col md:flex-row items-start md:items-center ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}>
                      {/* Timeline Dot */}
                      <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 md:-translate-x-1/2">
                        <div className={`w-4 h-4 rounded-full border-4 border-white shadow-lg ${
                          event.milestone ? 'bg-orange-accent' : 'bg-navy-dark'
                        }`}></div>
                      </div>

                      {/* Content Card */}
                      <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                        index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                      }`}>
                        <Card className="hover:shadow-lg transition-shadow duration-300">
                          <CardContent className="p-6">
                            <div className="flex items-center mb-3">
                              <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                                event.milestone 
                                  ? 'bg-orange-accent text-white' 
                                  : 'bg-navy-dark text-white'
                              }`}>
                                {event.year}
                              </span>
                            </div>
                            <h3 className="text-xl font-bold text-navy-dark mb-3">
                              {event.title}
                            </h3>
                            {event.image && (
                              <div className="mb-4">
                                <img 
                                  src={event.image} 
                                  alt={`${event.title} - ${event.year}`}
                                  className="w-full h-auto rounded-lg shadow-md object-cover max-h-64 sm:max-h-72 md:max-h-80"
                                />
                              </div>
                            )}
                            <p className="text-gray-600 leading-relaxed">
                              {event.description}
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
                href="/about"
                className="bg-navy-dark hover:bg-navy-dark/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Learn More About Us
              </a>
              <a
                href="/contact"
                className="bg-orange-accent hover:bg-orange-accent/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}