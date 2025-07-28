import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import skylineImage from "@assets/SkylineNew-a_1753734287907.jpg";
import nylineImage from "@assets/nyline-rope.jpg";

export default function BrandsSection() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const allBrands = [
    {
      id: 1,
      name: "Nyline",
      description: "Explore our range of premium Nylon rope technologies",
      buttonText: "Find Nylon ropes",
      imageUrl: nylineImage,
      buttonAction: () => console.log("Navigate to nylon ropes")
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
    },
    {
      id: 4,
      name: "Manila Premium® Natural Ropes",
      description: "Traditional manila fiber ropes crafted with decades of expertise for marine and industrial applications.",
      buttonText: "Find natural ropes",
      imageUrl: "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?w=400&h=250&fit=crop&crop=center",
      buttonAction: () => console.log("Navigate to natural ropes")
    },
    {
      id: 5,
      name: "Industrial Chain & Wire",
      description: "Heavy-duty chains and wire rope assemblies for construction and lifting applications.",
      buttonText: "View chain products",
      imageUrl: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=250&fit=crop&crop=center",
      buttonAction: () => console.log("Navigate to chains")
    },
    {
      id: 6,
      name: "Marine Solutions Pro",
      description: "Specialized marine rope systems designed for harsh oceanic conditions and commercial vessels.",
      buttonText: "Marine catalog",
      imageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=250&fit=crop&crop=center",
      buttonAction: () => console.log("Navigate to marine")
    },
    {
      id: 7,
      name: "Skyline",
      description: "Explore our range of Polypropylene Monofilament rope technologies",
      buttonText: "View Skyline products",
      imageUrl: skylineImage,
      buttonAction: () => console.log("Navigate to skyline")
    }
  ];

  const itemsPerPage = 3;
  const totalPages = Math.ceil(allBrands.length / itemsPerPage);

  const getCurrentBrands = () => {
    const startIndex = currentIndex * itemsPerPage;
    return allBrands.slice(startIndex, startIndex + itemsPerPage);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const brands = getCurrentBrands();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy-dark mb-4">
            Our global rope brands
          </h2>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="sm"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full w-12 h-12 p-0 border-navy-dark text-navy-dark hover:bg-navy-dark hover:text-white shadow-lg"
            onClick={goToPrevious}
            disabled={totalPages <= 1}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <Button
            variant="outline"
            size="sm"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full w-12 h-12 p-0 border-navy-dark text-navy-dark hover:bg-navy-dark hover:text-white shadow-lg"
            onClick={goToNext}
            disabled={totalPages <= 1}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Brand Cards Container */}
          <div className="mx-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-500 ease-in-out">
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

          {/* Page Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-navy-dark' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}