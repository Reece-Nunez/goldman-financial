'use client';

import { motion } from "framer-motion";
import {
  BuildingOffice2Icon,
  CurrencyDollarIcon,
  ChartBarIcon,
  ArrowTrendingUpIcon,
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

export default function InvestmentStrategy() {
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
            Investment Strategy
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight mb-8"
          >
            Our Approach to{" "}
            <span className="text-[#d4a944]">Investing</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            The Goldman Fund invests with discipline, selectivity, and a long-term perspective. We focus on opportunities where strategic capital and operational insight can materially improve outcomes.
          </motion.p>
        </div>
      </section>

      {/* Investment Focus Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeInUp className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-[#b8860b] font-medium tracking-wider uppercase text-sm mb-4">Our Focus</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#0f172a] mb-8 leading-tight">
              Strategic Investment <span className="text-[#b8860b]">Criteria</span>
            </h2>
          </FadeInUp>
          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: BuildingOffice2Icon,
                title: "Established, Revenue-Generating Businesses",
                desc: "We invest in companies with proven business models and consistent revenue streams, not early-stage ventures or speculative opportunities.",
              },
              {
                icon: CurrencyDollarIcon,
                title: "Founder-Owned and Privately Held Companies",
                desc: "We partner with entrepreneurs and management teams who have built lasting businesses and are seeking a strategic capital partner for the next phase of growth.",
              },
              {
                icon: ChartBarIcon,
                title: "Strong Cash Flow with Scalable Infrastructure",
                desc: "Our ideal investments have healthy cash flow characteristics and the operational foundation to support meaningful expansion.",
              },
              {
                icon: ArrowTrendingUpIcon,
                title: "Businesses Seeking Growth, Expansion, or Recapitalization",
                desc: "Whether pursuing acquisitions, entering new markets, or restructuring the balance sheet, we provide the capital and expertise to execute.",
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-gradient-to-br from-[#0f172a] to-[#1e293b] p-10 rounded-lg hover:shadow-2xl transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-14 h-14 bg-[#b8860b] rounded-lg flex items-center justify-center mb-6"
                  >
                    <item.icon className="w-7 h-7 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Investment Structure Section */}
      <section className="py-24 lg:py-32 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeInLeft>
              <p className="text-[#b8860b] font-medium tracking-wider uppercase text-sm mb-4">How We Invest</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#0f172a] mb-8 leading-tight">
                Structured for <span className="text-[#b8860b]">Long-Term Success</span>
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We structure investments to align incentives, preserve operational control, and support long-term success. Our approach is designed to create true partnerships, not transactional relationships.
              </p>
              <ul className="space-y-4">
                {[
                  "Aligned incentives between investors and operators",
                  "Preservation of management control and autonomy",
                  "Flexible structures tailored to each opportunity",
                  "Long-term orientation with patient capital",
                  "Active support without micromanagement",
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
                <h3 className="text-2xl font-serif text-white mb-6">Our Investment Principles</h3>
                <div className="space-y-6">
                  {[
                    { label: "Discipline", desc: "Rigorous analysis and selective deployment" },
                    { label: "Partnership", desc: "True alignment with management teams" },
                    { label: "Patience", desc: "Long-term value creation over quick exits" },
                    { label: "Integrity", desc: "Transparent and fair dealing in all matters" },
                  ].map((principle, i) => (
                    <motion.div
                      key={principle.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                      className="border-l-2 border-[#b8860b] pl-4"
                    >
                      <h4 className="text-[#d4a944] font-semibold mb-1">{principle.label}</h4>
                      <p className="text-gray-300 text-sm">{principle.desc}</p>
                    </motion.div>
                  ))}
                </div>
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
              Ready to Explore a Strategic Partnership?
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              If your business aligns with our investment criteria, we welcome the opportunity for a confidential conversation.
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
