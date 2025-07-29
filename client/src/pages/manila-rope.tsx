import { useEffect } from "react";
import { Link } from "wouter";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ChatWidget from "@/components/chat-widget";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Anchor, Shield, Zap, Award, Leaf, Building } from "lucide-react";

export default function ManilaRope() {
  useEffect(() => {
    document.title = "Manila Rope - Premium Natural Fiber Rope | Manila Cordage";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover our premium Manila rope made from natural abaca fibers. Industrial strength, marine-grade quality, and eco-friendly. Perfect for heavy-duty applications.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Discover our premium Manila rope made from natural abaca fibers. Industrial strength, marine-grade quality, and eco-friendly. Perfect for heavy-duty applications.';
      document.head.appendChild(meta);
    }
  }, []);

  const features = [
    {
      icon: <Shield className="h-8 w-8 text-accent-blue" />,
      title: "Industrial Strength",
      description: "Superior tensile strength and load-bearing capacity for heavy-duty applications"
    },
    {
      icon: <Anchor className="h-8 w-8 text-accent-blue" />,
      title: "Marine Grade",
      description: "Excellent resistance to saltwater and marine environments"
    },
    {
      icon: <Leaf className="h-8 w-8 text-accent-blue" />,
      title: "Natural Fiber",
      description: "Made from premium abaca plant fibers, biodegradable and eco-friendly"
    },
    {
      icon: <Zap className="h-8 w-8 text-accent-blue" />,
      title: "Shock Absorption",
      description: "Natural elasticity provides excellent shock absorption properties"
    },
    {
      icon: <Award className="h-8 w-8 text-accent-blue" />,
      title: "ISO Certified",
      description: "Meets international quality standards for marine and industrial use"
    },
    {
      icon: <Building className="h-8 w-8 text-accent-blue" />,
      title: "Construction Ready",
      description: "Ideal for construction, rigging, and heavy lifting applications"
    }
  ];

  const specifications = [
    { property: "Material", value: "Natural Abaca Fiber (Manila Hemp)" },
    { property: "Diameter Range", value: "6mm - 100mm" },
    { property: "Breaking Strength", value: "Up to 50,000 lbs (varies by diameter)" },
    { property: "Specific Gravity", value: "1.38 (sinks in water)" },
    { property: "Stretch", value: "15-20% at breaking load" },
    { property: "UV Resistance", value: "Good natural resistance" },
    { property: "Temperature Range", value: "-40°C to +80°C" },
    { property: "Standards", value: "ISO 1346, ASTM D6, BS 2052" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 bg-navy-dark text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">Manila Rope</h1>
              <p className="text-xl mb-8 opacity-90">
                Premium Natural Manila Rope for Industrial Strength & Resilience
              </p>
              <p className="text-lg opacity-80 max-w-3xl mx-auto mb-8">
                Crafted from the finest abaca fibers, our Manila rope represents over 100 years of expertise 
                in natural fiber rope manufacturing. Trusted by industries worldwide for its exceptional 
                strength, durability, and reliability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/manila-rope-quote">
                  <Button 
                    size="lg"
                    className="bg-orange-accent hover:bg-orange-accent/90 text-white px-8 py-4 font-semibold"
                  >
                    Request Quote
                  </Button>
                </Link>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-navy-dark px-8 py-4 font-semibold"
                  onClick={() => document.getElementById('specifications')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Specifications
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy-dark mb-4">
                Why Choose Manila Rope?
              </h2>
              <p className="text-lg text-text-light max-w-2xl mx-auto">
                Manila rope offers unique advantages that make it the preferred choice for demanding applications
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl text-navy-dark">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-text-light">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy-dark mb-4">
                Applications
              </h2>
              <p className="text-lg text-text-light max-w-2xl mx-auto">
                Manila rope is versatile and trusted across multiple industries
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Marine & Shipping", items: ["Anchor lines", "Mooring lines", "Dock lines", "Ship rigging"] },
                { title: "Construction", items: ["Lifting operations", "Safety lines", "Scaffolding", "Hoisting"] },
                { title: "Industrial", items: ["Heavy machinery", "Crane operations", "Material handling", "Pulley systems"] },
                { title: "Agriculture", items: ["Hay baling", "Livestock tethering", "Farm equipment", "Barrier ropes"] }
              ].map((category, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg text-navy-dark">
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-text-light flex items-center">
                          <span className="w-2 h-2 bg-accent-blue rounded-full mr-3"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Specifications Section */}
        <section id="specifications" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy-dark mb-4">
                Technical Specifications
              </h2>
              <p className="text-lg text-text-light max-w-2xl mx-auto">
                Detailed specifications for our premium Manila rope products
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    {specifications.map((spec, index) => (
                      <div key={index} className="flex justify-between py-3 border-b border-gray-200 last:border-b-0">
                        <span className="font-semibold text-navy-dark">{spec.property}:</span>
                        <span className="text-text-light">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                    <h3 className="text-lg font-semibold text-navy-dark mb-3">
                      Quality Certifications
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-green-100 text-green-600">ISO 1346 Certified</Badge>
                      <Badge className="bg-blue-100 text-blue-600">ASTM D6 Compliant</Badge>
                      <Badge className="bg-purple-100 text-purple-600">BS 2052 Standard</Badge>
                      <Badge className="bg-orange-100 text-orange-600">Marine Grade</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-navy-dark text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Order Manila Rope?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Get a custom quote for your specific requirements. Our team will help you select 
              the right diameter and length for your application.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/manila-rope-quote">
                <Button 
                  size="lg"
                  className="bg-orange-accent hover:bg-orange-accent/90 text-white px-8 py-4 font-semibold"
                >
                  Request Quote
                </Button>
              </Link>
              <Link href="/contact">
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-navy-dark px-8 py-4 font-semibold"
                >
                  Contact Expert
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <ChatWidget />
    </div>
  );
}