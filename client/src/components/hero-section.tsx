import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/use-language";

export default function HeroSection() {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(30, 41, 59, 0.7), rgba(30, 41, 59, 0.7)), url('https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&h=1200')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight hero-title">
          {t('hero.title')}
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 hero-subtitle">
          {t('hero.subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg"
            className="bg-accent-blue hover:bg-blue-600 text-white px-8 py-4 font-semibold transition-all transform hover:scale-105"
            onClick={() => scrollToSection('products')}
          >
            {t('hero.cta1')}
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-white hover:bg-white hover:text-navy-dark text-white px-8 py-4 font-semibold transition-all"
            onClick={() => scrollToSection('quote')}
          >
            {t('hero.cta2')}
          </Button>
        </div>
      </div>
    </section>
  );
}
