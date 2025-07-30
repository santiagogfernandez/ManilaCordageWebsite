import { Trophy, Globe, Factory, Lightbulb, Link } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

export default function StatsSection() {
  const { t } = useLanguage();

  const stats = [
    {
      icon: Trophy,
      label: "+100 years experience"
    },
    {
      icon: Globe,
      label: "International exports"
    },
    {
      icon: Factory,
      label: "British manufacturer"
    },
    {
      icon: Link,
      label: "Industry leading quality"
    }
  ];

  return (
    <section className="bg-white border-t border-b border-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center gap-6 lg:gap-12 xl:gap-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="flex items-center space-x-3">
                <IconComponent className="h-8 w-8 text-accent-blue flex-shrink-0" />
                <span className="text-gray-700 font-medium text-sm lg:text-base whitespace-nowrap">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
