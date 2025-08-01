import { useEffect } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = "Privacy Policy - Manila Cordage | Data Protection";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Manila Cordage privacy policy and data protection practices in compliance with the Data Privacy Act of 2012 (Republic Act 10173) of the Philippines.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Manila Cordage privacy policy and data protection practices in compliance with the Data Privacy Act of 2012 (Republic Act 10173) of the Philippines.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-navy-dark text-white py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8">Your privacy and data protection rights under Philippine law</p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-navy-dark mb-4">Data Privacy Act Compliance</h2>
                <p className="text-gray-700 leading-relaxed">
                  Manila Cordage Company is committed to protecting your personal data in accordance with the 
                  Data Privacy Act of 2012 (Republic Act 10173) of the Philippines and its implementing rules and regulations.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy-dark mb-4">Information We Collect</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Submit a career application or inquiry</li>
                  <li>Request product information or quotes</li>
                  <li>Contact us through our website or other channels</li>
                  <li>Subscribe to our communications</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy-dark mb-4">How We Use Your Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Your personal information is used for the following purposes:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Processing career applications and recruitment activities</li>
                  <li>Responding to inquiries and providing customer service</li>
                  <li>Providing product information and quotes</li>
                  <li>Improving our services and website functionality</li>
                  <li>Complying with legal obligations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy-dark mb-4">Data Protection and Security</h2>
                <p className="text-gray-700 leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal data 
                  against unauthorized access, alteration, disclosure, or destruction. Access to personal data 
                  is limited to authorized personnel who need such access for legitimate business purposes.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy-dark mb-4">Your Rights</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Under the Data Privacy Act of 2012, you have the right to:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Be informed about the processing of your personal data</li>
                  <li>Access your personal data held by us</li>
                  <li>Object to the processing of your personal data</li>
                  <li>Request correction or rectification of inaccurate personal data</li>
                  <li>Request erasure or blocking of your personal data</li>
                  <li>Request portability of your personal data</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy-dark mb-4">Data Retention</h2>
                <p className="text-gray-700 leading-relaxed">
                  We retain personal data only for as long as necessary to fulfill the purposes for which it was collected, 
                  or as required by applicable laws and regulations. Career applications are typically retained for a 
                  period of two (2) years from submission.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy-dark mb-4">Contact Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have questions about this privacy policy or wish to exercise your data protection rights, 
                  please contact our Data Protection Officer:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="font-semibold text-navy-dark">Manila Cordage Company</p>
                  <p className="text-gray-700">Data Protection Officer</p>
                  <p className="text-gray-700">Email: privacy@manilacordage.net</p>
                  <p className="text-gray-700">Phone: +632 8860 4500</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy-dark mb-4">Updates to This Policy</h2>
                <p className="text-gray-700 leading-relaxed">
                  We may update this privacy policy from time to time to reflect changes in our practices or applicable laws. 
                  Any updates will be posted on this page with an updated effective date.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  <strong>Effective Date:</strong> January 1, 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}