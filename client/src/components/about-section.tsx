import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

export default function AboutSection() {
  const { t } = useLanguage();

  const features = [
    t('about.feature1'),
    t('about.feature2'),
    t('about.feature3'),
    t('about.feature4'),
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
            {/* Left side - Image with overlay */}
            <div className="relative h-96 lg:h-auto">
              <div 
                className="absolute inset-0 bg-cover bg-center rounded-l-2xl lg:rounded-l-2xl lg:rounded-r-none"
                style={{ 
                  backgroundImage: `url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&crop=center')`
                }}
              />
              <div className="absolute inset-0 bg-navy-dark bg-opacity-70 rounded-l-2xl lg:rounded-l-2xl lg:rounded-r-none flex flex-col justify-center items-start p-8 lg:p-12">
                <div className="text-white mb-6">
                  <div className="border-2 border-white rounded-full w-20 h-20 flex items-center justify-center mb-4">
                    <div className="text-center">
                      <div className="text-xs font-semibold">PERFORMANCE</div>
                      <div className="text-lg font-bold">Since 1968</div>
                      <div className="text-xs">ROPES & CORDS</div>
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white leading-tight">
                  Manila Cordage is a<br />
                  leading Philippines rope<br />
                  manufacturer.
                </h3>
              </div>
            </div>
            
            {/* Right side - Content */}
            <div className="bg-white p-8 lg:p-12 rounded-r-2xl lg:rounded-r-2xl lg:rounded-l-none">
              <h2 className="text-3xl lg:text-4xl font-bold text-navy-dark mb-6">
                Leading Manufacturer of Ropes, Cords and Braids Since 1968
              </h2>
              
              <div className="space-y-4 mb-8 text-gray-600">
                <p>
                  Manila Cordage is a leading Philippines manufacturer of ropes and cords, proudly 
                  crafting high-quality products since 1968. As a trusted global supplier, we 
                  offer an extensive range of stock products and bespoke technical rope 
                  solutions, employing innovative technologies to serve industries such as 
                  marine, defense, industrial, and arboriculture.
                </p>
                <p>
                  Our commitment to innovation and precision makes us the preferred choice 
                  for world-leading brands across multiple sectors.
                </p>
              </div>

              <Button 
                size="lg"
                className="bg-transparent border-2 border-navy-dark text-navy-dark hover:bg-navy-dark hover:text-white px-8 py-3 font-semibold transition-all rounded-full"
              >
                FIND OUT MORE →
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
