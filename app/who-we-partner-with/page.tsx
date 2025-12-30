'use client';

import { motion } from "framer-motion";
import {
  UserGroupIcon,
  BuildingOffice2Icon,
  ArrowTrendingUpIcon,
  HandRaisedIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import PageLayout from "../components/PageLayout";
import {
  FadeInUp,
  FadeInLeft,
  FadeInRight,
  StaggerContainer,
  StaggerItem,
  HoverCard,
} from "../components/animations";

export default function WhoWePartnerWith() {
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
            Who We Partner With
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight mb-8"
          >
            Our Ideal <span className="text-[#d4a944]">Partners</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            We seek partnerships with businesses and leadership teams that share our commitment to long-term value creation and operational excellence.
          </motion.p>
        </div>
      </section>

      {/* Partner Types Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeInUp className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-[#b8860b] font-medium tracking-wider uppercase text-sm mb-4">Our Partners</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#0f172a] mb-8 leading-tight">
              We Partner <span className="text-[#b8860b]">With</span>
            </h2>
          </FadeInUp>
          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: UserGroupIcon,
                title: "Founder-Led and Management-Owned Businesses",
                desc: "We value the entrepreneurial spirit and operational expertise that founders and management teams bring to their businesses. Our structures are designed to preserve your control and involvement.",
              },
              {
                icon: BuildingOffice2Icon,
                title: "Companies Seeking a Strategic Capital Partner",
                desc: "If you're looking for more than just capital — a partner who understands operations, strategy, and growth — we're built for that relationship.",
              },
              {
                icon: ArrowTrendingUpIcon,
                title: "Operators Focused on Long-Term Growth",
                desc: "We partner with leaders who are building for the long term, not positioning for a quick exit. Our patient capital aligns with your timeline and objectives.",
              },
              {
                icon: HandRaisedIcon,
                title: "Businesses Underserved by Traditional Financial Institutions",
                desc: "Many excellent businesses don't fit the rigid criteria of banks and traditional lenders. We provide flexible capital solutions designed for your specific situation.",
              },
            ].map((item, index) => (
              <StaggerItem key={item.title}>
                <motion.div
                  whileHover={{ scale: 1.03, borderColor: "#b8860b" }}
                  className="border border-gray-200 p-10 rounded-lg hover:shadow-lg transition-all duration-300 h-full"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2, type: "spring", stiffness: 200 }}
                    whileHover={{ rotate: 360 }}
                    className="w-16 h-16 bg-[#0f172a] rounded-full flex items-center justify-center mb-6"
                  >
                    <item.icon className="w-8 h-8 text-[#d4a944]" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-[#0f172a] mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* The Right Fit Section */}
      <section className="py-24 lg:py-32 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeInLeft>
              <p className="text-[#b8860b] font-medium tracking-wider uppercase text-sm mb-4">The Right Fit</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#0f172a] mb-8 leading-tight">
                Built for <span className="text-[#b8860b]">Strategic Partnerships</span>
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                If you are looking for a capital partner who understands operations, alignment, and growth — we are built for that role. Our approach is designed for businesses that value partnership over transaction.
              </p>
              <ul className="space-y-4">
                {[
                  "Revenue-generating businesses with proven models",
                  "Strong management teams with clear vision",
                  "Scalable operations with growth potential",
                  "Commitment to long-term value creation",
                  "Alignment on partnership values and approach",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-start gap-3"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                    >
                      <CheckCircleIcon className="w-6 h-6 text-[#b8860b] flex-shrink-0 mt-0.5" />
                    </motion.div>
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </FadeInLeft>
            <FadeInRight className="relative">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-lg p-10 lg:p-12"
              >
                <h3 className="text-2xl font-serif text-white mb-6">Not a Fit?</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  We&apos;re selective about our partnerships because we invest significant time and resources in each relationship. If your business is:
                </p>
                <ul className="space-y-3">
                  {[
                    "Pre-revenue or early-stage",
                    "Seeking short-term financing only",
                    "Looking for a passive, hands-off investor",
                    "Not open to strategic collaboration",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-400 text-sm">
                      <span className="w-1.5 h-1.5 bg-gray-500 rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-gray-400 text-sm mt-6">
                  ...we may not be the right partner. But we&apos;re always happy to have a conversation.
                </p>
              </motion.div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#b8860b]/20 rounded-lg -z-10"></div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <FadeInUp>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-8 leading-tight">
              Think We Might Be a Good Fit?
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              We&apos;d love to learn more about your business and explore whether a partnership makes sense.
            </p>
            <motion.a
              href="/confidential-review"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(184, 134, 11, 0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="inline-block px-8 py-4 bg-[#b8860b] text-white font-medium rounded hover:bg-[#d4a944] transition-all duration-300"
            >
              Request a Confidential Review
            </motion.a>
          </FadeInUp>
        </div>
      </section>
    </PageLayout>
  );
}
