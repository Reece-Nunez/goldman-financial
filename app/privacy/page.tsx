'use client';

import { motion } from "framer-motion";
import PageLayout from "../components/PageLayout";
import { FadeInUp } from "../components/animations";

export default function PrivacyPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#b8860b] font-medium tracking-[0.3em] uppercase text-sm mb-6"
          >
            Legal
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight mb-8"
          >
            Privacy Policy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            How we collect, use, and protect your information
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <FadeInUp>
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-serif text-[#0f172a] mb-4">General</h2>
              <p className="text-gray-600 mb-8">
                Goldman & Co, Inc. ("We" or the "Company" or "Goldman & Co"), and our affiliates respect your privacy and want you to understand how we collect, use, disclose, and protect your information. This Privacy Policy applies when you visit or interact with www.thegoldmanfund.com or any subdomains or mobile applications owned by the Company (collectively the "Site"). While this not is not a consumer website and is intended for business-to-business communication, some information collected is personal in nature. This Policy applies to any information collected through your direct use of the Site, as well as through any means of electronic messaging and by telephone. This Policy also describes your choices in updating and accessing your information.
              </p>

              <h2 className="text-2xl font-serif text-[#0f172a] mb-4">Acknowledgement and Agreement</h2>
              <p className="text-gray-600 mb-8">
                The Site is only intended for use by legal residents of the United States and individuals 18 years of age or above. By visiting, submitting information, or otherwise engaging with the Site, you signify that you have read, understand, and agree to our Privacy Policy and our Terms of Use. If you do not agree, are not a legal resident of the United States or are under the age of 18, then immediately discontinue use of the Site.
              </p>

              <h2 className="text-2xl font-serif text-[#0f172a] mb-4">Your Information</h2>

              <h3 className="text-xl font-semibold text-[#0f172a] mb-3">What Information We Collect</h3>
              <p className="text-gray-600 mb-4">
                We collect business and personal information through various sources in response to your use of our Site and as necessary to deliver our services and products. The examples below are an illustrative, not comprehensive, overview of the data we collect.
              </p>

              <ul className="list-disc list-inside text-gray-600 mb-8 space-y-3">
                <li><strong>Contact and Personal Information</strong> including; your name, email address, mailing address, phone number, and social security number.</li>
                <li><strong>Business and Financial Information</strong> including; your business name, business address, industry type, tax ID, and ownership verifications.</li>
                <li><strong>Financial Information</strong> including; your business bank account information, payment behaviors, and transaction details. Goldman & Co may utilize a secure third-party service to access your data directly from your financial institution. Through connecting with such a third-party service, you grant Goldman & Co the authority to access and transmit your financial information for the duration of our effort to fulfill your business funding needs.</li>
                <li><strong>Unique Identifiers and Behavioral Data</strong>, including; IP address, location data, logs, the equipment or devices you use to access our Site, search queries, and your activity data as you navigate through the Site.</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#0f172a] mb-3">How We Collect Your Information</h3>
              <p className="text-gray-600 mb-4">Goldman & Co, Inc. collects your information:</p>
              <ul className="list-disc list-inside text-gray-600 mb-8 space-y-3">
                <li>Directly from you when you submit it, either through your use of the Site or provided by you through any other means of written or verbal communication. Written and verbal communication means any interaction with us, including but not limited to phone conversations, emails, text messages, SMS messaging, and the exchange of signed documents.</li>
                <li>From third parties, including but not limited to our affiliates and business partners, service providers or vendors, credit reporting agencies, or public records.</li>
                <li>From tracking technologies used to collect and analyze your non-personal information through your use of the Site. Like most websites, this data is collected automatically through various means, including cookies, flash cookies, web beacons, embedded scripts, and IP capture technologies.</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#0f172a] mb-3">Why We Collect Your Information</h3>
              <p className="text-gray-600 mb-4">
                We collect your information in response to your request for business funding. By using this Site and submitting your business, personal, and financial information to us, you are giving us consent to use this information to evaluate your eligibility for business funding products and services provided by Goldman & Co, Inc., our affiliates and business partners. Additionally, we may use, store, compile, and analyze your information to:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-8 space-y-3">
                <li>Communicate with you and manage our relationship, which includes responding to your requests, inquiring about your business needs, sending marketing communications, offering additional services or products, providing account updates, and requesting customer feedback in the form of surveys or reviews.</li>
                <li>Generate reports, analyze data, and conduct research for improving our Site and services, to better understand our customers' needs and interests, and overall provide an improved, safer, more efficient funding experience.</li>
                <li>Fulfill our legal obligations, including verifying your identity in a reasonable effort to guard against fraud, enforce our contractual rights, or comply with any state or federal laws.</li>
              </ul>

              <h2 className="text-2xl font-serif text-[#0f172a] mb-4">Information Disclosure</h2>
              <p className="text-gray-600 mb-4">
                Through your participation in the Site, you acknowledge that the information you submit may be shared with Goldman & Co affiliates, partners, and connected third-parties in response to your interest in our business products and services. By submitting your information to us through our Application and acknowledging that you have read and accepted the Terms and Conditions, you expressly consent to our sharing and transmitting your business, personal, and financial information with third-parties. Please note that by clicking "continue" on our Application, you are providing written consent for Goldman & Co, Inc. and our affiliate companies and business partners to obtain and review your consumer and business credit reports.
              </p>
              <p className="text-gray-600 mb-4">We will share your information:</p>
              <ul className="list-disc list-inside text-gray-600 mb-8 space-y-3">
                <li>With our trusted affiliates and business partners, and those third-parties that provide services which aid us in the normal course of business, which includes fraud prevention, data storage, credit reporting, bank account verification, risk mitigation, and customer relationship management. While these third parties are authorized to use your information only as necessary to provide services to us, they may have Privacy Policies that differ from our own.</li>
                <li>In response to legal processes, court orders, summons or subpoenas. We will share your information as needed with auditors during reviews of our business. We will also share your information to respond to and defend against suspected fraud, illicit or harmful activities, or act against any violation of our Terms and Conditions or contractual agreements.</li>
                <li>In the event we are unable to meet your business funding needs, your contact information may be shared with our affiliates or business partners to offer their services to you based on your specific interests, qualifications, and eligibility.</li>
              </ul>

              <h2 className="text-2xl font-serif text-[#0f172a] mb-4">Third Party Websites</h2>
              <p className="text-gray-600 mb-8">
                The Site may contain links to other websites whose Privacy Policy differs from that of Goldman & Co, Inc. If you visit, submit information, or otherwise engage with any website linked through the Site or provided by us via email, then we encourage you to read the Privacy Policy of that website carefully. Social media companies and other third-party companies linked with our site may also collect non-personal information about your visit to our Site through recognition and tracking technologies, including your IP address and which pages you are visiting. Our Site may include social media widgets and features, such as the Facebook "like" button and Twitter icon. These social media features are likely hosted by the company proving it and subject to the Privacy Policy of that company. Goldman & Co, Inc. also utilizes web analytics tools, including Google Analytics, which helps us assess how you engage with and navigate through our site. The information collected by Google Analytics is anonymous and does not contain personally identifiable information.
              </p>

              <h2 className="text-2xl font-serif text-[#0f172a] mb-4">Managing Your Information</h2>
              <p className="text-gray-600 mb-4">
                Submitting your personal, business, and financial information through the Goldman & Co, Inc. Application is voluntary. Once submitted, your information is subject to the Privacy Policy and Terms and Conditions to which you agreed by clicking "continue" and we may not be able to process a request to delete or modify this information in certain circumstances. You have the following choices in controlling your information, regarding:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-8 space-y-3">
                <li><strong>Engagement with tracking technologies:</strong> Goldman & Co, Inc. does not respond to "Do Not Track" requests. However, you can set your browser and privacy settings to refuse cookies or alert you when cookies are being sent. Your browser or mobile device will often have a setting to disable cookies, which may have an impact on your ability to engage with certain features of our Site.</li>
                <li><strong>Communication Preferences:</strong> All emails sent directly from Goldman & Co, Inc., whether promotional or during the normal course of business, contain an "Unsubscribe" link which, once clicked, will automatically stop you from receiving similar emails in the future. If a business advisor or other Goldman & Co representative sends you a direct e-mail, or you receive an email in error, you may send a return e-mail asking to be omitted from receiving future communications and we will make every effort to process your request in a timely manner. You may request not to receive phone calls and/or SMS (Short Message Services) messages by emailing info@thegoldmanfund.com.</li>
                <li><strong>Disclosure of your Information:</strong> Goldman & Co, Inc. does not distribute your contact or personal information to companies for marketing or advertising purposes. Your information will be shared with third-parties only to deliver the final products and services you requested and as described in this Privacy Policy. The Site contains the testimonials of our customers, primarily using third-party service providers, and may contain the basic information which you choose to submit, such as your name or company name. If you do not wish to have your information publicly displayed on our Site or via social media, and you are unable to modify or remove your testimonial through the third-party to which you provided it, then send an e-mail stating your request to info@thegoldmanfund.com.</li>
                <li><strong>Changing or Modifying your Information:</strong> If your personal, business, or financial information changes then you may update it at anytime by contacting your dedicated business advisor or emailing us at info@thegoldmanfund.com. We will not respond to or accommodate requests we have reasonable cause to believe are incorrect or unverifiable, or if we believe such a change would violate any legal requirements. If you believe we have information that was submitted fraudulently or by an unauthorized user, then send your request to info@thegoldmanfund.com and we will respond appropriately.</li>
              </ul>

              <p className="text-gray-600 mb-8">
                Choosing not to receive phone calls, text messages, or e-mail communications will disrupt and prevent your ability to receive our products and services. If you have already received a product or service from us, our affiliates or business partners, then we will make a reasonable effort to respect your privacy while fulfilling our contractual and legal obligations per the terms of the signed Funding Agreement.
              </p>

              <h2 className="text-2xl font-serif text-[#0f172a] mb-4">Privacy</h2>

              <h3 className="text-xl font-semibold text-[#0f172a] mb-3">California Privacy Rights</h3>
              <p className="text-gray-600 mb-8">
                Residents of California have specific rights regarding privacy under California State Law. Visitors of our Site are entitled to certain specific details on how we disclose your personal information to third parties for their direct marketing purposes. If you are a permanent resident of California and want to request this information in writing as permitted once per year, then submit your request along with your current California address in an email to info@thegoldmanfund.com. In compliance with the disclosures required by California law regarding commercial websites: Goldman & Co, Inc. does not respond to or honor "do not track" signals, nor we enable or engage in the collections of personally identifiable information about your online activities across third-party websites when you visit our Site.
              </p>

              <h2 className="text-2xl font-serif text-[#0f172a] mb-4">Security</h2>
              <p className="text-gray-600 mb-4">
                Goldman & Co, Inc. uses both various technologies and operational procedures to keep your information safe from unauthorized use or access. We take the security of your Personal Information seriously and employ measures to guard against the theft, misuse, or alteration of your information. Protective technologies include safeguards like firewall barriers and data encryption with Transport Layer Security (TLS). We also use encryption such as the Secure Socket Layer (SSL) protocol when we transmit confidential information. Our procedural protections include storing your information in a controlled facility and limiting access only as necessary for employees to fulfill their responsibilities.
              </p>
              <p className="text-gray-600 mb-8">
                While we take all reasonable measures to protect your information, no technology or facility is entirely without flaw or impenetrable to certain threats. We are not responsible for the information collected and stored by third parties or our business partners. We also cannot guarantee all your personally identifiable information and communications with us will not be disclosed, as necessary or required by law, court order, auditor demand, to resolve disputes, other reasonable sources not described in this Privacy Policy. You use the Site and provide Goldman & Co, Inc. with your information at your own risk. If we have reason to believe any security breach, information tampering, or unauthorized access has occurred within the Company, then we will investigate the situation and communicate with you when appropriate.
              </p>

              <h2 className="text-2xl font-serif text-[#0f172a] mb-4">Changes To Our Privacy Policy</h2>
              <p className="text-gray-600 mb-8">
                Goldman & Co, Inc. reserves the right to update or edit this Privacy Policy at any time and without notice. The "Last Updated" date will change with every modification, so we encourage you to review this Policy each time you visit the Site. Any changes to our Privacy Policy are made in response to changes in customer needs, relevant laws, or new technologies and are intended to enhance your experience with clarity about your information.
              </p>

              <h2 className="text-2xl font-serif text-[#0f172a] mb-4">Third-Party Sharing</h2>
              <p className="text-gray-600 mb-8">
                We do not sell, rent, or share your SMS opt-in information with third parties for their marketing purposes.
              </p>

              <h2 className="text-2xl font-serif text-[#0f172a] mb-4">Message Frequency and Fees</h2>
              <p className="text-gray-600 mb-8">
                You may receive up to 3 SMS messages per week. Standard message and data rates may apply as determined by your carrier.
              </p>

              <h2 className="text-2xl font-serif text-[#0f172a] mb-4">Opt-Out and Support</h2>
              <p className="text-gray-600 mb-4">
                You may opt-out of SMS messages at any time by replying STOP. For assistance, reply HELP or contact us at{" "}
                <a href="mailto:info@thegoldmanfund.com" className="text-[#b8860b] hover:text-[#d4a944]">
                  info@thegoldmanfund.com
                </a>.
              </p>
            </div>
          </FadeInUp>
        </div>
      </section>
    </PageLayout>
  );
}
