import { useEffect } from "react";
import { useLanguage } from "@/hooks/use-language";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card } from "@/components/ui/card";
import { Mail, Phone, LinkedinIcon } from "lucide-react";

export default function Team() {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = "Our Team - Manila Cordage | Leadership & Expertise";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Meet the experienced leadership team behind Manila Cordage Company. Our dedicated professionals bring decades of expertise in rope manufacturing, engineering, and business management.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Meet the experienced leadership team behind Manila Cordage Company. Our dedicated professionals bring decades of expertise in rope manufacturing, engineering, and business management.';
      document.head.appendChild(meta);
    }
  }, []);

  const teamMembers = [
    {
      name: "Maria Santos-Rodriguez",
      position: "Chief Executive Officer",
      department: "Executive Leadership",
      bio: "Maria has led Manila Cordage through its modern transformation with over 25 years of experience in manufacturing and international trade. Under her leadership, the company has expanded its global reach while maintaining its commitment to Philippine craftsmanship.",
      expertise: ["Strategic Planning", "International Business", "Manufacturing Operations"],
      email: "m.rodriguez@manilacordage.com"
    },
    {
      name: "Carlos Miguel Hernandez",
      position: "Chief Operations Officer",
      department: "Operations",
      bio: "Carlos oversees all manufacturing operations across Manila Cordage's facilities. With an engineering background and 20+ years in rope manufacturing, he ensures quality standards while driving operational efficiency and innovation.",
      expertise: ["Manufacturing Engineering", "Quality Systems", "Process Optimization"],
      email: "c.hernandez@manilacordage.com"
    },
    {
      name: "Dr. Ana Patricia Cruz",
      position: "Head of Research & Development",
      department: "Innovation",
      bio: "Dr. Cruz leads Manila Cordage's innovation initiatives, focusing on developing new synthetic rope technologies and sustainable manufacturing processes. She holds a PhD in Materials Science and has 15+ years in polymer research.",
      expertise: ["Materials Science", "Product Development", "Sustainability"],
      email: "a.cruz@manilacordage.com"
    },
    {
      name: "Roberto Luis Delgado",
      position: "Sales & Marketing Director",
      department: "Commercial",
      bio: "Roberto drives Manila Cordage's commercial success, managing relationships with major industrial clients across Southeast Asia and beyond. His deep understanding of rope applications helps clients find optimal solutions.",
      expertise: ["B2B Sales", "Market Development", "Client Relations"],
      email: "r.delgado@manilacordage.com"
    },
    {
      name: "Jennifer Anne Lim",
      position: "Quality Assurance Manager",
      department: "Quality",
      bio: "Jennifer ensures Manila Cordage maintains its ISO 9001:2000 certification and industry-leading quality standards. With expertise in quality systems, she oversees testing protocols and continuous improvement initiatives.",
      expertise: ["Quality Management", "ISO Standards", "Testing Protocols"],
      email: "j.lim@manilacordage.com"
    },
    {
      name: "Francisco Jose Reyes",
      position: "Production Manager",
      department: "Manufacturing",
      bio: "Francisco manages day-to-day production operations, ensuring efficient manufacturing of both synthetic and natural fiber ropes. His hands-on approach and technical expertise keep production running smoothly.",
      expertise: ["Production Planning", "Manufacturing Processes", "Team Leadership"],
      email: "f.reyes@manilacordage.com"
    }
  ];



  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy-dark to-[#006fd3] text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Meet Our Team
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 mb-8">
              The experienced professionals driving Manila Cordage's success for over 100 years
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm sm:text-base">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="font-semibold">100+ Years</span> of Combined Experience
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="font-semibold">6 Departments</span> Working as One
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="font-semibold">Philippines</span> Based Leadership
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-dark mb-4">
                Leadership Team
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our diverse leadership team combines deep industry expertise with innovative thinking, 
                ensuring Manila Cordage continues to lead the rope manufacturing industry.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="h-2 bg-[#006fd3]"></div>
                    <div className="p-6">
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-navy-dark mb-1">
                          {member.name}
                        </h3>
                        <p className="text-[#006fd3] font-semibold mb-1">
                          {member.position}
                        </p>
                      </div>

                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {member.bio}
                      </p>

                      <div className="mb-4">
                        <h4 className="font-semibold text-navy-dark mb-2">Expertise:</h4>
                        <div className="flex flex-wrap gap-2">
                          {member.expertise.map((skill, skillIndex) => (
                            <span 
                              key={skillIndex}
                              className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center space-x-3 pt-4 border-t border-gray-100">
                        <a 
                          href={`mailto:${member.email}`}
                          className="flex items-center space-x-2 text-[#006fd3] hover:text-navy-dark transition-colors"
                        >
                          <Mail className="h-4 w-4" />
                          <span className="text-sm">Contact</span>
                        </a>
                      </div>
                    </div>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </section>



      {/* Join Our Team CTA */}
      <section className="bg-gradient-to-r from-[#006fd3] to-navy-dark text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Join Our Growing Team
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Be part of Manila Cordage's next century of innovation. We're always looking for 
              talented individuals who share our commitment to quality and excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/about/careers"
                className="bg-white text-[#006fd3] hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                View Career Opportunities
              </a>
              <a
                href="/quote"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#006fd3] px-8 py-3 rounded-lg font-semibold transition-all"
              >
                Work With Our Team
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}