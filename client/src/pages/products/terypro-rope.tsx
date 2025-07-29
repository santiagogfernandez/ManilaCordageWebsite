import { useEffect } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ChatWidget from "@/components/chat-widget";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { ArrowLeft, Atom, Shield, Zap, Gauge } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

export default function TeryproRope() {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = "Terypro Rope - Advanced Polyester Compounds | Manila Cordage";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Terypro advanced polyester compound rope with superior chemical resistance and thermal stability. Engineered for demanding industrial applications.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Terypro advanced polyester compound rope with superior chemical resistance and thermal stability. Engineered for demanding industrial applications.';
      document.head.appendChild(meta);
    }
  }, []);

  const features = [
    { icon: Atom, title: "Advanced Compounds", description: "Proprietary polyester formulations for enhanced performance" },
    { icon: Shield, title: "Chemical Resistant", description: "Superior resistance to acids, alkalis, and solvents" },
    { icon: Gauge, title: "Thermal Stability", description: "Maintains properties across wide temperature ranges" },
    { icon: Zap, title: "High Performance", description: "Engineered for demanding industrial environments" }
  ];

  const specifications = [
    { property: "Material", value: "Advanced Polyester Compounds" },
    { property: "Diameter Range", value: "6mm - 40mm" },
    { property: "Breaking Strength", value: "Up to 16,000 lbs" },
    { property: "Operating Temperature", value: "-40°C to +150°C" },
    { property: "Chemical Resistance", value: "Excellent" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-red-50 to-pink-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-6">
                <Link href="/products" className="flex items-center text-navy-dark hover:text-orange-accent transition-colors mr-4">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Products
                </Link>
                <Badge className="bg-red-100 text-red-800">Advanced Technology</Badge>
              </div>
              
              <h1 className="text-5xl font-bold text-navy-dark mb-6">Terypro Rope</h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Advanced polyester compound rope engineered for extreme conditions. 
                Where standard ropes fail, Terypro delivers uncompromising performance and reliability.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-orange-accent hover:bg-orange-accent/90 text-white px-8 py-4">
                    Request Quote
                  </Button>
                </Link>
                <Link href="/custom-quote">
                  <Button size="lg" variant="outline" className="border-navy-dark text-navy-dark hover:bg-navy-dark hover:text-white px-8 py-4">
                    Custom Specifications
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
              <h2 className="text-3xl font-bold text-navy-dark text-center mb-12">Terypro Technology</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <feature.icon className="h-12 w-12 text-red-600 mx-auto mb-4" />
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
              <h2 className="text-3xl font-bold text-navy-dark text-center mb-12">Extreme Environment Applications</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-navy-dark mb-4">Chemical Processing</h3>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Chemical plant operations</li>
                      <li>• Corrosive environment handling</li>
                      <li>• Laboratory applications</li>
                      <li>• Pharmaceutical manufacturing</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-navy-dark mb-4">High-Temperature Industries</h3>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Furnace and kiln operations</li>
                      <li>• Metal processing plants</li>
                      <li>• Glass manufacturing</li>
                      <li>• Power generation facilities</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-navy-dark mb-4">Specialized Industries</h3>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Oil and gas operations</li>
                      <li>• Nuclear facilities</li>
                      <li>• Aerospace applications</li>
                      <li>• Research and testing</li>
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
              <h2 className="text-3xl font-bold text-white mb-6">Engineered for Excellence</h2>
              <p className="text-gray-300 text-lg mb-8">
                Trust Terypro rope for your most challenging applications. Advanced technology meets proven performance.
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