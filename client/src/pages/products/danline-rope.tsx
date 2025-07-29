import { useEffect } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ChatWidget from "@/components/chat-widget";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { ArrowLeft, Anchor, Waves, Shield, Zap } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

export default function DanlineRope() {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = "Danline Rope - Premium Polypropylene Marine Rope | Manila Cordage";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Danline premium polypropylene marine rope. Excellent water resistance, lightweight design, and superior performance for marine applications.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Danline premium polypropylene marine rope. Excellent water resistance, lightweight design, and superior performance for marine applications.';
      document.head.appendChild(meta);
    }
  }, []);

  const features = [
    { icon: Waves, title: "Floats on Water", description: "Natural buoyancy ideal for marine applications" },
    { icon: Anchor, title: "Marine Grade", description: "Specifically designed for saltwater environments" },
    { icon: Shield, title: "Chemical Resistant", description: "Excellent resistance to oils, acids, and alkalis" },
    { icon: Zap, title: "Low Stretch", description: "Minimal elongation under load for precise control" }
  ];

  const specifications = [
    { property: "Material", value: "High-Strength Polypropylene" },
    { property: "Diameter Range", value: "8mm - 48mm" },
    { property: "Breaking Strength", value: "Up to 12,000 lbs" },
    { property: "Specific Gravity", value: "0.91 (Floats)" },
    { property: "Stretch", value: "3-8%" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-50 to-cyan-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-6">
                <Link href="/products" className="flex items-center text-navy-dark hover:text-orange-accent transition-colors mr-4">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Products
                </Link>
                <Badge className="bg-cyan-100 text-cyan-800">Marine Grade</Badge>
              </div>
              
              <h1 className="text-5xl font-bold text-navy-dark mb-6">Danline Rope</h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Premium polypropylene marine rope engineered for superior water performance. 
                Lightweight, buoyant, and built to withstand the harshest marine environments.
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
              <h2 className="text-3xl font-bold text-navy-dark text-center mb-12">Danline Marine Performance</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <feature.icon className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
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
              <h2 className="text-3xl font-bold text-navy-dark text-center mb-12">Marine Applications</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-navy-dark mb-4">Commercial Marine</h3>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Ship mooring lines</li>
                      <li>• Cargo securing systems</li>
                      <li>• Fishing vessel rigging</li>
                      <li>• Harbor operations</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-navy-dark mb-4">Recreational Boating</h3>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Dock lines and springs</li>
                      <li>• Anchor lines</li>
                      <li>• Fender lines</li>
                      <li>• Safety equipment</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-navy-dark mb-4">Water Sports & Safety</h3>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Water skiing tow ropes</li>
                      <li>• Pool lane dividers</li>
                      <li>• Lifeguard rescue lines</li>
                      <li>• Marina installations</li>
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
              <h2 className="text-3xl font-bold text-white mb-6">Set Sail with Danline Quality</h2>
              <p className="text-gray-300 text-lg mb-8">
                Trust Danline rope for all your marine applications. Proven performance on the water.
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