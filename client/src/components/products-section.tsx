import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useLanguage } from "@/hooks/use-language";
import type { Product } from "@shared/schema";

export default function ProductsSection() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("all");

  const { data: products, isLoading } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });

  const filteredProducts = products?.filter(product => {
    if (activeFilter === "all") return true;
    if (activeFilter === "natural") return product.name.toLowerCase().includes("manila");
    if (activeFilter === "synthetic") return !product.name.toLowerCase().includes("manila");
    return false;
  }) || [];

  const filters = [
    { key: "all", label: "All Products" },
    { key: "natural", label: "Natural Fiber" },
    { key: "synthetic", label: "Synthetic Fiber" },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'marine': return 'bg-blue-100 text-blue-600';
      case 'industrial': return 'bg-green-100 text-green-600';
      case 'construction': return 'bg-red-100 text-red-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  const scrollToQuote = () => {
    const section = document.getElementById('quote');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="products" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy-dark mb-4">
            {t('products.title')}
          </h2>
          <p className="text-xl text-text-light max-w-3xl mx-auto">
            {t('products.subtitle')}
          </p>
        </div>

        {/* Product Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.key}
              variant={activeFilter === filter.key ? "default" : "outline"}
              className={`px-6 py-3 font-medium transition-all ${
                activeFilter === filter.key 
                  ? 'bg-accent-blue text-white hover:bg-blue-600' 
                  : 'bg-gray-200 text-navy-dark hover:bg-accent-blue hover:text-white'
              }`}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            Array.from({ length: 6 }).map((_, index) => (
              <Card key={index} className="overflow-hidden">
                <Skeleton className="h-64 w-full" />
                <CardContent className="p-6">
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-full mb-4" />
                  <div className="flex justify-between items-center mb-4">
                    <Skeleton className="h-6 w-20" />
                    <Skeleton className="h-6 w-16" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Skeleton className="h-10 w-full" />
                </CardFooter>
              </Card>
            ))
          ) : (
            filteredProducts.map((product) => (
              <Card 
                key={product.id} 
                className="product-card overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div 
                  className="h-64 bg-cover bg-center"
                  style={{ backgroundImage: `url(${product.imageUrl})` }}
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-navy-dark mb-2">
                    Manila Rope
                  </h3>
                  <p className="text-text-light mb-4">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center mb-4">
                    <Badge className="bg-green-100 text-green-600">
                      ISO Certified
                    </Badge>
                    <span className="text-lg font-bold text-navy-dark">
                      {product.diameterMin}-{product.diameterMax}mm
                    </span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full bg-accent-blue hover:bg-blue-600 text-white font-medium transition-all"
                    onClick={scrollToQuote}
                  >
                    {t('products.requestQuote')}
                  </Button>
                </CardFooter>
              </Card>
            ))
          )}
        </div>

        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-navy-dark mb-6">
            Need a custom solution?
          </h3>
          <Link href="/custom-quote">
            <Button 
              size="lg"
              className="bg-orange-accent hover:bg-orange-accent/90 text-white px-8 py-4 font-semibold transition-all"
            >
              Custom Quote
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
