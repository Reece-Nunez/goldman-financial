'use client';

import { motion } from "framer-motion";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import PageLayout from "../components/PageLayout";
import ContactForm from "../components/ContactForm";
import {
  FadeInUp,
  FadeInLeft,
  FadeInRight,
} from "../components/animations";

export default function ConfidentialReview() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#b8860b] font-medium tracking-[0.3em] uppercase text-sm mb-6"
          >
            Confidential Review
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight mb-8"
          >
            Start a Strategic{" "}
            <span className="text-[#d4a944]">Conversation</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            If you are evaluating strategic capital, expansion opportunities, or a long-term partnership, we invite a confidential discussion.
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <FadeInLeft>
              <p className="text-[#b8860b] font-medium tracking-wider uppercase text-sm mb-4">Get in Touch</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#0f172a] mb-8 leading-tight">
                All Inquiries Reviewed by <span className="text-[#b8860b]">Senior Team Members</span>
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                All inquiries are reviewed directly by senior members of our investment team. We treat every conversation with the confidentiality and professionalism it deserves.
              </p>

              {/* Confidentiality Notice */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-[#f8fafc] border border-gray-200 rounded-lg p-6 mb-8"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#b8860b]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ShieldCheckIcon className="w-5 h-5 text-[#b8860b]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0f172a] mb-2">Our Confidentiality Commitment</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      All information shared with us is treated with strict confidentiality. We never share your details with third parties without your explicit consent.
                    </p>
                  </div>
                </div>
              </motion.div>

              <div className="space-y-6">
                {[
                  { icon: PhoneIcon, title: "Phone", content: "+1 (800) 697-1887", href: "tel:+18006971887" },
                  { icon: EnvelopeIcon, title: "Email", content: "info@goldmanandco.com", href: "mailto:info@goldmanandco.com" },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-start gap-4"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-12 h-12 bg-[#b8860b]/10 rounded-lg flex items-center justify-center flex-shrink-0"
                    >
                      <item.icon className="w-6 h-6 text-[#b8860b]" />
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-[#0f172a] mb-1">{item.title}</h4>
                      <a href={item.href} className="text-gray-600 hover:text-[#b8860b] transition-colors">{item.content}</a>
                    </div>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="flex items-start gap-4"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 bg-[#b8860b]/10 rounded-lg flex items-center justify-center flex-shrink-0"
                  >
                    <MapPinIcon className="w-6 h-6 text-[#b8860b]" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-[#0f172a] mb-1">San Diego Office</h4>
                    <p className="text-gray-600">12636 High Bluff Drive, Suite 400<br />San Diego, CA 92130</p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="flex items-start gap-4"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 bg-[#b8860b]/10 rounded-lg flex items-center justify-center flex-shrink-0"
                  >
                    <MapPinIcon className="w-6 h-6 text-[#b8860b]" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-[#0f172a] mb-1">St. Petersburg Office</h4>
                    <p className="text-gray-600">333 3rd Avenue N., Suite 400<br />St. Petersburg, FL 33701</p>
                  </div>
                </motion.div>
              </div>
            </FadeInLeft>
            <FadeInRight>
              <div className="bg-[#f8fafc] p-8 lg:p-10 rounded-lg">
                <h3 className="text-xl font-semibold text-[#0f172a] mb-6">Request a Confidential Review</h3>
                <ContactForm />
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-24 lg:py-32 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeInUp className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-[#b8860b] font-medium tracking-wider uppercase text-sm mb-4">What to Expect</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#0f172a] mb-8 leading-tight">
              Our <span className="text-[#b8860b]">Process</span>
            </h2>
          </FadeInUp>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Initial Contact", desc: "Submit your inquiry through our form or contact us directly." },
              { step: "02", title: "Senior Review", desc: "A senior member of our investment team reviews your submission." },
              { step: "03", title: "Confidential Discussion", desc: "We schedule a confidential call to learn more about your business." },
              { step: "04", title: "Next Steps", desc: "If there's mutual interest, we explore the opportunity further." },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 bg-[#0f172a] rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <span className="text-[#d4a944] font-serif text-xl">{item.step}</span>
                </motion.div>
                <h3 className="text-lg font-semibold text-[#0f172a] mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
