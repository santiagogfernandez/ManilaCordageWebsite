import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menu, Anchor, Globe, ChevronDown } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import logoImage from "@assets/MCC-Logos-1a_1753554774356.gif";

export default function Navigation() {
  const { language, setLanguage, t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { key: 'home', id: 'home' },
    { key: 'products', id: 'products' },
    { key: 'about', id: 'about' },
    { key: 'resources', id: 'resources' },
    { key: 'contact', id: 'contact' },
  ];

  return (
    <header className="bg-navy-dark text-white sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src={logoImage} 
              alt="Manila Cordage Company" 
              className="h-8 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.id)}
                className="hover:text-accent-blue transition-colors"
              >
                {t(`nav.${item.key}`)}
              </button>
            ))}

            {/* Language Toggle */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="bg-navy-light border-navy-light hover:bg-opacity-80 text-white">
                  <Globe className="h-4 w-4 mr-2" />
                  {t('nav.language')}
                  <ChevronDown className="h-4 w-4 ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setLanguage('en')}>
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('es')}>
                  Español
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-navy-dark border-navy-light">
              <div className="flex flex-col space-y-6 mt-8">
                {navItems.map((item) => (
                  <button
                    key={item.key}
                    onClick={() => scrollToSection(item.id)}
                    className="text-white hover:text-accent-blue transition-colors text-left"
                  >
                    {t(`nav.${item.key}`)}
                  </button>
                ))}
                <div className="pt-4 border-t border-navy-light">
                  <p className="text-white mb-4">Language / Idioma</p>
                  <button
                    onClick={() => setLanguage('en')}
                    className={`block py-2 text-left w-full ${language === 'en' ? 'text-accent-blue' : 'text-white hover:text-accent-blue'}`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => setLanguage('es')}
                    className={`block py-2 text-left w-full ${language === 'es' ? 'text-accent-blue' : 'text-white hover:text-accent-blue'}`}
                  >
                    Español
                  </button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
