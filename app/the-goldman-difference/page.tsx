'use client';

import { motion } from "framer-motion";
import {
  ClockIcon,
  AdjustmentsHorizontalIcon,
  UserIcon,
  ScaleIcon,
  ShieldCheckIcon,
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

export default function TheGoldmanDifference() {
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
            The Goldman Difference
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight mb-8"
          >
            Institutional Discipline.{" "}
            <span className="text-[#d4a944]">Entrepreneurial Mindset.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            We invest with conviction and partner with intention. Our approach combines the rigor of institutional investing with the flexibility and speed of entrepreneurial decision-making.
          </motion.p>
        </div>
      </section>

      {/* Key Differentiators Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeInUp className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-[#b8860b] font-medium tracking-wider uppercase text-sm mb-4">What Sets Us Apart</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#0f172a] mb-8 leading-tight">
              Our <span className="text-[#b8860b]">Differentiators</span>
            </h2>
          </FadeInUp>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: ClockIcon,
                title: "Long-Term Investment Horizon",
                desc: "We invest with patience, not pressure. Our capital is structured for sustainable growth, not quick exits or artificial timelines.",
              },
              {
                icon: AdjustmentsHorizontalIcon,
                title: "Flexible, Customized Structures",
                desc: "Every deal is tailored to fit the specific needs of the business. We don't force companies into rigid, one-size-fits-all frameworks.",
              },
              {
                icon: UserIcon,
                title: "Direct Access to Decision-Makers",
                desc: "No layers of bureaucracy. You work directly with the people who make decisions and can move quickly when opportunity arises.",
              },
              {
                icon: ScaleIcon,
                title: "Alignment with Ownership and Management",
                desc: "We structure deals to ensure our interests are aligned with yours. When you succeed, we succeed — and vice versa.",
              },
              {
                icon: ShieldCheckIcon,
                title: "Confidential, Relationship-Driven Approach",
                desc: "We value discretion and build relationships based on trust, transparency, and mutual respect.",
              },
              {
                icon: CheckCircleIcon,
                title: "Conviction and Intention",
                desc: "We don't invest casually. Every partnership reflects deep conviction in the opportunity and intentional commitment to success.",
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <HoverCard className="h-full">
                  <div className="bg-white border border-gray-200 p-8 rounded-lg shadow-sm hover:shadow-lg hover:border-[#b8860b] transition-all h-full">
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

      {/* Philosophy Section */}
      <section className="py-24 lg:py-32 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeInLeft>
              <p className="text-[#b8860b] font-medium tracking-wider uppercase text-sm mb-4">Our Philosophy</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#0f172a] mb-8 leading-tight">
                We Invest with Conviction.{" "}
                <span className="text-[#b8860b]">We Partner with Intention.</span>
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Goldman and Co is not a bank, broker, or marketplace. We invest our own capital and partner directly with the businesses we support. This means we&apos;re selective, but when we commit, we&apos;re fully committed.
              </p>
              <div className="space-y-6">
                {[
                  { title: "Selective", desc: "We invest in a limited number of businesses, allowing us to provide meaningful support to each." },
                  { title: "Committed", desc: "When we partner, we're in it for the long haul. We don't walk away when challenges arise." },
                  { title: "Aligned", desc: "Our success is tied to yours. We structure deals to ensure mutual benefit and shared objectives." },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="border-l-2 border-[#b8860b] pl-4"
                  >
                    <h4 className="font-semibold text-[#0f172a] mb-1">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </FadeInLeft>
            <FadeInRight>
              <StaggerContainer className="grid grid-cols-2 gap-6">
                {[
                  { icon: ClockIcon, title: "Long-Term Focus", desc: "Patient capital for sustainable growth" },
                  { icon: ScaleIcon, title: "Flexible Terms", desc: "Customized structures for each deal" },
                  { icon: ShieldCheckIcon, title: "Direct Access", desc: "Work with decision-makers directly" },
                  { icon: UserIcon, title: "True Partnership", desc: "Aligned incentives and shared success" },
                ].map((item) => (
                  <StaggerItem key={item.title}>
                    <HoverCard>
                      <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow text-center">
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 10 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <item.icon className="w-10 h-10 text-[#b8860b] mx-auto mb-4" />
                        </motion.div>
                        <h4 className="font-semibold text-[#0f172a] mb-2">{item.title}</h4>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
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
              Experience the Goldman Difference
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Discover what it means to work with a capital partner built on conviction, alignment, and long-term commitment.
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
