import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const customQuoteSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  company: z.string().min(2, "Company name is required"),
  industry: z.string().min(1, "Please select an industry"),
  projectType: z.string().min(1, "Please select a project type"),
  quantity: z.string().min(1, "Quantity is required"),
  specifications: z.string().min(20, "Please provide detailed specifications (minimum 20 characters)"),
  timeline: z.string().min(1, "Please select a timeline"),
  budget: z.string().optional(),
  additionalNotes: z.string().optional()
});

type CustomQuoteForm = z.infer<typeof customQuoteSchema>;

export default function CustomQuote() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset
  } = useForm<CustomQuoteForm>({
    resolver: zodResolver(customQuoteSchema),
  });

  const mutation = useMutation({
    mutationFn: (data: CustomQuoteForm) => 
      apiRequest("/api/custom-quotes", {
        method: "POST",
        body: JSON.stringify(data),
      }),
    onSuccess: () => {
      setIsSubmitted(true);
      reset();
      toast({
        title: "Quote Request Submitted",
        description: "We'll review your requirements and get back to you within 24 hours.",
      });
    },
    onError: () => {
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: CustomQuoteForm) => {
    mutation.mutate(data);
  };

  const industries = [
    "Marine & Shipping",
    "Construction",
    "Industrial Manufacturing",
    "Agriculture",
    "Mining",
    "Oil & Gas",
    "Entertainment & Events",
    "Military & Defense",
    "Other"
  ];

  const projectTypes = [
    "Marine Rigging",
    "Construction Lifting",
    "Industrial Machinery",
    "Safety & Rescue",
    "Decorative Applications",
    "Custom Manufacturing",
    "Bulk Supply",
    "Other"
  ];

  const timelines = [
    "Urgent (Within 2 weeks)",
    "Standard (2-4 weeks)",
    "Flexible (1-2 months)",
    "Long-term project (2+ months)"
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-green-50 border border-green-200 rounded-lg p-8 mb-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-3xl font-bold text-navy-dark mb-4">Thank You!</h1>
              <p className="text-lg text-gray-600 mb-6">
                Your custom quote request has been submitted successfully. Our team will review your requirements and contact you within 24 hours.
              </p>
              <div className="space-y-2 text-sm text-gray-500">
                <p>Questions? Contact us directly:</p>
                <p>Email: ropes@manilacordage.net</p>
                <p>Phone: +63 (02) 8844-3351</p>
              </div>
            </div>
            <Button 
              onClick={() => window.location.href = '/'}
              className="bg-navy-dark hover:bg-navy-dark/90 text-white px-8 py-3"
            >
              Return to Homepage
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-navy-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Custom Quote Request
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8">
              Tell us about your specific rope requirements and we'll create a tailored solution for your project
            </p>
            <div className="w-24 h-1 bg-orange-accent mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-navy-dark">Project Details</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                  {/* Contact Information */}
                  <div>
                    <h3 className="text-xl font-semibold text-navy-dark mb-4">Contact Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          {...register("firstName")}
                          className={errors.firstName ? "border-red-500" : ""}
                        />
                        {errors.firstName && (
                          <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          {...register("lastName")}
                          className={errors.lastName ? "border-red-500" : ""}
                        />
                        {errors.lastName && (
                          <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          {...register("email")}
                          className={errors.email ? "border-red-500" : ""}
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          {...register("phone")}
                          className={errors.phone ? "border-red-500" : ""}
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                        )}
                      </div>
                      <div className="md:col-span-2">
                        <Label htmlFor="company">Company Name *</Label>
                        <Input
                          id="company"
                          {...register("company")}
                          className={errors.company ? "border-red-500" : ""}
                        />
                        {errors.company && (
                          <p className="text-red-500 text-sm mt-1">{errors.company.message}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Project Information */}
                  <div>
                    <h3 className="text-xl font-semibold text-navy-dark mb-4">Project Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="industry">Industry *</Label>
                        <Select onValueChange={(value) => setValue("industry", value)}>
                          <SelectTrigger className={errors.industry ? "border-red-500" : ""}>
                            <SelectValue placeholder="Select industry" />
                          </SelectTrigger>
                          <SelectContent>
                            {industries.map((industry) => (
                              <SelectItem key={industry} value={industry}>
                                {industry}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors.industry && (
                          <p className="text-red-500 text-sm mt-1">{errors.industry.message}</p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="projectType">Project Type *</Label>
                        <Select onValueChange={(value) => setValue("projectType", value)}>
                          <SelectTrigger className={errors.projectType ? "border-red-500" : ""}>
                            <SelectValue placeholder="Select project type" />
                          </SelectTrigger>
                          <SelectContent>
                            {projectTypes.map((type) => (
                              <SelectItem key={type} value={type}>
                                {type}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors.projectType && (
                          <p className="text-red-500 text-sm mt-1">{errors.projectType.message}</p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="quantity">Quantity Required *</Label>
                        <Input
                          id="quantity"
                          placeholder="e.g., 500 meters, 50 pieces"
                          {...register("quantity")}
                          className={errors.quantity ? "border-red-500" : ""}
                        />
                        {errors.quantity && (
                          <p className="text-red-500 text-sm mt-1">{errors.quantity.message}</p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="timeline">Timeline *</Label>
                        <Select onValueChange={(value) => setValue("timeline", value)}>
                          <SelectTrigger className={errors.timeline ? "border-red-500" : ""}>
                            <SelectValue placeholder="Select timeline" />
                          </SelectTrigger>
                          <SelectContent>
                            {timelines.map((timeline) => (
                              <SelectItem key={timeline} value={timeline}>
                                {timeline}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors.timeline && (
                          <p className="text-red-500 text-sm mt-1">{errors.timeline.message}</p>
                        )}
                      </div>
                      <div className="md:col-span-2">
                        <Label htmlFor="budget">Budget Range (Optional)</Label>
                        <Input
                          id="budget"
                          placeholder="e.g., $5,000 - $10,000"
                          {...register("budget")}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Specifications */}
                  <div>
                    <h3 className="text-xl font-semibold text-navy-dark mb-4">Detailed Specifications</h3>
                    <div>
                      <Label htmlFor="specifications">Rope Specifications & Requirements *</Label>
                      <Textarea
                        id="specifications"
                        rows={6}
                        placeholder="Please provide detailed specifications including:
- Rope diameter and length
- Material preferences (natural fiber, synthetic, or specific type)
- Breaking strength requirements
- Environmental conditions (marine, industrial, outdoor, etc.)
- Specific certifications needed
- Any special features or customizations"
                        {...register("specifications")}
                        className={errors.specifications ? "border-red-500" : ""}
                      />
                      {errors.specifications && (
                        <p className="text-red-500 text-sm mt-1">{errors.specifications.message}</p>
                      )}
                    </div>
                    <div className="mt-4">
                      <Label htmlFor="additionalNotes">Additional Notes (Optional)</Label>
                      <Textarea
                        id="additionalNotes"
                        rows={3}
                        placeholder="Any additional information that would help us prepare your quote..."
                        {...register("additionalNotes")}
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-center pt-6">
                    <Button
                      type="submit"
                      size="lg"
                      disabled={mutation.isPending}
                      className="bg-orange-accent hover:bg-orange-accent/90 text-white px-12 py-4 font-semibold"
                    >
                      {mutation.isPending ? "Submitting..." : "Submit Quote Request"}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}