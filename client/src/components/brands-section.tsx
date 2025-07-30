import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { Link } from "wouter";
import skylineImage from "@assets/SkylineNew-a_1753734287907.jpg";
import nylineImage from "@assets/nyline-rope.jpg";

export default function BrandsSection() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const allBrands = [
    {
      id: 1,
      name: "Manila",
      description: "Explore our range of Manila rope technologies",
      buttonText: "View Manila ropes",
      imageUrl: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=250&fit=crop&crop=center",
      buttonPath: "/products/manila-rope"
    },
    {
      id: 2,
      name: "Skyline",
      description: "Ultra‑Light, UV‑Stable Polypropylene Rope Built for the Elements",
      buttonText: "View Skyline ropes",
      imageUrl: skylineImage,
      buttonPath: "/products/skyline-rope"
    },
    {
      id: 3,
      name: "Danline",
      description: "Explore our range of Polypropylene Danline rope technologies",
      buttonText: "View Danline ropes",
      imageUrl: "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?w=400&h=250&fit=crop&crop=center",
      buttonPath: "/products/danline-rope"
    },
    {
      id: 4,
      name: "Nyline",
      description: "Explore our range of premium Nylon rope technologies",
      buttonText: "View Nyline ropes",
      imageUrl: nylineImage,
      buttonPath: "/products/nyline-rope"
    },
    {
      id: 5,
      name: "Esterline",
      description: "Explore our range of Polyester rope technologies",
      buttonText: "View Esterline ropes",
      imageUrl: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=250&fit=crop&crop=center",
      buttonPath: "/products/esterline-rope"
    },
    {
      id: 6,
      name: "Terypro",
      description: "Explore our Polyester Compound Technologies",
      buttonText: "View Terypro ropes",
      imageUrl: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=250&fit=crop&crop=center",
      buttonPath: "/products/terypro-rope"
    }
  ];

  const itemsPerPage = 3;
  const totalItems = allBrands.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const getCurrentBrands = () => {
    const startIndex = currentIndex;
    return allBrands.slice(startIndex, startIndex + itemsPerPage);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalItems - itemsPerPage : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev >= totalItems - itemsPerPage ? 0 : prev + 1));
  };

  const brands = getCurrentBrands();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy-dark mb-4">
            Premium Materials, Expertly Crafted
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">Manila Cordage uses top-quality natural and synthetic rope materials to ensure exceptional strength and durability. Discover our advanced rope and cord solutions and explore how our craftsmanship meets your needs.</p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="sm"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full w-12 h-12 p-0 border-navy-dark text-navy-dark hover:bg-navy-dark hover:text-white shadow-lg"
            onClick={goToPrevious}
            disabled={totalItems <= itemsPerPage}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <Button
            variant="outline"
            size="sm"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full w-12 h-12 p-0 border-navy-dark text-navy-dark hover:bg-navy-dark hover:text-white shadow-lg"
            onClick={goToNext}
            disabled={totalItems <= itemsPerPage}
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
                    <Link href={brand.buttonPath}>
                      <Button 
                        variant="outline"
                        className="border-navy-dark text-navy-dark hover:bg-navy-dark hover:text-white font-medium px-6 py-2 rounded-full transition-all duration-300"
                      >
                        {brand.buttonText}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Page Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalItems - itemsPerPage + 1 }).map((_, index) => (
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

          {/* View All Products Button */}
          <div className="flex justify-center mt-8">
            <Link href="/products">
              <Button 
                size="lg"
                className="bg-accent-blue hover:bg-blue-600 text-white px-8 py-3 font-semibold transition-all duration-300 rounded-lg"
              >
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}