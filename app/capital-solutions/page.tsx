'use client';

import { motion } from "framer-motion";
import {
  ArrowTrendingUpIcon,
  CurrencyDollarIcon,
  BuildingOffice2Icon,
  AdjustmentsHorizontalIcon,
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

export default function CapitalSolutions() {
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
            Capital Solutions
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight mb-8"
          >
            Flexible Private Capital,{" "}
            <span className="text-[#d4a944]">Structured for Growth</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Every business is different. Our capital solutions are customized to fit the operational and strategic needs of each investment.
          </motion.p>
        </div>
      </section>

      {/* Capital Solutions Grid */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeInUp className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-[#b8860b] font-medium tracking-wider uppercase text-sm mb-4">Our Solutions</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#0f172a] mb-8 leading-tight">
              Capital Tailored to <span className="text-[#b8860b]">Your Needs</span>
            </h2>
          </FadeInUp>
          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: ArrowTrendingUpIcon,
                title: "Growth Capital",
                desc: "Capital to support expansion initiatives such as acquisitions, hiring, inventory growth, geographic expansion, and marketing scale.",
                features: ["Acquisitions & M&A", "Hiring & Team Expansion", "Inventory Growth", "Geographic Expansion", "Marketing Scale"],
              },
              {
                icon: CurrencyDollarIcon,
                title: "Structured Investments",
                desc: "Customized capital structures including equity, preferred equity, and hybrid instruments designed to strengthen balance sheets and optimize cash flow.",
                features: ["Equity Investments", "Preferred Equity", "Hybrid Instruments", "Balance Sheet Optimization", "Cash Flow Enhancement"],
              },
              {
                icon: BuildingOffice2Icon,
                title: "Recapitalization & Liquidity",
                desc: "Solutions for founders or partners seeking partial liquidity while continuing to operate and grow the business.",
                features: ["Partial Liquidity Events", "Founder Transitions", "Partner Buyouts", "Estate Planning", "Ownership Restructuring"],
              },
              {
                icon: AdjustmentsHorizontalIcon,
                title: "Special Situations",
                desc: "Capital for businesses navigating transitions, restructuring, or strategic repositioning.",
                features: ["Business Transitions", "Corporate Restructuring", "Strategic Repositioning", "Turnaround Support", "Complex Situations"],
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-gradient-to-br from-[#0f172a] to-[#1e293b] p-10 rounded-lg hover:shadow-2xl transition-all duration-300 h-full"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-14 h-14 bg-[#b8860b] rounded-lg flex items-center justify-center mb-6"
                  >
                    <item.icon className="w-7 h-7 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">{item.desc}</p>
                  <ul className="space-y-2">
                    {item.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-400 text-sm">
                        <span className="w-1.5 h-1.5 bg-[#b8860b] rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-24 lg:py-32 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeInLeft>
              <p className="text-[#b8860b] font-medium tracking-wider uppercase text-sm mb-4">Our Approach</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#0f172a] mb-8 leading-tight">
                Beyond Traditional <span className="text-[#b8860b]">Financing</span>
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Unlike banks or traditional lenders, we don&apos;t apply rigid, one-size-fits-all structures. Every capital solution is designed around the specific needs, goals, and circumstances of each business.
                </p>
                <p>
                  We take the time to understand your operations, your market position, and your long-term objectives. Only then do we craft a capital structure that truly fits.
                </p>
                <p>
                  Our flexibility allows us to move quickly when opportunities arise, without the bureaucracy and constraints of institutional financing.
                </p>
              </div>
            </FadeInLeft>
            <FadeInRight>
              <StaggerContainer className="grid grid-cols-2 gap-6">
                {[
                  { value: "Custom", label: "Tailored Structures" },
                  { value: "Direct", label: "Decision Making" },
                  { value: "Fast", label: "Execution" },
                  { value: "Flexible", label: "Terms" },
                ].map((stat, i) => (
                  <StaggerItem key={stat.label}>
                    <HoverCard>
                      <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow text-center">
                        <div className="text-3xl font-serif text-[#b8860b] mb-2">{stat.value}</div>
                        <p className="text-gray-600 text-sm">{stat.label}</p>
                      </div>
                    </HoverCard>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <FadeInUp>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-8 leading-tight">
              Explore Your Capital Options
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Let&apos;s discuss how our capital solutions can support your business objectives.
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
