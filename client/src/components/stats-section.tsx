import { Factory, Globe, Settings, Building2 } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

export default function StatsSection() {
  const { t } = useLanguage();

  const stats = [
    {
      icon: Factory,
      number: "100+",
      label: t('stats.years')
    },
    {
      icon: Globe,
      number: "50+",
      label: t('stats.countries')
    },
    {
      icon: Settings,
      number: "200+",
      label: t('stats.products')
    },
    {
      icon: Building2,
      number: "USA",
      label: t('stats.certified')
    }
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center">
                <div className="flex items-center justify-center mb-4">
                  <IconComponent className="h-12 w-12 text-accent-blue" />
                </div>
                
                <p className="text-text-light text-center">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
