'use client';

import { motion } from "framer-motion";
import {
  ChartBarIcon,
  CogIcon,
  DocumentChartBarIcon,
  ArrowTrendingUpIcon,
  PresentationChartLineIcon,
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

export default function ValueCreation() {
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
            Value Creation
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight mb-8"
          >
            More Than <span className="text-[#d4a944]">Capital</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            The Goldman Fund actively supports portfolio companies beyond the initial investment. We work alongside management teams to build lasting value.
          </motion.p>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeInLeft>
              <p className="text-[#b8860b] font-medium tracking-wider uppercase text-sm mb-4">Our Partnership</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#0f172a] mb-8 leading-tight">
                Active Support for <span className="text-[#b8860b]">Portfolio Companies</span>
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We work with management teams on the strategic and operational initiatives that drive long-term value creation. Our involvement is collaborative, not controlling — we&apos;re partners, not managers.
              </p>
              <ul className="space-y-4">
                {[
                  "Strategic planning and execution",
                  "Cash flow optimization",
                  "Operational efficiency",
                  "Financial structuring and reporting",
                  "Growth initiatives and expansion strategy",
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
                <h3 className="text-2xl font-serif text-white mb-8">Our Goal</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  To help businesses scale intelligently while preserving culture, control, and long-term upside.
                </p>
                <div className="mt-8 pt-8 border-t border-gray-700">
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { label: "Preserve Culture" },
                      { label: "Maintain Control" },
                      { label: "Drive Growth" },
                      { label: "Create Value" },
                    ].map((item, i) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                        className="flex items-center gap-2"
                      >
                        <span className="w-2 h-2 bg-[#b8860b] rounded-full"></span>
                        <span className="text-gray-300 text-sm">{item.label}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#b8860b]/20 rounded-lg -z-10"></div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* Areas of Support Section */}
      <section className="py-24 lg:py-32 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeInUp className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-[#b8860b] font-medium tracking-wider uppercase text-sm mb-4">How We Help</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#0f172a] mb-8 leading-tight">
              Areas of <span className="text-[#b8860b]">Support</span>
            </h2>
          </FadeInUp>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: PresentationChartLineIcon,
                title: "Strategic Planning",
                desc: "Collaborative development of growth strategies aligned with your vision and market opportunities.",
              },
              {
                icon: ChartBarIcon,
                title: "Cash Flow Optimization",
                desc: "Analysis and improvement of working capital management and cash flow generation.",
              },
              {
                icon: CogIcon,
                title: "Operational Efficiency",
                desc: "Process improvements and operational enhancements that drive margin expansion.",
              },
              {
                icon: DocumentChartBarIcon,
                title: "Financial Structuring",
                desc: "Optimization of capital structure and financial reporting for better decision-making.",
              },
              {
                icon: ArrowTrendingUpIcon,
                title: "Growth Initiatives",
                desc: "Support for expansion into new markets, products, or customer segments.",
              },
              {
                icon: CheckCircleIcon,
                title: "Execution Support",
                desc: "Hands-on assistance with implementing strategic initiatives and tracking progress.",
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <HoverCard className="h-full">
                  <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow h-full">
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                      className="w-12 h-12 bg-[#b8860b]/10 rounded-lg flex items-center justify-center mb-6"
                    >
                      <item.icon className="w-6 h-6 text-[#b8860b]" />
                    </motion.div>
                    <h3 className="text-lg font-semibold text-[#0f172a] mb-3">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <FadeInUp>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-8 leading-tight">
              Partner with a Team That Adds Value
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Learn how our approach to value creation can benefit your business.
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
