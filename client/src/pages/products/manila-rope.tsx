import { useEffect } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ChatWidget from "@/components/chat-widget";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { ArrowLeft, Anchor, Shield, Award, Zap } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

export default function ManilaRope() {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = "Manila Rope - Premium Natural Fiber Rope | Manila Cordage";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover our premium Manila rope collection. Traditional natural fiber rope with superior strength and durability for marine and industrial applications.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Discover our premium Manila rope collection. Traditional natural fiber rope with superior strength and durability for marine and industrial applications.';
      document.head.appendChild(meta);
    }
  }, []);

  const features = [
    { icon: Shield, title: "Natural Strength", description: "Traditional abaca fiber provides exceptional tensile strength" },
    { icon: Anchor, title: "Marine Grade", description: "Excellent resistance to saltwater and UV exposure" },
    { icon: Award, title: "Premium Quality", description: "Hand-selected fibers processed with precision craftsmanship" },
    { icon: Zap, title: "Versatile Use", description: "Perfect for marine, decorative, and industrial applications" }
  ];

  const specifications = [
    { property: "Material", value: "100% Natural Abaca Fiber" },
    { property: "Diameter Range", value: "6mm - 64mm" },
    { property: "Breaking Strength", value: "Up to 15,000 lbs" },
    { property: "Stretch", value: "15-20%" },
    { property: "Applications", value: "Marine, Industrial, Decorative" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-amber-50 to-orange-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-6">
                <Link href="/products" className="flex items-center text-navy-dark hover:text-orange-accent transition-colors mr-4">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Products
                </Link>
                <Badge className="bg-amber-100 text-amber-800">Natural Fiber</Badge>
              </div>
              
              <h1 className="text-5xl font-bold text-navy-dark mb-6">Manila Rope</h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Our premium Manila rope is crafted from the finest abaca fibers, delivering the traditional strength 
                and reliability that has made Manila rope the gold standard for over a century.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-orange-accent hover:bg-orange-accent/90 text-white px-8 py-4">
                    Request Quote
                  </Button>
                </Link>

              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-navy-dark text-center mb-12">Why Choose Manila Rope?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <feature.icon className="h-12 w-12 text-orange-accent mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-navy-dark mb-2">{feature.title}</h3>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Specifications Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-navy-dark text-center mb-12">Technical Specifications</h2>
              
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {specifications.map((spec, index) => (
                      <div key={index} className="flex justify-between items-center py-3 border-b border-gray-200">
                        <span className="font-medium text-navy-dark">{spec.property}:</span>
                        <span className="text-gray-700">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-navy-dark text-center mb-12">Common Applications</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-navy-dark mb-4">Marine & Nautical</h3>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Ship rigging and mooring</li>
                      <li>• Dock lines and fenders</li>
                      <li>• Traditional sailing applications</li>
                      <li>• Decorative nautical elements</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-navy-dark mb-4">Industrial & Construction</h3>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Heavy lifting operations</li>
                      <li>• Construction site safety</li>
                      <li>• Agricultural applications</li>
                      <li>• General purpose rope work</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-navy-dark mb-4">Decorative & Specialty</h3>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Architectural accents</li>
                      <li>• Theme park installations</li>
                      <li>• Fitness and gym equipment</li>
                      <li>• Craft and hobby projects</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-navy-dark py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Order Manila Rope?</h2>
              <p className="text-gray-300 text-lg mb-8">
                Contact our experts for custom specifications, bulk pricing, and technical support.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-orange-accent hover:bg-orange-accent/90 text-white px-8 py-4">
                    Get Quote Now
                  </Button>
                </Link>
                <Link href="/products">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-navy-dark px-8 py-4">
                    View All Products
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <ChatWidget />
    </div>
  );
}