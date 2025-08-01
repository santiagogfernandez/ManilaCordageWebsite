import { useEffect } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ChatWidget from "@/components/chat-widget";

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
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-navy-dark text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your privacy is important to us. Learn how we collect, use, and protect your information in accordance with Philippine data protection laws.
          </p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
            
            {/* Introduction */}
            <div>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Manila Cordage Company Ltd. and its subsidiaries (collectively referred to as "Manila Cordage") is committed to safeguarding the privacy of their data subjects, thus, enabling their operations which is done with <strong className="text-orange-accent">utmost honesty and openness</strong> while defending or doing offline transactions in person as your branches, implying that you accept the terms of this privacy policy.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Manila Cordage is the only rope company operating in the country for over 100 years - Privacy Act of 2012 and its implementing Rules and Regulations are covered out through the processing of your personal information.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Our privacy policy applies only to information gathered online through Manila Cordage website, mobile applications, and social media pages (collectively referred to us "digital platforms"), or offline (involving office/telephone transactions, the user should not privacy policy at any time by publishing of new online services.
              </p>
            </div>

            {/* Data Collection */}
            <div>
              <h2 className="text-2xl font-bold text-navy-dark mb-4 text-orange-accent">
                WHAT INFORMATION WE COLLECT
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Manila Cordage Company Ltd. may collect, store, and use the following kinds of information:
              </p>
              <ul className="space-y-2 text-gray-700 ml-6">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Name
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Email address
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Contact Number
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Geographical Location
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  IP address
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Browser type and version
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Operating system
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Referral source
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Length of visit
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Page views
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Website navigation; and
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Any other personal information that you opt to provide to us.
                </li>
              </ul>

              <p className="text-gray-700 leading-relaxed mt-4 font-semibold">
                For audio or video recordings:
              </p>
              <ul className="space-y-2 text-gray-700 ml-6 mt-2">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Your voice and spoken words
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Your images and actions
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Details of the transaction being conducted
                </li>
              </ul>

              <p className="text-gray-700 leading-relaxed mt-4">
                Manila Cordage reserves the right to collect information from its users when users browse the company's websites and submit questionnaire through the <strong>contact us page</strong> when customers conduct transactions in person at our branches.
              </p>
            </div>

            {/* How We Use Information */}
            <div>
              <h2 className="text-2xl font-bold text-navy-dark mb-4 text-orange-accent">
                HOW WE USE YOUR INFORMATION
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Any of the personal information collected from you may be used in one of the following ways:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <strong className="text-navy-dark">To personalize your experience.</strong> Your information helps us to better respond to your individual needs to improve our digital platforms. We constantly strive to improve our website offerings based on the information and feedback we receive from you.
                </li>
                <li>
                  <strong className="text-navy-dark">To improve customer service.</strong> Your information helps us to more effectively respond to your customer service requests and support your needs.
                </li>
                <li>
                  <strong className="text-navy-dark">To administer a contest, promotion, survey or other site feature.</strong>
                </li>
                <li>
                  <strong className="text-navy-dark">To send periodic emails.</strong> The email address you provide may be used to send you information and updates pertaining to receiving occasional company news, updates, related product or service information, etc.
                </li>
              </ul>
            </div>

            {/* How We Protect Information */}
            <div>
              <h2 className="text-2xl font-bold text-navy-dark mb-4 text-orange-accent">
                HOW WE PROTECT YOUR INFORMATION
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We implement appropriate technical, administrative, and organizational security measures aligned with industry standards in order to ensure the confidentiality, integrity, and availability of all personal data that is submitted to us. We include such measures as the best practices for handling your personal data.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Moreover we engage other organizations to provide services to us we require them to protect your personal data as we outlined below in our sub-contracting procedures.
              </p>
              <p className="text-gray-700 leading-relaxed">
                It is important to note that data transmission over the Internet is, by nature, insecure and we cannot guarantee the security of data sent over the internet. We are not responsible for any delays, cookies, and other problems caused by the Internet, your Internet Service Provider, and other parties referred to the transmission of such.
              </p>
            </div>

            {/* How We Share Information */}
            <div>
              <h2 className="text-2xl font-bold text-navy-dark mb-4 text-orange-accent">
                HOW WE MAY SHARE YOUR INFORMATION
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Manila Cordage, subject to applicable laws and regulations, shall not sell, distribute, release or use it third parties any personal data or information given or transmitted through the Internet. This does not include trusted third parties who provide assistance in operating the websites, conducting business on-going or marketing you, so long as those parties agree to keep this information confidential. We may also release your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect ours, yours, or others rights, property, or safety. Personal service information shared, exchanged, transferred or given to other parties for marketing, advertising, or other uses may be disclosed to other parties and the proper authorities.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Manila Cordage shall not use personal data as information gained or transmitted through the internet to purchase other than what has been described on the website. However, due to the nature of the internet as an unsecured medium of communication, the company reserves the right to refuse from unauthorized personnel for our commitments, employees for the company to achieve competency of communications information delivered and processed into website that may cause potential risk in unserviceable evidence that may create threats to what the end user may readily to use disclosed loss of your personal data.
              </p>
            </div>

            {/* Data Retention */}
            <div>
              <h2 className="text-2xl font-bold text-navy-dark mb-4 text-orange-accent">
                HOW LONG WE KEEP YOUR INFORMATION
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Manila Cordage guarantees that your personal data shall not be stored longer than is necessary for achieving the purposes for which it was collected, and other purposes that you may reasonable in what may such as if we truly has been archived.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Your information shall not be stored for the fulfillment of its obligations and compliance with legal, regulatory, and business requirements, as other processes as well be as encouraging you.
              </p>
            </div>

            {/* Data Privacy Rights */}
            <div>
              <h2 className="text-2xl font-bold text-navy-dark mb-4 text-orange-accent">
                YOUR DATA PRIVACY RIGHTS
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Under the Data Privacy Act of 2012, you have the right to be informed about the collection, processing, and disposal of your personal data.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <strong className="text-navy-dark">Right to Object:</strong> You have the right to object to the processing of your personal data by explicitly withdrawing your consent particularly provided upon data collection.
                </li>
                <li>
                  <strong className="text-navy-dark">Right to Access:</strong> Upon demand, you have the right to reasonable access to the contents of your personal data.
                </li>
                <li>
                  <strong className="text-navy-dark">Right to Rectification:</strong> You have the right to dispute the inaccuracy or error in your personal data and have us correct it accordingly, provided, unless the request is vexatious or otherwise unreasonable.
                </li>
                <li>
                  <strong className="text-navy-dark">Right to Erasure or Blocking:</strong> Upon reasonable circumstances, you have the right to suspend, withdraw or order the blocking, removal or destruction of your personal data from Manila Cordage's systems.
                </li>
                <li>
                  <strong className="text-navy-dark">Right to Damages:</strong> Subject to the right of indemnification of indemnification, you may be indemnified for any damages sustained due to inadequate loss of your personal data.
                </li>
                <li>
                  <strong className="text-navy-dark">Right to Data Portability:</strong> You have the right to request from Manila Cordage a copy of your personal data that is processed by electronic means in a structured or commonly used format.
                </li>
                <li>
                  <strong className="text-navy-dark">Right to File a Complaint:</strong> If you feel that your personal data has been misused, inadequately disclosed, or improperly disposed of, that any of your data privacy rights have been violated, you have the right to file a complaint with Manila Cordage or the{" "}
                  <a href="https://www.privacy.gov.ph" className="text-[#006fd3] hover:underline" target="_blank" rel="noopener noreferrer">
                    appropriate government agencies
                  </a>.
                </li>
              </ul>
            </div>

            {/* Questions About Privacy */}
            <div>
              <h2 className="text-2xl font-bold text-navy-dark mb-4 text-orange-accent">
                QUESTIONS ABOUT YOUR PRIVACY?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                If you have questions or concerns about our privacy practices and policies, please get in touch with our Data Protection Officer at:
              </p>

              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-orange-accent">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-20 bg-[#006fd3] rounded-lg flex flex-col items-center justify-center text-white text-xs font-bold">
                      <div className="text-lg">DPO</div>
                      <div>●●●</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-navy-dark text-lg">Data Protection Officer</h3>
                    <p className="text-gray-700"><strong>The Manila Cordage Company, Ltd.</strong></p>
                    <p className="text-gray-700">116, Progress Ave., Carmelray Industrial Park I</p>
                    <p className="text-gray-700">Canlubang, Calamba City, Laguna</p>
                    <p className="text-gray-700">Philippines 4028</p>
                    <p className="text-gray-700"><strong>Tel. no.:</strong> +632 8860 4500</p>
                    <p className="text-gray-700">
                      <strong>Email:</strong>{" "}
                      <a href="mailto:dataprotection@manilacordage.net" className="text-[#006fd3] hover:underline">
                        dataprotection@manilacordage.net
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Last Updated */}
            <div className="border-t border-gray-200 pt-8 mt-8">
              <p className="text-gray-600 text-sm">
                <strong>Last Updated:</strong> This Privacy Policy was last updated in 2024. Manila Cordage Company reserves the right to update this privacy policy at any time. Any changes will be posted on this page.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
      <ChatWidget />
    </div>
  );
}