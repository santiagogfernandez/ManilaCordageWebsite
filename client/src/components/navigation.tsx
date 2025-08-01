import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menu, Anchor, Globe, ChevronDown } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { Link, useLocation } from "wouter";
import logoImage from "@assets/MCC-Logos-1a_1753554774356.gif";

export default function Navigation() {
  const { language, setLanguage, t } = useLanguage();
  const [location] = useLocation();

  const navItems = [
    { key: 'products', path: '/products' },
    { key: 'resources', path: '/resources' },
  ];

  const aboutSubItems = [
    { key: 'history', path: '/about/history', label: t('nav.history') },
    { key: 'team', path: '/about/team', label: t('nav.team') },
    { key: 'careers', path: '/about/careers', label: t('nav.careers') },
  ];

  const productSubItems = [
    { key: 'manila', label: 'Manila Rope', path: '/products/manila-rope' },
    { key: 'skyline', label: 'Skyline Rope', path: '/products/skyline-rope' },
    { key: 'danline', label: 'Danline Rope', path: '/products/danline-rope' },
    { key: 'nyline', label: 'Nyline Rope', path: '/products/nyline-rope' },
    { key: 'esterline', label: 'Esterline Rope', path: '/products/esterline-rope' },
    { key: 'terypro', label: 'Terypro Rope', path: '/products/terypro-rope' }
  ];

  return (
    <header className="bg-white text-navy-dark sticky top-0 z-50 shadow-sm border-b border-gray-200">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center min-w-0 flex-shrink-0 mr-4 sm:mr-6 lg:mr-8">
            <img 
              src={logoImage} 
              alt="Manila Cordage Company" 
              className="h-8 sm:h-10 lg:h-12 w-auto hover:opacity-80 transition-opacity"
            />
          </Link>

          {/* Desktop Navigation - Hidden on mobile and tablet */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6 flex-1 justify-end">
            {navItems.map((item) => {
              if (item.key === 'products') {
                return (
                  <DropdownMenu key={item.key}>
                    <DropdownMenuTrigger asChild>
                      <Button 
                        variant="ghost" 
                        className={`text-navy-dark hover:text-orange-accent transition-colors font-medium text-sm xl:text-base whitespace-nowrap p-0 h-auto ${
                          location.startsWith('/products') ? 'text-orange-accent' : ''
                        }`}
                      >
                        {t(`nav.${item.key}`)}
                        <ChevronDown className="h-4 w-4 ml-1" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem asChild>
                        <Link
                          href="/products"
                          className={`w-full cursor-pointer ${
                            location === '/products' ? 'text-orange-accent' : ''
                          }`}
                        >
                          All Products
                        </Link>
                      </DropdownMenuItem>
                      {productSubItems.map((subItem) => (
                        <DropdownMenuItem key={subItem.key} asChild>
                          <Link
                            href={subItem.path}
                            className={`w-full cursor-pointer ${
                              location === subItem.path ? 'text-orange-accent' : ''
                            }`}
                          >
                            {subItem.label}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                );
              }
              return (
                <Link
                  key={item.key}
                  href={item.path}
                  className={`text-navy-dark hover:text-orange-accent transition-colors font-medium text-sm xl:text-base whitespace-nowrap ${
                    location === item.path ? 'text-orange-accent' : ''
                  }`}
                >
                  {t(`nav.${item.key}`)}
                </Link>
              );
            })}

            {/* About Us Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  className={`text-navy-dark hover:text-orange-accent transition-colors font-medium text-sm xl:text-base whitespace-nowrap p-0 h-auto ${
                    location.startsWith('/about') ? 'text-orange-accent' : ''
                  }`}
                >
                  {t('nav.about')}
                  <ChevronDown className="h-4 w-4 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {aboutSubItems.map((subItem) => (
                  <DropdownMenuItem key={subItem.key} asChild>
                    <Link
                      href={subItem.path}
                      className={`w-full cursor-pointer ${
                        location === subItem.path ? 'text-orange-accent' : ''
                      }`}
                    >
                      {subItem.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Language Toggle */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="border-navy-dark text-navy-dark hover:bg-gray-50 text-sm">
                  <span className="text-lg">{language === 'en' ? '🇺🇸' : '🇵🇭'}</span>
                  <ChevronDown className="h-4 w-4 ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setLanguage('en')} className="flex items-center space-x-2">
                  <span className="text-lg">🇺🇸</span>
                  <span>English</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('fil')} className="flex items-center space-x-2">
                  <span className="text-lg">🇵🇭</span>
                  <span>Filipino</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Get Quote Button */}
            <Link
              href="/quote"
              className="hover:bg-blue-600 text-white px-3 xl:px-4 py-2 rounded-lg transition-colors font-medium text-sm xl:text-base whitespace-nowrap bg-[#006fd3]"
            >
              {t('nav.quote')}
            </Link>
          </div>

          {/* Tablet Navigation - Show simplified version on tablet */}
          <div className="hidden md:flex lg:hidden items-center space-x-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="border-navy-dark text-navy-dark hover:bg-gray-50 text-sm">
                  <span className="text-lg">{language === 'en' ? '🇺🇸' : '🇵🇭'}</span>
                  <ChevronDown className="h-4 w-4 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setLanguage('en')} className="flex items-center space-x-2">
                  <span className="text-lg">🇺🇸</span>
                  <span>English</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('fil')} className="flex items-center space-x-2">
                  <span className="text-lg">🇵🇭</span>
                  <span>Filipino</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-navy-dark">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-white border-gray-200 w-80">
                <div className="flex flex-col space-y-4 mt-8">
                  <h2 className="text-lg font-semibold text-navy-dark mb-4">Navigation</h2>
                  {navItems.map((item) => {
                    if (item.key === 'products') {
                      return (
                        <div key={item.key}>
                          <Link
                            href={item.path}
                            className={`text-navy-dark hover:text-orange-accent transition-colors text-left py-2 text-base font-medium block ${
                              location === item.path ? 'text-orange-accent' : ''
                            }`}
                          >
                            {t(`nav.${item.key}`)}
                          </Link>
                          <div className="space-y-1 pl-4 mt-2">
                            {productSubItems.map((subItem) => (
                              <Link
                                key={subItem.key}
                                href={subItem.path}
                                className={`text-navy-dark hover:text-orange-accent transition-colors text-left py-1 text-sm font-medium block ${
                                  location === subItem.path ? 'text-orange-accent' : ''
                                }`}
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      );
                    }
                    return (
                      <Link
                        key={item.key}
                        href={item.path}
                        className={`text-navy-dark hover:text-orange-accent transition-colors text-left py-2 text-base font-medium ${
                          location === item.path ? 'text-orange-accent' : ''
                        }`}
                      >
                        {t(`nav.${item.key}`)}
                      </Link>
                    );
                  })}
                  
                  {/* About Us Section */}
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-navy-dark font-semibold mb-3">{t('nav.about')}</p>
                    <div className="space-y-2 pl-4">
                      {aboutSubItems.map((subItem) => (
                        <Link
                          key={subItem.key}
                          href={subItem.path}
                          className={`text-navy-dark hover:text-orange-accent transition-colors text-left py-1 text-sm font-medium block ${
                            location === subItem.path ? 'text-orange-accent' : ''
                          }`}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Mobile Menu - Show on mobile only */}
          <div className="flex md:hidden items-center space-x-2">
            <Link
              href="/quote"
              className="bg-accent-blue hover:bg-blue-600 text-white px-3 py-1.5 rounded-md transition-colors font-medium text-xs"
            >
              Quote
            </Link>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-navy-dark">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-white border-gray-200">
                <div className="flex flex-col space-y-4 mt-8">
                  <h2 className="text-lg font-semibold text-navy-dark mb-4">Menu</h2>
                  {navItems.map((item) => {
                    if (item.key === 'products') {
                      return (
                        <div key={item.key} className="border-b border-gray-100">
                          <Link
                            href={item.path}
                            className={`text-navy-dark hover:text-orange-accent transition-colors text-left py-3 text-base font-medium block ${
                              location === item.path ? 'text-orange-accent' : ''
                            }`}
                          >
                            {t(`nav.${item.key}`)}
                          </Link>
                          <div className="pl-4 pb-2">
                            {productSubItems.map((subItem) => (
                              <Link
                                key={subItem.key}
                                href={subItem.path}
                                className={`text-navy-dark hover:text-orange-accent transition-colors text-left py-2 text-sm font-medium block ${
                                  location === subItem.path ? 'text-orange-accent' : ''
                                }`}
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      );
                    }
                    return (
                      <Link
                        key={item.key}
                        href={item.path}
                        className={`text-navy-dark hover:text-orange-accent transition-colors text-left py-3 text-base font-medium border-b border-gray-100 block ${
                          location === item.path ? 'text-orange-accent' : ''
                        }`}
                      >
                        {t(`nav.${item.key}`)}
                      </Link>
                    );
                  })}
                  
                  {/* About Us Section */}
                  <div className="border-b border-gray-100">
                    <p className="text-navy-dark font-semibold py-3 text-base">{t('nav.about')}</p>
                    <div className="pl-4 pb-2">
                      {aboutSubItems.map((subItem) => (
                        <Link
                          key={subItem.key}
                          href={subItem.path}
                          className={`text-navy-dark hover:text-orange-accent transition-colors text-left py-2 text-sm font-medium block ${
                            location === subItem.path ? 'text-orange-accent' : ''
                          }`}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-4 mt-4 border-t border-gray-200">
                    <p className="text-navy-dark font-medium mb-3">Language / Wika</p>
                    <div className="space-y-2">
                      <button
                        onClick={() => setLanguage('en')}
                        className={`flex items-center space-x-2 py-2 text-left w-full transition-colors ${
                          language === 'en' 
                            ? 'text-orange-accent font-medium' 
                            : 'text-navy-dark hover:text-orange-accent'
                        }`}
                      >
                        <span className="text-lg">🇺🇸</span>
                        <span>English</span>
                      </button>
                      <button
                        onClick={() => setLanguage('fil')}
                        className={`flex items-center space-x-2 py-2 text-left w-full transition-colors ${
                          language === 'fil' 
                            ? 'text-orange-accent font-medium' 
                            : 'text-navy-dark hover:text-orange-accent'
                        }`}
                      >
                        <span className="text-lg">🇵🇭</span>
                        <span>Filipino</span>
                      </button>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Link
                      href="/contact"
                      className="w-full bg-accent-blue hover:bg-blue-600 text-white px-4 py-3 rounded-lg transition-colors font-medium block text-center"
                    >
                      {t('nav.quote')}
                    </Link>
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
