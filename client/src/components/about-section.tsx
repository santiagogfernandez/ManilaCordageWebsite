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
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-navy-dark mb-6">
                {t('about.title')}
              </h2>
              <p className="text-lg text-text-light mb-6">
                {t('about.description')}
              </p>
              
              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-accent-blue mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                size="lg"
                className="bg-navy-dark hover:bg-navy-light text-white px-8 py-4 font-semibold transition-all"
              >
                {t('about.cta')}
              </Button>
            </div>
            
            
          </div>
        </div>
      </div>
    </section>
  );
}
