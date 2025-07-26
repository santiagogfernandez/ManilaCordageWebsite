import { Anchor, Facebook, Linkedin, Youtube, Instagram, MapPin, Phone, Mail } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import logoImage from "@assets/MCC-Logos-1a_1753554774356.gif";

export default function Footer() {
  const { t } = useLanguage();

  const productLinks = [
    "Manila Rope",
    "Synthetic Rope", 
    "Steel Wire Rope",
    "Marine Rope",
    "Industrial Rope"
  ];

  const companyLinks = [
    { key: 'aboutUs', label: t('footer.aboutUs') },
    { key: 'careers', label: t('footer.careers') },
    { key: 'news', label: t('footer.news') },
    { key: 'contact', label: t('footer.contact') },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Youtube, href: "#" },
    { icon: Instagram, href: "#" },
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-navy-dark text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <img 
                src={logoImage} 
                alt="Manila Cordage Company" 
                className="h-8 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-4">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a 
                    key={index}
                    href={social.href} 
                    className="text-gray-300 hover:text-accent-blue transition-colors"
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
          
          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-6">
              {t('footer.products')}
            </h3>
            <ul className="space-y-3">
              {productLinks.map((product, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-accent-blue transition-colors">
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">
              {t('footer.company')}
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.key}>
                  <button 
                    onClick={() => link.key === 'contact' ? scrollToSection('contact') : undefined}
                    className="text-gray-300 hover:text-accent-blue transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div id="contact">
            <h3 className="text-lg font-semibold mb-6">
              {t('footer.contactInfo')}
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent-blue flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  123 Industrial Blvd<br />
                  Manila, Philippines 1000
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent-blue" />
                <span className="text-gray-300">+63 2 1234 5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent-blue" />
                <span className="text-gray-300">info@manilacordage.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-navy-light mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            {t('footer.copyright')}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-300 hover:text-accent-blue text-sm transition-colors">
              {t('footer.privacy')}
            </a>
            <a href="#" className="text-gray-300 hover:text-accent-blue text-sm transition-colors">
              {t('footer.terms')}
            </a>
            <a href="#" className="text-gray-300 hover:text-accent-blue text-sm transition-colors">
              {t('footer.sitemap')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
