'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BuildingOffice2Icon,
  ChartBarIcon,
  CurrencyDollarIcon,
  CogIcon,
  CheckCircleIcon,
  UserGroupIcon,
  ScaleIcon,
  ClockIcon,
  ShieldCheckIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import MobileMenu from "./components/MobileMenu";
import ContactForm from "./components/ContactForm";
import {
  FadeInUp,
  FadeInLeft,
  FadeInRight,
  FadeIn,
  ScaleIn,
  StaggerContainer,
  StaggerItem,
  HoverCard,
} from "./components/animations";

export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex-shrink-0"
            >
              <Image
                src="/Final Files-01.png"
                alt="Goldman and Co"
                width={180}
                height={50}
                className="h-12 w-auto"
                priority
              />
            </motion.div>
            <div className="hidden md:flex items-center gap-8">
              {[
                { href: "#about", label: "About" },
                { href: "#philosophy", label: "Philosophy" },
                { href: "#services", label: "Services" },
                { href: "#partners", label: "Partners" },
              ].map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="text-sm font-medium text-gray-600 hover:text-[#b8860b] transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="ml-4 px-6 py-2.5 bg-[#0f172a] text-white text-sm font-medium rounded hover:bg-[#1e293b] transition-colors"
              >
                Contact Us
              </motion.a>
            </div>
            <MobileMenu />
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#b8860b] font-medium tracking-[0.3em] uppercase text-sm mb-6"
          >
            Goldman and Co
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight mb-8"
          >
            Private Capital. Strategic Growth.
            <br />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-[#d4a944]"
            >
              Long-Term Value.
            </motion.span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Goldman and Co is a private capital and investment firm focused on acquiring, funding, and scaling high-performing middle-market businesses.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(184, 134, 11, 0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-[#b8860b] text-white font-medium rounded hover:bg-[#d4a944] transition-all duration-300"
            >
              Request a Confidential Review
            </motion.a>
            <motion.a
              href="#about"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 border border-white/30 text-white font-medium rounded transition-all duration-300"
            >
              Learn More
            </motion.a>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.svg
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-6 text-white/50"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </motion.svg>
        </motion.div>
      </section>

      {/* Who We Are Section */}
      <section id="about" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeInLeft>
              <p className="text-[#b8860b] font-medium tracking-wider uppercase text-sm mb-4">Who We Are</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#0f172a] mb-8 leading-tight">
                A Partner in Your Growth
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Goldman and Co is a privately held investment firm providing growth capital, structured investments, and strategic guidance to established businesses across multiple industries.
                </p>
                <p>
                  Unlike traditional lenders or short-term financiers, we operate with a private-equity mindset — aligning capital with long-term performance, sustainable growth, and enterprise value creation.
                </p>
                <p>
                  Our team combines institutional finance experience with hands-on operational insight, allowing us to serve as both a capital provider and a strategic partner.
                </p>
              </div>
            </FadeInLeft>
            <FadeInRight className="relative">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-lg p-10 lg:p-12"
              >
                <div className="grid grid-cols-2 gap-8">
                  {[
                    { value: "1,000+", label: "Businesses Served" },
                    { value: "$70M+", label: "Capital Deployed" },
                    { value: "95%", label: "Client Satisfaction" },
                    { value: "2", label: "Office Locations" },
                  ].map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                      className="text-center"
                    >
                      <div className="text-4xl lg:text-5xl font-serif text-[#d4a944] mb-2">{stat.value}</div>
                      <p className="text-gray-300 text-sm">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#b8860b]/20 rounded-lg -z-10"></div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* Investment Philosophy Section */}
      <section id="philosophy" className="py-24 lg:py-32 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeInUp className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-[#b8860b] font-medium tracking-wider uppercase text-sm mb-4">Our Investment Philosophy</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#0f172a] mb-8 leading-tight">
              Capital Alone Does Not Create Value — <span className="text-[#b8860b]">Execution Does</span>
            </h2>
          </FadeInUp>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: ChartBarIcon, title: "Proven Track Record", desc: "Businesses with proven revenue and operating history" },
              { icon: UserGroupIcon, title: "Strong Leadership", desc: "Strong ownership and management teams with vision" },
              { icon: ScaleIcon, title: "Scalable Growth", desc: "Clear paths to scalable and sustainable growth" },
              { icon: CurrencyDollarIcon, title: "Capital Efficiency", desc: "Underserved capital needs or inefficient capital structures" },
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
          <FadeInUp delay={0.4} className="text-center text-gray-600 mt-12 max-w-2xl mx-auto">
            We structure investments that strengthen balance sheets, accelerate growth initiatives, and position companies for long-term success.
          </FadeInUp>
        </div>
      </section>

      {/* What We Do Section */}
      <section id="services" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeInUp className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-[#b8860b] font-medium tracking-wider uppercase text-sm mb-4">What We Do</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#0f172a] mb-8 leading-tight">
              Comprehensive Capital Solutions
            </h2>
          </FadeInUp>
          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: CurrencyDollarIcon,
                title: "Private Capital Investments",
                desc: "We deploy proprietary capital into businesses seeking growth, recapitalization, or strategic expansion. Our investments are structured to align incentives while allowing management to maintain operational control.",
              },
              {
                icon: ChartBarIcon,
                title: "Growth & Expansion Capital",
                desc: "We support acquisitions, geographic expansion, inventory growth, marketing scale, and infrastructure investments — without the rigidity of traditional bank financing.",
              },
              {
                icon: BuildingOffice2Icon,
                title: "Structured Finance Solutions",
                desc: "Goldman and Co designs customized capital structures, including equity, preferred equity, and hybrid instruments, tailored to each opportunity.",
              },
              {
                icon: CogIcon,
                title: "Operational & Strategic Support",
                desc: "Beyond capital, we work alongside leadership teams to optimize operations, improve cash flow, and execute long-term growth strategies.",
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

      {/* Our Difference Section */}
      <section className="py-24 lg:py-32 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeInLeft>
              <p className="text-[#b8860b] font-medium tracking-wider uppercase text-sm mb-4">Our Difference</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#0f172a] mb-8 leading-tight">
                Institutional Discipline.<br /><span className="text-[#b8860b]">Entrepreneurial Execution.</span>
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Goldman and Co is not a bank, broker, or marketplace. We invest our own capital and partner directly with the businesses we support.
              </p>
              <ul className="space-y-4">
                {[
                  "Long-term investment orientation",
                  "Flexible and customized investment structures",
                  "Direct, decisive capital deployment",
                  "Close alignment with ownership and management",
                  "Access to senior decision-makers",
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
            <StaggerContainer className="grid grid-cols-2 gap-6">
              {[
                { icon: ClockIcon, title: "Long-Term Focus", desc: "Patient capital for sustainable growth" },
                { icon: ScaleIcon, title: "Flexible Terms", desc: "Customized structures for each deal" },
                { icon: ShieldCheckIcon, title: "Direct Access", desc: "Work with decision-makers directly" },
                { icon: UserGroupIcon, title: "True Partnership", desc: "Aligned incentives and shared success" },
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
          </div>
        </div>
      </section>

      {/* Who We Partner With Section */}
      <section id="partners" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeInUp className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-[#b8860b] font-medium tracking-wider uppercase text-sm mb-4">Who We Partner With</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#0f172a] mb-8 leading-tight">
              Built for Business Owners <span className="text-[#b8860b]">Seeking True Partners</span>
            </h2>
            <p className="text-gray-600 leading-relaxed">
              If you are seeking a capital partner rather than a transactional lender, Goldman and Co is purpose-built for that role.
            </p>
          </FadeInUp>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Founder-Owned Businesses", desc: "Privately held companies with strong ownership" },
              { title: "Management Teams", desc: "Leaders seeking a strategic capital partner" },
              { title: "Growth Companies", desc: "Businesses undergoing expansion or transition" },
              { title: "Underserved Markets", desc: "Companies overlooked by traditional financing" },
            ].map((item, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ scale: 1.03, borderColor: "#b8860b" }}
                  className="border border-gray-200 p-8 rounded-lg hover:shadow-lg transition-all duration-300 text-center h-full"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2, type: "spring", stiffness: 200 }}
                    whileHover={{ rotate: 360 }}
                    className="w-16 h-16 bg-[#0f172a] rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <span className="text-[#d4a944] font-serif text-2xl">{index + 1}</span>
                  </motion.div>
                  <h3 className="text-lg font-semibold text-[#0f172a] mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <FadeInUp>
            <p className="text-[#b8860b] font-medium tracking-wider uppercase text-sm mb-4">Our Commitment</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-8 leading-tight">
              Discipline. Transparency. Alignment.
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Every investment reflects our commitment to discipline, transparency, and alignment. We prioritize long-term value creation and believe enduring partnerships are built on trust and shared objectives.
            </p>
          </FadeInUp>
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            {[
              { icon: ShieldCheckIcon, label: "Integrity First" },
              { icon: ScaleIcon, label: "Fair Dealing" },
              { icon: ClockIcon, label: "Long-Term Vision" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                whileHover={{ scale: 1.1 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 border-2 border-[#b8860b] rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <item.icon className="w-8 h-8 text-[#b8860b]" />
                </motion.div>
                <p className="text-white font-medium">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <FadeInLeft>
              <p className="text-[#b8860b] font-medium tracking-wider uppercase text-sm mb-4">Start a Conversation</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#0f172a] mb-8 leading-tight">
                Ready to Explore a Partnership?
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                If you are evaluating strategic capital, growth initiatives, or partnership opportunities, we welcome a confidential discussion.
              </p>
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

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-[#0f172a] pt-16 pb-8"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 items-start">
            <FadeInUp className="lg:col-span-1">
              <Image
                src="/Final Files 1-01.png"
                alt="Goldman and Co"
                width={160}
                height={45}
                className="h-10 w-auto mb-6 brightness-0 invert"
              />
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Private Capital | Strategic Growth | Long-Term Value
              </p>
              <div className="flex items-center gap-2">
                <PhoneIcon className="w-4 h-4 text-[#b8860b]" />
                <a href="tel:+18006971887" className="text-gray-400 text-sm hover:text-white transition-colors">+1 (800) 697-1887</a>
              </div>
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <h4 className="text-white font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { href: "#about", label: "About Us" },
                  { href: "#philosophy", label: "Investment Philosophy" },
                  { href: "#services", label: "Our Services" },
                  { href: "#partners", label: "Who We Partner With" },
                  { href: "#contact", label: "Contact" },
                ].map((link) => (
                  <li key={link.href}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5, color: "#b8860b" }}
                      className="text-gray-400 text-sm hover:text-[#b8860b] transition-colors inline-block"
                    >
                      {link.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </FadeInUp>
            <FadeInUp delay={0.2} className="lg:col-span-2">
              <h4 className="text-white font-semibold mb-6">Our Offices</h4>
              <div className="grid sm:grid-cols-2 gap-6 text-sm">
                <div>
                  <p className="text-[#b8860b] font-medium">San Diego</p>
                  <p className="text-gray-400">12636 High Bluff Drive, Suite 400<br />San Diego, CA 92130</p>
                </div>
                <div>
                  <p className="text-[#b8860b] font-medium">St. Petersburg</p>
                  <p className="text-gray-400">333 3rd Avenue N., Suite 400<br />St. Petersburg, FL 33701</p>
                </div>
              </div>
            </FadeInUp>
          </div>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border-t border-gray-800 origin-left"
          />
          <div className="pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <FadeIn>
                <p className="text-gray-500 text-sm">
                  &copy; {new Date().getFullYear()} Goldman and Co. All rights reserved.
                </p>
              </FadeIn>
              <FadeIn delay={0.1}>
                <div className="flex gap-6">
                  <motion.a
                    href="#"
                    whileHover={{ color: "#b8860b" }}
                    className="text-gray-500 text-sm transition-colors"
                  >
                    Privacy Policy
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ color: "#b8860b" }}
                    className="text-gray-500 text-sm transition-colors"
                  >
                    Terms of Service
                  </motion.a>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
