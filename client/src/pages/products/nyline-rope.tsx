import { useEffect } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ChatWidget from "@/components/chat-widget";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { ArrowLeft, Zap, Shield, Atom, Target } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

export default function NylineRope() {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = "Nyline Rope - High-Performance Nylon Rope | Manila Cordage";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Nyline high-performance nylon rope with exceptional strength, elasticity, and abrasion resistance. Perfect for demanding industrial and marine applications.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Nyline high-performance nylon rope with exceptional strength, elasticity, and abrasion resistance. Perfect for demanding industrial and marine applications.';
      document.head.appendChild(meta);
    }
  }, []);

  const features = [
    { icon: Zap, title: "High Strength", description: "Superior tensile strength and breaking load capacity" },
    { icon: Shield, title: "Abrasion Resistant", description: "Excellent resistance to wear and surface damage" },
    { icon: Atom, title: "Elastic Recovery", description: "Returns to original length after stretching" },
    { icon: Target, title: "Shock Absorption", description: "Absorbs dynamic loads and sudden impacts" }
  ];

  const specifications = [
    { property: "Material", value: "High-Tenacity Nylon 6.6" },
    { property: "Diameter Range", value: "10mm - 60mm" },
    { property: "Breaking Strength", value: "Up to 25,000 lbs" },
    { property: "Stretch", value: "15-30%" },
    { property: "Melting Point", value: "250°C (482°F)" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-50 to-indigo-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-6">
                <Link href="/products" className="flex items-center text-navy-dark hover:text-orange-accent transition-colors mr-4">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Products
                </Link>
                <Badge className="bg-purple-100 text-purple-800">High Performance</Badge>
              </div>
              
              <h1 className="text-5xl font-bold text-navy-dark mb-6">Nyline Rope</h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                High-performance nylon rope engineered for maximum strength and elasticity. 
                When your application demands the ultimate in shock absorption and durability, choose Nyline.
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
              <h2 className="text-3xl font-bold text-navy-dark text-center mb-12">Nyline Performance Features</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <feature.icon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
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
              <h2 className="text-3xl font-bold text-navy-dark text-center mb-12">High-Performance Applications</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-navy-dark mb-4">Heavy Industry</h3>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Crane and hoist operations</li>
                      <li>• Load securing systems</li>
                      <li>• Mining and extraction</li>
                      <li>• Construction rigging</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-navy-dark mb-4">Marine & Offshore</h3>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Anchor lines and chains</li>
                      <li>• Towing operations</li>
                      <li>• Offshore platform mooring</li>
                      <li>• Dynamic positioning systems</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-navy-dark mb-4">Safety & Rescue</h3>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Emergency rescue lines</li>
                      <li>• Fall protection systems</li>
                      <li>• Military and defense</li>
                      <li>• Search and rescue operations</li>
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
              <h2 className="text-3xl font-bold text-white mb-6">Experience Nyline Strength</h2>
              <p className="text-gray-300 text-lg mb-8">
                Trust Nyline rope for your most demanding applications. Unmatched performance when it matters most.
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