import { Factory, Globe, Settings, Award } from "lucide-react";
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
      icon: Award,
      number: "ISO",
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
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <IconComponent className="h-12 w-12 text-accent-blue mb-4 mx-auto" />
                <h3 className="text-3xl font-bold text-navy-dark mb-2">{stat.number}</h3>
                <p className="text-text-light">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
