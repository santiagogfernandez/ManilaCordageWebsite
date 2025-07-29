import { useEffect } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ChatWidget from "@/components/chat-widget";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { ArrowLeft, Sparkles, Shield, Zap, Droplets } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

export default function EsterlineRope() {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = "Esterline Rope - Premium Polyester Rope | Manila Cordage";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Esterline premium polyester rope with low stretch, high strength, and excellent UV resistance. Ideal for marine and industrial applications.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Esterline premium polyester rope with low stretch, high strength, and excellent UV resistance. Ideal for marine and industrial applications.';
      document.head.appendChild(meta);
    }
  }, []);

  const features = [
    { icon: Sparkles, title: "Low Stretch", description: "Minimal elongation under load for precise control" },
    { icon: Shield, title: "UV Resistant", description: "Superior resistance to ultraviolet degradation" },
    { icon: Droplets, title: "Hydrophobic", description: "Low water absorption maintains strength when wet" },
    { icon: Zap, title: "High Strength", description: "Excellent strength-to-weight ratio" }
  ];

  const specifications = [
    { property: "Material", value: "High-Tenacity Polyester" },
    { property: "Diameter Range", value: "8mm - 50mm" },
    { property: "Breaking Strength", value: "Up to 18,000 lbs" },
    { property: "Stretch", value: "3-10%" },
    { property: "Water Absorption", value: "<1%" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-emerald-50 to-teal-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-6">
                <Link href="/products" className="flex items-center text-navy-dark hover:text-orange-accent transition-colors mr-4">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Products
                </Link>
                <Badge className="bg-emerald-100 text-emerald-800">Premium Quality</Badge>
              </div>
              
              <h1 className="text-5xl font-bold text-navy-dark mb-6">Esterline Rope</h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Premium polyester rope engineered for superior performance and longevity. 
                Combining low stretch characteristics with exceptional strength and UV resistance.
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
              <h2 className="text-3xl font-bold text-navy-dark text-center mb-12">Esterline Advantages</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <feature.icon className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
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
              <h2 className="text-3xl font-bold text-navy-dark text-center mb-12">Professional Applications</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-navy-dark mb-4">Marine & Sailing</h3>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Running rigging and sheets</li>
                      <li>• Halyard and control lines</li>
                      <li>• Yacht and sailboat rigging</li>
                      <li>• Racing and performance sailing</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-navy-dark mb-4">Industrial & Commercial</h3>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Precision lifting operations</li>
                      <li>• Cargo and load control</li>
                      <li>• Architectural tensioning</li>
                      <li>• Construction applications</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-navy-dark mb-4">Specialty & Technical</h3>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Scientific research equipment</li>
                      <li>• Precision measurement systems</li>
                      <li>• Antenna and communication towers</li>
                      <li>• Aerospace applications</li>
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
              <h2 className="text-3xl font-bold text-white mb-6">Choose Esterline Precision</h2>
              <p className="text-gray-300 text-lg mb-8">
                Experience the reliability of Esterline polyester rope. Where precision and performance matter.
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