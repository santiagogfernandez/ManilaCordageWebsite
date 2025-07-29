import { useEffect } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ChatWidget from "@/components/chat-widget";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { ArrowLeft, Sun, Feather, Shield, Zap } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

export default function SkylineRope() {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = "Skyline Rope - Ultra-Light UV-Stable Polypropylene | Manila Cordage";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Skyline ultra-light, UV-stable polypropylene rope built for the elements. Perfect for outdoor applications requiring durability and weather resistance.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Skyline ultra-light, UV-stable polypropylene rope built for the elements. Perfect for outdoor applications requiring durability and weather resistance.';
      document.head.appendChild(meta);
    }
  }, []);

  const features = [
    { icon: Feather, title: "Ultra-Light", description: "Significantly lighter than traditional rope materials" },
    { icon: Sun, title: "UV-Stable", description: "Advanced UV stabilization prevents degradation" },
    { icon: Shield, title: "Weather Resistant", description: "Built to withstand harsh outdoor conditions" },
    { icon: Zap, title: "High Performance", description: "Excellent strength-to-weight ratio" }
  ];

  const specifications = [
    { property: "Material", value: "UV-Stabilized Polypropylene" },
    { property: "Diameter Range", value: "6mm - 32mm" },
    { property: "Breaking Strength", value: "Up to 8,500 lbs" },
    { property: "UV Protection", value: "5+ years outdoor exposure" },
    { property: "Weight", value: "40% lighter than Manila rope" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-50 to-sky-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-6">
                <Link href="/products" className="flex items-center text-navy-dark hover:text-orange-accent transition-colors mr-4">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Products
                </Link>
                <Badge className="bg-blue-100 text-blue-800">Synthetic Fiber</Badge>
              </div>
              
              <h1 className="text-5xl font-bold text-navy-dark mb-6">Skyline Rope</h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Ultra-Light, UV-Stable Polypropylene Rope Built for the Elements. 
                Experience superior performance with our advanced synthetic rope technology.
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
              <h2 className="text-3xl font-bold text-navy-dark text-center mb-12">Skyline Rope Advantages</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <feature.icon className="h-12 w-12 text-blue-500 mx-auto mb-4" />
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
              <h2 className="text-3xl font-bold text-navy-dark text-center mb-12">Ideal Applications</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-navy-dark mb-4">Outdoor & Recreation</h3>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Camping and hiking gear</li>
                      <li>• Sports equipment rigging</li>
                      <li>• Playground installations</li>
                      <li>• Outdoor adventure courses</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-navy-dark mb-4">Marine & Coastal</h3>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Lightweight dock lines</li>
                      <li>• Small boat rigging</li>
                      <li>• Beach volleyball nets</li>
                      <li>• Coastal construction</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-navy-dark mb-4">Commercial & Industrial</h3>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Light cargo handling</li>
                      <li>• Signage and banners</li>
                      <li>• Agricultural applications</li>
                      <li>• Pool and spa equipment</li>
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
              <h2 className="text-3xl font-bold text-white mb-6">Experience Skyline Performance</h2>
              <p className="text-gray-300 text-lg mb-8">
                Discover the lightweight durability of our UV-stable Skyline rope. Perfect for demanding outdoor applications.
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