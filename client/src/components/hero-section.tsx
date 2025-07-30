import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/use-language";
import { useLocation } from "wouter";
import ropeBackground from "@assets/sample-board-1ba_1753558988306.jpg";

export default function HeroSection() {
  const { t } = useLanguage();
  const [, setLocation] = useLocation();

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative h-[60vh] sm:h-[70vh] lg:h-[80vh] flex items-center justify-center text-white bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(30, 41, 59, 0.8), rgba(30, 41, 59, 0.8)), url(${ropeBackground})`
      }}
    >
      <div className="relative z-10 text-center max-w-4xl mx-auto container-padding safe-padding py-16 sm:py-20">
        <h1 className="responsive-heading font-bold mb-4 sm:mb-6 leading-tight hero-title">
          {t('hero.title')}
        </h1>
        <p className="responsive-body mb-6 sm:mb-8 text-gray-200 hero-subtitle max-w-3xl mx-auto">
          {t('hero.subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-md sm:max-w-none mx-auto">
          <Button 
            size="lg"
            className="hover:bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 font-semibold transition-all transform hover:scale-105 w-full sm:w-auto text-base sm:text-lg touch-button bg-[#006dd1]"
            onClick={() => setLocation('/products')}
          >
            {t('hero.cta1')}
          </Button>
          <Button 
            size="lg"
            className="hover:bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 font-semibold transition-all transform hover:scale-105 w-full sm:w-auto text-base sm:text-lg touch-button bg-[#006dd1]"
            onClick={() => scrollToSection('quote')}
          >
            {t('hero.cta2')}
          </Button>
        </div>
      </div>
    </section>
  );
}
