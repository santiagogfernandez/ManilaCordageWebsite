import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ChatWidget from "@/components/chat-widget";

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-gray-50">

      
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-navy-dark text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Terms & Conditions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Please read these terms and conditions carefully before using our website and services.
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
            
            {/* Introduction */}
            <div>
              <p className="text-gray-700 leading-relaxed mb-4">
                You have entered the site of Manila Cordage Company. By using our site, you accept and agree to be bound by the 
                <strong className="text-orange-accent"> terms and conditions hereinbelow which may be updated or revised any time</strong>.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By accessing this web site, you are agreeing to be bound by these web site Terms and Conditions of Use, all applicable laws and regulations, and 
                agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using 
                or accessing this site.
              </p>
            </div>

            {/* Intellectual Property Rights */}
            <div>
              <h2 className="text-2xl font-bold text-navy-dark mb-4 text-orange-accent">
                INTELLECTUAL PROPERTY RIGHTS
              </h2>
              <p className="text-gray-700 leading-relaxed">
                All materials contained herein, including but not limited to the trademarks, service marks, trade names, logos, icons, and images are proprietary to 
                Manila Cordage Company, and are duly protected by the Intellectual Property laws of the Philippines. The use of the foregoing is strictly prohibited unless the prior 
                written consent of Manila Cordage Company is obtained for such purpose.
              </p>
            </div>

            {/* Limited Purpose */}
            <div>
              <h2 className="text-2xl font-bold text-navy-dark mb-4 text-orange-accent">
                LIMITED PURPOSE OF THE WEB SITE
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The contents of this web site are intended for general information only. Manila Cordage Company does not warrant, expressly or impliedly, the merchantability or 
                fitness of any material for any particular purpose.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Nothing herein shall be construed as an offer to buy or to sell any products or services. Neither shall any content be construed as providing any 
                financial or legal advice. The Manila Cordage Company products are subject to the terms and conditions of the applicable agreements, contracts and documents. 
                Should you have additional queries or need advice on our products and services, you can contact us at our Home Office or at the District Office near 
                you, or through any of our authorized representatives.
              </p>
            </div>

            {/* Non-Warranty */}
            <div>
              <h2 className="text-2xl font-bold text-navy-dark mb-4 text-orange-accent">
                NON-WARRANTY AND NON-LIABILITY
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Manila Cordage Company exercises reasonable efforts to provide accurate, complete and updated information on this web site. However, it does not warrant the 
                absence of errors or omissions, defects, viruses or other harmful components of any material or functions contained therein.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Manila Cordage Company disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a 
                particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Manila Cordage Company shall not be liable for any direct, indirect, consequential or punitive damages resulting from accessing or browsing this web site or from 
                using or downloading materials thereon, even if Manila Cordage Company or any of its authorized representatives has been advised of the possibility of such damages.
              </p>
            </div>

            {/* Restrictions */}
            <div>
              <h2 className="text-2xl font-bold text-navy-dark mb-4 text-orange-accent">
                RESTRICTIONS ON USE OF MATERIALS
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Materials displayed on this web site may be downloaded for the personal and transitory use of the user, provided that all copyright and proprietary 
                notices on the materials shall be retained. The reproduction, republication, distribution, transmission, reuse, repost, or the use of the materials for public 
                or commercial purposes, including the text, images, audio and video, and the removal of any copyright or other proprietary notations from the materials 
                without Manila Cordage Company's written permission is strictly prohibited. Manila Cordage Company disclaims any liability resulting from the foregoing prohibited acts.
              </p>
            </div>

            {/* Jurisdiction */}
            <div>
              <h2 className="text-2xl font-bold text-navy-dark mb-4 text-orange-accent">
                JURISDICTION
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Manila Cordage Company does not represent that the materials, products and services contained in this web site are appropriate and available for use in all locations 
                or jurisdictions. Those who choose to access this web site do so on their own initiative and are responsible for compliance with local laws. No product 
                is intended to be sold or offered in jurisdictions that disallows the sale or purchase of such product.
              </p>
            </div>

            {/* Site Terms Modifications */}
            <div>
              <h2 className="text-2xl font-bold text-navy-dark mb-4 text-orange-accent">
                SITE TERMS OF USE MODIFICATIONS
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Manila Cordage Company may revise these terms of use for its web site at any time without notice. By using this web site you are agreeing to be bound by the then 
                current version of these Terms and Conditions of Use.
              </p>
            </div>

            {/* Governing Law */}
            <div>
              <h2 className="text-2xl font-bold text-navy-dark mb-4 text-orange-accent">
                GOVERNING LAW
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The interpretation, validity and effect of this web site and its contents or materials shall be governed by and construed in accordance with the laws of 
                the Republic of the Philippines. You hereby consent and agree to submit to the exclusive jurisdiction of the courts of the Philippines in any action or 
                proceeding instituted under or related to this Agreement or your use of this web site.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Any claim or dispute arising out of or in connection with this web site, its contents or materials shall be referred to and finally resolved by arbitration in 
                the Philippines through the appropriate courts, tribunals or quasi-judicial agencies.
              </p>
            </div>

            {/* Links */}
            <div>
              <h2 className="text-2xl font-bold text-navy-dark mb-4 text-orange-accent">
                LINKS
              </h2>
              <p className="text-gray-700 leading-relaxed">
                This web site may be linked to other web sites to which Manila Cordage Company does not give its approval or endorsement. Manila Cordage Company is not responsible for the 
                contents of any such linked site. Manila Cordage Company does not warrant the absence of errors or omissions, defects, viruses or other harmful components of any 
                material or functions contained in such web sites, and neither shall it be held liable for any direct, indirect, consequential or punitive damages resulting 
                from accessing or browsing such web sites or from using or downloading materials therein.
              </p>
            </div>

            {/* Contact Information */}
            <div className="border-t border-gray-200 pt-8 mt-8">
              <h2 className="text-2xl font-bold text-navy-dark mb-4">
                Contact Us
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about these Terms & Conditions, please contact us:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Manila Cordage Company</strong></p>
                <p>116 Progress Ave., Carmelray Industrial Park 1</p>
                <p>Canlubang, Calamba City, Laguna, Philippines 4028</p>
                <p>Phone: +632 8860 4500</p>
                <p>Mobile: +63 917 8860973</p>
                <p>Email: ropes@manilacordage.net</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
      <ChatWidget />
    </div>
  );
}