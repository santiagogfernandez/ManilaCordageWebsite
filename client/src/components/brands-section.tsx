import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/hooks/use-language";

export default function BrandsSection() {
  const { t } = useLanguage();

  const brands = [
    {
      id: 1,
      name: "Bridon® Steel Wire Ropes",
      description: "Explore our range of Bridon steel wire ropes & hybrid steel rope technologies.",
      buttonText: "Find a steel rope",
      imageUrl: "https://images.unsplash.com/photo-1520637836862-4d197d17c55a?w=400&h=250&fit=crop&crop=center",
      buttonAction: () => console.log("Navigate to steel ropes")
    },
    {
      id: 2,
      name: "Bexco® Synthetic Fibre Ropes",
      description: "Explore our innovative synthetic fibre rope solutions.",
      buttonText: "Find a Synthetic Rope",
      imageUrl: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=250&fit=crop&crop=center",
      buttonAction: () => console.log("Navigate to synthetic ropes")
    },
    {
      id: 3,
      name: "Ropes 360®",
      description: "Our innovative services offerings ensure your ropes are fit for purpose and safe for in-service use.",
      buttonText: "Explore our services",
      imageUrl: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=250&fit=crop&crop=center",
      buttonAction: () => console.log("Navigate to services")
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy-dark mb-4">
            Our global rope brands
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {brands.map((brand) => (
            <Card key={brand.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div 
                className="h-64 bg-cover bg-center"
                style={{ backgroundImage: `url(${brand.imageUrl})` }}
              />
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-navy-dark mb-4">
                  {brand.name}
                </h3>
                <p className="text-text-light mb-6 leading-relaxed">
                  {brand.description}
                </p>
                <Button 
                  variant="outline"
                  className="border-navy-dark text-navy-dark hover:bg-navy-dark hover:text-white font-medium px-6 py-2 rounded-full transition-all duration-300"
                  onClick={brand.buttonAction}
                >
                  {brand.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}