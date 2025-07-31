import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { Link } from "wouter";
import factoryImage from "/images/manila-cordage-factory-1924.jpg";


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
            <div className="relative h-96 lg:h-auto overflow-hidden rounded-l-2xl lg:rounded-l-2xl lg:rounded-r-none">
              <img 
                src={factoryImage} 
                alt="Manila Cordage factory in 1924"
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => {
                  console.error('Image failed to load:', e.target.src);
                  // Fallback to direct path
                  e.target.src = "/images/manila-cordage-factory-1924.jpg";
                }}
                onLoad={() => console.log('Image loaded successfully')}
              />
              <div className="absolute inset-0 bg-navy-dark bg-opacity-70 flex flex-col justify-end items-start p-8 lg:p-12">
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
                Leading Manufacturer of Ropes and Cords Since 1924
              </h2>
              
              <div className="space-y-4 mb-8 text-gray-600">
                <p>
                  Manila Cordage has been a trusted name in rope and cordage manufacturing in the Philippines since 1924. With decades of expertise, we produce a wide range of high-quality fiber ropes and cordage products, serving both domestic and international markets.
                </p>
                <p>
                  We specialize in both standard and custom-engineered solutions to meet the demands of diverse industries—including marine, industrial, agriculture, and defense. Our commitment to quality, reliability, and continuous innovation has earned us the confidence of partners and clients around the world.
                </p>
              </div>

              <Link href="/about/history">
                <Button 
                  size="lg"
                  className="bg-transparent border-2 border-navy-dark text-navy-dark hover:bg-navy-dark hover:text-white px-8 py-3 font-semibold transition-all rounded-full"
                >
                  FIND OUT MORE →
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
