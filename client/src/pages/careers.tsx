import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ChatWidget from "@/components/chat-widget";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Users, Target, Award, Globe, Upload, Send } from "lucide-react";

const applicationSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  position: z.string().min(1, "Please select a position of interest"),
  experience: z.string().min(1, "Please select your experience level"),

  cv: z.any().optional(),
  gdprConsent: z.boolean().refine((val) => val === true, {
    message: "You must consent to the privacy policy to proceed"
  }),
  recaptcha: z.string().min(1, "Please complete the reCAPTCHA verification")
});

type ApplicationForm = z.infer<typeof applicationSchema>;

export default function Careers() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState("");

  const form = useForm<ApplicationForm>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      position: "",
      experience: "",

      gdprConsent: false,
      recaptcha: ""
    }
  });

  useEffect(() => {
    document.title = "Careers - Join Our Team | Manila Cordage";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Join Manila Cordage - careers in rope manufacturing excellence. Explore opportunities in production, engineering, sales, and management. Apply now.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Join Manila Cordage - careers in rope manufacturing excellence. Explore opportunities in production, engineering, sales, and management. Apply now.';
      document.head.appendChild(meta);
    }

    // Load reCAPTCHA script
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js';
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const onSubmit = async (data: ApplicationForm) => {
    if (!recaptchaToken) {
      form.setError("recaptcha", { message: "Please complete the reCAPTCHA verification" });
      return;
    }

    if (!data.gdprConsent) {
      form.setError("gdprConsent", { message: "You must consent to the privacy policy to proceed" });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // In a real application, you would submit this to your backend API
      console.log("Career application submitted:", { ...data, recaptchaToken });
      
      toast({
        title: "Application Submitted Successfully!",
        description: "Thank you for your interest in Manila Cordage. We will review your application and contact you soon.",
      });
      
      form.reset();
      setRecaptchaToken("");
      
      // Reset reCAPTCHA
      if ((window as any).grecaptcha) {
        (window as any).grecaptcha.reset();
      }
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRecaptchaChange = (token: string | null) => {
    if (token) {
      setRecaptchaToken(token);
      form.setValue("recaptcha", token);
      form.clearErrors("recaptcha");
    }
  };

  const benefits = [
    {
      icon: Users,
      title: "Collaborative Culture",
      description: "Work alongside industry experts in a supportive, team-oriented environment"
    },
    {
      icon: Target,
      title: "Career Growth",
      description: "Clear advancement paths with ongoing training and development opportunities"
    },
    {
      icon: Award,
      title: "Competitive Benefits",
      description: "Comprehensive health coverage, retirement plans, and performance bonuses"
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Contribute to products used worldwide in marine, industrial, and construction sectors"
    }
  ];

  const openPositions = [
    {
      title: "Production Supervisor",
      department: "Manufacturing",
      location: "Metro Manila",
      type: "Full-time",
      description: "Lead production teams in our state-of-the-art rope manufacturing facility"
    },
    {
      title: "Quality Control Engineer",
      department: "Engineering",
      location: "Metro Manila", 
      type: "Full-time",
      description: "Ensure product quality and implement continuous improvement processes"
    },
    {
      title: "Sales Representative",
      department: "Sales & Marketing",
      location: "Metro Manila",
      type: "Full-time",
      description: "Develop client relationships and drive business growth in key market segments"
    },
    {
      title: "Mechanical Engineer",
      department: "Engineering",
      location: "Metro Manila",
      type: "Full-time",
      description: "Design and optimize manufacturing equipment and processes"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-navy-dark text-white py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Build Your Career with Us</h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8">Join a century-old legacy of excellence and help shape the future of rope manufacturing</p>
          </div>
        </div>
      </section>

      {/* Why Choose Manila Cordage */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-dark mb-4">
                Why Choose Manila Cordage?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Be part of a company that values innovation, quality, and the professional growth of every team member.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-[#006fd3] rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-navy-dark mb-3">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-dark mb-4">
                Current Openings
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore our current job opportunities and find your perfect fit in our growing team.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {openPositions.map((position, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl text-navy-dark">{position.title}</CardTitle>
                      <span className="bg-[#006fd3] text-white px-3 py-1 rounded-full text-sm font-medium">
                        {position.type}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 text-sm text-gray-600">
                      <span>📍 {position.location}</span>
                      <span>🏢 {position.department}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{position.description}</p>
                    <Button className="w-full bg-[#006fd3] hover:bg-[#005bb8] text-white">
                      Apply Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-dark mb-4">
                Apply for Future Opportunities
              </h2>
              <p className="text-lg text-gray-600">
                Don't see the perfect role? Submit your application and we'll consider you for future openings that match your skills and interests.
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-navy-dark flex items-center">
                  <Send className="h-6 w-6 mr-2 text-[#006fd3]" />
                  Submit Your Application
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>First Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="Your first name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Last Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="Your last name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address *</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="your.email@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number *</FormLabel>
                            <FormControl>
                              <Input placeholder="+63 XXX XXX XXXX" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="position"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Position of Interest *</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a position" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="production">Production & Manufacturing</SelectItem>
                                <SelectItem value="engineering">Engineering & Technical</SelectItem>
                                <SelectItem value="sales">Sales & Marketing</SelectItem>
                                <SelectItem value="quality">Quality Control</SelectItem>
                                <SelectItem value="management">Management</SelectItem>
                                <SelectItem value="administration">Administration</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="experience"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Experience Level *</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select your experience" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="entry">Entry Level (0-2 years)</SelectItem>
                                <SelectItem value="mid">Mid Level (3-5 years)</SelectItem>
                                <SelectItem value="senior">Senior Level (6-10 years)</SelectItem>
                                <SelectItem value="executive">Executive Level (10+ years)</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="cv"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Upload CV/Resume</FormLabel>
                          <FormControl>
                            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#006fd3] transition-colors">
                              <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                              <p className="text-sm text-gray-600 mb-2">
                                Drag and drop your CV here, or click to browse
                              </p>
                              <input
                                type="file"
                                accept=".pdf,.doc,.docx"
                                onChange={(e) => field.onChange(e.target.files?.[0])}
                                className="hidden"
                                id="cv-upload"
                              />
                              <Label htmlFor="cv-upload" className="cursor-pointer">
                                <Button type="button" variant="outline" className="mt-2">
                                  Choose File
                                </Button>
                              </Label>
                              <p className="text-xs text-gray-500 mt-2">
                                Accepted formats: PDF, DOC, DOCX (Max 5MB)
                              </p>
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />



                    {/* reCAPTCHA Placeholder */}
                    <div className="space-y-4">
                      <FormField
                        control={form.control}
                        name="recaptcha"
                        render={() => (
                          <FormItem>
                            <FormLabel>Verification *</FormLabel>
                            <div className="border border-gray-300 rounded-lg p-4 bg-gray-50">
                              <div className="flex items-center space-x-3">
                                <Checkbox 
                                  checked={!!recaptchaToken}
                                  onCheckedChange={(checked) => {
                                    if (checked) {
                                      // Simulate reCAPTCHA completion
                                      const token = "simulated-recaptcha-token";
                                      setRecaptchaToken(token);
                                      form.setValue("recaptcha", token);
                                      form.clearErrors("recaptcha");
                                    } else {
                                      setRecaptchaToken("");
                                      form.setValue("recaptcha", "");
                                    }
                                  }}
                                />
                                <label className="text-sm">I'm not a robot</label>
                                <div className="ml-auto">
                                  <div className="w-8 h-8 bg-gray-200 rounded border flex items-center justify-center">
                                    <span className="text-xs font-bold text-gray-600">rC</span>
                                  </div>
                                </div>
                              </div>
                              <p className="text-xs text-gray-500 mt-2">
                                reCAPTCHA verification (simulated for demo)
                              </p>
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="gdprConsent"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>
                              Privacy Policy Consent *
                            </FormLabel>
                            <FormDescription>
                              I consent to the processing of my personal data in accordance with the{" "}
                              <a 
                                href="/privacy-policy" 
                                className="text-[#006fd3] hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Privacy Policy
                              </a>{" "}
                              and{" "}
                              <a 
                                href="/terms-conditions" 
                                className="text-[#006fd3] hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Terms & Conditions
                              </a>{" "}
                              for recruitment purposes.
                            </FormDescription>
                            <FormMessage />
                          </div>
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      disabled={isSubmitting || !recaptchaToken || !form.watch('gdprConsent')}
                      className="w-full bg-[#006fd3] hover:bg-[#005bb8] text-white py-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Application"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      <ChatWidget />
    </div>
  );
}