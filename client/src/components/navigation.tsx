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
    <header className="bg-white text-navy-dark sticky top-0 z-50 shadow-sm border-b border-gray-200">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center min-w-0 flex-shrink-0 mr-4 sm:mr-6 lg:mr-8">
            <img 
              src={logoImage} 
              alt="Manila Cordage Company" 
              className="h-8 sm:h-10 lg:h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation - Hidden on mobile and tablet */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6 flex-1 justify-end">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.id)}
                className="text-navy-dark hover:text-orange-accent transition-colors font-medium text-sm xl:text-base whitespace-nowrap"
              >
                {t(`nav.${item.key}`)}
              </button>
            ))}

            {/* Language Toggle */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="border-navy-dark text-navy-dark hover:bg-gray-50 text-sm">
                  <Globe className="h-4 w-4 mr-1 xl:mr-2" />
                  <span className="hidden xl:inline">{t('nav.language')}</span>
                  <span className="xl:hidden">Lang</span>
                  <ChevronDown className="h-4 w-4 ml-1 xl:ml-2" />
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

            {/* Get Quote Button */}
            <button
              onClick={() => scrollToSection('quote')}
              className="bg-orange-accent hover:bg-orange-accent/90 text-white px-3 xl:px-4 py-2 rounded-lg transition-colors font-medium text-sm xl:text-base whitespace-nowrap"
            >
              {t('nav.quote')}
            </button>
          </div>

          {/* Tablet Navigation - Show simplified version on tablet */}
          <div className="hidden md:flex lg:hidden items-center space-x-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="border-navy-dark text-navy-dark hover:bg-gray-50 text-sm">
                  <Globe className="h-4 w-4 mr-1" />
                  Lang
                  <ChevronDown className="h-4 w-4 ml-1" />
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

            <button
              onClick={() => scrollToSection('quote')}
              className="bg-orange-accent hover:bg-orange-accent/90 text-white px-3 py-2 rounded-lg transition-colors font-medium text-sm"
            >
              Quote
            </button>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-navy-dark">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-white border-gray-200 w-80">
                <div className="flex flex-col space-y-4 mt-8">
                  <h2 className="text-lg font-semibold text-navy-dark mb-4">Navigation</h2>
                  {navItems.map((item) => (
                    <button
                      key={item.key}
                      onClick={() => scrollToSection(item.id)}
                      className="text-navy-dark hover:text-orange-accent transition-colors text-left py-2 text-base font-medium"
                    >
                      {t(`nav.${item.key}`)}
                    </button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Mobile Menu - Show on mobile only */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={() => scrollToSection('quote')}
              className="bg-orange-accent hover:bg-orange-accent/90 text-white px-3 py-1.5 rounded-md transition-colors font-medium text-xs"
            >
              Quote
            </button>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-navy-dark">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-white border-gray-200">
                <div className="flex flex-col space-y-4 mt-8">
                  <h2 className="text-lg font-semibold text-navy-dark mb-4">Menu</h2>
                  {navItems.map((item) => (
                    <button
                      key={item.key}
                      onClick={() => scrollToSection(item.id)}
                      className="text-navy-dark hover:text-orange-accent transition-colors text-left py-3 text-base font-medium border-b border-gray-100 last:border-b-0"
                    >
                      {t(`nav.${item.key}`)}
                    </button>
                  ))}
                  
                  <div className="pt-4 mt-4 border-t border-gray-200">
                    <p className="text-navy-dark font-medium mb-3">Language / Idioma</p>
                    <div className="space-y-2">
                      <button
                        onClick={() => setLanguage('en')}
                        className={`block py-2 text-left w-full transition-colors ${
                          language === 'en' 
                            ? 'text-orange-accent font-medium' 
                            : 'text-navy-dark hover:text-orange-accent'
                        }`}
                      >
                        English
                      </button>
                      <button
                        onClick={() => setLanguage('es')}
                        className={`block py-2 text-left w-full transition-colors ${
                          language === 'es' 
                            ? 'text-orange-accent font-medium' 
                            : 'text-navy-dark hover:text-orange-accent'
                        }`}
                      >
                        Español
                      </button>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={() => scrollToSection('quote')}
                      className="w-full bg-orange-accent hover:bg-orange-accent/90 text-white px-4 py-3 rounded-lg transition-colors font-medium"
                    >
                      {t('nav.quote')}
                    </button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
